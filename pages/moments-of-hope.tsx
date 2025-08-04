import React from "react";
import { GetStaticProps } from "next";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import MomentsOfHopeSection from "@/components/MomentsOfHopeSection";
import { client } from "../src/lib/sanity";
import { ALL_MOMENTS_OF_HOPE_QUERY } from "../src/graphql/allMomentsOfHope";
import { AllMomentsOfHopeQuery } from "../src/generated/graphql";

interface MomentsOfHopeProps {
  momentsOfHope: AllMomentsOfHopeQuery['allMomentsOfHope'];
}

const MomentsOfHope: React.FC<MomentsOfHopeProps> = ({ momentsOfHope }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Moments of Hope"
        description="Discover inspiring moments of hope and transformation from ANC Davao's programs and initiatives."
        keywords="ANC Davao, moments of hope, transformation, community impact, success stories"
      />
      <PageHeader
        title="Moments of Hope"
        subtitle="Inspiring stories of transformation and impact"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      <MomentsOfHopeSection momentsOfHope={momentsOfHope} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<MomentsOfHopeProps> = async () => {
  const result = await client.request<AllMomentsOfHopeQuery>(ALL_MOMENTS_OF_HOPE_QUERY);

  return {
    props: {
      momentsOfHope: result.allMomentsOfHope,
    },
  };
};

export default MomentsOfHope;
