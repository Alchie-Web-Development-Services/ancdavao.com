import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="ANC Davao Logo"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
      <span className="text-2xl font-bold text-neutral-800">ANC DAVAO</span>
    </Link>
  );
};

export default Logo;
