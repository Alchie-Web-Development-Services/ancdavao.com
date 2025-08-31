import React from "react";
import MyAccountHeader from "@/components/MyAccountHeader";
import MyAccountSidebar from "@/components/MyAccountSidebar";
import { getPrivateLayout } from "@/components/PrivateLayout";
import { NextPageWithLayout } from "pages/_app";
import MyAccountEditContent from "@/components/MyAccountEditContent"; // This component will be created next

const MyAccountEdit: NextPageWithLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MyAccountHeader />{" "}
      <div className="container mx-auto px-4 py-8">
        <MyAccountSidebar>
          <MyAccountEditContent />
        </MyAccountSidebar>
      </div>
    </div>
  );
};

MyAccountEdit.getLayout = getPrivateLayout;

export default MyAccountEdit;
