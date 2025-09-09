import React from "react";
import OnlinePledgeForm from "./OnlinePledgeForm";

export const PledgeContent = () => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Pledges</h1>
      <OnlinePledgeForm />
    </div>
  );
};
