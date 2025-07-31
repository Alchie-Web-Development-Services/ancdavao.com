import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC<{ version: "v1" | "v2" }> = ({ version }) => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={version === "v1" ? "/images/logo.png" : "/images/logo-v2.png"}
        alt="ANC Davao Logo"
        width={332}
        height={53}
        className="w-auto"
      />
      <span className="text-2xl font-bold text-neutral-800 sr-only">
        Archdiocesan Nourishment Center
      </span>
    </Link>
  );
};

export default Logo;
