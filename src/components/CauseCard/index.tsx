import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PortableText } from '@portabletext/react'
import { HomePageCompiledResults } from "@/types/homepage";

interface CauseCardProps {
  cause: HomePageCompiledResults['allCause'][0];
}

const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  const progress = (cause.raised / cause.goalAmount) * 100;
  const imgSrc = cause.mainImage ? urlFor(cause.mainImage).url() : "https://cdn.ancdavao.com/placeholder1.jpg";
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imgSrc}
        alt={cause.title}
        width={800}
        height={600}
        className="w-full h-56 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{cause.title}</h3>
        <div className="text-neutral-600 text-sm mb-4">
          {cause.descriptionRaw ? <PortableText value={cause.descriptionRaw} /> : "No description provided."}
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
            <span>Raised: ${cause.raised || 0}</span>
            <span>Goal: ${cause.goalAmount || 0}</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2.5">
            <div
              className="bg-primary-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <Link
          href={`/causes/${cause.slug.current}`}
          className="w-full block text-center bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CauseCard;
