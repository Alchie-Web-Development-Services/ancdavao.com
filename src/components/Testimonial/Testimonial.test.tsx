import { render, screen } from "@testing-library/react";
import Testimonial from "./index";

describe("Testimonial", () => {
  const mockTestimonial = {
    contentRaw: [
      {
        _type: "block",
        children: [{ _type: "span", text: "This is a great quote." }],
      },
    ],
    author: "Jane Doe",
    authorRole: "Happy Customer",
    authorImage: {
      _type: "image",
      asset: {
        _ref: "image-placeholder1-128x128-jpg",
        _type: "reference",
      },
    },
  };

  const mockTestimonialWithoutRoleAndAvatar = {
    contentRaw: [
      {
        _type: "block",
        children: [{ _type: "span", text: "This is a great quote." }],
      },
    ],
    author: "Jane Doe",
  };

  it("renders testimonial with quote, author, and role", () => {
    render(<Testimonial testimonial={mockTestimonial} />);

    expect(screen.getByText("This is a great quote.")).toBeInTheDocument();
    expect(screen.getByText(mockTestimonial.author)).toBeInTheDocument();
    expect(screen.getByText(mockTestimonial.authorRole)).toBeInTheDocument();
    expect(
      screen.getByAltText(mockTestimonial.author),
    ).toBeInTheDocument();
  });

  it("renders without role and avatar if not provided", () => {
    render(<Testimonial testimonial={mockTestimonialWithoutRoleAndAvatar} />);

    expect(screen.getByText("This is a great quote.")).toBeInTheDocument();
    expect(screen.getByText(mockTestimonialWithoutRoleAndAvatar.author)).toBeInTheDocument();
    expect(
      screen.queryByAltText(mockTestimonialWithoutRoleAndAvatar.authorName),
    ).not.toBeInTheDocument();
  });
});
