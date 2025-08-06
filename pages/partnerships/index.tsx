import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CallToActionSection from "@/components/CallToActionSection";

const Partnerships: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Partnerships"
        description="Learn about ANC Davao's partnerships and how you can collaborate with us to make a difference."
        keywords="ANC Davao, partnerships, collaboration, corporate social responsibility, CSR, community development, Davao"
      />
      <PageHeader
        title="Partnerships"
        subtitle="Collaborate with us to make a greater impact"
        backgroundImage="https://cdn.ancdavao.com/placeholder2.jpg"
      />

      {/* Add your partnerships content here */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Valued Partners
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            We believe in the power of collaboration to achieve our mission. Our
            partnerships enable us to expand our reach and enhance our programs.
          </p>
          {/* You can add partner logos, testimonials, or case studies here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Partner Name 1</h3>
              <p className="text-gray-600">
                Description of partnership and impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Partner Name 2</h3>
              <p className="text-gray-600">
                Description of partnership and impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Partner Name 3</h3>
              <p className="text-gray-600">
                Description of partnership and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default Partnerships;
