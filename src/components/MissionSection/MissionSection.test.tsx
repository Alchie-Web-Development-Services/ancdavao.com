import { render, screen } from "@testing-library/react";
import MissionSection from "./index";

describe("MissionSection", () => {
  it("renders the mission section with a title and mission items", () => {
    render(<MissionSection />);

    expect(screen.getByText("What We Are Doing")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Rice for Life")).toBeInTheDocument();
    expect(screen.getByText("Health")).toBeInTheDocument();
    expect(screen.getByText("Water")).toBeInTheDocument();
  });
});
