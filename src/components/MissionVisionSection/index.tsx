import React from "react";

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">We commit ourselves: </p>
            <ul className="list-disc list-inside pl-6 text-gray-600">
              <li className="mb-2">
                To provide a well-integrated program of psycho-spiritual and
                physical nourishment for the children in need
              </li>
              <li className="mb-2">
                To organize the volunteers from different sectors and create
                networks and linkages of existing institutions with similar
                thrusts
              </li>
              <li className="mb-2">
                To foster collaboration among parents of the beneficiaries at
                their communities
              </li>
              <li className="mb-2">
                To conduct an on-going fundraising projects and activities in
                order to sustain its program.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md mb-auto">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-2">
                We envision a nourishment center of children from the
                peripheries that is God-centered, service oriented and
                community based.
              </p>
              <p className="text-gray-600">
                We also envision the children/beneficiaries of the
                Archdiocesan Nourishment Center to become successful members
                of society, actively contributing to nation-building.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-auto">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                Our Goal
              </h3>
              <ul className="list-disc list-inside pl-6 text-gray-600">
                <li className="mb-2">
                  Feed malnourished and children in need.
                </li>
                <li className="mb-2">
                  Restore malnourished children to maximum physical health.
                </li>
                <li className="mb-2">Give medical and dental assistance.</li>
                <li className="mb-2">
                  Provide regular human and spiritual formation to children,
                  parents and other collaborators.
                </li>
                <li className="mb-2">
                  Establish feeding centers in key areas of Davao City.
                </li>
                <li className="mb-2">
                  Partnership with schools and other institutions that could
                  support the center.
                </li>
                <li className="mb-2">
                  Offer Educational assistance to the beneficiaries up to
                  college.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
