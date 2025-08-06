import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CallToActionSection from "@/components/CallToActionSection";

const Share: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Share Our Mission"
        description="Learn how you can share ANC Davao's mission and help us reach more people."
        keywords="ANC Davao, share, spread awareness, social media, advocate, community support"
      />
      <PageHeader
        title="Share Our Mission"
        subtitle="Help us spread the word and reach more hearts"
        backgroundImage="https://cdn.ancdavao.com/placeholder4.jpg"
      />

      {/* Add your share content here */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How You Can Help Us Share</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Every share, every mention, and every conversation helps us extend our reach and gather more support for our beneficiaries. Here are some ways you can help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600">Share our posts, stories, and campaigns on your social media channels.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Word of Mouth</h3>
              <p className="text-gray-600">Tell your friends, family, and colleagues about our work.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-600">Organize or participate in local events to raise awareness.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default Share;
