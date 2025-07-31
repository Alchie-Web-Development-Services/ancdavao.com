import { render, screen } from "@testing-library/react";
import DonationFAQSection from "./index";

describe("DonationFAQSection", () => {
  it("renders the donation form and FAQ section", () => {
    render(<DonationFAQSection />);

    expect(screen.getByText("Make a Donation Now")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});
