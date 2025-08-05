import React from 'react';

interface PledgeProgressBarProps {
  progress: number;
}

const PledgeProgressBar: React.FC<PledgeProgressBarProps> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
    <div
      className="bg-green-500 h-4 rounded-full transition-all"
      style={{ width: `${Math.round(progress * 100)}%` }}
    />
  </div>
);

export default PledgeProgressBar;
