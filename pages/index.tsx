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
import allArticles from "../src/graphql/homePage.graphql";
import { HomePageQuery } from "@/types/homepage";
interface HomeProps {
  articles: HomePageQuery['allArticle'];
}

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <div className="bg-white">
      <SEO
        title="Home"
        description="Advancing the Kingdom of God through discipleship, community, and service in Davao City and beyond. Join us in making a difference."
        keywords="ANC Davao, church, Davao, Christian, discipleship, community, service, kingdom of God, home, main page"
      />
      <main>
        <Hero />
        <MissionSection />
        <ImpactSection />
        <CausesSection />
        <EventSection />
        <GallerySection />
        <CTASection />
        <DonationFAQSection />
        <VolunteersSection />
        <BlogSection articles={articles} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const allArticlesResult = await client.request<HomePageQuery>(allArticles);

  return {
    props: {
      articles: allArticlesResult.allArticle,
    },
  };
}

export default Home;
