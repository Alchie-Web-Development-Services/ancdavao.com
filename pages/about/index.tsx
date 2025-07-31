import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TeamMember from "@/components/TeamMember";
import Testimonial from "@/components/Testimonial";
import { FaUsers, FaHandsHelping, FaHeart, FaChild } from "react-icons/fa";
import SEO from "@/components/SEO";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & Executive Director",
    bio: "Passionate about making a difference in the lives of underprivileged children.",
    image: "https://picsum.photos/1920/1080?random",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Program Director",
    bio: "Dedicated to creating sustainable programs for community development.",
    image: "https://picsum.photos/1920/1080?random",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Operations Manager",
    bio: "Ensuring smooth operations and efficient resource allocation.",
    image: "https://picsum.photos/1920/1080?random",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Volunteer Coordinator",
    bio: "Connecting passionate volunteers with meaningful opportunities.",
    image: "https://picsum.photos/1920/1080?random",
  },
];

const values = [
  {
    icon: <FaUsers className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Community",
    description:
      "We believe in the power of community and collective action to create lasting change.",
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Empowerment",
    description:
      "We empower individuals and communities to become self-sufficient and resilient.",
  },
  {
    icon: <FaHeart className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Compassion",
    description:
      "We approach our work with empathy, kindness, and respect for all individuals.",
  },
  {
    icon: <FaChild className="w-8 h-8 text-primary-600 mb-4" />,
    title: "Inclusivity",
    description:
      "We serve all members of our community regardless of background or circumstance.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "ANC Davao has been instrumental in transforming our community. Their programs have brought hope to many families.",
    author: "Maria Santos",
    role: "Community Leader",
    avatar: "https://picsum.photos/1920/1080?random",
  },
  {
    id: 2,
    quote:
      "As a volunteer, I've seen firsthand the positive impact of ANC Davao's work. It's truly inspiring to be part of this organization.",
    author: "Carlos Reyes",
    role: "Volunteer",
    avatar: "https://picsum.photos/1920/1080?random",
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about ANC Davao's mission, vision, values, and the dedicated team working to empower underprivileged children and communities in Davao."
        keywords="ANC Davao, about us, mission, vision, values, team, history, community development, Davao"
      />
      {/* Page Header */}
      <PageHeader
        title="About ANC Davao"
        subtitle="Learn about our mission, vision, and the team behind our organization"
        backgroundImage="https://picsum.photos/1920/1080?random"
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                The Archdiocesan Nourishment Center (ANC) was established in
                2015 as a response to the growing hunger and poverty in Davao
                City. As a project of ACLAIM of The Roman Catholic Bishop of
                Davao, Inc., ANC began with a simple mission: to provide daily
                meals to undernourished children in the city’s most vulnerable
                communities.
              </p>
              <p className="mb-6">
                From a humble feeding program, ANC has evolved into a holistic,
                faith-rooted initiative addressing not just physical hunger, but
                also education, health, and spiritual needs. With the guidance
                of the ANC Board of Trustees, and the generous support of
                volunteers, donors, and partner organizations, we continue to
                serve with compassion and integrity.
              </p>
              <p className="mb-6">
                Today, ANC remains committed to its mission—nourishing lives,
                restoring dignity, and walking with the poor toward a future of
                hope.
              </p>
              <p className="text-center mt-8">
                <Link
                  href="/history"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Read More About Our History
                </Link>
              </p>
              <p className="text-center mt-4">
                <Link
                  href="/our-centers"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Discover Our Centers
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at ANC Davao
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals working together to make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community members and partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of our journey to create a better future for the children of
            Davao
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white border-white hover:bg-primary-800 transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
