import { render, screen } from "@testing-library/react";
import DonationForm from "./index";

describe("DonationForm", () => {
  it("renders the donation form with input fields and a donate button", () => {
    render(<DonationForm />);

    expect(screen.getByText("Make a Donation Now")).toBeInTheDocument();
    expect(screen.getByLabelText("Amount")).toBeInTheDocument();
    expect(screen.getByLabelText("Frequency")).toBeInTheDocument();
    expect(screen.getByLabelText("Card Number")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Donate Now" }),
    ).toBeInTheDocument();
  });
});
