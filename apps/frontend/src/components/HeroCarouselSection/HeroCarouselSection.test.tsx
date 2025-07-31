import { render, screen } from "@testing-library/react";
import HeroCarouselSection from "./index";

describe("HeroCarouselSection", () => {
  it("renders the hero carousel section", () => {
    render(<HeroCarouselSection />);
    expect(screen.getByText("Hero Carousel Section")).toBeInTheDocument();
  });
});
