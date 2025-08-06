import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import MyAccountHeader from '@/components/MyAccountHeader';
import MyAccountSidebar from '@/components/MyAccountSidebar';
import MyAccountContent from '@/components/MyAccountContent';
import Loading from '@/components/Loading';
import { getUserProfile } from '@/services/userService';
import { getPrivateLayout } from '@/components/PrivateLayout';
import { NextPageWithLayout } from 'pages/_app';

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

const MyAccount: NextPageWithLayout = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (!loading && user) {
      const fetchProfile = async () => {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      };
      fetchProfile();
    } else if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

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
      <MyAccountHeader onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar fullName={fullName} email={userProfile.email}>
          <MyAccountContent userProfile={userProfile} fullName={fullName} />
        </MyAccountSidebar>
      </div>
    </div>
  );
};

MyAccount.getLayout = getPrivateLayout

export default MyAccount;