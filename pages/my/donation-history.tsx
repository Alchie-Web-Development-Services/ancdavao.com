import React from "react";
import MyAccountHeader from "@/components/MyAccountHeader";
import MyAccountSidebar from "@/components/MyAccountSidebar";
import { getPrivateLayout } from "@/components/PrivateLayout";
import { NextPageWithLayout } from "pages/_app";
import DonationHistoryContent from "@/components/DonationHistoryContent";

const MyDonationHistory: NextPageWithLayout = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <MyAccountHeader />

      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar>
          <DonationHistoryContent />
        </MyAccountSidebar>
      </div>
    </div>
  );
};

MyDonationHistory.getLayout = getPrivateLayout;

export default MyDonationHistory;
