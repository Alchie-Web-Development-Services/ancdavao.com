import { UserProfile } from "@/types/user";

export const createCustomer = async (
  userProfile: UserProfile,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/generate-customer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reference_id: userProfile.uid,
        type: "INDIVIDUAL",
        individual_detail: {
          given_names: userProfile.firstName,
          surname: userProfile.lastName,
        },
        addresses: [{
          city: userProfile.city,
          country: userProfile.country,
          postal_code: userProfile.postalCode,
          street_line1: userProfile.address,
          is_primary: true,
        }],
        email: userProfile.email,
        mobile_number: userProfile.phoneNumber
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to create customer");
  }

  return data;
};
