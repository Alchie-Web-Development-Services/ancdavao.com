import { render, screen } from "@testing-library/react";
import VolunteersSection from "./index";

describe("VolunteersSection", () => {
  it("renders the volunteers section with a title and volunteer cards", () => {
    render(<VolunteersSection />);

    expect(screen.getByText("Meet Our Volunteers")).toBeInTheDocument();
    expect(screen.getByText("Dunald Minia")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
});
