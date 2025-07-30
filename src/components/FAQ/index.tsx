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
  const faqs = [
    {
      title: "Do I need a business plan?",
      content:
        "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
    },
    {
      title: "How long should a business plan be?",
      content:
        "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
    },
    {
      title: "What goes into a business plan?",
      content:
        "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
    },
    {
      title: "Where do I start?",
      content:
        "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-neutral-800 mb-6">FAQ</h3>
      <div>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
