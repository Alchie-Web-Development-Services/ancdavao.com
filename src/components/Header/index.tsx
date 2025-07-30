import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Programs",
      href: "/programs",
      dropdown: [
        { name: "Education", href: "/programs/education" },
        { name: "Healthcare", href: "/programs/healthcare" },
        { name: "Community", href: "/programs/community" },
      ],
    },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Stories & Impact", href: "/stories-impact" },
    { name: "News & Events", href: "/news-events" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, href: "https://facebook.com" },
    { icon: <FaTwitter className="h-5 w-5" />, href: "https://twitter.com" },
    {
      icon: <FaInstagram className="h-5 w-5" />,
      href: "https://instagram.com",
    },
    { icon: <FaYoutube className="h-5 w-5" />, href: "https://youtube.com" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"}`}
    >
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-sm">
        <div className="container flex justify-between items-center h-10">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center hover:text-primary-100"
            >
              <span className="mr-2">📞</span> (123) 456-7890
            </a>
            <a
              href="mailto:info@ancdavao.org"
              className="flex items-center hover:text-primary-100"
            >
              <span className="mr-2">✉️</span> info@ancdavao.org
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
            <Link
              to="/donate"
              className="ml-4 px-4 py-1 bg-accent-500 hover:bg-accent-600 rounded-full text-white font-medium text-sm transition-colors duration-200 flex items-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-display font-bold text-primary-600">
                ANC
              </span>
              <span className="ml-2 text-2xl font-bold text-gray-900">
                Davao
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={`px-4 py-6 text-sm font-medium ${
                    link.dropdown ? "flex items-center" : ""
                  } text-gray-700 hover:text-primary-600 transition-colors duration-200`}
                >
                  {link.name}
                  {link.dropdown && <FiChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {link.dropdown && (
                  <div className="absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex justify-between items-center">
                  {link.name}
                  {link.dropdown && <FiChevronDown className="h-4 w-4" />}
                </div>
              </Link>
              {link.dropdown && (
                <div className="pl-6 bg-gray-50">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 py-4 border-t border-gray-200">
            <Link
              to="/donate"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent-500 hover:bg-accent-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
