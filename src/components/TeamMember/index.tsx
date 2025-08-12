import React from "react";
import Image from "next/image";
import { TeamMember as TeamMemberType } from "@/generated/graphql";
import { urlFor } from "@/lib/sanity";

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        {member.photo && (
          <Image
            src={urlFor(member.photo).url()}
            alt={member.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-primary-600 font-medium mb-4">{member.role}</p>        
      </div>
    </div>
  );
};

export default TeamMember;
