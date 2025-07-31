import React from "react";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-4"
      style={{
        backgroundImage: "url('https://picsum.photos/1600/900?random')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          We&apos;ve funded 120,00 charity projects for 20M people around the
          world.
        </h2>
        <Link
          href="/get-involved"
          className="bg-primary-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300 text-lg"
        >
          Join With Us
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
