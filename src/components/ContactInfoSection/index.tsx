import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
    title: "Our Location",
    description: "Pag-asa St, Brgy. 24-C, Fatima, Davao City",
  },
  {
    icon: <FaPhone className="text-2xl text-primary-600" />,
    title: "Phone Number",
    description: "+63 (82) 285-1524 / +63 922 453 7331",
  },
  {
    icon: <FaEnvelope className="text-2xl text-primary-600" />,
    title: "Email Address",
    description: "info@ancdavao.com",
  },
];

const ContactInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more about our programs? Reach out
            to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
