import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { MomentsOfHope } from "@/generated/graphql";
import Link from "next/link";

interface GallerySectionProps {
  momentsOfHope: MomentsOfHope[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ momentsOfHope }) => {
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {momentsOfHope
            .filter((m) => m.image)
            .map((moment) => (
              <Link
                href={moment.link}
                key={moment._id}
                className="overflow-hidden rounded-lg shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={urlFor(moment.image).url()}
                  alt={moment.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
