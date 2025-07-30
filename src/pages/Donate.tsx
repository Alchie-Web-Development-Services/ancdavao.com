import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaCreditCard, FaMobileAlt, FaLandmark } from "react-icons/fa";

const Donate: React.FC = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time",
  );
  const [amount, setAmount] = useState<number | "">("");
  const [paymentMethod, setPaymentMethod] = useState<
    "credit-card" | "gcash" | "bank-transfer"
  >("credit-card");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const presetAmounts = [500, 1000, 2000, 5000];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ donationType, amount, paymentMethod, ...formData });
  };

  const paymentMethods = [
    { id: "credit-card", name: "Credit/Debit Card", icon: <FaCreditCard /> },
    { id: "gcash", name: "GCash", icon: <FaMobileAlt /> },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: <FaLandmark className="text-2xl" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Donate"
        subtitle="Support our mission to transform lives in Davao"
        backgroundImage="/images/donate-header.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Make a Donation
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Donation Type */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Donation Type</h3>
              <div className="flex bg-gray-100 rounded-lg p-1 max-w-md">
                <button
                  type="button"
                  className={`flex-1 py-3 px-4 rounded-md ${donationType === "one-time" ? "bg-white shadow-sm text-indigo-700" : "text-gray-600"}`}
                  onClick={() => setDonationType("one-time")}
                >
                  One-time
                </button>
                <button
                  type="button"
                  className={`flex-1 py-3 px-4 rounded-md ${donationType === "monthly" ? "bg-white shadow-sm text-indigo-700" : "text-gray-600"}`}
                  onClick={() => setDonationType("monthly")}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Donation Amount */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Amount (PHP)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`py-3 px-4 border rounded-md ${amount === preset ? "border-indigo-600 bg-indigo-50" : "border-gray-300"}`}
                  >
                    ₱{preset.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() =>
                      setPaymentMethod(
                        method.id as "credit-card" | "gcash" | "bank-transfer",
                      )
                    }
                    className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === method.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200"}`}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                        {method.icon}
                      </div>
                      <span>{method.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donor Info */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Your Information</h3>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
