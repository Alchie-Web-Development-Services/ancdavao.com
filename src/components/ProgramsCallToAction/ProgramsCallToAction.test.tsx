import { render, screen } from "@testing-library/react";
import ProgramsCallToAction from "./index";

describe("ProgramsCallToAction", () => {
  it("renders the call to action section with title, description, and buttons", () => {
    render(<ProgramsCallToAction />);

    expect(screen.getByText("Want to Support Our Programs?")).toBeInTheDocument();
    expect(screen.getByText(/Your donation helps us expand our reach/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Donate Now" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Volunteer" })).toBeInTheDocument();
  });
});
