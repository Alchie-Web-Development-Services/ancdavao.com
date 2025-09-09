import { Pledge } from "@/types/pledge";
import { Timestamp } from "firebase/firestore";
import { PaymentChannel } from "../PaymentChannel";

interface PledgeCardProps {
  pledge: Pledge;
}

export const PledgeCard = ({ pledge }: PledgeCardProps) => {
  const paidAt = new Date(
    (pledge.paid_at as unknown as Timestamp).seconds * 1000 +
      (pledge.paid_at as unknown as Timestamp).nanoseconds / 1e6,
  );
  return (
    <div
      key={pledge.id}
      className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center"
    >
      <p className="w-2/5">
        <strong>Donation Date:</strong>{" "}
        {paidAt.toISOString().replace("T", " ").replace("Z", "")}
      </p>
      <p className="w-2/5 text-primary-600">
        <strong>Amount:</strong> ₱{pledge.amount.toLocaleString()}
      </p>
      <p className="w-1/5 text-right">
        <PaymentChannel channel={pledge.payment_channel} />
      </p>
    </div>
  );
};
