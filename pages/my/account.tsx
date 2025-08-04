import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const MyAccount: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading user data...</div>;
  }

  if (!user) {
    router.push('/auth');
    return <div className="container mx-auto px-4 py-8 text-center">Redirecting to login...</div>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth');
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Account</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">Welcome, {user.email}!</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
