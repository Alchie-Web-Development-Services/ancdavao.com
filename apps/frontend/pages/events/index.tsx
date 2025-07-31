import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SEO from "@/components/SEO";

const Event: React.FC = () => {
  const mockEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "2025-09-15",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom, City Convention Center",
      description:
        "Join us for an evening of elegance and philanthropy to support our various programs.",
      image: "https://cdn.ancdavao.com/placeholder1.jpg",
    },
    {
      id: 2,
      title: "Community Feeding Drive",
      date: "2025-10-01",
      time: "9:00 AM - 1:00 PM",
      location: "Barangay 76-A Covered Court",
      description:
        "Volunteer with us to provide nutritious meals to underprivileged children.",
      image: "https://cdn.ancdavao.com/placeholder1.jpg",
    },
    {
      id: 3,
      title: "Medical Mission",
      date: "2025-11-10",
      time: "8:00 AM - 4:00 PM",
      location: "Davao City Health Center",
      description:
        "Free medical check-ups and consultations for the community.",
      image: "https://cdn.ancdavao.com/placeholder1.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Events"
        description="Discover upcoming events hosted by ANC Davao, including charity galas, community drives, and medical missions. Join us and make a difference!"
        keywords="ANC Davao events, charity, community, medical mission, volunteer, upcoming events, Davao"
      />
      <PageHeader
        title="Our Events"
        subtitle="Join us in our upcoming events and make a difference!"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg?random"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center text-neutral-600 text-sm mb-2">
                    <FaCalendarAlt className="mr-2 text-primary-600" />{" "}
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-neutral-600 text-sm mb-2">
                    <FaClock className="mr-2 text-primary-600" /> {event.time}
                  </div>
                  <div className="flex items-center text-neutral-600 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2 text-primary-600" />{" "}
                    {event.location}
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
