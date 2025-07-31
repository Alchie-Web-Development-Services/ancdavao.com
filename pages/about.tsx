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
    icon: <FaUsers className="w-8 h-8 text-teal-600 mb-4" />,
    title: "Community",
    description:
      "We believe in the power of community and collective action to create lasting change.",
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-teal-600 mb-4" />,
    title: "Empowerment",
    description:
      "We empower individuals and communities to become self-sufficient and resilient.",
  },
  {
    icon: <FaHeart className="w-8 h-8 text-teal-600 mb-4" />,
    title: "Compassion",
    description:
      "We approach our work with empathy, kindness, and respect for all individuals.",
  },
  {
    icon: <FaChild className="w-8 h-8 text-teal-600 mb-4" />,
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
                Founded in 2010, ANC Davao (Association of the Needy and the
                Children of Davao) began as a small community initiative to
                address the needs of underprivileged children in Davao City.
                What started as a feeding program for 20 children has grown into
                a comprehensive community development organization serving
                thousands of beneficiaries across multiple programs.
              </p>
              <p className="mb-6">
                Our journey has been marked by the unwavering support of our
                donors, volunteers, and community partners who share our vision
                of a better future for every child in Davao.
              </p>
              <p>
                Today, we continue to expand our reach and impact, guided by our
                core values and commitment to sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower underprivileged children and communities in Davao
                through education, nutrition, and sustainable development
                programs that create lasting positive change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We envision a Davao where every child has access to quality
                education, proper nutrition, and opportunities to reach their
                full potential, regardless of their socioeconomic background.
              </p>
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
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of our journey to create a better future for the children of
            Davao
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white border-white hover:bg-indigo-800 transition-colors"
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
