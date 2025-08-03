import { render, screen } from "@testing-library/react";
import MapAndHoursSection from "./index";

describe("MapAndHoursSection", () => {
  it("renders the map, office hours, and social media links", () => {
    render(<MapAndHoursSection />);

    // Check for office hours
    expect(screen.getByText("Office Hours")).toBeInTheDocument();
    expect(screen.getByText("Monday - Friday")).toBeInTheDocument();
    expect(screen.getByText("8:00 AM - 5:00 PM")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("9:00 AM - 2:00 PM")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText("Closed")).toBeInTheDocument();

    // Check for social media links
    expect(screen.getByText("Connect With Us")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });
});
