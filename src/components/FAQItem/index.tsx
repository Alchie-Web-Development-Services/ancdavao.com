import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-primary-600" />
        ) : (
          <FaChevronDown className="text-primary-600" />
        )}
      </button>
      <div
        id={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`px-4 pb-4 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
