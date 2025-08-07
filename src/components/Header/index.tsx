import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../Logo";
import TopNav from "../TopNav";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  // { name: "Causes", href: "/causes" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const authLinkHref = user ? "/my/account" : "/auth/login/";
  const authLinkText = user ? "My Account" : "Join the Mission";

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 shadow-lg`}
    >
      <TopNav />

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
                    ? "text-primary-600"
                    : "text-neutral-700 hover:text-primary-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link
              href={authLinkHref}
              className="bg-primary-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-800 transition-colors duration-300"
            >
              {authLinkText}
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
                    ? "text-primary-600 bg-primary-50 rounded-lg"
                    : "text-neutral-700 hover:text-primary-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={authLinkHref}
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary-700 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-primary-800 transition-colors duration-300 mt-4"
            >
              {authLinkText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
