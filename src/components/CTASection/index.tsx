import React from "react";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-4"
      style={{
        backgroundImage:
          "url('https://cdn.ancdavao.com/gp-1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          We’ve Nourished Thousands—And We’re Just Getting Started
        </h2>
        <p className="text-lg mb-6 text-white">
          From daily feeding programs to scholarships and medical missions, ANC
          has reached over <strong>20,000 lives</strong> in Davao City with
          compassion and care.
          <br />
          <strong>Be part of a mission that transforms communities.</strong>
        </p>
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
