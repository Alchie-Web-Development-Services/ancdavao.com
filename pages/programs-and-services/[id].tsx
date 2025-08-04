import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";

import { client, urlFor } from "../../src/lib/sanity";
import { PortableText } from '@portabletext/react';
import { AllProgramServicesQuery, ProgramService } from "../../src/generated/graphql";
import { ALL_PROGRAM_SERVICES_QUERY, PROGRAM_SERVICE_BY_SLUG_QUERY } from "../../src/graphql/allProgramServices";

interface ProgramDetailProps {
  program: ProgramService;
}





const ProgramDetail: React.FC<ProgramDetailProps> = ({ program }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Program Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={program.title || ''}
        description={program.descriptionRaw ? "Description available" : ""}
        keywords={`${program.title?.toLowerCase() || ''}, ${program.descriptionRaw ? 'description available' : ''}, ANC Davao program, charity, community development`}
        ogImage={program.mainImage ? urlFor(program.mainImage).url() : undefined}
      />
      <PageHeader
        title={program.title || ''}
        subtitle="Learn more about this program and its impact."
        backgroundImage={program.mainImage ? urlFor(program.mainImage).url() : undefined}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={program.mainImage ? urlFor(program.mainImage).url() : ""}
              alt={program.title || "Program Image"}
              width={1200}
              height={675}
              className="w-full rounded-lg shadow-md mb-8"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {program.title}
            </h2>
            <div className="prose prose-primary max-w-none text-gray-700 mb-8">
              {program.descriptionRaw ? <PortableText value={program.descriptionRaw} /> : "No description provided."}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/programs-and-services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Back to All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.request<AllProgramServicesQuery>(ALL_PROGRAM_SERVICES_QUERY);
  const paths = result.allProgramService.map((program) => ({
    params: { id: program.slug?.current || '' },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ProgramDetailProps> = async ({ params }) => {
  const slug = params?.id as string;
  const result = await client.request<AllProgramServicesQuery>(PROGRAM_SERVICE_BY_SLUG_QUERY, { slug });
  const program = result.allProgramService[0];

  if (!program) {
    return {
      notFound: true,
    };
  }

  return {
    props: { program },
  };
};

export default ProgramDetail;
