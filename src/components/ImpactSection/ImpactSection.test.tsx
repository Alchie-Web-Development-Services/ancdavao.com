import { render, screen } from "@testing-library/react";
import ImpactSection from "./index";

describe("ImpactSection", () => {
  it("renders the impact section with a title and impact cards", () => {
    render(<ImpactSection />);

    expect(
      screen.getByText("Together, We Are Changing Lives in Davao City"),
    ).toBeInTheDocument();
    expect(screen.getByText("Make a Donation")).toBeInTheDocument();
    expect(screen.getByText("Become a Volunteer")).toBeInTheDocument();
    expect(screen.getByText("Give a Scholarship")).toBeInTheDocument();
  });
});
