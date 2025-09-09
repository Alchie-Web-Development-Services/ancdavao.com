import { SITE_URL } from "@/utils/constant/general";
import { UserProfile } from "@/types/user";

export const createPaymentLink = async (
  userProfile: UserProfile,
  amount: number
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/generate-payment-link`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        external_id: userProfile.uid,
        user_id: userProfile.customerId,
        payer_email: userProfile.email,
        description: `Online Donation of ${userProfile.firstName} ${userProfile.lastName} - (₱${amount.toLocaleString()})`,
        amount: amount,
        customer: {
          given_names: userProfile.firstName,
          family_name: userProfile.lastName,
          email: userProfile.email,
          mobile_number: userProfile.phoneNumber,
        },
        success_redirect_url: `${SITE_URL}/my/donations`,
        failure_redirect_url: `${SITE_URL}/my/donations`,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to create invoice");
  }

  return data;
};
