import React from 'react';
import Link from 'next/link';

// Mock data for demonstration
const userPledge = {
  amount: 1000,
  currency: '₱',
  timeframe: 30, // days
  fulfilled: 200,
  reminders: [
    { day: 1, sent: true },
    { day: 3, sent: false },
    { day: 7, sent: false },
  ],
  level: 'Bronze',
  badges: ['First Donation Made'],
  progress: 0.2, // 20%
  autoPay: false,
  impact: {
    kidsFed: 1,
    weeks: 1,
  },
  urgent: {
    percentFunded: 85,
    amountNeeded: 5000,
    deadline: '2025-08-12',
  },
};

const PledgeProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
    <div
      className="bg-green-500 h-4 rounded-full transition-all"
      style={{ width: `${Math.round(progress * 100)}%` }}
    />
  </div>
);

const Badge = ({ label }: { label: string }) => (
  <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded mr-2 mb-1">
    {label}
  </span>
);

const MyPledgePage = () => {
  const daysLeft = userPledge.timeframe - Math.floor((userPledge.progress * userPledge.timeframe));
  const urgentDeadline = new Date(userPledge.urgent.deadline).toLocaleDateString();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Pledge</h1>
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="mb-2 text-lg font-semibold">
          {userPledge.currency}{userPledge.amount} pledged in {userPledge.timeframe} days
        </div>
        <div className="mb-2 text-sm text-gray-600">
          You have fulfilled {userPledge.currency}{userPledge.fulfilled} so far.
        </div>
        <PledgeProgressBar progress={userPledge.progress} />
        <div className="text-xs text-gray-500 mb-2">
          {Math.round(userPledge.progress * 100)}% complete — {daysLeft} days left
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Donate Now
        </button>
        <div className="mt-4">
          <span className="font-semibold">Reminders:</span>
          <ul className="list-disc ml-6 text-sm">
            {userPledge.reminders.map((r, i) => (
              <li key={i} className={r.sent ? 'text-green-600' : 'text-gray-700'}>
                Day {r.day}: {r.sent ? 'Sent' : 'Scheduled'}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center mb-2">
          <span className="font-semibold mr-2">Level:</span>
          <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{userPledge.level}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Badges:</span>
          <div className="mt-1">
            {userPledge.badges.map((b, i) => <Badge key={i} label={b} />)}
          </div>
        </div>
        {/* TODO: Add leaderboard integration */}
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="font-semibold mb-1">Urgency</div>
        <div className="mb-2 text-sm">
          <span className="font-bold">{userPledge.urgent.percentFunded}% funded</span> — only {userPledge.currency}{userPledge.urgent.amountNeeded} more needed this week (by {urgentDeadline})
        </div>
        <div className="w-full bg-red-100 rounded-full h-3 mb-2">
          <div
            className="bg-red-500 h-3 rounded-full transition-all"
            style={{ width: `${userPledge.urgent.percentFunded}%` }}
          />
        </div>
        {/* TODO: Add countdown timer and milestones */}
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="font-semibold mb-1">Your Impact</div>
        <div className="text-sm mb-2">
          You have helped feed <span className="font-bold">{userPledge.impact.kidsFed} kid(s)</span> for <span className="font-bold">{userPledge.impact.weeks} week(s)</span> so far!
        </div>
        {/* TODO: Show more detailed impact stats and stories */}
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="font-semibold mb-1">Auto-Pay & Subscription</div>
        <div className="flex items-center mb-2">
          <input type="checkbox" checked={userPledge.autoPay} readOnly className="mr-2" />
          <span className="text-sm">Enable auto-pay for monthly giving</span>
        </div>
        {/* TODO: Integrate with payment provider */}
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="font-semibold mb-1">Trust & Transparency</div>
        <ul className="list-disc ml-6 text-sm">
          <li><Link href="/transparency"><span className="underline">Financial transparency</span></Link></li>
          <li><Link href="/projects"><span className="underline">Previous successful projects</span></Link></li>
          <li><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs mt-1">Secure Payment</span></li>
        </ul>
      </div>
    </div>
  );
};

export default MyPledgePage;
