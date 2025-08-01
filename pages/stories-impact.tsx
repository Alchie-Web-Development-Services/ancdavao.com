import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Testimonial from "@/components/Testimonial";
import ImpactStats from "@/components/ImpactStats";
import SEO from "@/components/SEO";

const StoriesImpact: React.FC = () => {
  const featuredStories = [
    {
      id: 1,
      title: "From Student to Scholar",
      excerpt:
        "How ANC Davao helped Maria pursue her dream of becoming a teacher.",
      image: "https://cdn.ancdavao.com/placeholder1.jpg",
      category: "Education",
      link: "/stories/from-student-to-scholar",
    },
    {
      id: 2,
      title: "Feeding Program Success",
      excerpt:
        "Reducing malnutrition rates in Barangay 76-A through our feeding program.",
      image: "https://cdn.ancdavao.com/placeholder1.jpg",
      category: "Nutrition",
      link: "/stories/feeding-program-success",
    },
  ];

  const impactStats = [
    { number: "1,200+", label: "Children Supported" },
    { number: "85%", label: "Graduation Rate" },
    { number: "50+", label: "Communities Served" },
    { number: "10,000+", label: "Meals Served" },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Because of ANC Davao's scholarship program, I am now the first in my family to attend college.",
      author: "Maria Santos",
      role: "College Graduate, 2023",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Stories & Impact"
        description="Read inspiring stories and see the measurable impact of ANC Davao's programs on children, families, and communities in Davao."
        keywords="ANC Davao stories, impact, testimonials, success stories, community impact, education, nutrition, healthcare"
      />
      <PageHeader
        title="Stories & Impact"
        subtitle="Discover the difference we're making in Davao"
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
      />

      <ImpactStats stats={impactStats} className="bg-primary-700 text-white" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-primary-600">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <Link
                    href={story.link}
                    className="text-primary-600 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoriesImpact;
