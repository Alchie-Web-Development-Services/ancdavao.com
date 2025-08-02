import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import { client } from "../../src/lib/sanity";
import { AllCausesDocument, AllCausesQuery } from "../../src/generated/graphql";
import imageUrlBuilder from '@sanity/image-url';

// Initialize the image URL builder
const builder = imageUrlBuilder({
  projectId: 'tuggecli',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source);
}

interface CauseCardProps {
  cause: AllCausesQuery['allCause'][number];
}

const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  const imgSrc = cause.mainImage ? urlFor(cause.mainImage).url() : "https://via.placeholder.com/800x600?text=No+Image";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imgSrc || ""}
        alt={cause.title || "Cause Image"}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          {cause.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4">
          {/* Assuming descriptionRaw is a portable text field, you might need a component to render it */}
          {/* For now, just show a placeholder or first block text if available */}
          {cause.descriptionRaw ? "Description available" : "No description provided."}
        </p>
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
            <span>Raised: ${cause.raised?.toLocaleString() || 0}</span>
            <span>Goal: ${cause.goalAmount?.toLocaleString() || 0}</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2.5">
            <div
              className="bg-primary-600 h-2.5 rounded-full"
              style={{
                width: `${((cause.raised || 0) / (cause.goalAmount || 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <Link
          href={`/causes/${cause.slug?.current}`}
          className="w-full block text-center bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

interface CausesProps {
  causes: AllCausesQuery['allCause'];
}

const Causes: React.FC<CausesProps> = ({ causes }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Causes"
        description="Explore the various causes ANC Davao supports, including education, healthcare, food security, and clean water initiatives. Find a cause to support and make a lasting impact."
        keywords="ANC Davao causes, education, healthcare, food security, clean water, initiatives, support, donate"
      />
      <PageHeader
        title="Our Causes"
        subtitle="Support a cause that matters to you and make a lasting impact."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg?random"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impactful Causes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <CauseCard key={cause._id} cause={cause} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const result = await client.request<AllCausesQuery>(AllCausesDocument.loc!.source.body);

  return {
    props: {
      causes: result.allCause,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default Causes;
