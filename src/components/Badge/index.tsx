import React from "react";

interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => (
  <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded mr-2 mb-1">
    {label}
  </span>
);

export default Badge;
