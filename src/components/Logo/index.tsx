import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img src="/logo.png" alt="ANC Davao Logo" className="h-10 w-auto" />
      <span className="text-2xl font-bold text-neutral-800">ANC DAVAO</span>
    </Link>
  );
};

export default Logo;
