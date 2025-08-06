import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CallToActionSection from "@/components/CallToActionSection";

const Volunteer: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Volunteer"
        description="Learn about volunteer opportunities at ANC Davao and how you can contribute your time and skills."
        keywords="ANC Davao, volunteer, volunteer opportunities, community service, give back, Davao"
      />
      <PageHeader
        title="Volunteer Opportunities"
        subtitle="We have various opportunities for individuals and groups to get involved and support our programs. Your contribution, big or small, makes a significant impact."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      {/* Add your volunteer content here */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* You can add descriptions of volunteer roles, a call to action for signing up, etc. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Mentoring Programs</h3>
              <p className="text-gray-600">
                Guide and support children in their academic and personal
                growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Event Support</h3>
              <p className="text-gray-600">
                Help organize and run our fundraising and community events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">
                Administrative Tasks
              </h3>
              <p className="text-gray-600">
                Assist with office work, data entry, and other essential tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default Volunteer;
