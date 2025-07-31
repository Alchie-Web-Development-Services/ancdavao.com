import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SEO from "@/components/SEO";
import { GetStaticPaths, GetStaticProps } from "next";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  fullDescription: string;
}

const mockEvents = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: "2025-09-15",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom, City Convention Center",
    description:
      "Join us for an evening of elegance and philanthropy to support our various programs. This gala aims to raise funds for our education and healthcare initiatives, providing vital resources to underprivileged communities. Expect a night of fine dining, live entertainment, and inspiring stories from those whose lives have been touched by your generosity.",
    image: "https://picsum.photos/800/600?random",
    fullDescription: `
      <p class="mb-4">The Annual Charity Gala is our premier fundraising event, bringing together philanthropists, community leaders, and supporters for a memorable evening. This year, we aim to surpass our previous fundraising records to expand our reach and impact even more lives.</p>
      <p class="mb-4">Your participation directly contributes to:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Providing scholarships for deserving students.</li>
        <li>Funding medical missions and health awareness programs.</li>
        <li>Supporting community development projects.</li>
      </ul>
      <p class="mb-4">We believe that every child deserves a chance at a brighter future, and with your help, we can make that a reality. Come and be a part of this noble cause.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Event Highlights:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Keynote speech by a renowned humanitarian.</li>
        <li>Live auction with exclusive items.</li>
        <li>Gourmet dinner and open bar.</li>
        <li>Networking opportunities with like-minded individuals.</li>
      </ul>
      <p>For more information on how to get involved or to purchase tickets, please visit our <a href="/contact" class="text-primary-600 hover:underline">Contact Us</a> page.</p>
    `,
  },
  {
    id: 2,
    title: "Community Feeding Drive",
    date: "2025-10-01",
    time: "9:00 AM - 1:00 PM",
    location: "Barangay 76-A Covered Court",
    description:
      "Volunteer with us to provide nutritious meals to underprivileged children. This initiative aims to combat malnutrition and ensure that every child has access to healthy food, which is crucial for their development and well-being.",
    image: "https://picsum.photos/800/600?random",
    fullDescription: `
      <p class="mb-4">Our Community Feeding Drive is a regular program designed to address food insecurity in vulnerable communities. We rely heavily on volunteers to help prepare, pack, and distribute meals to hundreds of children.</p>
      <p class="mb-4">How you can help:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Volunteer your time for meal preparation and distribution.</li>
        <li>Donate non-perishable food items.</li>
        <li>Sponsor a child's meals for a month or a year.</li>
      </ul>
      <p class="mb-4">Even a few hours of your time can make a significant difference in a child's life. Join us in ensuring no child goes to bed hungry.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Volunteer Information:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>No prior experience required.</li>
        <li>Briefing and orientation will be provided on-site.</li>
        <li>Wear comfortable clothing and closed-toe shoes.</li>
      </ul>
      <p>To sign up as a volunteer, please visit our <a href="/get-involved" class="text-primary-600 hover:underline">Get Involved</a> page.</p>
    `,
  },
  {
    id: 3,
    title: "Medical Mission",
    date: "2025-11-10",
    time: "8:00 AM - 4:00 PM",
    location: "Davao City Health Center",
    description:
      "Free medical check-ups and consultations for the community. Our medical missions provide essential healthcare services to those who have limited access, including basic check-ups, dental services, and distribution of free medicines.",
    image: "https://picsum.photos/800/600?random",
    fullDescription: `
      <p class="mb-4">Our annual Medical Mission aims to provide accessible healthcare to underserved populations. We bring together volunteer doctors, nurses, and healthcare professionals to offer free services and health education.</p>
      <p class="mb-4">Services offered include:</p>
      <ul class="list-disc list-inside mb-4">
        <li>General medical consultations.</li>
        <li>Basic dental check-ups and extractions.</li>
        <li>Eye check-ups and reading glasses distribution.</li>
        <li>Free medicines for common ailments.</li>
        <li>Health and hygiene education.</li>
      </ul>
      <p class="mb-4">Many in our community lack access to basic healthcare. Your support helps us bridge this gap and promote a healthier community.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">How to Participate:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Patients are served on a first-come, first-served basis.</li>
        <li>Bring any existing medical records if available.</li>
        <li>Volunteers are always welcome, especially medical professionals.</li>
      </ul>
      <p>For more details or to volunteer, please contact us through our <a href="/contact" class="text-primary-600 hover:underline">Contact Us</a> page.</p>
    `,
  },
];

interface EventDetailProps {
  event: Event;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={event.title}
        description={event.description}
        keywords={`${event.title.toLowerCase()}, ${event.location.toLowerCase()}, ${new Date(event.date).getFullYear()}, ANC Davao event, charity, ${event.title.toLowerCase().includes("gala") ? "gala, fundraising" : ""}${event.title.toLowerCase().includes("feeding") ? "feeding program, malnutrition" : ""}${event.title.toLowerCase().includes("medical") ? "medical mission, healthcare" : ""}`}
      />
      <PageHeader
        title={event.title}
        subtitle="Learn more about this event and how you can participate."
        backgroundImage={event.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={event.image}
              alt={event.title}
              width={1200}
              height={675}
              className="w-full rounded-lg shadow-md mb-8"
            />

            <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary-600" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2 text-primary-600" /> {event.time}
              </span>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-primary-600" />
                {event.location}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {event.title}
            </h2>
            <div
              className="prose prose-primary max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: event.fullDescription }}
            />

            <div className="mt-8 text-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Back to All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockEvents.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EventDetailProps> = async ({
  params,
}) => {
  const event = mockEvents.find((p) => p.id.toString() === params?.id);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
  };
};

export default EventDetail;
