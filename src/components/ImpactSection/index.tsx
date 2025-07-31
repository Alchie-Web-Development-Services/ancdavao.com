import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDonate, FaUsers, FaAward } from "react-icons/fa";

const ImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: <FaDonate size={32} />,
      title: "Make Donation",
      description:
        "Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities.",
      link: "/donate",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Become a Volunteer",
      description:
        "Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities.",
      link: "/get-involved",
    },
    {
      icon: <FaAward size={32} />,
      title: "Give Scholarship",
      description:
        "Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities.",
      link: "/programs/education",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              We&apos;ve funded 120,00 charity projects for 20M people around
              the world.
            </h2>
            <p className="text-neutral-600 mb-8">
              Continual say suspicion provision you neglected sir curiously
              smiling simplicity and therefore increasing led day sympathies
              yet. General windows effects not are drawing man garrets. Common
              indeed garden you his ladies out yet. Preference imprudence
              contrasted to remarkably in on. Taken now you him trees tears any.
              Her object giving and sister except oppose.
            </p>
            <div className="space-y-6">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-indigo-600 bg-indigo-50 p-4 rounded-full mr-6">
                    {impact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      {impact.description}
                    </p>
                    <Link
                      href="/stories-impact"
                      className="text-indigo-600 font-semibold hover:underline"
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
              src="https://source.unsplash.com/random/800x600/?charity,donation"
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
