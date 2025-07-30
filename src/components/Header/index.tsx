import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Event", href: "/events" },
    { name: "Causes", href: "/causes" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="bg-primary-700 text-white">
        <div className="container mx-auto px-4 h-12 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-primary-200">
              California, TX 70240
            </a>
            <a
              href="mailto:info@ancdavao.com"
              className="hover:text-primary-200"
            >
              info@ancdavao.com
            </a>
            <a href="tel:+1234567890" className="hover:text-primary-200">
              +123 456 7890
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary-200">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`bg-white transition-all duration-300 ${isScrolled ? "bg-opacity-90 backdrop-blur-lg" : "bg-opacity-100"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Logo />
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${isActive ? "text-primary-600" : "text-neutral-700 hover:text-primary-600"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link
              to="/donate"
              className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
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
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium text-center py-2 ${isActive ? "text-primary-600 bg-primary-50 rounded-lg" : "text-neutral-700 hover:text-primary-600"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary-600 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300 mt-4"
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
