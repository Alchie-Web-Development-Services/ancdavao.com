import React from "react";

interface BusinessHoursProps {
  hours: { day: string; hours: string }[];
}

const BusinessHours: React.FC<BusinessHoursProps> = ({ hours }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
      <ul className="space-y-2">
        {hours.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-gray-700">{item.day}</span>
            <span className="font-medium">{item.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessHours;
