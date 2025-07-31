import { render, screen } from "@testing-library/react";
import EventSection from "./index";

describe("EventSection", () => {
  it("renders the event section with a title and event details", () => {
    render(<EventSection />);

    expect(screen.getByText("Our Event")).toBeInTheDocument();
    expect(screen.getByText("Paid Hill Fine Ten Now Love")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn More" }),
    ).toBeInTheDocument();
  });
});
