import { render, screen } from "@testing-library/react";
import CTASection from "./index";

describe("CTASection", () => {
  it("renders the CTA section with a title and a call to action button", () => {
    render(<CTASection />);

    expect(
      screen.getByText(
        "We've funded 120,00 charity projects for 20M people around the world.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Join With Us" }),
    ).toBeInTheDocument();
  });
});
