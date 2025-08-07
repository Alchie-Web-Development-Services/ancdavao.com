import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import MyAccountHeader from "@/components/MyAccountHeader";
import MyAccountSidebar from "@/components/MyAccountSidebar";
import Loading from "@/components/Loading";
import { getUserProfile } from "@/services/userService";
import { getPrivateLayout } from "@/components/PrivateLayout";
import { NextPageWithLayout } from "pages/_app";
import MyAccountEditContent from "@/components/MyAccountEditContent"; // This component will be created next

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

const MyAccountEdit: NextPageWithLayout = () => {
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
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading || !userProfile) {
    return <Loading />;
  }

  const fullName =
    userProfile.firstName && userProfile.lastName
      ? `${userProfile.firstName} ${userProfile.lastName}`
      : userProfile.displayName || "User Name";

  return (
    <div className="min-h-screen bg-gray-100">
      <MyAccountHeader onLogout={() => {}} />{" "}
      {/* onLogout is a placeholder for now */}
      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar fullName={fullName} email={userProfile.email}>
          <MyAccountEditContent userProfile={userProfile} />
        </MyAccountSidebar>
      </div>
    </div>
  );
};

MyAccountEdit.getLayout = getPrivateLayout;

export default MyAccountEdit;
