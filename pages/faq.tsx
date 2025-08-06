import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FAQ"
        description="Find answers to frequently asked questions about ANC Davao, our programs, donations, volunteering, and partnerships."
        keywords="FAQ, frequently asked questions, ANC Davao, general questions, donations, volunteering, programs, partnerships"
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about ANC Davao"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      <FAQSection />
    </div>
  );
};

export default FAQ;
