import { render, screen } from "@testing-library/react";
import Hero from "./index";

describe("Hero", () => {
  it("renders the hero section with a title, description, and buttons", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Give a Helping Hand\s+and Help Unfortunates/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/and Help Unfortunates/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn More" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Donate Now" }),
    ).toBeInTheDocument();
  });
});
