import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Volunteer } from "@/generated/graphql";
import { PortableText } from '@portabletext/react'

const VolunteerCard: React.FC<{
  volunteer: Volunteer;
}> = ({ volunteer }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={volunteer.photo?.asset?.url || "https://cdn.ancdavao.com/placeholder1.jpg"}
        alt={volunteer.name || "Volunteer"}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-neutral-800">{volunteer.name}</h3>
      <p className="text-primary-600 font-semibold mb-2">{volunteer.position}</p>
      <div className="text-neutral-600 text-sm mb-4">
        <PortableText value={volunteer.bioRaw} />
      </div>
      <div className="flex justify-center space-x-3">
        <a href={volunteer.socialMedia?.facebook} className="text-primary-600 hover:text-primary-700">
          <FaFacebookF />
        </a>
        <a href={volunteer.socialMedia?.twitter} className="text-primary-600 hover:text-primary-700">
          <FaTwitter />
        </a>
        <a href={volunteer.socialMedia?.instagram} className="text-primary-600 hover:text-primary-700">
          <FaInstagram />
        </a>
        <a href={volunteer.socialMedia?.linkedin} className="text-primary-600 hover:text-primary-700">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

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
