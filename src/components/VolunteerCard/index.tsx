import React from "react";
import Image from "next/image";
import { Volunteer } from "@/generated/graphql";
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
    </div>
  );
};

export default VolunteerCard;
