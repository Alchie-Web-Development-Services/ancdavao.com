import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import {
  FaHandsHelping,
  FaHandHoldingHeart,
  FaUserFriends,
  FaBullhorn,
} from "react-icons/fa";

const GetInvolved: React.FC = () => {
  const involvementOptions = [
    {
      id: 1,
      title: "Volunteer",
      icon: <FaHandsHelping className="w-12 h-12 text-indigo-600 mb-4" />,
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
      icon: <FaHandHoldingHeart className="w-12 h-12 text-indigo-600 mb-4" />,
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
      icon: <FaUserFriends className="w-12 h-12 text-indigo-600 mb-4" />,
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
      icon: <FaBullhorn className="w-12 h-12 text-indigo-600 mb-4" />,
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
      {/* Page Header */}
      <PageHeader
        title="Get Involved"
        subtitle="Join us in making a difference in the lives of children and communities in Davao"
        backgroundImage="/images/get-involved-header.jpg"
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
              <div
                key={option.id}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {option.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {option.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mt-auto">
                  <Link
                    to={option.link}
                    className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors w-full"
                  >
                    {option.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-indigo-50 rounded-lg p-8">
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
                <div
                  key={role.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium mb-3">
                    {role.timeCommitment}
                  </p>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <Link
                    to="/volunteer/apply"
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/volunteer/apply"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <Link
              to="/partnerships"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Learn About Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white">
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
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white border-white hover:bg-indigo-800 transition-colors"
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
