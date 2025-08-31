import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CallToActionSection from "@/components/CallToActionSection";
import { partners } from "@/utils/constant/partners";
import Image from "next/image";

const Partnerships: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Valued Partners"
        description="Learn about ANC Davao's partnerships and how you can collaborate with us to make a difference."
        keywords="ANC Davao, partnerships, collaboration, corporate social responsibility, CSR, community development, Davao"
      />
      <PageHeader
        title="Our Valued Partners"
        subtitle="We believe in the power of collaboration to achieve our mission. Our partnerships enable us to expand our reach and enhance our programs."
        backgroundImage="https://cdn.ancdavao.com/page-header.jpg"
      />

      {/* Add your partnerships content here */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* You can add partner logos, testimonials, or case studies here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                  <p className="mt-4">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Visit Website
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default Partnerships;
