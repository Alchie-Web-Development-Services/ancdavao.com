import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import OurStorySection from "@/components/OurStorySection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ValuesSection from "@/components/ValuesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import { GetStaticProps } from "next";
import { client } from "../../src/lib/sanity";
import { AllTeamMembersQuery, AllTestimonialsQuery } from "../../src/generated/graphql";
import { ALL_TEAM_MEMBERS_QUERY } from "../../src/graphql/allTeamMembers";
import { ALL_TESTIMONIALS_QUERY } from "../../src/graphql/allTestimonials";

interface AboutProps {
  teamMembers: AllTeamMembersQuery['allTeamMember'];
  testimonials: AllTestimonialsQuery['allTestimonial'];
}

const About: React.FC<AboutProps> = ({ teamMembers, testimonials }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about ANC Davao's mission, vision, values, and the dedicated team working to empower underprivileged children and communities in Davao."
        keywords="ANC Davao, about us, mission, vision, values, team, history, community development, Davao"
      />
      <PageHeader
        title="About ANC Davao"
        subtitle="Learn about our mission, vision, and the team behind our organization"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection />
    </div>
  );
};

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const teamMembersResult = await client.request<AllTeamMembersQuery>(ALL_TEAM_MEMBERS_QUERY);
  const testimonialsResult = await client.request<AllTestimonialsQuery>(ALL_TESTIMONIALS_QUERY);

  return {
    props: {
      teamMembers: teamMembersResult.allTeamMember,
      testimonials: testimonialsResult.allTestimonial,
    },
  };
};

export default About;
