import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { Cause } from "@/generated/graphql";

interface CauseCardProps {
  cause: Cause;
}

const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {cause.mainImage && (
        <Image
          src={urlFor(cause.mainImage).url()}
          alt={cause.title}
          width={800}
          height={600}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          {cause.title}
        </h3>
        <div className="text-neutral-600 text-sm mb-4">
          {cause.descriptionRaw ? (
            <PortableText value={cause.descriptionRaw} />
          ) : (
            "No description provided."
          )}
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
            <span>Raised: ${cause.raised?.toLocaleString() || 0}</span>
            <span>Goal: ${cause.goalAmount?.toLocaleString() || 0}</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2.5">
            <div
              className="bg-primary-600 h-2.5 rounded-full"
              style={{
                width: `${((cause.raised || 0) / (cause.goalAmount || 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <Link
          href={`/causes/${cause.slug?.current}`}
          className="w-full block text-center bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CauseCard;
