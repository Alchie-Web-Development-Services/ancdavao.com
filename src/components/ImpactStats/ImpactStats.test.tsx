import { render, screen } from "@testing-library/react";
import ImpactStats from "./index";

describe("ImpactStats", () => {
  const mockStats = [
    { number: "100", label: "Projects" },
    { number: "500", label: "Volunteers" },
  ];

  it("renders the impact stats section with numbers and labels", () => {
    render(<ImpactStats stats={mockStats} />);

    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText("Volunteers")).toBeInTheDocument();
  });
});
