import React from "react";
import { Pledge } from "@/types/pledge";
import { PledgeStatus } from "./PledgeStatus";
import Link from "next/link";

interface PledgeContentProps {
  pledge: Pledge | null;
}

export const PledgeContent: React.FC<PledgeContentProps> = ({ pledge }) => {

  return (
    <main className="md:col-span-3 bg-white rounded-lg shadow-md p-8 relative">
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        My {new Date().getFullYear()} Pledge <Link href="/my/pledge/edit" className="underline absolute right-8 text-sm">Edit</Link>
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <PledgeStatus pledge={pledge} />
      </div>
    </main>
  );
};
