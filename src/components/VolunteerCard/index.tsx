import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Volunteer } from "@/generated/graphql";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";

const VolunteerCard: React.FC<{
  volunteer: Volunteer;
}> = ({ volunteer }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {volunteer.photo && (
        <Image
          src={urlFor(volunteer.photo).url()}
          alt={volunteer.name || "Volunteer"}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-neutral-800">{volunteer.name}</h3>
      <p className="text-primary-600 font-semibold mb-2">
        {volunteer.position}
      </p>
      <div className="text-neutral-600 text-sm mb-4">
        <PortableText value={volunteer.bioRaw} />
      </div>
      <div className="flex justify-center space-x-3">
        {volunteer.socialMedia?.facebook && (
          <a
            href={volunteer.socialMedia.facebook}
            className="text-primary-600 hover:text-primary-700"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        )}
        {volunteer.socialMedia?.twitter && (
          <a
            href={volunteer.socialMedia.twitter}
            className="text-primary-600 hover:text-primary-700"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        )}
        {volunteer.socialMedia?.instagram && (
          <a
            href={volunteer.socialMedia.instagram}
            className="text-primary-600 hover:text-primary-700"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        )}
        {volunteer.socialMedia?.linkedin && (
          <a
            href={volunteer.socialMedia.linkedin}
            className="text-primary-600 hover:text-primary-700"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        )}
      </div>
    </div>
  );
};

export default VolunteerCard;
