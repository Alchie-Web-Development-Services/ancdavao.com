import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { client } from "../../src/lib/sanity";
import { AllArticlesQuery } from "../../src/generated/graphql";
import AllArticles from "../../src/graphql/allArticles.graphql";
import BlogCard from "@/components/BlogCard";

interface BlogProps {
  articles: AllArticlesQuery['allArticle'];
}

const Blog: React.FC<BlogProps> = ({ articles }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Blog"
        description="Stay updated with the latest news, stories, and insights from ANC Davao. Read about our projects, impact, and community initiatives."
        keywords="ANC Davao blog, news, stories, articles, insights, community, impact, projects"
      />
      <PageHeader
        title="Our Blog"
        subtitle="Stay updated with our latest news, stories, and insights."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg?random"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article._id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const result = await client.request<AllArticlesQuery>(AllArticles);

  return {
    props: {
      articles: result.allArticle,
    },
  };
}

export default Blog;
