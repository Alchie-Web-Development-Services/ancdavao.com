import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FaRegUserCircle, FaRegCalendarAlt, FaGlobe, FaLanguage, FaRegEnvelope } from 'react-icons/fa';

const MyAccount: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading user data...</div>;
  }

  if (!user) {
    router.push('/auth/login');
    return <div className="container mx-auto px-4 py-8 text-center">Redirecting to login...</div>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Nespola Account</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Sign out
        </button>
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
              <FaRegUserCircle />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{user.displayName || 'User Name'}</h2>
              <p className="text-sm text-gray-600" data-testid="sidebar-email">{user.email}</p>
            </div>
          </div>

          <nav>
            <ul>
              <li className="mb-2">
                <a href="#" className="block py-2 px-4 rounded-md text-primary-700 bg-primary-50 font-medium">
                  Personal information
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block py-2 px-4 rounded-md text-gray-700 hover:bg-gray-50">
                  Billing & Payments
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block py-2 px-4 rounded-md text-gray-700 hover:bg-gray-50">
                  Order History
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block py-2 px-4 rounded-md text-gray-700 hover:bg-gray-50">
                  Gift Cards
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal information</h2>
          <p className="text-gray-600 mb-8">
            Manage your personal information, including phone numbers and email address where you can be contacted.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Name</h3>
                <FaRegUserCircle className="text-gray-500" />
              </div>
              <p className="text-gray-700">{user.displayName || 'User Name'}</p>
            </div>

            {/* Date of Birth */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Date of Birth</h3>
                <FaRegCalendarAlt className="text-gray-500" />
              </div>
              <p className="text-gray-700">07 July 1993</p>
            </div>

            {/* Country Region */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Country Region</h3>
                <FaGlobe className="text-gray-500" />
              </div>
              <p className="text-gray-700">Philippines, Davao City</p>
            </div>

            {/* Language */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Language</h3>
                <FaLanguage className="text-gray-500" />
              </div>
              <p className="text-gray-700">English (US) - English</p>
            </div>

            {/* Contactable at */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Contactable at</h3>
                <FaRegEnvelope className="text-gray-500" />
              </div>
              <p className="text-gray-700">{user.email}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyAccount;