import React from "react";
import { Volunteer } from "@/generated/graphql";
import VolunteerCard from "../VolunteerCard";

interface VolunteersSectionProps {
  volunteers: Volunteer[];
}

const VolunteersSection: React.FC<VolunteersSectionProps> = ({ volunteers }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Meet Our Volunteers
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Behind every warm meal, shared prayer, and smiling child is a
            passionate volunteer who said yes to serving others. Our volunteers
            are teachers, students, professionals, and everyday people with a
            heart for the poor.
          </p>
          <p>
            <strong>
              Their time, love, and effort bring hope to the communities we
              serve.
            </strong>
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer) => (
            <VolunteerCard key={volunteer._id} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
