import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactFormSection from "./index";
import { vi } from "vitest";

describe("ContactFormSection", () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: "Success" }),
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the contact form and handles submission", async () => {
    render(<ContactFormSection />);

    // Check if form elements are rendered
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Message" }),
    ).toBeInTheDocument();

    // Fill out the form
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

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    // Check for submitting state
    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    // Check for success message after submission
    await waitFor(() => {
      expect(
        screen.getByText(
          "Thank you for your message! We will get back to you soon.",
        ),
      ).toBeInTheDocument();
    });

    // Check if form is reset
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue("");
    expect(screen.getByLabelText(/Email Address/i)).toHaveValue("");
    expect(screen.getByLabelText(/Subject/i)).toHaveValue("");
    expect(screen.getByLabelText(/Your Message/i)).toHaveValue("");
  });
});
