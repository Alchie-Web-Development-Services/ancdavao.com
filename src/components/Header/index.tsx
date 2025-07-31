import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Causes", href: "/causes" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4 h-12 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-indigo-200">
              California, TX 70240
            </a>
            <a
              href="mailto:info@ancdavao.com"
              className="hover:text-indigo-200"
            >
              info@ancdavao.com
            </a>
            <a href="tel:+1234567890" className="hover:text-indigo-200">
              +123 456 7890
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-indigo-200">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-indigo-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white transition-all duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Logo version="v1" />
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 ${
                  router.pathname === link.href
                    ? "text-indigo-600"
                    : "text-neutral-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link
              href="/donate"
              className="bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 transition-colors duration-300"
            >
              Donate Now
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-800"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium text-center py-2 ${
                  router.pathname === link.href
                    ? "text-indigo-600 bg-indigo-50 rounded-lg"
                    : "text-neutral-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="bg-indigo-700 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 transition-colors duration-300 mt-4"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
