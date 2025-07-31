import { render, screen } from "@testing-library/react";
import Hero from "./index";

describe("Hero", () => {
  it("renders the hero section with a title, description, and buttons", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Nourishing Hope,\s*One Child at a Time/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn More" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Donate Now" }),
    ).toBeInTheDocument();
  });
});
