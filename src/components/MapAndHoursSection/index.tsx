import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebook className="text-2xl" />,
    name: "Facebook",
    url: "https://www.facebook.com/archdiocesannourishmentcenter/",
  },
  {
    icon: <FaLinkedinIn className="text-2xl" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/archdiocesan-nourishment-center/",
  },
];

const MapAndHoursSection: React.FC = () => {
  return (
    <div>
      {/* Map */}
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 h-64">
        <iframe
          title="ANC Davao Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6671.311127231876!2d125.6154992768213!3d7.070227392932443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9a4b3d294b%3A0x81fbbf260f1a4095!2sArchdiocesan%20Nourishment%20Center!5e1!3m2!1sen!2sph!4v1753951980805!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
        <ul className="space-y-2">
          {[{
            day: "Monday - Friday",
            hours: "8:00 AM - 5:00 PM"
          },
          {
            day: "Saturday",
            hours: "9:00 AM - 2:00 PM"
          },
          {
            day: "Sunday",
            hours: "Closed"
          },
          ].map((item, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-gray-700">{item.day}</span>
              <span className="font-medium">{item.hours}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">
          Connect With Us
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-200 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapAndHoursSection;
