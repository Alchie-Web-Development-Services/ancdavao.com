import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import { vi } from "vitest";
import * as contactService from "@/services/contactService";

// Mock the contactService module
vi.mock("@/services/contactService", () => ({
  createContactMessage: vi.fn(),
}));

describe("ContactForm", () => {
  it("renders the contact form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send Message/i }),
    ).toBeInTheDocument();
  });

  it("calls createContactMessage on form submission", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "General Inquiry" },
    });
    fireEvent.change(screen.getByLabelText(/Your Message/i), {
      target: { value: "This is a test message." },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(contactService.createContactMessage).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john.doe@example.com",
      subject: "General Inquiry",
      message: "This is a test message.",
    });

    expect(
      await screen.findByText(/Thank you for your message!/i),
    ).toBeInTheDocument();
  });
});
