import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const mockPosts = [
    {
      id: 1,
      title: "The Impact of Education on Child Development",
      excerpt:
        "Explore how access to quality education shapes the future of children in underserved communities.",
      date: "July 25, 2025",
      author: "Jane Doe",
      image:
        "https://source.unsplash.com/random/800x600/?education,children,study",
    },
    {
      id: 2,
      title: "Volunteering: A Path to Personal Growth and Community Impact",
      excerpt:
        "Discover the rewarding experiences of our volunteers and how they contribute to our mission.",
      date: "July 20, 2025",
      author: "John Smith",
      image:
        "https://source.unsplash.com/random/800x600/?volunteer,community,help",
    },
    {
      id: 3,
      title: "Sustainable Solutions for Clean Water Access",
      excerpt:
        "Learn about our initiatives to provide clean and safe drinking water to remote villages.",
      date: "July 15, 2025",
      author: "Emily White",
      image: "https://source.unsplash.com/random/800x600/?water,village,clean",
    },
    {
      id: 4,
      title: "Empowering Women Through Livelihood Programs",
      excerpt:
        "Highlighting stories of women who have transformed their lives through our livelihood training.",
      date: "July 10, 2025",
      author: "Sarah Brown",
      image:
        "https://source.unsplash.com/random/800x600/?women,empowerment,livelihood",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Blog"
        subtitle="Stay updated with our latest news, stories, and insights."
        backgroundImage="https://source.unsplash.com/random/1600x900/?blog,news,writing"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-neutral-500 mb-4">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
