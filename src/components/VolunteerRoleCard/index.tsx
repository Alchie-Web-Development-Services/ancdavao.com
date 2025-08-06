import React from "react";
import Link from "next/link";

interface VolunteerRoleCardProps {
  id: number;
  title: string;
  timeCommitment: string;
  description: string;
}

const VolunteerRoleCard: React.FC<VolunteerRoleCardProps> = ({
  title,
  timeCommitment,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-primary-700 mb-2">{title}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">
        {timeCommitment}
      </p>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href="/volunteer/apply"
        className="text-primary-600 hover:text-primary-800 font-medium text-sm inline-flex items-center"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default VolunteerRoleCard;
