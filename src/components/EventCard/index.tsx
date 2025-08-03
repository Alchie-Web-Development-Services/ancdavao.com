import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import imageUrlBuilder from '@sanity/image-url';
import { AllEventsQuery } from "@/generated/graphql";
import { PortableText } from '@portabletext/react'

// Initialize the image URL builder
const builder = imageUrlBuilder({
  projectId: 'tuggecli',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source);
}

interface EventCardProps {
  event: AllEventsQuery['allEvent'][number];
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const imgSrc = event.mainImage ? urlFor(event.mainImage).url() : "https://via.placeholder.com/800x600?text=No+Image";
  const startDate = event.startDate ? new Date(event.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "";
  const endDate = event.endDate ? new Date(event.endDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imgSrc || ""}
        alt={event.title || "Event Image"}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          {event.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4">
          {event.descriptionRaw ? <PortableText value={event.descriptionRaw} /> : "No description provided."}
        </p>
        <div className="flex items-center text-neutral-600 text-sm mb-2">
          <FaCalendarAlt className="mr-2 text-primary-600" />{" "}
          {startDate} {endDate && `- ${endDate}`}
        </div>
        {event.location && (
          <div className="flex items-center text-neutral-600 text-sm mb-4">
            <FaMapMarkerAlt className="mr-2 text-primary-600" />{" "}
            {event.location}
          </div>
        )}
        <Link
          href={`/events/${event.slug?.current}`}
          className="text-primary-600 font-semibold hover:underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
