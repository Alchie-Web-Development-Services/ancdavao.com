import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  FaUtensils,
  FaBook,
  FaUserGraduate,
  FaHeartbeat,
  FaHome,
  FaHandsHelping,
} from "react-icons/fa";
import SEO from "@/components/SEO";

const Programs: React.FC = () => {
  // Sample programs data - replace with actual data from your backend
  const programs = [
    {
      id: 1,
      title: "Feeding Program",
      description:
        "Providing nutritious meals to underprivileged children in Davao City to combat malnutrition and hunger.",
      icon: <FaUtensils className="text-4xl text-primary-600 mb-4" />,
      link: "/programs-and-services/feeding-program",
      stats: [
        { value: "500+", label: "Children Fed Monthly" },
        { value: "12", label: "Communities Served" },
        { value: "50+", label: "Volunteers" },
      ],
    },
    {
      id: 2,
      title: "Education Support",
      description:
        "Scholarships, school supplies, and educational resources for children in need to ensure access to quality education.",
      icon: <FaBook className="text-4xl text-primary-600 mb-4" />,
      link: "/programs-and-services/education-support",
      stats: [
        { value: "100+", label: "Scholars" },
        { value: "10", label: "Partner Schools" },
        { value: "95%", label: "Graduation Rate" },
      ],
    },
    {
      id: 3,
      title: "Youth Development",
      description:
        "Programs focused on leadership, skills training, and character development for young people.",
      icon: <FaUserGraduate className="text-4xl text-primary-600 mb-4" />,
      link: "/programs-and-services/youth-development",
      stats: [
        { value: "200+", label: "Youth Served" },
        { value: "15", label: "Workshops" },
        { value: "85%", label: "Employment Rate" },
      ],
    },
    {
      id: 4,
      title: "Healthcare Initiative",
      description:
        "Medical missions, health education, and access to healthcare services for underserved communities.",
      icon: <FaHeartbeat className="text-4xl text-primary-600 mb-4" />,
      link: "/programs-and-services/healthcare-initiative",
      stats: [
        { value: "1000+", label: "Patients Treated" },
        { value: "20", label: "Medical Missions" },
        { value: "50+", label: "Healthcare Workers" },
      ],
    },
    {
      id: 5,
      title: "Community Development",
      description:
        "Projects focused on sustainable community development, infrastructure, and livelihood programs.",
      icon: <FaHome className="text-4xl text-primary-600 mb-4" />,
      link: "/programs-and-services/community-development",
      stats: [
        { value: "15", label: "Communities" },
        { value: "30", label: "Projects" },
        { value: "200+", label: "Families Impacted" },
      ],
    },
    {
      id: 6,
      title: "Volunteer Program",
      description:
        "Opportunities for individuals and groups to contribute their time and skills to support our mission.",
      icon: <FaHandsHelping className="text-4xl text-primary-600 mb-4" />,
      link: "/programs-and-services/volunteer-program",
      stats: [
        { value: "500+", label: "Volunteers" },
        { value: "1000+", label: "Volunteer Hours" },
        { value: "50+", label: "Partner Organizations" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Programs"
        description="Explore ANC Davao's impactful programs, including feeding, education, youth development, healthcare, and community development initiatives. Learn how we make a difference."
        keywords="ANC Davao programs, feeding program, education support, youth development, healthcare initiative, community development, volunteer program, social impact"
      />
      {/* Page Header */}
      <PageHeader
        title="Our Programs"
        subtitle="Discover how we're making a difference in the lives of children and communities in Davao"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impactful Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We run a variety of programs designed to address the diverse needs
              of the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-center">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {program.stats.map((stat, index) => (
                        <div key={index} className="p-2">
                          <div className="text-lg font-bold text-primary-600">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href={`/programs-and-services/${program.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Support Our Programs?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your donation helps us expand our reach and make an even greater
            impact in the community.
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
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Programs Matter
            </h2>
            <p className="text-xl text-gray-600">
              Our programs are designed to create sustainable change and break
              the cycle of poverty through education, nutrition, and community
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Holistic Approach",
                description:
                  "We address the root causes of poverty through comprehensive programs that support the whole child and their community.",
              },
              {
                title: "Proven Impact",
                description:
                  "Our evidence-based programs have demonstrated measurable success in improving lives and communities.",
              },
              {
                title: "Community-Led",
                description:
                  "We work closely with local communities to ensure our programs are culturally appropriate and sustainable.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
