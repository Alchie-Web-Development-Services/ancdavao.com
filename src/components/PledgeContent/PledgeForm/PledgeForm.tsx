import React, { useState, useEffect } from "react";
import { Pledge } from "@/types/pledge";
import { useAuth } from "@/context/AuthContext";
import { createPledge, updatePledge } from "@/services/pledgeService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PledgeFormProps {
  pledge: Pledge | null;
}

export const PledgeForm: React.FC<PledgeFormProps> = ({ pledge }) => {
  const { user } = useAuth();
  const [amount, setAmount] = useState(pledge?.amount || 0);
  const [frequency, setFrequency] = useState(pledge?.frequency || "monthly");
  const [startDate, setStartDate] = useState(pledge?.startDate || "");

  useEffect(() => {
    if (pledge) {
      setAmount(pledge.amount);
      setFrequency(pledge.frequency);
      setStartDate(pledge.startDate);
    }
  }, [pledge]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const pledgeData: Pledge = {
      uid: user.uid,
      amount,
      frequency,
      startDate,
    };

    try {
      if (pledge) {
        await updatePledge(user.uid, pledgeData);
        toast.success("Pledge updated successfully!");
      } else {
        await createPledge(user.uid, pledgeData);
        toast.success("Pledge created successfully!");
      }
    } catch (error) {
      console.error("Error saving pledge:", error);
      toast.error("Failed to save pledge.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-4 mb-6"
    >
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Pledge Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="frequency"
          className="block text-sm font-medium text-gray-700"
        >
          Frequency
        </label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          required
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Save Pledge
      </button>
      <ToastContainer />
    </form>
  );
};
