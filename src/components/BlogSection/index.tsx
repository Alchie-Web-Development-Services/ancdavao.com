import React from "react";
import { Article } from "@/generated/graphql";
import BlogCard from "../BlogCard";

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
