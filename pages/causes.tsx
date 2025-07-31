import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";

const Causes: React.FC = () => {
  const mockCauses = [
    {
      id: 1,
      title: "Education for All",
      description:
        "Providing access to quality education for underprivileged children.",
      raised: 75000,
      goal: 100000,
      image: "https://source.unsplash.com/random/800x600/?education,children",
    },
    {
      id: 2,
      title: "Healthcare Access",
      description: "Ensuring basic healthcare services are available to all.",
      raised: 50000,
      goal: 80000,
      image: "https://source.unsplash.com/random/800x600/?healthcare,community",
    },
    {
      id: 3,
      title: "Food Security",
      description: "Working towards a future where no one goes hungry.",
      raised: 90000,
      goal: 120000,
      image: "https://source.unsplash.com/random/800x600/?food,hunger",
    },
    {
      id: 4,
      title: "Clean Water Initiative",
      description:
        "Providing clean and safe drinking water to rural communities.",
      raised: 60000,
      goal: 75000,
      image: "https://source.unsplash.com/random/800x600/?water,clean",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Causes"
        subtitle="Support a cause that matters to you and make a lasting impact."
        backgroundImage="https://source.unsplash.com/random/1600x900/?charity,hands"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impactful Causes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCauses.map((cause) => (
              <div
                key={cause.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={cause.image}
                  alt={cause.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {cause.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
                      <span>Raised: ${cause.raised.toLocaleString()}</span>
                      <span>Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{
                          width: `${(cause.raised / cause.goal) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <Link
                    href={`/causes/${cause.id}`}
                    className="w-full block text-center bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Causes;
