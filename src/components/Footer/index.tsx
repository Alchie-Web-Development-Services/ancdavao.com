import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo version="v2" />
            <p className="text-neutral-400 mt-4 text-sm">
              We are a non-profit organization dedicated to helping the less
              fortunate. Join us in our mission to make the world a better
              place.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/archdiocesannourishmentcenter/"
                className="text-white hover:text-primary-500"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/archdiocesan-nourishment-center/"
                className="text-white hover:text-primary-500"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm grid grid-cols-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs-and-services"
                  className="text-neutral-400 hover:text-white"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/causes"
                  className="text-neutral-400 hover:text-white"
                >
                  Causes
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-neutral-400 hover:text-white"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-400 hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-neutral-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Pag-asa St, Brgy. 24-C, Fatima, Davao City</li>
              <li>info@ancdavao.com</li>
              <li>+63 (82) 285-1524</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-md text-neutral-800"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} ANC Davao. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
