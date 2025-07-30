import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  stats?: Array<{
    value: string | number;
    label: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = "/images/hero-bg.jpg",
  overlayColor = "primary-700",
  overlayOpacity = 0.8,
  stats = [],
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className={`absolute inset-0 bg-${overlayColor}`}
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={ctaLink} className="btn btn-primary group">
                {ctaText}
                <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="btn btn-outline text-white border-white hover:bg-white/10"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      {stats.length > 0 && (
        <div className="relative z-10 bg-white/90 backdrop-blur-sm py-6">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
