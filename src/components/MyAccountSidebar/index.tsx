import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMy } from "@/context/MyContext";

interface MyAccountSidebarProps {
  children?: React.ReactNode;
}

const MyAccountSidebar: React.FC<MyAccountSidebarProps> = ({ children }) => {
  const router = useRouter();
  const { userProfile } = useMy();

  const links = [
    { href: "/my/account", label: "Personal Information" },
    //{ href: "/my/pledges", label: "Pledges" },
    //{ href: "/my/feeding-sponsorships", label: "Feeding Sponsorships" },
    { href: "/my/donations", label: "Donations" },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-96 bg-white rounded-lg shadow-md p-6 md:mr-4 mb-4 md:mb-0 h-fit">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
            <FaRegUserCircle />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {userProfile?.firstName} {userProfile?.lastName}
            </h2>
            <p className="text-sm text-gray-600" data-testid="sidebar-email">
              {userProfile?.email}
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
                    router.pathname.startsWith(link.href)
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
