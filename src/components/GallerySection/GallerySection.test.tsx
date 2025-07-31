import { render, screen } from "@testing-library/react";
import GallerySection from "./index";

describe("GallerySection", () => {
  it("renders the gallery section with a title and filter buttons", () => {
    render(<GallerySection />);

    expect(screen.getByText("Best Gallery")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Food" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Income" })).toBeInTheDocument();
  });
});
