import React from "react";
import OnlineDonationForm from "./OnlineDonationForm";
import WriteCheck from "./WriteCheck";

const DonationFormSection: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-16 gap-8 flex flex-col">
      <WriteCheck />
      <OnlineDonationForm />
    </div>
  );
};

export default DonationFormSection;
