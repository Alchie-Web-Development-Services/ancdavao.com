import React, { useEffect } from "react";
import { getPrivateLayout } from "@/components/PrivateLayout";
import { NextPageWithLayout } from "pages/_app";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import {
  getUserProfile,
  updateUserProfile,
} from "@/services/firebase/userService";
import { useAuth } from "@/context/AuthContext";
import { createCustomer } from "@/services";

const OnboardingStep2: NextPageWithLayout = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        const profile = await getUserProfile(user.uid);
        if (!profile) {
          router.push("/my/onboarding");
          return;
        }
        if(profile.onboardingStep === 2){
          router.push("/my/account");
          return;
        }
        if (!profile.customerId) {
          const data = await createCustomer(profile);
          await updateUserProfile(user.uid, {
            customerId: data.customer.id,
            onboarded: true,
            onboardingStep: 2,
          });
        } else {
          await updateUserProfile(user.uid, {
            onboarded: true,
            onboardingStep: 2,
          });
        }
        router.push("/my/account");
      };
      fetchUserProfile();
    }
  }, [router, user]);

  return (
    <div className="bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Loading />
    </div>
  );
};

OnboardingStep2.getLayout = getPrivateLayout;

export default OnboardingStep2;
