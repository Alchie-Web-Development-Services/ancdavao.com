import { render, screen } from "@testing-library/react";
import ProgramFeatures from "./index";

describe("ProgramFeatures", () => {
  it("renders the section title and features", () => {
    render(<ProgramFeatures />);

    expect(screen.getByText("Why Our Programs Matter")).toBeInTheDocument();
    expect(screen.getByText("Holistic Approach")).toBeInTheDocument();
    expect(screen.getByText("Proven Impact")).toBeInTheDocument();
    expect(screen.getByText("Community-Led")).toBeInTheDocument();
  });
});
