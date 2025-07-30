import type { ReactNode } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  link,
  className = "",
}) => {
  return (
    <div
      className={`card group overflow-hidden h-full flex flex-col ${className}`}
    >
      <div className="p-8 flex-grow">
        <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <div className="px-8 pb-8 pt-2 border-t border-gray-100">
        <Link
          to={link}
          className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-transform duration-200"
        >
          Learn more
          <FiArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
