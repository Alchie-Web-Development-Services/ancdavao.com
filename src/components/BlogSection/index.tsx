import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard: React.FC<{
  imgSrc: string;
  title: string;
  description: string;
}> = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imgSrc}
        alt={title}
        width={800}
        height={600}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{description}</p>
        <Link
          href="/blog"
          className="text-primary-600 font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const posts = [
    {
      imgSrc: "https://cdn.ancdavao.com/placeholder1.jpg",
      title: "A Day in the Life of a Volunteer",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
    },
    {
      imgSrc: "https://cdn.ancdavao.com/placeholder1.jpg",
      title: "How Your Donations Make a Difference",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
    },
    {
      imgSrc: "https://cdn.ancdavao.com/placeholder1.jpg",
      title: "Building a Brighter Future Through Education",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">Recent Blog</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Slide an hope of body. Any nay shyness article matters own removal
            nothing his forming. Gay own additions education satisfied the
            perpetual. If he cause manor happy. Without farther she exposed saw
            man led. Along on happy could cease green oh.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
