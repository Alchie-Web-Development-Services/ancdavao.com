import React from "react";

interface CorporatePartnershipCardProps {
  title: string;
  description: string;
}

const CorporatePartnershipCard: React.FC<CorporatePartnershipCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-primary-700 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CorporatePartnershipCard;
