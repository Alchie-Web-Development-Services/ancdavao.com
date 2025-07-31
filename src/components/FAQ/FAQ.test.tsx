import { render, screen } from "@testing-library/react";
import FAQ from "./index";

describe("FAQ", () => {
  it("renders the FAQ section with a title and accordion items", () => {
    render(<FAQ />);

    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Do I need a business plan?")).toBeInTheDocument();
    expect(
      screen.getByText("How long should a business plan be?"),
    ).toBeInTheDocument();
  });
});
