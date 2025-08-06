import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    try {
      const brevoApiKey = process.env.BREVO_API_KEY;
      const listId = process.env.BREVO_LIST_ID; // Assuming you have a specific list ID

      if (!brevoApiKey || !listId) {
        console.error(
          "Brevo API Key or List ID is not set in environment variables.",
        );
        return res.status(500).json({ message: "Server configuration error." });
      }

      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [parseInt(listId)],
        }),
      });

      if (response.ok) {
        return res.status(201).json({ message: "Subscription successful!" });
      } else {
        const errorData = await response.json();
        console.error("Brevo API error:", errorData);
        return res
          .status(response.status)
          .json({ message: errorData.message || "Subscription failed." });
      }
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
