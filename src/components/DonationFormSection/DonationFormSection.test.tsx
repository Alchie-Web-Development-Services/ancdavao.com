import { render, screen, fireEvent } from "@testing-library/react";
import DonationFormSection from "./index";

describe("DonationFormSection", () => {
  it("renders the donation form with input fields and buttons", () => {
    render(<DonationFormSection />);

    // Check for donation type buttons
    expect(screen.getByRole("button", { name: "One-time" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Monthly" })).toBeInTheDocument();

    // Check for preset amounts
    expect(screen.getByText("₱500")).toBeInTheDocument();
    expect(screen.getByText("₱1,000")).toBeInTheDocument();

    // Check for custom amount input
    expect(screen.getByPlaceholderText("Custom amount")).toBeInTheDocument();

    // Check for payment methods
    expect(screen.getByText("Credit/Debit Card")).toBeInTheDocument();
    expect(screen.getByText("GCash")).toBeInTheDocument();
    expect(screen.getByText("Bank Transfer")).toBeInTheDocument();

    // Check for donor information fields
    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();

    // Check for donate button
    expect(screen.getByRole("button", { name: "Donate Now" })).toBeInTheDocument();
  });

  it("allows selecting donation type and amount", () => {
    render(<DonationFormSection />);

    // Select monthly donation
    fireEvent.click(screen.getByRole("button", { name: "Monthly" }));
    expect(screen.getByRole("button", { name: "Monthly" })).toHaveClass("bg-white");

    // Select a preset amount
    fireEvent.click(screen.getByText("₱2,000"));
    expect(screen.getByPlaceholderText("Custom amount")).toHaveValue(2000);

    // Enter custom amount
    fireEvent.change(screen.getByPlaceholderText("Custom amount"), {
      target: { value: "750" },
    });
    expect(screen.getByPlaceholderText("Custom amount")).toHaveValue(750);
  });

  it("allows selecting payment method", () => {
    render(<DonationFormSection />);

    fireEvent.click(screen.getByText("GCash"));
    expect(screen.getByText("GCash").closest(".p-4")).toHaveClass("bg-primary-50");

    fireEvent.click(screen.getByText("Bank Transfer"));
    expect(screen.getByText("Bank Transfer").closest(".p-4")).toHaveClass("bg-primary-50");
  });

  it("allows entering donor information", () => {
    render(<DonationFormSection />);

    fireEvent.change(screen.getByPlaceholderText("Full Name"), {
      target: { value: "Jane Doe" },
    });
    expect(screen.getByPlaceholderText("Full Name")).toHaveValue("Jane Doe");

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "jane.doe@example.com" },
    });
    expect(screen.getByPlaceholderText("Email")).toHaveValue("jane.doe@example.com");

    fireEvent.change(screen.getByPlaceholderText("Phone Number"), {
      target: { value: "1234567890" },
    });
    expect(screen.getByPlaceholderText("Phone Number")).toHaveValue("1234567890");
  });
});
