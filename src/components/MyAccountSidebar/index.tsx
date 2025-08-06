import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

interface MyAccountSidebarProps {
  fullName: string;
  email: string;
  children: React.ReactNode;
}

const MyAccountSidebar: React.FC<MyAccountSidebarProps> = ({
  fullName,
  email,
  children,
}) => {
  const router = useRouter();

  const links = [
    { href: "/my/account", label: "Personal information" },
    { href: "/my/account/edit", label: "Edit Personal Information" },
    { href: "/my/pledge", label: "Pledge" },
    { href: "/my/sponsorships", label: "Sponsorships" },
    { href: "/my/donation-history", label: "Donation History" },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-96 bg-white rounded-lg shadow-md p-6 md:mr-4 mb-4 md:mb-0">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
            <FaRegUserCircle />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{fullName}</h2>
            <p className="text-sm text-gray-600" data-testid="sidebar-email">
              {email}
            </p>
          </div>
        </div>

        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.href} className="mb-2">
                <Link
                  href={link.href}
                  className={`block py-2 px-4 rounded-md ${
                    router.pathname === link.href
                      ? "text-primary-700 bg-primary-50 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default MyAccountSidebar;
