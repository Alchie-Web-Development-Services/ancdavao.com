import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import DonationFormSection from "@/components/DonationFormSection";

const Donate: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Donate"
        description="Support ANC Davao's mission to empower underprivileged children and communities. Make a one-time or monthly donation securely online."
        keywords="donate, ANC Davao, charity, support, make a difference, online donation, humanitarian, Philippines"
      />
      <PageHeader
        title="Donate"
        subtitle="Support our mission to transform lives in Davao"
        backgroundImage="https://cdn.ancdavao.com/page-header.jpg"
      />

      <DonationFormSection />
    </div>
  );
};

export default Donate;
