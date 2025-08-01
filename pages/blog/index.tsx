import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import { client } from "../../src/lib/sanity";
import { AllArticlesDocument, AllArticlesQuery } from "../../src/generated/graphql";
import imageUrlBuilder from '@sanity/image-url';

// Initialize the image URL builder
const builder = imageUrlBuilder({
  projectId: 'tuggecli',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source);
}

interface BlogCardProps {
  article: AllArticlesQuery['allArticle'][number];
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const imgSrc = article.mainImage ? urlFor(article.mainImage).url() : "https://via.placeholder.com/800x600?text=No+Image";
  const formattedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imgSrc || ""}
        alt={article.title || "Blog Post Image"}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          {article.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4">
          {article.abstract}
        </p>
        <div className="flex justify-between items-center text-xs text-neutral-500 mb-4">
          <span>By {article.author?.firstName} {article.author?.lastName}</span>
          <span>{formattedDate}</span>
        </div>
        <Link
          href={`/blog/${article.slug?.current}`}
          className="text-primary-600 font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

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
  const result = await client.request<AllArticlesQuery>(AllArticlesDocument.loc!.source.body);

  return {
    props: {
      articles: result.allArticle,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default Blog;
