import { render, screen } from "@testing-library/react";
import TeamMember from "./index";

describe("TeamMember", () => {
  const mockMember = {
    name: "John Doe",
    role: "Lead Developer",
    bio: "Passionate about open source and clean code.",
    image: "/images/john-doe.jpg",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "john.doe@example.com",
    },
  };

  it("renders team member information", () => {
    render(<TeamMember {...mockMember} />);

    expect(screen.getByText(mockMember.name)).toBeInTheDocument();
    expect(screen.getByText(mockMember.role)).toBeInTheDocument();
    expect(screen.getByText(mockMember.bio)).toBeInTheDocument();
    expect(screen.getByAltText(mockMember.name)).toBeInTheDocument();
  });

  it("renders social media links if provided", () => {
    render(<TeamMember {...mockMember} />);

    expect(
      screen.getByLabelText(`${mockMember.name}'s Twitter`),
    ).toHaveAttribute("href", mockMember.socialLinks.twitter);
    expect(
      screen.getByLabelText(`${mockMember.name}'s LinkedIn`),
    ).toHaveAttribute("href", mockMember.socialLinks.linkedin);
    expect(screen.getByLabelText(`Email ${mockMember.name}`)).toHaveAttribute(
      "href",
      `mailto:${mockMember.socialLinks.email}`,
    );
  });

  it("does not render social media links if not provided", () => {
    const { socialLinks, ...memberWithoutSocials } = mockMember;
    render(<TeamMember {...memberWithoutSocials} />);

    expect(screen.queryByLabelText(/twitter/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/linkedin/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
  });
});
