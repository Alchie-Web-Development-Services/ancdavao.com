import React from "react";
import DonationForm from "../DonationForm";
import FAQ from "../FAQ";

const DonationFAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <DonationForm />
          <FAQ />
        </div>
      </div>
    </section>
  );
};

export default DonationFAQSection;
