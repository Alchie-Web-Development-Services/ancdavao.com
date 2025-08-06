import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const TopNav: React.FC = () => {
  return (
    <div className="bg-primary-700 text-white">
      <div className="container mx-auto px-4 h-12 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-primary-200">
            Pag-asa St, Brgy. 24-C, Fatima, Davao City
          </a>
          <a href="mailto:info@ancdavao.com" className="hover:text-primary-200">
            info@ancdavao.com
          </a>
          <a href="tel:+1234567890" className="hover:text-primary-200">
            +63 (82) 285-1524
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/archdiocesannourishmentcenter/"
            className="hover:text-primary-200"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/archdiocesan-nourishment-center/"
            className="hover:text-primary-200"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
