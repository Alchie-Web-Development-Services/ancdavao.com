import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

interface FAQItemProps {
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
          <FaChevronUp className="text-indigo-600" />
        ) : (
          <FaChevronDown className="text-indigo-600" />
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

const FAQ: React.FC = () => {
  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      faqs: [
        {
          question: "What does ANC Davao do?",
          answer:
            "ANC Davao is a non-profit organization dedicated to improving the lives of children and communities in Davao through education, healthcare, and community development programs.",
        },
        {
          question: "Where does ANC Davao operate?",
          answer:
            "We primarily operate in Davao City and surrounding areas, focusing on underserved communities where our programs can make the most impact.",
        },
        {
          question: "How can I contact ANC Davao?",
          answer: (
            <p>
              You can reach us through the following channels:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Email: info@ancdavao.org</li>
                <li>Phone: +63 82 123 4567</li>
                <li>
                  Visit our office at 1234 Street Name, Barangay 76-A, Davao
                  City
                </li>
              </ul>
            </p>
          ),
        },
      ],
    },
    {
      id: "donations",
      title: "Donations",
      faqs: [
        {
          question: "How can I donate to ANC Davao?",
          answer:
            "You can donate through our website using a credit/debit card, GCash, or bank transfer. Visit our Donate page for more details.",
        },
        {
          question: "Is my donation tax-deductible?",
          answer:
            "Yes, ANC Davao is a registered non-profit organization, and all donations are tax-deductible. You will receive an official receipt for your donation.",
        },
        {
          question: "Can I donate in-kind?",
          answer:
            "Yes, we accept in-kind donations such as school supplies, books, and other items. Please contact us to coordinate your in-kind donation.",
        },
        {
          question: "How will my donation be used?",
          answer:
            "Your donation will be used to support our various programs, including education, healthcare, and community development initiatives. We ensure that the majority of funds go directly to program services.",
        },
      ],
    },
    {
      id: "volunteering",
      title: "Volunteering",
      faqs: [
        {
          question: "How can I volunteer with ANC Davao?",
          answer:
            "You can apply to be a volunteer by filling out the volunteer application form on our website. We have various volunteer opportunities available.",
        },
        {
          question: "What are the requirements to volunteer?",
          answer:
            "Requirements vary depending on the volunteer role. Generally, we look for individuals who are passionate about our cause and willing to commit their time and skills.",
        },
        {
          question: "Do I need special skills to volunteer?",
          answer:
            "While some roles may require specific skills, many of our volunteer opportunities are open to anyone with a willingness to help. We provide training for all volunteers.",
        },
      ],
    },
    {
      id: "programs",
      title: "Programs",
      faqs: [
        {
          question: "What programs does ANC Davao offer?",
          answer:
            "We offer various programs including educational support, healthcare services, feeding programs, and community development initiatives.",
        },
        {
          question: "How can I enroll my child in your programs?",
          answer:
            "Please visit our Programs page for information on eligibility and the application process for each of our programs.",
        },
        {
          question: "Do you offer scholarships?",
          answer:
            "Yes, we offer scholarships to qualified students. Please check our Education Program page for more details and application requirements.",
        },
      ],
    },
    {
      id: "partnerships",
      title: "Partnerships",
      faqs: [
        {
          question: "Can my company partner with ANC Davao?",
          answer:
            "Yes, we welcome corporate partnerships. Please contact our Partnerships team to discuss potential collaboration opportunities.",
        },
        {
          question: "What are the benefits of becoming a corporate partner?",
          answer:
            "Corporate partners receive various benefits including employee engagement opportunities, brand visibility, and the satisfaction of making a positive social impact.",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("general");

  const currentCategory =
    faqCategories.find((cat) => cat.id === activeCategory) || faqCategories[0];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about ANC Davao"
        backgroundImage="https://picsum.photos/1920/1080?random"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our frequently asked questions or contact us if you
              can&apos;t find what you&apos;re looking for.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Category Navigation */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <nav className="space-y-1">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category.id
                          ? "bg-indigo-100 text-indigo-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                  <h3 className="font-semibold mb-3">Still have questions?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Can&apos;t find the answer you&apos;re looking for? Our team
                    is here to help.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {currentCategory.title}
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {currentCategory.faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>

              {/* Additional Help */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Need more help?</h3>
                <p className="text-gray-600 mb-4">
                  If you couldn&apos;t find the answer to your question, feel
                  free to reach out to our support team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Contact Support
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
