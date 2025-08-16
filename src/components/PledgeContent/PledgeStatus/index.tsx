import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import PledgeProgressBar from "@/components/PledgeProgressBar";
import { PledgeForm } from "@/components/PledgeContent/PledgeForm";


import { Pledge } from "@/types/pledge";
import { formatCurrency } from "@/utils/helper/formatCurrency";
import { getRemainingDaysInYear } from "@/utils/helper/getRemainingDaysInYear";

interface PledgeStatusProps {
  pledge: Pledge | null;
}

export const PledgeStatus: React.FC<PledgeStatusProps> = ({ pledge }) => {
  if (!pledge) return null;
  const daysLeft = getRemainingDaysInYear();
  const currentYear = new Date().getFullYear();
  const progress = (pledge.fulfilled || 0) / (pledge.amount || 1);

  return (
        <div>
          <div className="bg-gray-50 border rounded-lg shadow-lg p-4">
            <div className="mb-2 text-lg font-semibold">
              ₱{formatCurrency(pledge.amount)} pledged for {currentYear}
            </div>
            <div className="mb-2 text-sm text-gray-600">
              You have fulfilled ₱{formatCurrency(pledge.fulfilled || 0)} so far.
            </div>
            <PledgeProgressBar progress={progress} />
            <div className="text-xs text-gray-500 mb-2">
              {Math.round(progress * 100)}% complete — {daysLeft} days left
            </div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Donate Now
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
          </div>
        </div>
      );
    }
