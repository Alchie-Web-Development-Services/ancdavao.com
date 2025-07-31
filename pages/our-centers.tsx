import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

interface Center {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  contact: {
    phone: string;
    email: string;
  };
  hours: string[];
}

const mockCenters: Center[] = [
  {
    id: 1,
    name: "Main Office & Feeding Center - Fatima",
    location: "Pag-asa St., Fatima, Davao City",
    description:
      "Our main hub for operations, daily feeding programs, and administrative services. This center also houses our chapel and clinic.",
    image: "https://cdn.ancdavao.com/placeholder1.jpg",
    contact: {
      phone: "+63 82 123 4567",
      email: "info@ancdavao.com",
    },
    hours: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM (Feeding Program)",
      "Sunday: Closed",
    ],
  },
  {
    id: 2,
    name: "Community Outreach Center - Agdao",
    location: "Agdao Public Market Area, Davao City",
    description:
      "A satellite center focused on community outreach, health education, and distribution of relief goods in the Agdao district.",
    image: "https://cdn.ancdavao.com/placeholder1.jpg",
    contact: {
      phone: "+63 82 987 6543",
      email: "agdao@ancdavao.com",
    },
    hours: [
      "Monday, Wednesday, Friday: 9:00 AM - 4:00 PM",
      "Tuesday, Thursday: Closed",
      "Saturday, Sunday: Closed",
    ],
  },
];

const OurCenters: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Centers"
        description="Discover the locations and services of ANC Davao's various centers, including feeding programs, clinics, and community outreach."
        keywords="ANC Davao centers, feeding centers, community centers, Davao locations, contact, hours"
      />
      <PageHeader
        title="Our Centers"
        subtitle="Find out where we operate and how we serve the community."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We operate in various locations across Davao City to bring our
              services closer to the communities in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mockCenters.map((center) => (
              <div
                key={center.id}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={center.image}
                  alt={center.name}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {center.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{center.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-3 text-primary-600" />
                      <span>{center.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="mr-3 text-primary-600" />
                      <span>{center.contact.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-3 text-primary-600" />
                      <span>{center.contact.email}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Operating Hours:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {center.hours.map((hour, index) => (
                        <li key={index}>{hour}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCenters;
