import React, { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://picsum.photos/800/600?random",
    category: "Food",
  },
  {
    src: "https://picsum.photos/800/600?random",
    category: "Income",
  },
  {
    src: "https://picsum.photos/800/600?random",
    category: "Education",
  },
  {
    src: "https://picsum.photos/800/600?random",
    category: "Blood",
  },
  {
    src: "https://picsum.photos/800/600?random",
    category: "Water",
  },
  {
    src: "https://picsum.photos/800/600?random",
    category: "Food",
  },
];

const categories = ["All", "Food", "Income", "Education", "Blood", "Water"];

const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Moments of Hope
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Explore the impact of our work through heartfelt images — from
            joyful feeding programs and community outreach to uplifting
            spiritual gatherings. Every photo tells a story of compassion,
            service, and shared humanity at ANC Davao.
          </p>
        </div>
        <div className="flex justify-center space-x-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === category
                  ? "bg-primary-600 text-white"
                  : "bg-white text-neutral-700 hover:bg-primary-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
