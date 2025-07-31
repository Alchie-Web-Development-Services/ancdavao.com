import useFetchJson from "@/hooks/useFetchJson";
import { Faqs } from "@/types/faq";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccordionItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-neutral-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && <div className="mt-4 text-neutral-600">{content}</div>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const { data, loading } = useFetchJson<Faqs>("/data/faqs.json");

  if (loading) return null;

  const currentCategory = [...data["Donations"], ...data["General Questions"]];

  return (
    <div className="bg-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-neutral-800 mb-6">FAQ</h3>
      <div>
        {currentCategory.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.question}
            content={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
