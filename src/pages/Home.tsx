import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import {
  FaUtensils,
  FaBook,
  FaHandsHelping,
  FaQuoteLeft,
  FaRegSmile,
  FaHandHoldingHeart,
  FaUsers,
  FaHands,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Simple Testimonial component
const TestimonialCard = ({
  quote,
  author,
  role,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  image?: string;
}) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-md h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <FaQuoteLeft className="text-primary-100 text-4xl mb-6" />
    <p className="text-gray-700 mb-6 text-lg">{quote}</p>
    <div className="flex items-center">
      {image ? (
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
          <FaRegSmile className="text-2xl" />
        </div>
      )}
      <div>
        <h4 className="font-bold text-gray-900">{author}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Home: React.FC = () => {
  // Hero section data
  const heroData = {
    title: "Empowering Communities, Changing Lives",
    subtitle:
      "Join us in our mission to create lasting positive change in Davao through education, healthcare, and community development programs.",
    ctaText: "Get Involved",
    ctaLink: "/get-involved",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/about",
    backgroundImage: "/images/hero-bg.jpg",
    stats: [
      { value: "5,000+", label: "Lives Impacted" },
      { value: "15+", label: "Years of Service" },
      { value: "50+", label: "Communities Served" },
      { value: "200+", label: "Active Volunteers" },
    ],
  };

  // Featured programs data
  const featuredPrograms = [
    {
      id: 1,
      title: "Feeding Program",
      description:
        "Providing nutritious meals to undernourished children in Davao City communities to support their growth and development.",
      icon: <FaUtensils className="h-6 w-6" />,
      link: "/programs/feeding-program",
    },
    {
      id: 2,
      title: "Education Support",
      description:
        "Scholarships, school supplies, and educational resources for underprivileged children to ensure access to quality education.",
      icon: <FaBook className="h-6 w-6" />,
      link: "/programs/education-support",
    },
    {
      id: 3,
      title: "Community Development",
      description:
        "Empowering communities through sustainable development projects, skills training, and livelihood programs.",
      icon: <FaHandsHelping className="h-6 w-6" />,
      link: "/programs/community-development",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "ANC Davao's programs have transformed our community. My children now have access to education and proper nutrition.",
      author: "Maria Santos",
      role: "Community Member",
      image: "/images/testimonials/maria.jpg",
    },
    {
      id: 2,
      quote:
        "Volunteering with ANC Davao has been incredibly rewarding. The impact we make is real and lasting.",
      author: "John Dela Cruz",
      role: "Volunteer",
      image: "/images/testimonials/john.jpg",
    },
  ];

  // Impact stats data
  const impactStats = [
    {
      value: "5,000+",
      label: "Lives Impacted",
      icon: <FaHandHoldingHeart className="text-red-500" />,
    },
    {
      value: "15+",
      label: "Years of Service",
      icon: <FaHandHoldingHeart className="text-blue-500" />,
    },
    {
      value: "50+",
      label: "Communities Served",
      icon: <FaUsers className="text-green-500" />,
    },
    {
      value: "200+",
      label: "Active Volunteers",
      icon: <FaHands className="text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
        secondaryCtaText={heroData.secondaryCtaText}
        secondaryCtaLink={heroData.secondaryCtaLink}
        backgroundImage={heroData.backgroundImage}
        stats={heroData.stats}
      />

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary-600 font-semibold mb-3">
              Our Programs
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Making a Difference in Davao
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive programs designed to create lasting
              positive change in our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full group hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-8 flex-grow">
                    <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-100 transition-colors">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                  </div>
                  <div className="px-8 pb-8 pt-2 border-t border-gray-100">
                    <Link
                      to={program.link}
                      className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-all duration-200"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/about-us.jpg"
                  alt="Our Mission"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary-600 opacity-20"></div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block text-primary-600 font-semibold mb-3">
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ANC Davao is a non-profit organization dedicated to improving
                lives and empowering communities in Davao City and surrounding
                areas. Our mission is to provide sustainable solutions to
                poverty through education, healthcare, and community development
                programs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We envision a future where every individual has access to
                quality education, healthcare, and opportunities to improve
                their lives.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary-600 font-semibold mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              What People Say
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those whose lives have been touched by our programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Your support can help us create lasting change in our community.
              Whether through donations, volunteering, or spreading the word,
              you can be part of our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
