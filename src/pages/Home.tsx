import React from "react";
import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import ImpactSection from "../components/ImpactSection";
import CausesSection from "../components/CausesSection";
import EventSection from "../components/EventSection";
import GallerySection from "../components/GallerySection";
import CTASection from "../components/CTASection";
import DonationFAQSection from "../components/DonationFAQSection";
import VolunteersSection from "../components/VolunteersSection";
import BlogSection from "../components/BlogSection";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <MissionSection />
        <ImpactSection />
        <CausesSection />
        <EventSection />
        <GallerySection />
        <CTASection />
        <DonationFAQSection />
        <VolunteersSection />
        <BlogSection />
      </main>
    </div>
  );
};

export default Home;
