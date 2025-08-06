import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/generated/graphql";
import { urlFor } from "@/lib/sanity";

interface BlogCardProps {
  article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const imgSrc = article.mainImage ? urlFor(article.mainImage).url() : "https://cdn.ancdavao.com/placeholder1.jpg";

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

export default BlogCard;
