import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const VolunteerCard: React.FC<{
  imgSrc: string;
  name: string;
  title: string;
  description: string;
}> = ({ imgSrc, name, title, description }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imgSrc}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-neutral-800">{name}</h3>
      <p className="text-indigo-600 font-semibold mb-2">{title}</p>
      <p className="text-neutral-600 text-sm mb-4">{description}</p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <FaFacebookF />
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <FaTwitter />
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <FaInstagram />
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

const VolunteersSection: React.FC = () => {
  const volunteers = [
    {
      imgSrc: "https://source.unsplash.com/random/400x400/?woman,portrait",
      name: "Dunald Minia",
      title: "The Organizer",
      description:
        "Committed amending smallness in sir an smiling. Turned favour man two but lovers. Suffer should if waited common person little oh. He in just mr door body held john down he. So journey greatly or garrets. ",
    },
    {
      imgSrc: "https://source.unsplash.com/random/400x400/?man,portrait",
      name: "John Doe",
      title: "Lead Volunteer",
      description:
        "Committed amending smallness in sir an smiling. Turned favour man two but lovers. Suffer should if waited common person little oh. He in just mr door body held john down he. So journey greatly or garrets. ",
    },
    {
      imgSrc: "https://source.unsplash.com/random/400x400/?person,portrait",
      name: "Jane Smith",
      title: "Event Coordinator",
      description:
        "Committed amending smallness in sir an smiling. Turned favour man two but lovers. Suffer should if waited common person little oh. He in just mr door body held john down he. So journey greatly or garrets. ",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Meet Our Volunteers
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Slide an hope of body. Any nay shyness article matters own removal
            nothing his forming. Gay own additions education satisfied the
            perpetual. If he cause manor happy. Without farther she exposed saw
            man led. Along on happy could cease green oh.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <VolunteerCard key={index} {...volunteer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
