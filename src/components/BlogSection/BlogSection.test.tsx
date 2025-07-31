import { render, screen } from "@testing-library/react";
import BlogSection from "./index";

describe("BlogSection", () => {
  it("renders the blog section with a title and posts", () => {
    render(<BlogSection />);

    expect(screen.getByText("Recent Blog")).toBeInTheDocument();
    expect(
      screen.getByText("A Day in the Life of a Volunteer"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("How Your Donations Make a Difference"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Building a Brighter Future Through Education"),
    ).toBeInTheDocument();
  });
});
