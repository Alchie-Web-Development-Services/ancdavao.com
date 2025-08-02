import React from "react";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import CausesSection from "@/components/CausesSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import DonationFAQSection from "@/components/DonationFAQSection";
import VolunteersSection from "@/components/VolunteersSection";
import BlogSection from "@/components/BlogSection";
import SEO from "@/components/SEO";
import { client } from "../src/lib/sanity";
import HomePageQuery from "../src/graphql/homePage.graphql";
import { HomePageCompiledResults } from "@/types/homepage";

interface HomeProps {
  articles: HomePageCompiledResults['allArticle'];
  volunteers: HomePageCompiledResults['allVolunteer'];
  causes: HomePageCompiledResults['allCause'];
}

const Home: React.FC<HomeProps> = ({ articles, volunteers, causes }) => {
  return (
    <div className="bg-white">
      <SEO
        title="Home"
        description="Compassion in action—ANC Davao nourishes vulnerable communities through feeding programs, education, health services, and spiritual care. Join us in building a more hopeful, dignified future for children and families in Davao City."
        keywords="ANC Davao, Archdiocesan Nourishment Center, feeding program Davao, Catholic charity Philippines, child nutrition Davao, faith-based nonprofit, volunteer in Davao, community development Davao, educational support for children, spiritual care outreach, donate to Davao charity, Catholic social mission Philippines"
      />
      <main>
        <Hero />
        <MissionSection />
        <ImpactSection />
        <CausesSection causes={causes} />
        <EventSection />
        <GallerySection />
        <CTASection />
        <DonationFAQSection />
        <VolunteersSection volunteers={volunteers} />
        <BlogSection articles={articles} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const homePageData = await client.request<HomePageCompiledResults>(HomePageQuery);

  return {
    props: {
      articles: homePageData.allArticle,
      volunteers: homePageData.allVolunteer,
      causes: homePageData.allCause,
    },
  };
}

export default Home;
