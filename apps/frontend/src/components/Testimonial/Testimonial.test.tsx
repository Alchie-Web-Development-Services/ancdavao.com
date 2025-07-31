import { render, screen } from "@testing-library/react";
import Testimonial from "./index";

describe("Testimonial", () => {
  const mockTestimonial = {
    quote: "This is a great quote.",
    author: "Jane Doe",
  };

  const mockTestimonialWithRoleAndAvatar = {
    role: "Happy Customer",
    avatar: "/images/avatar.jpg",
    ...mockTestimonial,
  };

  it("renders testimonial with quote, author, and role", () => {
    render(<Testimonial {...mockTestimonialWithRoleAndAvatar} />);

    expect(
      screen.getByText(`"${mockTestimonialWithRoleAndAvatar.quote}"`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockTestimonialWithRoleAndAvatar.author),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockTestimonialWithRoleAndAvatar.role),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(mockTestimonialWithRoleAndAvatar.author),
    ).toBeInTheDocument();
  });

  it("renders without role and avatar if not provided", () => {
    render(<Testimonial {...mockTestimonial} />);

    expect(
      screen.queryByText(mockTestimonialWithRoleAndAvatar.role),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByAltText(mockTestimonialWithRoleAndAvatar.author),
    ).not.toBeInTheDocument();
  });
});
