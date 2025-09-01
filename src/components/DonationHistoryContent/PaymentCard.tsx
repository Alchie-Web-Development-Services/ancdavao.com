import { Invoice } from "@/types/invoice";
import { Timestamp } from "firebase/firestore";
import { PaymentChannel } from "./PaymentChannel";

interface PaymentCardProps {
  invoice: Invoice;
}

export const PaymentCard = ({ invoice }: PaymentCardProps) => {
  const paidAt = new Date(
    (invoice.paid_at as unknown as Timestamp).seconds * 1000 +
      (invoice.paid_at as unknown as Timestamp).nanoseconds / 1e6,
  );
  return (
    <div
      key={invoice.id}
      className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center"
    >
      <p className="w-2/5">
        <strong>Donation Date:</strong>{" "}
        {paidAt.toISOString().replace("T", " ").replace("Z", "")}
      </p>
      <p className="w-2/5 text-primary-600">
        <strong>Amount:</strong> ₱{invoice.paid_amount.toLocaleString()}
      </p>
      <p className="w-1/5 text-right">
        <PaymentChannel channel={invoice.payment_channel} />
      </p>
    </div>
  );
};
