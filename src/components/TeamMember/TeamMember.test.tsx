import { render, screen } from "@testing-library/react";
import TeamMember from "./index";

describe("TeamMember", () => {
  const mockMember = {
    name: "John Doe",
    role: "Lead Developer",
    bio: "Passionate about open source and clean code.",
    photo: {
      _type: "image",
      asset: {
        _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg",
        _type: "reference",
        url: "https://cdn.sanity.io/images/tuggecli/production/john.jpg",
      },
    },
    socialMedia: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  };

  const mockMemberWithoutSocialLinks = {
    ...mockMember,
    socialMedia: undefined,
  };

  it("renders team member information", () => {
    render(<TeamMember member={mockMember} />);

    expect(screen.getByText(mockMember.name)).toBeInTheDocument();
    expect(screen.getByText(mockMember.role)).toBeInTheDocument();
    expect(screen.getByText(mockMember.bio)).toBeInTheDocument();
  });

  it("renders social media links if provided", () => {
    render(<TeamMember member={mockMember} />);

    expect(screen.getByLabelText("Twitter")).toHaveAttribute(
      "href",
      mockMember.socialMedia.twitter,
    );
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      mockMember.socialMedia.linkedin,
    );
  });

  it("does not render social media links if not provided", () => {
    render(<TeamMember member={mockMemberWithoutSocialLinks} />);

    expect(screen.queryByLabelText(/twitter/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/linkedin/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
  });
});
