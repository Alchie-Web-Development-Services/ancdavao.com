import { render, screen } from "@testing-library/react";
import CTASection from "./index";

describe("CTASection", () => {
  it("renders the CTA section with a title and a call to action button", () => {
    render(<CTASection />);

    expect(
      screen.getByText(
        "We’ve Nourished Thousands—And We’re Just Getting Started",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Join With Us" }),
    ).toBeInTheDocument();
  });
});
