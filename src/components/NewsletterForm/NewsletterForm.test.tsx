import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import NewsletterForm from "./index";

describe("NewsletterForm", () => {
  it("renders the newsletter form with a title, description, email input, and subscribe button", () => {
    render(<NewsletterForm />);

    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(
      screen.getByText("Subscribe to our newsletter to get the latest updates.")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });

  it("handles successful subscription", async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: "Subscription successful!" }),
    } as Response);

    render(<NewsletterForm />);

    const emailInput = screen.getByPlaceholderText("Your email");
    const subscribeButton = screen.getByRole("button", { name: "Subscribe" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(subscribeButton);

    expect(subscribeButton).toHaveTextContent("Subscribing...");

    await waitFor(() => {
      expect(screen.getByText("Subscription successful!")).toBeInTheDocument();
    });

    expect(emailInput).toHaveValue("");
    expect(subscribeButton).toHaveTextContent("Subscribe");
  });

  it("handles failed subscription", async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ message: "Subscription failed." }),
    } as Response);

    render(<NewsletterForm />);

    const emailInput = screen.getByPlaceholderText("Your email");
    const subscribeButton = screen.getByRole("button", { name: "Subscribe" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(subscribeButton);

    expect(subscribeButton).toHaveTextContent("Subscribing...");

    await waitFor(() => {
      expect(screen.getByText("Subscription failed.")).toBeInTheDocument();
    });

    expect(subscribeButton).toHaveTextContent("Subscribe");
  });
});
