import React from "react";

const ProgramFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Our Programs Matter
          </h2>
          <p className="text-xl text-gray-600">
            Our programs are designed to create sustainable change and break the
            cycle of poverty through education, nutrition, and community
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Holistic Approach",
              description:
                "We address the root causes of poverty through comprehensive programs that support the whole child and their community.",
            },
            {
              title: "Proven Impact",
              description:
                "Our evidence-based programs have demonstrated measurable success in improving lives and communities.",
            },
            {
              title: "Community-Led",
              description:
                "We work closely with local communities to ensure our programs are culturally appropriate and sustainable.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
