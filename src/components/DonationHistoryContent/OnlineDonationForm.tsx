import { useMy } from "@/context/MyContext";
import { presetAmounts } from "@/utils/constant/donation";
import React, { useState } from "react";

const OnlineDonationForm: React.FC = () => {
  const { userProfile } = useMy();

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/generate-payment-link`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            external_id: userProfile?.uid,
            payer_email: userProfile?.email,
            description: `Online Donation of ${userProfile?.firstName} ${userProfile?.lastName} - (₱${amount.toLocaleString()})`,
            amount: amount,
            customer: {
              given_names: userProfile?.firstName,
              family_name: userProfile?.lastName,
              email: userProfile?.email,
              mobile_number: userProfile?.phoneNumber,
            },
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create invoice");
      }

      // Redirect customer to Xendit checkout page
      window.location.href = data.invoice.invoice_url;
    } catch (err: unknown) {
      console.error("Checkout error:", (err as Error).message);
      alert("Payment link creation failed.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !amount || loading;

  return (
    <div className="mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200 w-full mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

      <form onSubmit={handleSubmit}>
        {/* Donation Amount */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Amount (PHP)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => !loading && setAmount(preset)}
                className={`py-3 px-4 border rounded-md ${amount === preset ? "border-primary-600 bg-primary-50" : "border-gray-300"}`}
              >
                ₱{preset.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 px-6 rounded-md text-white transition-colors 
            ${isDisabled ? "bg-primary-600/60 cursor-not-allowed" : "bg-primary-600 hover:bg-primary-700"}`}
          disabled={isDisabled}
        >
          Donate Now {amount ? `(₱${amount.toLocaleString()})` : ""}
        </button>
      </form>
    </div>
  );
};

export default OnlineDonationForm;
