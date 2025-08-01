import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import SEO from "@/components/SEO";
import { client } from "../../src/lib/sanity";
import { AllProgramServicesDocument, AllProgramServicesQuery } from "../../src/generated/graphql";
import imageUrlBuilder from '@sanity/image-url';

// Initialize the image URL builder
const builder = imageUrlBuilder({
  projectId: 'tuggecli',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source);
}

interface ProgramCardProps {
  program: AllProgramServicesQuery['allProgramService'][number];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const imgSrc = program.mainImage ? urlFor(program.mainImage).url() : "https://via.placeholder.com/800x600?text=No+Image";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <Image
        src={imgSrc || ""}
        alt={program.title || "Program Image"}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          {program.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {/* Assuming descriptionRaw is a portable text field, you might need a component to render it */}
          {program.descriptionRaw ? "Description available" : "No description provided."}
        </p>

        {/* You might want to add dynamic stats here if your Sanity schema supports it */}
        <div className="mt-6 text-center">
          <Link
            href={`/programs-and-services/${program.slug?.current}`}
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
  );
};

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
        title="Our Programs"
        subtitle="Discover how we're making a difference in the lives of children and communities in Davao"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

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
              <ProgramCard key={program._id} program={program} />
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

export async function getStaticProps() {
  const result = await client.request<AllProgramServicesQuery>(AllProgramServicesDocument.loc!.source.body);

  return {
    props: {
      programs: result.allProgramService,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default Programs;
