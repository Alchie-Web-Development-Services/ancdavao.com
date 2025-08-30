import React from "react";
import MyAccountHeader from "@/components/MyAccountHeader";
import MyAccountSidebar from "@/components/MyAccountSidebar";
import { PledgeContent } from "@/components/PledgeContent";
import { getPrivateLayout } from "@/components/PrivateLayout";
import { NextPageWithLayout } from "pages/_app";

const MyPledgesPage: NextPageWithLayout = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <MyAccountHeader />

      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar>
          <PledgeContent />
        </MyAccountSidebar>
      </div>  
    </div>
  );
};

MyPledgesPage.getLayout = getPrivateLayout;

export default MyPledgesPage;
