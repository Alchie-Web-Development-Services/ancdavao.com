import React from "react";
import { FaUsers, FaHandsHelping, FaHeart, FaChild } from "react-icons/fa";

const values = [
  {
    icon: <FaUsers className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Community",
    description:
      "We believe in the power of community and collective action to create lasting change.",
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Empowerment",
    description:
      "We empower individuals and communities to become self-sufficient and resilient.",
  },
  {
    icon: <FaHeart className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Compassion",
    description:
      "We approach our work with empathy, kindness, and respect for all individuals.",
  },
  {
    icon: <FaChild className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Inclusivity",
    description:
      "We serve all members of our community regardless of background or circumstance.",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The core principles that shape our mission and actions at
            Archdiocesan Nourishment Center — compassion, service, integrity,
            and faith — guide every step we take in uplifting lives and building
            a more caring community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
