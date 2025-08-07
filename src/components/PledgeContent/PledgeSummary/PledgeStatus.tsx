import React from "react";
import PledgeProgressBar from "@/components/PledgeProgressBar";

interface PledgeSummaryProps {
  mockPledgeData: {
    amount: number;
    currency: string;
    timeframe: number;
    fulfilled: number;
    reminders: { day: number; sent: boolean }[];
    level: string;
    badges: string[];
    progress: number;
    autoPay: boolean;
    impact: {
      kidsFed: number;
      weeks: number;
    };
    urgent: {
      percentFunded: number;
      amountNeeded: number;
      deadline: string;
    };
  };
}

export const PledgeStatus: React.FC<PledgeSummaryProps> = ({
  mockPledgeData,
}) => {
  const daysLeft =
    mockPledgeData.timeframe -
    Math.floor(mockPledgeData.progress * mockPledgeData.timeframe);

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="mb-2 text-lg font-semibold">
          {mockPledgeData.currency}
          {mockPledgeData.amount} pledged in {mockPledgeData.timeframe} days
        </div>
        <div className="mb-2 text-sm text-gray-600">
          You have fulfilled {mockPledgeData.currency}
          {mockPledgeData.fulfilled} so far.
        </div>
        <PledgeProgressBar progress={mockPledgeData.progress} />
        <div className="text-xs text-gray-500 mb-2">
          {Math.round(mockPledgeData.progress * 100)}% complete — {daysLeft}{" "}
          days left
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Donate Now
        </button>
        <div className="mt-4">
          <span className="font-semibold">Reminders:</span>
          <ul className="list-disc ml-6 text-sm">
            {mockPledgeData.reminders.map((r, i) => (
              <li
                key={i}
                className={r.sent ? "text-green-600" : "text-gray-700"}
              >
                Day {r.day}: {r.sent ? "Sent" : "Scheduled"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
