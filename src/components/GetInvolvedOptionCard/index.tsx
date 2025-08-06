import React from "react";
import Link from "next/link";

interface GetInvolvedOptionCardProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
  linkText: string;
  highlights: string[];
}

const GetInvolvedOptionCard: React.FC<GetInvolvedOptionCardProps> = ({
  title,
  icon,
  description,
  link,
  linkText,
  highlights,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>

      <ul className="mb-6 space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-600">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="text-center mt-auto">
        <Link
          href={link}
          className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors w-full"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedOptionCard;
