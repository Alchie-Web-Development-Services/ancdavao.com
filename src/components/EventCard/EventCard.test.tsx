import { render, screen } from "@testing-library/react";
import EventCard from "./index";

describe("EventCard", () => {
  it("renders the event card with event details", () => {
    const mockEvent = {
      _id: "1",
      _type: "event",
      title: "Test Event Title",
      slug: { current: "test-event-title" },
      descriptionRaw: [{
        _key: "abc",
        _type: "block",
        children: [{
          _key: "def",
          _type: "span",
          marks: [],
          text: "This is a test description."
        }],
        markDefs: [],
        style: "normal"
      }],
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg",
          _type: "reference",
          url: "https://cdn.sanity.io/images/tuggecli/production/test-image.jpg",
        },
      },
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-01-02T00:00:00Z",
      location: "Test Location",
    };

    render(<EventCard event={mockEvent} />);

    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
    expect(screen.getByAltText(mockEvent.title)).toBeInTheDocument();
    expect(screen.getByText("January 1, 2025 - January 2, 2025")).toBeInTheDocument();
    expect(screen.getByText(mockEvent.location)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      `/events/${mockEvent.slug.current}`,
    );
  });
});
