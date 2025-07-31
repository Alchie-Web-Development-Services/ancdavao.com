import { render, screen } from "@testing-library/react";
import ImpactSection from "./index";

describe("ImpactSection", () => {
  it("renders the impact section with a title and impact cards", () => {
    render(<ImpactSection />);

    expect(
      screen.getByText(
        "We've funded 120,00 charity projects for 20M people around the world.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Make Donation")).toBeInTheDocument();
    expect(screen.getByText("Become a Volunteer")).toBeInTheDocument();
    expect(screen.getByText("Give Scholarship")).toBeInTheDocument();
  });
});
