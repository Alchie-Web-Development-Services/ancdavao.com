import React from "react";
import { HomePageCompiledResults } from "@/types/homepage";
import CauseCard from "../CauseCard";

interface CausesSectionProps {
  causes: HomePageCompiledResults['allCause'];
}

const CausesSection: React.FC<CausesSectionProps> = ({ causes }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Popular Causes
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
          Support the heart of our mission through our most impactful causes—feeding hungry children, providing access to education, ensuring healthcare for the underserved, and nurturing spiritual growth. Your help brings dignity, hope, and lasting change.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <CauseCard key={cause._id} cause={cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
