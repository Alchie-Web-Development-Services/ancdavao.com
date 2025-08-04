import { render, screen } from "@testing-library/react";
import EventSection from "./index";
import { vi } from "vitest";

// Mock urlFor from sanity.ts
vi.mock("../../lib/sanity", () => ({
  urlFor: vi.fn((source) => ({
    url: () => source.asset.url,
  })),
}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || "Test image"} />;
  },
}));

// Mock PortableText
vi.mock('@portabletext/react', () => ({
  PortableText: ({ value }: { value: any }) => {
    if (!value) return null;
    return value[0]?.children[0]?.text || "";
  },
}));

describe("EventSection", () => {
  it("renders the event section with a title and event details", () => {
    const mockEvent = {
      _id: "1",
      _type: "event",
      title: "Paid Hill Fine Ten Now Love",
      slug: { current: "paid-hill-fine-ten-now-love" },
      descriptionRaw: [
        {
          _key: "abc",
          _type: "block",
          children: [
            {
              _key: "def",
              _type: "span",
              marks: [],
              text: "An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared.",
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg",
          _type: "reference",
          url: "https://cdn.ancdavao.com/placeholder1.jpg",
        },
      },
      startDate: "2018-10-12T00:00:00Z",
      endDate: "",
      location: "King Street, Melbourne",
    };

    render(<EventSection event={mockEvent} />);

    expect(screen.getByText("Upcoming Event")).toBeInTheDocument();
    expect(screen.getByText("Paid Hill Fine Ten Now Love")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Learn More" })).toBeInTheDocument();
    expect(screen.getByText("October 12, 2018")).toBeInTheDocument();
    expect(screen.getByText("King Street, Melbourne")).toBeInTheDocument();
    expect(screen.getByText("An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared.")).toBeInTheDocument();
  });
});
