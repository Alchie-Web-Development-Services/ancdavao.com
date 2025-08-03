import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { client } from "../../src/lib/sanity";
import { AllEventsQuery } from "../../src/generated/graphql";
import AllEvents from "../../src/graphql/allEvents.graphql";
import EventCard from "@/components/EventCard";

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
