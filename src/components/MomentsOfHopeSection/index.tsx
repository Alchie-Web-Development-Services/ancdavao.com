import React from "react";
import { MomentsOfHope } from "@/generated/graphql";

interface MomentsOfHopeSectionProps {
  momentsOfHope: MomentsOfHope[];
}

const MomentsOfHopeSection: React.FC<MomentsOfHopeSectionProps> = ({
  momentsOfHope,
}) => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">
          Moments of Hope
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {momentsOfHope.map((moment) => (
            <div key={moment._id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {moment.title}
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                {moment.date ? new Date(moment.date).toLocaleDateString() : ""}
              </p>
              {moment.link && (
                <a
                  href={moment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsOfHopeSection;
