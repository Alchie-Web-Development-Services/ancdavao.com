import React from "react";
import Link from "next/link";

export const FAQPreview: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Can&apos;t find what you&apos;re looking for? Check out our FAQ page
          for more information.
        </p>
        <Link
          href="/faq"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
        >
          Visit FAQ Page
        </Link>
      </div>
    </section>
  );
};
