import React from "react";
import Link from "next/link";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Be part of our journey to create a better future for the children of
          Davao
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 transition-colors"
          >
            Donate Now
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white border-white hover:bg-primary-800 transition-colors"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
