import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  FaHandsHelping,
  FaHandHoldingHeart,
  FaUserFriends,
  FaBullhorn,
} from "react-icons/fa";
import SEO from "@/components/SEO";
import GetInvolvedOptionCard from "@/components/GetInvolvedOptionCard";
import VolunteerRoleCard from "@/components/VolunteerRoleCard";
import CorporatePartnershipCard from "@/components/CorporatePartnershipCard";

const GetInvolved: React.FC = () => {
  const involvementOptions = [
    {
      id: 1,
      title: "Volunteer",
      icon: <FaHandsHelping className="w-12 h-12 text-primary-600 mb-4" />,
      description:
        "Join our team of dedicated volunteers and make a direct impact in the community.",
      link: "/volunteer",
      linkText: "Become a Volunteer",
      highlights: [
        "Various volunteer opportunities available",
        "Flexible time commitments",
        "Training and support provided",
      ],
    },
    {
      id: 2,
      title: "Donate",
      icon: <FaHandHoldingHeart className="w-12 h-12 text-primary-600 mb-4" />,
      description:
        "Your financial support helps us continue and expand our programs.",
      link: "/donate",
      linkText: "Make a Donation",
      highlights: [
        "One-time or recurring donations",
        "Transparent use of funds",
        "Tax-deductible contributions",
      ],
    },
    {
      id: 3,
      title: "Partner With Us",
      icon: <FaUserFriends className="w-12 h-12 text-primary-600 mb-4" />,
      description:
        "Businesses and organizations can partner with us for greater impact.",
      link: "/partnerships",
      linkText: "Explore Partnerships",
      highlights: [
        "Corporate social responsibility programs",
        "Employee engagement opportunities",
        "Cause-related marketing campaigns",
      ],
    },
    {
      id: 4,
      title: "Spread the Word",
      icon: <FaBullhorn className="w-12 h-12 text-primary-600 mb-4" />,
      description: "Help us raise awareness about our cause and programs.",
      link: "/share",
      linkText: "Learn How to Help",
      highlights: [
        "Share on social media",
        "Organize fundraising events",
        "Become an ambassador",
      ],
    },
  ];

  const volunteerRoles = [
    {
      id: 1,
      title: "Tutor/Mentor",
      timeCommitment: "2-4 hours per week",
      description: "Help children with their studies and provide mentorship.",
    },
    {
      id: 2,
      title: "Event Volunteer",
      timeCommitment: "Flexible",
      description:
        "Assist with organizing and running fundraising and community events.",
    },
    {
      id: 3,
      title: "Professional Services",
      timeCommitment: "Project-based",
      description:
        "Offer your professional skills (legal, medical, IT, marketing, etc.).",
    },
    {
      id: 4,
      title: "Community Outreach",
      timeCommitment: "4-6 hours per month",
      description: "Help us connect with and serve more communities in need.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Get Involved"
        description="Discover various ways to get involved with ANC Davao, including volunteering, donating, partnering, and spreading awareness. Make a difference today!"
        keywords="get involved, volunteer, donate, partner, spread the word, ANC Davao, community service, humanitarian, Philippines"
      />
      {/* Page Header */}
      <PageHeader
        title="Get Involved"
        subtitle="Join us in making a difference in the lives of children and communities in Davao"
        backgroundImage="https://cdn.ancdavao.com/page-header.jpg"
      />

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can support our mission and make a lasting
              impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {involvementOptions.map((option) => (
              <GetInvolvedOptionCard key={option.id} {...option} />
            ))}
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Volunteer Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our team of dedicated volunteers and make a direct impact
                in the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {volunteerRoles.map((role) => (
                <VolunteerRoleCard key={role.id} {...role} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/volunteer/apply"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Apply to Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Corporate Partnerships
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with ANC Davao to create meaningful social impact while
              achieving your corporate social responsibility goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Sponsorship",
                  description:
                    "Sponsor a program or event and align your brand with our mission.",
                },
                {
                  title: "Employee Engagement",
                  description:
                    "Engage your employees through volunteer opportunities and team-building activities.",
                },
                {
                  title: "Matching Gifts",
                  description:
                    "Maximize your impact with corporate matching gift programs.",
                },
              ].map((item, index) => (
                <CorporatePartnershipCard key={index} {...item} />
              ))}
            </div>

            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Learn About Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in our mission to transform lives and build stronger
            communities in Davao.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white border-white hover:bg-primary-800 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
