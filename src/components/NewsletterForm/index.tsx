import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.message);
        setIsError(true);
      }
    } catch {
      setMessage("An unexpected error occurred.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
      <p className="text-neutral-400 text-sm mb-4">
        Subscribe to our newsletter to get the latest updates.
      </p>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-l-md text-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 text-sm ${isError ? "text-red-500" : "text-green-500"}`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
