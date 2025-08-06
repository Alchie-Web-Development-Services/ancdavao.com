import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { urlFor } from "../../lib/sanity";
import { Event } from "@/generated/graphql";
import { PortableTextBlock } from "@portabletext/react";

interface EventSectionProps {
  event: Event | null;
}

const EventSection: React.FC<EventSectionProps> = ({ event }) => {
  if (!event) return null;

  const startDate = event.startDate
    ? new Date(event.startDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const endDate = event.endDate
    ? new Date(event.endDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Upcoming Event
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Join us in creating meaningful impact through our upcoming
            events—feeding missions, health drives, educational outreach, and
            spiritual gatherings. Each event is an opportunity to serve, uplift,
            and build stronger communities with compassion and purpose.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {event.mainImage && (
                <Image
                  src={urlFor(event.mainImage).url()}
                  alt={event.title || "Community event"}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              )}
            </div>
            <div>
              <div className="flex items-center text-neutral-600 space-x-6 mb-4">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-primary-600" />{" "}
                  {startDate} {endDate && `- ${endDate}`}
                </span>
                {event.location && (
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-primary-600" />{" "}
                    {event.location}
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                {event.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {event.descriptionRaw
                  ? (event.descriptionRaw[0] as PortableTextBlock)?.children[0]
                      ?.text
                  : "No description provided."}
              </p>
              <Link
                href={`/events/${event.slug?.current}`}
                className="bg-primary-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
