import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CauseCard from "@/components/CauseCard";
import { client } from "@/lib/sanity";
import { AllCausesQuery } from "@/generated/graphql";
import { ALL_CAUSES_QUERY } from "@/graphql/allCauses";

interface CausesProps {
  causes: AllCausesQuery["allCause"];
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
  const result = await client.request<AllCausesQuery>(ALL_CAUSES_QUERY);

  return {
    props: {
      causes: result.allCause,
    },
  };
}

export default Causes;
