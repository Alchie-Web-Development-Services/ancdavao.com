import React from "react";
import { Pledge } from "@/types/pledge";
import { PledgeStatus } from "./PledgeStatus";
import * as Dialog from "@radix-ui/react-dialog";
import { PledgeForm } from "@/components/PledgeContent/PledgeForm";
interface PledgeContentProps {
  pledge: Pledge | null;
}

export const PledgeContent: React.FC<PledgeContentProps> = ({ pledge }) => {

  return (
    <main className="md:col-span-3 bg-white rounded-lg shadow-md p-8 relative">
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4 relative">
        My {new Date().getFullYear()} Pledge 
        
        <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button
                          className="text-sm underline right-0 ml-auto absolute"
                        >
                          Edit Amount
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-50" />
                        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                          <Dialog.Close asChild>
                            <button
                              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                              aria-label="Close"
                            >
                              &times;
                            </button>
                          </Dialog.Close>
                          <PledgeForm pledge={pledge} />
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>

      </h2>
      <div className="grid grid-cols-1 gap-4">
        <PledgeStatus pledge={pledge} />
      </div>
    </main>
  );
};
