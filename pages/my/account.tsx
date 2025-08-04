import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FaRegUserCircle, FaRegCalendarAlt, FaGlobe, FaLanguage, FaRegEnvelope } from 'react-icons/fa';
import Loading from '@/components/Loading';
import { getUserProfile } from '@/services/userService';

interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  onboarded?: boolean;
}

const MyAccount: React.FC = () => {
  const { user, loading, onboarded } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (!loading && user) {
      const fetchProfile = async () => {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
        if (!onboarded) {
          router.push('/onboarding');
        }
      };
      fetchProfile();
    } else if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, onboarded, router]);

  if (loading || !userProfile) {
    return <Loading />;
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

  const fullName = userProfile.firstName && userProfile.lastName 
    ? `${userProfile.firstName} ${userProfile.lastName}` 
    : userProfile.displayName || 'User Name';

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center justify-between container mx-auto">
        <h1 className="text-xl font-semibold">My Account</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Sign out
        </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
              <FaRegUserCircle />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{fullName}</h2>
              <p className="text-sm text-gray-600" data-testid="sidebar-email">{userProfile.email}</p>
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
              <p className="text-gray-700">{fullName}</p>
            </div>

            {/* Phone Number */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Phone Number</h3>
                <FaRegCalendarAlt className="text-gray-500" />
              </div>
              <p className="text-gray-700">{userProfile.phoneNumber || 'N/A'}</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Address</h3>
                <FaGlobe className="text-gray-500" />
              </div>
              <p className="text-gray-700">{userProfile.address || 'N/A'}</p>
            </div>

            {/* City */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">City</h3>
                <FaLanguage className="text-gray-500" />
              </div>
              <p className="text-gray-700">{userProfile.city || 'N/A'}</p>
            </div>

            {/* Country */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Country</h3>
                <FaGlobe className="text-gray-500" />
              </div>
              <p className="text-gray-700">{userProfile.country || 'N/A'}</p>
            </div>

            {/* Postal Code */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Postal Code</h3>
                <FaRegEnvelope className="text-gray-500" />
              </div>
              <p className="text-gray-700">{userProfile.postalCode || 'N/A'}</p>
            </div>

            {/* Contactable at */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">Contactable at</h3>
                <FaRegEnvelope className="text-gray-500" />
              </div>
              <p className="text-gray-700">{userProfile.email}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyAccount;