import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client, urlFor } from "@//lib/sanity";
import { AllEventsQuery, Event } from "@//generated/graphql";
import Image from "next/image";
import { PortableText, PortableTextBlock } from '@portabletext/react'
import SEO from "@/components/SEO";
import { ALL_EVENTS_QUERY } from "@//graphql/allEvents";
import { EVENT_BY_SLUG_QUERY } from "@//graphql/eventBySlug";

interface EventDetailProps {
  event: Event;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  if (!event) {
    return <div className="text-center py-10">Event not found.</div>;
  }

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
    <div className="min-h-screen bg-neutral-100">
      <SEO
        title={event.title || "Event Detail"}
        description={event.descriptionRaw ? (event.descriptionRaw[0] as PortableTextBlock)?.children[0]?.text : "Details about a specific event hosted by ANC Davao."}
        keywords={`${event.title}, ANC Davao, event, community, support`}
      />
      <div className="relative h-96 w-full">
        {event.mainImage && (
          <Image
            src={urlFor(event.mainImage).url()}
            alt={event.title || "Event Image"}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 mb-6">
            About This Event
          </h2>
          <div className="prose max-w-none text-neutral-700 leading-relaxed">
            {event.descriptionRaw ? <PortableText value={event.descriptionRaw} /> : <p>No detailed description available for this event.</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Event Details
            </h3>
            <p className="text-neutral-700 mb-2">
              <span className="font-semibold">Date:</span>{" "}
              {startDate} {endDate && `- ${endDate}`}
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">Location:</span>{" "}
              {event.location || "N/A"}
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* You can add a button for registration or more info here if needed */}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.request<AllEventsQuery>(ALL_EVENTS_QUERY);
  const paths = result.allEvent.map((event) => ({
    params: { slug: event.slug?.current || '' },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<EventDetailProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const result = await client.request<AllEventsQuery>(EVENT_BY_SLUG_QUERY, { slug });

  return {
    props: {
      event: result.allEvent[0] || null,
    },
  };
};

export default EventDetail;