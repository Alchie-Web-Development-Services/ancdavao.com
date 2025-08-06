import { render, screen } from "@testing-library/react";
import OurStorySection from "./index";

describe("OurStorySection", () => {
  it("renders the Our Story section with title and links", () => {
    render(<OurStorySection />);

    expect(screen.getByText("Our Story")).toBeInTheDocument();
    expect(
      screen.getByText(/The Archdiocesan Nourishment Center/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Read More About Our History" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Discover Our Centers" }),
    ).toBeInTheDocument();
  });
});
