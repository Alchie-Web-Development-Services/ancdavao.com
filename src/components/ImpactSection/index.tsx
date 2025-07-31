import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDonate, FaUsers, FaAward } from "react-icons/fa";

const ImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: <FaDonate size={32} />,
      title: "Make a Donation",
      description:
        "Your generosity fuels our feeding programs, medical outreach, and spiritual formation. A single gift can fill a plate, send a child to school, or keep a center running.",
      tagline: "Be the reason someone eats today.",
      link: "/donate",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Become a Volunteer",
      description:
        "Whether you serve meals, assist at medical clinics, or help teach children, your time can transform lives. Volunteers are the heart of ANC’s mission—and we always have room for more. ",
      tagline: "Serve with purpose.",
      link: "/get-involved",
    },
    {
      icon: <FaAward size={32} />,
      title: "Give a Scholarship",
      description:
        "Education breaks the cycle of poverty. By sponsoring a student, you provide more than tuition—you give them hope, dignity, and the chance to dream.",
      tagline: "Empower the next generation.",
      link: "/programs-and-services/education",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Together, We Are Changing Lives in Davao City
            </h2>
            <p className="text-neutral-600 mb-8">
              Since 2015, ANC has provided over 10,000 meals each month, offered
              free healthcare, supported dozens of scholars, and brought
              spiritual and emotional healing to thousands of families across
              Davao. Every act of kindness—big or small—nourishes lives with
              love and dignity.
            </p>
            <div className="space-y-6">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-primary-600 bg-primary-50 p-4 rounded-full mr-6">
                    {impact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      {impact.description}
                      <br />
                      <strong>{impact.tagline}</strong>
                    </p>
                    <Link
                      href={impact.link}
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="https://picsum.photos/800/600?random"
              alt="Happy recipients"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
