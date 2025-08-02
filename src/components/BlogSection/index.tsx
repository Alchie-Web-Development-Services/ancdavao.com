import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import { Article } from "@/generated/graphql";

// Initialize the image URL builder
const builder = imageUrlBuilder({
  projectId: 'tuggecli',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source);
}

interface BlogCardProps {
  article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const imgSrc = article.mainImage ? urlFor(article.mainImage).url() : "https://via.placeholder.com/800x600?text=No+Image";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imgSrc || ""}
        alt={article.title || "Blog Post Image"}
        width={800}
        height={600}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{article.title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{article.abstract}</p>
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

interface BlogSectionProps {
  articles: Article[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ articles }) => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">Recent Blog</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
          Discover stories of hope, transformation, and compassion from the heart of Davao. Stay updated with our latest community programs, volunteer experiences, and insights on how ANC continues to nourish lives—physically, emotionally, and spiritually.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
