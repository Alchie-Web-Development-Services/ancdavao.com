import React from "react";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import DonationFAQSection from "@/components/DonationFAQSection";
import VolunteersSection from "@/components/VolunteersSection";
import BlogSection from "@/components/BlogSection";
import SEO from "@/components/SEO";
import { client } from "@/lib/sanity";
import { HOME_PAGE_QUERY } from "@/graphql/homePage";
import { HomePageCompiledResults } from "@/types/homepage";
import { Event } from "@/generated/graphql";

interface HomeProps {
  articles: HomePageCompiledResults['allArticle'];
  volunteers: HomePageCompiledResults['allVolunteer'];
  causes: HomePageCompiledResults['allCause'];
  events: HomePageCompiledResults['allEvent'];
  momentsOfHope: HomePageCompiledResults['allMomentsOfHope'];
}

const Home: React.FC<HomeProps> = ({ articles, volunteers, events, momentsOfHope }) => {
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
        <EventSection event={events[0] as Event} />
        <GallerySection momentsOfHope={momentsOfHope} />
        <CTASection />
        <DonationFAQSection />
        <VolunteersSection volunteers={volunteers} />
        <BlogSection articles={articles} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const homePageData = await client.request<HomePageCompiledResults>(HOME_PAGE_QUERY);

  return {
    props: {
      articles: homePageData.allArticle,
      volunteers: homePageData.allVolunteer,
      causes: homePageData.allCause,
      events: homePageData.allEvent,
      momentsOfHope: homePageData.allMomentsOfHope,
    },
  };
}

export default Home;
