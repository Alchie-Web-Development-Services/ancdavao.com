import React, { useState } from "react";
import Link from "next/link";
import useFetchJson from "@/hooks/useFetchJson";
import FAQItem, { FAQItemProps } from "../FAQItem";

const FAQSection: React.FC = () => {
  const { data, loading } = useFetchJson<{ [key: string]: FAQItemProps[] }>("/data/faqs.json");

  const [activeCategory, setActiveCategory] = useState("General Questions");

  if (loading) return null;

  const currentCategory = data[activeCategory];
  const categories = Object.keys(data);

  return (
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
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeCategory === category
                        ? "bg-primary-100 text-primary-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold mb-3">Still have questions?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Our team
                  is here to help.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-block w-full text-center bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
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
                  {activeCategory}
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {currentCategory && currentCategory.map((faq: FAQItemProps, index: number) => (
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
                href="/contact-us"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
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
  );
};

export default FAQSection;
