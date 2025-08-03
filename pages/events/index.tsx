import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "@/components/SEO";
import { client, urlFor } from "../../src/lib/sanity";
import { AllEventsQuery } from "../../src/generated/graphql";
import AllEvents from "../../src/graphql/allEvents.graphql";

interface EventCardProps {
  event: AllEventsQuery['allEvent'][number];
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
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
      {event.mainImage && (
        <Image
          src={urlFor(event.mainImage).url() || ""}
          alt={event.title || "Event Image"}
          width={800}
          height={600}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          {event.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4">
          {/* Assuming descriptionRaw is a portable text field, you might need a component to render it */}
          {event.descriptionRaw ? "Description available" : "No description provided."}
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

interface EventsProps {
  events: AllEventsQuery['allEvent'];
}

const Events: React.FC<EventsProps> = ({ events }) => {
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
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const result = await client.request<AllEventsQuery>(AllEvents);

  return {
    props: {
      events: result.allEvent,
    },
  };
}

export default Events;
