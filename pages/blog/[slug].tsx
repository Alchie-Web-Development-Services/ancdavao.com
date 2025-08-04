import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../src/lib/sanity";
import { AllArticlesQuery, Article } from "../../src/generated/graphql";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import SEO from "@/components/SEO";
import { ALL_ARTICLES_QUERY } from "../../src/graphql/allArticles";
import { ARTICLE_BY_SLUG_QUERY } from "../../src/graphql/articleBySlug";
import { urlFor } from "../../src/lib/sanity";

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  if (!article) {
    return <div className="text-center py-10">Article not found.</div>;
  }

  const publishedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "N/A";

  return (
    <div className="min-h-screen bg-neutral-100">
      <SEO
        title={article.title || "Blog Article"}
        description={article.abstract || "A blog article from ANC Davao."}
        keywords={`${article.title}, ANC Davao, blog, article, ${article.author?.firstName} ${article.author?.lastName}`}
      />
      <div className="relative h-96 w-full">
        {article.mainImage && (
          <Image
            src={urlFor(article.mainImage).url()}
            alt={article.title || "Article Image"}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 mb-6">
            {article.title}
          </h2>
          <p className="text-neutral-600 text-sm mb-4">
            By {article.author?.firstName} {article.author?.lastName} on {publishedDate}
          </p>
          <div className="prose max-w-none text-neutral-700 leading-relaxed">
            {article.bodyRaw ? <PortableText value={article.bodyRaw} /> : <p>No content available for this article.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.request<AllArticlesQuery>(ALL_ARTICLES_QUERY);
  const paths = result.allArticle.map((article) => ({
    params: { slug: article.slug?.current || '' },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleDetailProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const result = await client.request<AllArticlesQuery>(ARTICLE_BY_SLUG_QUERY, { slug });

  return {
    props: {
      article: result.allArticle[0] || null,
    },
  };
};

export default ArticleDetail;
