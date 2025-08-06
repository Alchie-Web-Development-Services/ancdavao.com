import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import MyAccountHeader from "@/components/MyAccountHeader";
import MyAccountSidebar from "@/components/MyAccountSidebar";
import { PledgeContent } from "@/components/PledgeContent";
import Loading from "@/components/Loading";
import { getUserProfile } from "@/services/userService";
import { getPledge } from "@/services/pledgeService";
import { getPrivateLayout } from "@/components/PrivateLayout";
import { NextPageWithLayout } from "pages/_app";
import { UserProfile } from "@/types/user";
import { Pledge } from "@/types/pledge";

const MyPledgePage: NextPageWithLayout = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [pledge, setPledge] = useState<Pledge | null>(null);

  useEffect(() => {
    if (!loading && user) {
      const fetchData = async () => {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
        const userPledge = await getPledge(user.uid);
        setPledge(userPledge);
      };
      fetchData();
    } else if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading || !userProfile) {
    return <Loading />;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/auth/login");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out.");
    }
  };

  const fullName =
    userProfile.firstName && userProfile.lastName
      ? `${userProfile.firstName} ${userProfile.lastName}`
      : userProfile.displayName || "User Name";

  return (
    <div className="min-h-screen bg-gray-100">
      <MyAccountHeader onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar fullName={fullName} email={userProfile.email}>
          <PledgeContent pledge={pledge} />
        </MyAccountSidebar>
      </div>
    </div>
  );
};

MyPledgePage.getLayout = getPrivateLayout;

export default MyPledgePage;
