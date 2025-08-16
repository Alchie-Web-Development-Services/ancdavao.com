import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Logo";
import NewsletterForm from "../NewsletterForm";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs-and-services" },
  { name: "Events", href: "/events" },
  { name: "Moments of Hope", href: "/moments-of-hope" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
];

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
            <ul className="text-sm grid grid-cols-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white py-1 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Pag-asa St, Brgy. 24-C, Fatima, Davao City</li>
              <li>info@ancdavao.com</li>
              <li>+63 (082) 285-1524</li>
            </ul>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="bg-neutral-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} ANC Davao. All Rights Reserved.
            Developed and Maintained by{" "}
            <a
              href="https://alchie.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Alchie Web Development Services
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
