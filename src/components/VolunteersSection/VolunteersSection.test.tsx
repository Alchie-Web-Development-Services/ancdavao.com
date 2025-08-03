import { render, screen } from "@testing-library/react";
import VolunteersSection from "./index";

describe("VolunteersSection", () => {
  it("renders the volunteers section with a title and volunteer cards", () => {
    const mockVolunteers = [
      {
        _id: "1",
        _type: "volunteer",
        name: "Dunald Minia",
        position: "Volunteer",
        bioRaw: [],
        photo: null,
        socialMedia: null,
      },
      {
        _id: "2",
        _type: "volunteer",
        name: "John Doe",
        position: "Volunteer",
        bioRaw: [],
        photo: null,
        socialMedia: null,
      },
      {
        _id: "3",
        _type: "volunteer",
        name: "Jane Smith",
        position: "Volunteer",
        bioRaw: [],
        photo: null,
        socialMedia: null,
      },
    ];

    render(<VolunteersSection volunteers={mockVolunteers} />);

    expect(screen.getByText("Meet Our Volunteers")).toBeInTheDocument();
    expect(screen.getByText("Dunald Minia")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
});
