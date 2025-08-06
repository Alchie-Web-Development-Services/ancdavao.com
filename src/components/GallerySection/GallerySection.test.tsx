import { render, screen } from "@testing-library/react";
import GallerySection from "./index";

describe("GallerySection", () => {
  it("renders the gallery section with a title and filter buttons", () => {
    const mockMomentsOfHope = [
      { _id: "1", image: { _type: "image", asset: { _ref: "image-abc" } } },
      { _id: "2", image: { _type: "image", asset: { _ref: "image-def" } } },
    ];
    render(<GallerySection momentsOfHope={mockMomentsOfHope} />);

    expect(screen.getByText("Moments of Hope")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Food" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Income" })).toBeInTheDocument();
  });
});
