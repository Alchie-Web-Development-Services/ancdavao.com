import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About ANC Davao</h3>
            <p className="mb-4 text-gray-300">
              The Association of the Needy and the Children of Davao (ANC Davao)
              is a non-profit organization dedicated to helping the less
              fortunate in Davao City and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/stories-impact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Stories & Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/news-events"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>123 Charity Street, Davao City, 8000 Philippines</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a
                  href="mailto:info@ancdavao.org"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@ancdavao.org
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <a
                  href="tel:+639123456789"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +63 912 345 6789
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our programs and
              events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Association of the Needy and the Children of
              Davao. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
