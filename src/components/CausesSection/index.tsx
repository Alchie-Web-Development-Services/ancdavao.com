import React from "react";
import Link from "next/link";
import Image from "next/image";


import { HomePageCompiledResults } from "@/types/homepage";

interface CauseCardProps {
  cause: HomePageCompiledResults['allCause'][0];
}

const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  const progress = (cause.raised / cause.goalAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {cause.mainImage && (
        <Image
          src={urlFor(cause.mainImage).url()}
          alt={cause.title}
          width={800}
          height={600}
          className="w-full h-56 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{cause.title}</h3>
        <p className="text-neutral-600 text-sm mb-4">
          {cause.descriptionRaw[0].children[0].text}
        </p>
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
            <span>Raised: ${cause.raised || 0}</span>
            <span>Goal: ${cause.goalAmount || 0}</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2.5">
            <div
              className="bg-primary-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <Link
          href={`/causes/${cause.slug.current}`}
          className="w-full block text-center bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};



interface CausesSectionProps {
  causes: HomePageCompiledResults['allCause'];
}

const CausesSection: React.FC<CausesSectionProps> = ({ causes }) => {
  

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Popular Causes
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
          Support the heart of our mission through our most impactful causes—feeding hungry children, providing access to education, ensuring healthcare for the underserved, and nurturing spiritual growth. Your help brings dignity, hope, and lasting change.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <CauseCard key={cause._id} cause={cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
