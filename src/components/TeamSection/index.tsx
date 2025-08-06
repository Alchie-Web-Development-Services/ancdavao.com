import React from "react";
import TeamMember from "../TeamMember";
import { TeamMember as TeamMemberType } from "@/generated/graphql";

interface TeamSectionProps {
  teamMembers: TeamMemberType[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A committed group of professionals, volunteers, and faith-driven leaders united in serving the most vulnerable—working hand in hand to create lasting impact in our communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member._id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
