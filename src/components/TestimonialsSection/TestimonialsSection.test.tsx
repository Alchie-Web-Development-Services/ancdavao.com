import { render, screen } from "@testing-library/react";
import TestimonialsSection from "./index";
import { vi } from "vitest";

// Mock urlFor from sanity.ts
vi.mock("../../lib/sanity", () => ({
  urlFor: vi.fn((source) => ({
    url: () => source.asset.url,
  })),
}));

// Mock the Testimonial component
vi.mock("../Testimonial", () => ({
  __esModule: true,
  default: ({ testimonial }: { testimonial: Testimonial }) => (
    <div data-testid="testimonial">
      <div>
        {testimonial.contentRaw?.[0]?.children?.[0]?.text || testimonial.quote}
      </div>
      <p>{testimonial.author}</p>
      <p>{testimonial.authorRole}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={testimonial.authorImage?.asset?.url}
        alt={testimonial.author || "Test image"}
      />
    </div>
  ),
}));

describe("TestimonialsSection", () => {
  it("renders the testimonials section with a title and testimonials", () => {
    const mockTestimonials = [
      {
        _id: "1",
        _type: "testimonial",
        contentRaw: [
          {
            _key: "abc",
            _type: "block",
            children: [
              {
                _key: "def",
                _type: "span",
                marks: [],
                text: "This is a great quote from Testimonial 1.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        author: "Author One",
        authorRole: "Role One",
        authorImage: {
          _type: "image",
          asset: {
            _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-128x128-jpg",
            _type: "reference",
            url: "https://cdn.sanity.io/images/tuggecli/production/avatar1.jpg",
          },
        },
      },
      {
        _id: "2",
        _type: "testimonial",
        contentRaw: [
          {
            _key: "ghi",
            _type: "block",
            children: [
              {
                _key: "jkl",
                _type: "span",
                marks: [],
                text: "Another inspiring quote from Testimonial 2.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        author: "Author Two",
        authorRole: "Role Two",
        authorImage: {
          _type: "image",
          asset: {
            _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-128x128-jpg",
            _type: "reference",
            url: "https://cdn.sanity.io/images/tuggecli/production/avatar2.jpg",
          },
        },
      },
    ];

    render(<TestimonialsSection testimonials={mockTestimonials} />);

    expect(screen.getByText("What People Say")).toBeInTheDocument();
    expect(
      screen.getByText("This is a great quote from Testimonial 1."),
    ).toBeInTheDocument();
    expect(screen.getByText("Author One")).toBeInTheDocument();
    expect(screen.getByText("Role One")).toBeInTheDocument();
    expect(screen.getByAltText("Author One")).toHaveAttribute(
      "src",
      "https://cdn.sanity.io/images/tuggecli/production/avatar1.jpg",
    );

    expect(
      screen.getByText("Another inspiring quote from Testimonial 2."),
    ).toBeInTheDocument();
    expect(screen.getByText("Author Two")).toBeInTheDocument();
    expect(screen.getByText("Role Two")).toBeInTheDocument();
    expect(screen.getByAltText("Author Two")).toHaveAttribute(
      "src",
      "https://cdn.sanity.io/images/tuggecli/production/avatar2.jpg",
    );
  });
});
