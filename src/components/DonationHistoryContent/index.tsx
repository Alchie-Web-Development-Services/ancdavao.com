import React, { useState } from "react";
import OnlineDonationForm from "./OnlineDonationForm";
import { DonationsList } from "./DonationsList";


const DonationHistoryContent = () => {
  const [show, setShow] = useState(false);



  return (
    <div className="mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Donations</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
        >
          Make a Donation
        </button>
      </div>
      {show && <OnlineDonationForm />}
      <DonationsList />
    </div>
  );
};

export default DonationHistoryContent;
