import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { getUserProfile, createUserProfile } from "@/services/userService";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { UserProfile } from "@/types/user";

interface MyContextType {
  loading: boolean;
  onboarded: boolean;
  userProfile: UserProfile | null;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userProfile = await getUserProfile(currentUser.uid);
        if (userProfile) {
          setUserProfile(userProfile);
          setOnboarded(userProfile.onboarded || false);
          if (!userProfile.onboarded && router.pathname !== "/my/onboarding") {
            router.push("/my/onboarding");
          }
        } else {
          // Create a basic profile if it doesn't exist
          await createUserProfile(currentUser.uid, {
            email: currentUser.email || "",
            onboarded: false,
          });
          if (router.pathname !== "/my/onboarding") {
            router.push("/my/onboarding");
          }
        }
      } else {
        setUserProfile(null);
        setOnboarded(false);
        router.push("/auth/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <MyContext.Provider value={{ loading, onboarded, userProfile }}>
      {loading ? <Loading /> : children}
    </MyContext.Provider>
  );
};

export const useMy = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMy must be used within an MyProvider");
  }
  return context;
};
