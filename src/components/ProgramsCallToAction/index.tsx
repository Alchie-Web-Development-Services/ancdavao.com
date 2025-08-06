import React from "react";
import Link from "next/link";

const ProgramsCallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Want to Support Our Programs?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Your donation helps us expand our reach and make an even greater
          impact in the community.
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
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCallToAction;
