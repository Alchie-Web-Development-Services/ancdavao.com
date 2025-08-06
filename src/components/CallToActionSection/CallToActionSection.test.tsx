import { render, screen } from "@testing-library/react";
import CallToActionSection from "./index";

describe("CallToActionSection", () => {
  it("renders the call to action section with title, description, and buttons", () => {
    render(<CallToActionSection />);

    expect(screen.getByText("Join Our Mission")).toBeInTheDocument();
    expect(screen.getByText(/Be part of our journey/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Donate Now" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Volunteer With Us" }),
    ).toBeInTheDocument();
  });
});
