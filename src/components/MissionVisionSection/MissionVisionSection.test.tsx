import { render, screen } from "@testing-library/react";
import MissionVisionSection from "./index";

describe("MissionVisionSection", () => {
  it("renders the Mission & Vision section with titles", () => {
    render(<MissionVisionSection />);

    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(screen.getByText("Our Vision")).toBeInTheDocument();
    expect(screen.getByText("Our Goal")).toBeInTheDocument();
  });
});
