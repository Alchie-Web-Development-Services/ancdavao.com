import { render, screen } from "@testing-library/react";
import DonationFAQSection from "./index";
import { vi } from "vitest";

// Mock useFetchJson hook
vi.mock("@/hooks/useFetchJson", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    data: {
      Donations: [
        {
          title: "How can I donate to ANC Davao?",
          content:
            "You can donate through our website using a credit/debit card, GCash, or bank transfer. Visit our Donate page for more details.",
        },
      ],
      "General Questions": [
        {
          title: "Do I need a business plan?",
          content:
            "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
        },
      ],
      Volunteering: [],
      Programs: [],
      Partnerships: [],
    },
    loading: false,
    error: null,
  })),
}));

describe("DonationFAQSection", () => {
  it("renders the donation form and FAQ section", () => {
    render(<DonationFAQSection />);

    expect(screen.getByText("Make a Donation Now")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});
