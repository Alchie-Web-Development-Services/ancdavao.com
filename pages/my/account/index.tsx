import React from "react";
import MyAccountHeader from "@/components/MyAccountHeader";
import MyAccountSidebar from "@/components/MyAccountSidebar";
import MyAccountContent from "@/components/MyAccountContent";
import { getPrivateLayout } from "@/components/PrivateLayout";

const MyAccount = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MyAccountHeader />

      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar>
          <MyAccountContent />
        </MyAccountSidebar>
      </div>
    </div>
  );
};

MyAccount.getLayout = getPrivateLayout;

export default MyAccount;
