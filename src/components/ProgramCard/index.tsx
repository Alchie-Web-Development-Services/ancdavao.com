import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { ProgramService } from "@/generated/graphql";
import { PortableText } from "@portabletext/react";

interface ProgramCardProps {
  program: ProgramService;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const imgSrc = program.mainImage ? urlFor(program.mainImage).url() : "https://cdn.ancdavao.com/placeholder1.jpg";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <Image
        src={imgSrc || ""}
        alt={program.title || "Program Image"}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          {program.title}
        </h3>
        <div className="text-gray-600 mb-6">
          <PortableText value={program.descriptionRaw} />
        </div>

        {/* You might want to add dynamic stats here if your Sanity schema supports it */}
        <div className="mt-6 text-center">
          <Link
            href={`/programs-and-services/${program.slug?.current}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
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
    </div>
  );
};

export default ProgramCard;