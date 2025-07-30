import React, { useState } from "react";

const galleryItems = [
  {
    src: "https://source.unsplash.com/random/800x600/?charity,group",
    category: "Food",
  },
  {
    src: "https://source.unsplash.com/random/800x600/?child,sad",
    category: "Income",
  },
  {
    src: "https://source.unsplash.com/random/800x600/?child,happy",
    category: "Education",
  },
  {
    src: "https://source.unsplash.com/random/800x600/?child,water",
    category: "Blood",
  },
  {
    src: "https://source.unsplash.com/random/800x600/?community,gathering",
    category: "Water",
  },
  {
    src: "https://source.unsplash.com/random/800x600/?homeless,man",
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
          <h2 className="text-4xl font-bold text-neutral-800">Best Gallery</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Slide an hope of body. Any nay shyness article matters own removal
            nothing his forming. Gay own additions education satisfied the
            perpetual. If he cause manor happy. Without farther she exposed saw
            man led. Along on happy could cease green oh.
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
              <img
                src={item.src}
                alt={`Gallery item ${index + 1}`}
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
