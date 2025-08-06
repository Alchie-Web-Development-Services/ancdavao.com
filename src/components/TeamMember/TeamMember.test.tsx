import { render, screen } from "@testing-library/react";
import TeamMember from "./index";

describe("TeamMember", () => {
  const mockMember = {
    name: "John Doe",
    role: "Lead Developer",
    bioRaw: [
      {
        _key: "abc",
        _type: "block",
        children: [{
          _key: "def",
          _type: "span",
          marks: [],
          text: "Passionate about open source and clean code."
        }],
        markDefs: [],
        style: "normal"
      }
    ],
    photo: {
      _type: "image",
      asset: {
        _ref: "image-john-400x400-jpg",
        _type: "reference",
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
    expect(screen.getByText(mockMember.bioRaw[0].children[0].text)).toBeInTheDocument();
  });

  it("renders social media links if provided", () => {
    render(<TeamMember member={mockMember} />);

    expect(screen.getByLabelText(/twitter/i)).toHaveAttribute(
      "href",
      mockMember.socialMedia.twitter,
    );
    expect(screen.getByLabelText(/linkedin/i)).toHaveAttribute(
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
