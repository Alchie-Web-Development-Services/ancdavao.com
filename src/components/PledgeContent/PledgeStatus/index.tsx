import React from "react";
import PledgeProgressBar from "@/components/PledgeProgressBar";


import { Pledge } from "@/types/pledge";
import { formatCurrency } from "@/utils/helper/formatCurrency";
import { getRemainingDaysInYear } from "@/utils/helper/getRemainingDaysInYear";

interface PledgeStatusProps {
  pledge: Pledge | null;
}

export const PledgeStatus: React.FC<PledgeStatusProps> = ({ pledge }) => {
  if (!pledge) return null;
  const daysLeft = getRemainingDaysInYear()
  const currentYear = new Date().getFullYear();
  const progress = (pledge.fulfilled || 0) / (pledge.amount || 1);
  return (
    <div className="bg-gray-50 border rounded-lg shadow-lg p-4">
      <div className="mb-2 text-lg font-semibold">
        ₱{formatCurrency(pledge.amount)} pledged for {currentYear}
      </div>
      <div className="mb-2 text-sm text-gray-600">
        You have fulfilled ₱{formatCurrency(pledge.fulfilled || 0)} so far.
      </div>
      <PledgeProgressBar progress={progress} />
      <div className="text-xs text-gray-500 mb-2">
        {Math.round(progress * 100)}% complete — {daysLeft} days left
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Donate Now
      </button>
    </div>
  );
  
}
