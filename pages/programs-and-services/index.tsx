import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import ProgramCard from "@/components/ProgramCard";
import ProgramsCallToAction from "@/components/ProgramsCallToAction";
import ProgramFeatures from "@/components/ProgramFeatures";
import { client } from "@//lib/sanity";
import { AllProgramServicesQuery } from "@//generated/graphql";
import { ALL_PROGRAM_SERVICES_QUERY } from "@//graphql/allProgramServices";

interface ProgramsProps {
  programs: AllProgramServicesQuery['allProgramService'];
}

const Programs: React.FC<ProgramsProps> = ({ programs }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Programs"
        description="Explore ANC Davao's impactful programs, including feeding, education, youth development, healthcare, and community development initiatives. Learn how we make a difference."
        keywords="ANC Davao programs, feeding program, education support, youth development, healthcare initiative, community development, volunteer program, social impact"
      />
      <PageHeader
        title="Transforming Lives Through Purposeful Programs"
        subtitle="From feeding and education to spiritual growth and community empowerment, our diverse programs are thoughtfully designed to meet the unique needs of the communities we serve—creating lasting impact, one life at a time."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program._id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <ProgramsCallToAction />

      <ProgramFeatures />
    </div>
  );
};

export async function getStaticProps() {
  const result = await client.request<AllProgramServicesQuery>(ALL_PROGRAM_SERVICES_QUERY);

  return {
    props: {
      programs: result.allProgramService,
    },
  };
}

export default Programs;
