import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
