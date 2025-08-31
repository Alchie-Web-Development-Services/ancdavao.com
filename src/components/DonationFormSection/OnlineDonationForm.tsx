import { presetAmounts } from "@/utils/constant/donation";
import { slugify } from "@/utils/helper/slugify";
import React, { useState } from "react";

const OnlineDonationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number | "">("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
            external_id: slugify(
              "online-donation-" +
                Date.now() +
                "-" +
                formData.fullName +
                "-" +
                formData.email +
                "-" +
                formData.phone +
                "-" +
                amount,
            ),
            payer_email: formData.email,
            description: `Online Donation of ${formData.fullName} ${formData.email} ${formData.phone} - ${amount}`,
            amount: amount,
            customer: {
              given_names: formData.fullName,
              email: formData.email,
              mobile_number: formData.phone,
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

  // Utility: check if all inputs are filled (and amount selected)
  const isFormComplete = () => {
    const { fullName, email, phone } = formData;
    const hasAmount = typeof amount === "number" && amount > 0;
    return (
      hasAmount &&
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== ""
    );
  };

  const isDisabled = !isFormComplete() || loading;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Make an Online Donation
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Donation Amount */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Amount (PHP)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={`py-3 px-4 border rounded-md ${amount === preset ? "border-primary-600 bg-primary-50" : "border-gray-300"}`}
              >
                ₱{preset.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Donor Info */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold">Your Information</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
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
