import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const backgroundImages = [
  "https://cdn.ancdavao.com/hero/hero1-min.jpg",
  "https://cdn.ancdavao.com/hero/hero2-min.jpg",
  "https://cdn.ancdavao.com/hero/hero3-min.jpg",
  "https://cdn.ancdavao.com/hero/hero4-min.jpg",
  "https://cdn.ancdavao.com/hero/hero5-min.jpg",
  "https://cdn.ancdavao.com/hero/hero6-min.jpg",
  "https://cdn.ancdavao.com/hero/hero7-min.jpg",
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Head>
      {backgroundImages.map((image) => (
        <link key={image} rel="preload" href={image} as="image" />
      ))}
    </Head>
    <section
      className="relative bg-cover bg-center text-white py-40 px-4 transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Nourishing Hope, <br /> One Child at a Time
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Through the love of Christ and the strength of our community, we fight
          hunger and uplift lives. Join us in building a future where no child
          in Davao City goes to bed hungry.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/about"
            className="bg-white text-primary-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Learn More
          </Link>
          <Link
            href="/donate"
            className="bg-primary-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
