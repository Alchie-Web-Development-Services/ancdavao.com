import { render, screen } from "@testing-library/react";
import Testimonial from "./index";

describe("Testimonial", () => {
  const mockTestimonial = {
    quote: "This is a great quote.",
    author: "Jane Doe",
    role: "Happy Customer",
    avatar: "/images/avatar.jpg",
  };

  it("renders testimonial with quote, author, and role", () => {
    render(<Testimonial {...mockTestimonial} />);

    expect(screen.getByText(`"${mockTestimonial.quote}"`)).toBeInTheDocument();
    expect(screen.getByText(mockTestimonial.author)).toBeInTheDocument();
    expect(screen.getByText(mockTestimonial.role)).toBeInTheDocument();
    expect(screen.getByAltText(mockTestimonial.author)).toBeInTheDocument();
  });

  it("renders without role and avatar if not provided", () => {
    const { role, avatar, ...testimonialWithoutRoleAndAvatar } =
      mockTestimonial;
    render(<Testimonial {...testimonialWithoutRoleAndAvatar} />);

    expect(screen.queryByText(mockTestimonial.role)).not.toBeInTheDocument();
    expect(
      screen.queryByAltText(mockTestimonial.author),
    ).not.toBeInTheDocument();
  });
});
