import { useMy } from "@/context/MyContext";
import { presetAmounts } from "@/utils/constant/donation";
import { SITE_URL } from "@/utils/constant/general";
import React, { useState } from "react";

const OnlinePledgeForm: React.FC = () => {
  const { userProfile } = useMy();

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number | "">("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/generate-subscription-link`,
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
            success_redirect_url: `${SITE_URL}/my/donations`,
            failure_redirect_url: `${SITE_URL}/my/donations`,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create subscription");
      }

      // Redirect customer to Xendit checkout page
      window.location.href = data.subscription.invoice_url;
    } catch (err: unknown) {
      console.error("Checkout error:", (err as Error).message);
      alert("Payment link creation failed.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !amount || loading || !checked;

  return (
    <div className="mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200 w-full mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Pledge</h2>

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
        <div className="text-sm text-gray-600 mb-8">
          <input type="checkbox" className="mr-2" checked={checked} onChange={() => setChecked(!checked)} disabled={loading || !amount} />
          By clicking the button below, you authorize us and our payment partner (Xendit) to automatically charge your selected payment method for the pledge amount you selected above on a recurring monthly basis. 
          Your pledge will renew until you cancel. You may cancel anytime before the next billing date to stop future charges. Payments already made are non-refundable.
        </div>
        <button
          type="submit"
          className={`w-full py-3 px-6 rounded-md text-white transition-colors 
            ${isDisabled ? "bg-primary-600/60 cursor-not-allowed" : "bg-primary-600 hover:bg-primary-700"}`}
          disabled={isDisabled}
        >
          Pledge Now {amount ? `(₱${amount.toLocaleString()})` : ""}
        </button>
      </form>
    </div>
  );
};

export default OnlinePledgeForm;
