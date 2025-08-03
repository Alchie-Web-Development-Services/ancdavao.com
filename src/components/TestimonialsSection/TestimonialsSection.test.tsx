import { render, screen } from "@testing-library/react";
import TestimonialsSection from "./index";
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
    return <img {...props} />;
  },
}));

describe("TestimonialsSection", () => {
  it("renders the testimonials section with a title and testimonials", () => {
    const mockTestimonials = [
      {
        _id: "1",
        _type: "testimonial",
        quote: "This is a great quote from Testimonial 1.",
        author: "Author One",
        role: "Role One",
        avatar: {
          _type: "image",
          asset: {
            _ref: "image-test-avatar-id-1",
            _type: "reference",
            url: "https://cdn.sanity.io/images/tuggecli/production/avatar1.jpg",
          },
        },
      },
      {
        _id: "2",
        _type: "testimonial",
        quote: "Another inspiring quote from Testimonial 2.",
        author: "Author Two",
        role: "Role Two",
        avatar: {
          _type: "image",
          asset: {
            _ref: "image-test-avatar-id-2",
            _type: "reference",
            url: "https://cdn.sanity.io/images/tuggecli/production/avatar2.jpg",
          },
        },
      },
    ];

    render(<TestimonialsSection testimonials={mockTestimonials} />);

    expect(screen.getByText("What People Say")).toBeInTheDocument();
    expect(screen.getByText('"This is a great quote from Testimonial 1."')).toBeInTheDocument();
    expect(screen.getByText("Author One")).toBeInTheDocument();
    expect(screen.getByText("Role One")).toBeInTheDocument();
    expect(screen.getByAltText("Author One")).toHaveAttribute("src", "https://cdn.sanity.io/images/tuggecli/production/avatar1.jpg");

    expect(screen.getByText('"Another inspiring quote from Testimonial 2."')).toBeInTheDocument();
    expect(screen.getByText("Author Two")).toBeInTheDocument();
    expect(screen.getByText("Role Two")).toBeInTheDocument();
    expect(screen.getByAltText("Author Two")).toHaveAttribute("src", "https://cdn.sanity.io/images/tuggecli/production/avatar2.jpg");
  });
});
