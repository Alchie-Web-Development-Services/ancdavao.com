import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer", () => {
  it("renders the footer with quick links, contact info, and newsletter signup", () => {
    render(<Footer />);

    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Contact Info")).toBeInTheDocument();
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(
      screen.getByText(/\u00A9 \d{4} ANC Davao. All Rights Reserved./),
    ).toBeInTheDocument();
  });
});
