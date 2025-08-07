import React from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
import { PledgeStatus } from "./PledgeStatus";

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

export const PledgeSummary: React.FC<PledgeSummaryProps> = ({
  mockPledgeData,
}) => {
  const urgentDeadline = new Date(
    mockPledgeData.urgent.deadline,
  ).toLocaleDateString();

  return (
    <>
      <PledgeStatus mockPledgeData={mockPledgeData} />

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-2">
          <span className="font-semibold mr-2">Level:</span>
          <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
            {mockPledgeData.level}
          </span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Badges:</span>
          <div className="mt-1">
            {mockPledgeData.badges.map((b, i) => (
              <Badge key={i} label={b} />
            ))}
          </div>
        </div>
        {/* TODO: Add leaderboard integration */}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="font-semibold mb-1">Urgency</div>
        <div className="mb-2 text-sm">
          <span className="font-bold">
            {mockPledgeData.urgent.percentFunded}% funded
          </span>{" "}
          — only {mockPledgeData.currency}
          {mockPledgeData.urgent.amountNeeded} more needed this week (by{" "}
          {urgentDeadline})
        </div>
        <div className="w-full bg-red-100 rounded-full h-3 mb-2">
          <div
            className="bg-red-500 h-3 rounded-full transition-all"
            style={{ width: `${mockPledgeData.urgent.percentFunded}%` }}
          />
        </div>
        {/* TODO: Add countdown timer and milestones */}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="font-semibold mb-1">Your Impact</div>
        <div className="text-sm mb-2">
          You have helped feed{" "}
          <span className="font-bold">
            {mockPledgeData.impact.kidsFed} kid(s)
          </span>{" "}
          for{" "}
          <span className="font-bold">
            {mockPledgeData.impact.weeks} week(s)
          </span>{" "}
          so far!
        </div>
        {/* TODO: Show more detailed impact stats and stories */}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="font-semibold mb-1">Trust & Transparency</div>
        <ul className="list-disc ml-6 text-sm">
          <li>
            <Link href="/transparency">
              <span className="underline">Financial transparency</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="underline">Previous successful projects</span>
            </Link>
          </li>
          <li>
            <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs mt-1">
              Secure Payment
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
