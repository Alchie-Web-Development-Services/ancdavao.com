import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity";

import { AllCausesQuery, Cause } from "@/generated/graphql";
import { ALL_CAUSES_QUERY } from "@/graphql/allCauses";
import { CAUSE_BY_SLUG_QUERY } from "@/graphql/causeBySlug";

interface CauseDetailProps {
  cause: Cause;
}

const CauseDetail: React.FC<CauseDetailProps> = ({ cause }) => {
  if (!cause) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Cause Not Found</h1>
      </div>
    );
  }

  const progress = (cause.raised / cause.goalAmount) * 100;

  return (
    <div className="min-h-screen">
      <SEO
        title={cause.title || ""}
        description={
          cause.descriptionRaw ? cause.descriptionRaw[0].children[0].text : ""
        }
        keywords={`${cause.title?.toLowerCase() || ""}, ${cause.descriptionRaw ? cause.descriptionRaw[0].children[0].text.toLowerCase().split(" ").slice(0, 5).join(", ") : ""}, ANC Davao cause, donation, charity`}
        ogImage={cause.mainImage ? urlFor(cause.mainImage).url() : ""}
      />
      <PageHeader
        title={cause.title || ""}
        subtitle="Learn more about this cause and how you can help."
        backgroundImage={cause.mainImage ? urlFor(cause.mainImage).url() : ""}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {cause.mainImage && (
              <Image
                src={urlFor(cause.mainImage).url()}
                alt={cause.title || ""}
                width={1200}
                height={675}
                className="w-full rounded-lg shadow-md mb-8"
              />
            )}

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {cause.title}
            </h2>
            {cause.descriptionRaw && (
              <div className="text-gray-700 text-lg mb-6">
                <PortableText value={cause.descriptionRaw} />
              </div>
            )}

            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
                <span>Raised: ${cause.raised?.toLocaleString() || 0}</span>
                <span>Goal: ${cause.goalAmount?.toLocaleString() || 0}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-primary-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/causes"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Back to All Causes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.request<AllCausesQuery>(ALL_CAUSES_QUERY);
  const paths = result.allCause.map((cause) => ({
    params: { slug: cause.slug?.current || "" },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CauseDetailProps> = async ({
  params,
}) => {
  const result = await client.request<AllCausesQuery>(CAUSE_BY_SLUG_QUERY, {
    slug: params?.slug,
  });

  const cause = result.allCause[0];

  if (!cause) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cause },
  };
};

export default CauseDetail;
