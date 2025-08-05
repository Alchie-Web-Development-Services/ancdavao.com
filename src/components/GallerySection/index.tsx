import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { MomentsOfHope } from "@/generated/graphql";

const categories = ["All", "Food", "Income", "Education", "Blood", "Water"];

interface GallerySectionProps {
  momentsOfHope: MomentsOfHope[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ momentsOfHope }) => {
  const [filter, setFilter] = useState("All");



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
          {momentsOfHope.filter((m) => m.image).map((moment) => (
            <div key={moment._id} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={urlFor(moment.image).url()}
                alt={`Moment of hope ${moment._id}`}
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
