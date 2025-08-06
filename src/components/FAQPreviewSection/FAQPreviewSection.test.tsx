import { render, screen } from "@testing-library/react";
import FAQPreviewSection from "./index";

describe("FAQPreviewSection", () => {
  it("renders the FAQ preview section", () => {
    render(<FAQPreviewSection />);

    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
    expect(screen.getByText(/Can't find what you're looking for?/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Visit FAQ Page" })).toBeInTheDocument();
  });
});
