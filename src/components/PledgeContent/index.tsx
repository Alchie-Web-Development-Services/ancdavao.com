import React from "react";
import { PledgeSummary } from "./PledgeSummary";
import { Pledge } from "@/types/pledge";
import { PledgeForm } from "./PledgeForm";

interface PledgeContentProps {
  pledge: Pledge | null;
}

export const PledgeContent: React.FC<PledgeContentProps> = ({ pledge }) => {
  // Mock data for demonstration (can be removed once real data is fully integrated)
  const mockPledgeData = {
    amount: 1000,
    currency: "₱",
    timeframe: 30, // days
    fulfilled: 200,
    reminders: [
      { day: 1, sent: true },
      { day: 3, sent: false },
      { day: 7, sent: false },
    ],
    level: "Bronze",
    badges: ["First Donation Made"],
    progress: 0.2, // 20%
    autoPay: false,
    impact: {
      kidsFed: 1,
      weeks: 1,
    },
    urgent: {
      percentFunded: 85,
      amountNeeded: 5000,
      deadline: "2025-08-12",
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Pledge</h1>
      <PledgeForm pledge={pledge} />
      <PledgeSummary mockPledgeData={mockPledgeData} />
    </div>
  );
};
