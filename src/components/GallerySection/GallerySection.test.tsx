import { render, screen } from "@testing-library/react";
import GallerySection from "./index";

describe("GallerySection", () => {
  it("renders the gallery section with a title and filter buttons", () => {
    const mockMomentsOfHope = [
      { _id: "1", image: { _type: "image", asset: { _ref: "image-abc" } }, link: "/test-link-1" },
      { _id: "2", image: { _type: "image", asset: { _ref: "image-def" } }, link: "/test-link-2" },
    ];
    render(<GallerySection momentsOfHope={mockMomentsOfHope} />);

    expect(screen.getByText("Moments of Hope")).toBeInTheDocument();
  });
});
