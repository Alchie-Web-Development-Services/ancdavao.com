import React from "react";
import Header from "../components/Header";
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
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Home;
