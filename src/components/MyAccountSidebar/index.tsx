import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import Link from 'next/link';

interface MyAccountSidebarProps {
  fullName: string;
  email: string;
}

const MyAccountSidebar: React.FC<MyAccountSidebarProps> = ({ fullName, email }) => {
  return (
    <aside className="md:col-span-1 bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
          <FaRegUserCircle />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{fullName}</h2>
          <p className="text-sm text-gray-600" data-testid="sidebar-email">{email}</p>
        </div>
      </div>

      <nav>
        <ul>
          <li className="mb-2">
            <Link href="#" className="block py-2 px-4 rounded-md text-primary-700 bg-primary-50 font-medium">
              Personal information
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/my/pledge" className="block py-2 px-4 rounded-md text-gray-700 hover:bg-gray-50">
              Pledge
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/my/history" className="block py-2 px-4 rounded-md text-gray-700 hover:bg-gray-50">
              Donation History
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="block py-2 px-4 rounded-md text-gray-700 hover:bg-gray-50">
              Sponsorships
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MyAccountSidebar;
