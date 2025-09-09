import { SITE_URL } from "@/utils/constant/general";
import { UserProfile } from "@/types/user";

export const createSession = async (
  userProfile: UserProfile,
  amount: number
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/generate-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reference_id: userProfile.uid,
        customer_id: userProfile.customerId,
        session_type: "PAY",
        currency: "PHP",
        amount: amount,
        mode: "PAYMENT_LINK",
        country: "PH",
        locale: "en",
        description: `Online Donation of ${userProfile.firstName} ${userProfile.lastName} - (₱${amount.toLocaleString()})`,
        success_return_url: `${SITE_URL}/my/donations`,
        cancel_return_url: `${SITE_URL}/my/donations`,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to create session");
  }

  return data;
};
