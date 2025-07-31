import { render, screen } from "@testing-library/react";
import CausesSection from "./index";

describe("CausesSection", () => {
  it("renders the causes section with a title and cause cards", () => {
    render(<CausesSection />);

    expect(screen.getByText("Popular Causes")).toBeInTheDocument();
    expect(screen.getByText("Support for Children")).toBeInTheDocument();
    expect(screen.getByText("Food for Syrian")).toBeInTheDocument();
    expect(screen.getByText("Uganda Education")).toBeInTheDocument();
  });
});
