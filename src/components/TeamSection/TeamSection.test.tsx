import { render, screen } from "@testing-library/react";
import TeamSection from "./index";
import { vi } from "vitest";

// Mock the TeamMember component as it's a dependency
vi.mock("../TeamMember", () => ({
  __esModule: true,
  default: ({ name, role, bio, image, socialLinks }: any) => (
    <div data-testid="team-member">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
      <img src={image} alt={name} />
      {socialLinks?.twitter && <a href={socialLinks.twitter}>Twitter</a>}
      {socialLinks?.linkedin && <a href={socialLinks.linkedin}>LinkedIn</a>}
      {socialLinks?.email && <a href={`mailto:${socialLinks.email}`}>Email</a>}
    </div>
  ),
}));

describe("TeamSection", () => {
  it("renders the team section with a title and team members", () => {
    const mockTeamMembers = [
      {
        _id: "1",
        _type: "teamMember",
        name: "John Doe",
        role: "Founder",
        bioRaw: [
          {
            _key: "abc",
            _type: "block",
            children: [
              {
                _key: "def",
                _type: "span",
                marks: [],
                text: "Bio for John Doe.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        image: {
          _type: "image",
          asset: {
            _ref: "image-test-image-id-1",
            _type: "reference",
            url: "https://cdn.sanity.io/images/tuggecli/production/john.jpg",
          },
        },
        twitterUrl: "https://twitter.com/johndoe",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        email: "john@example.com",
      },
      {
        _id: "2",
        _type: "teamMember",
        name: "Jane Smith",
        role: "Developer",
        bioRaw: [
          {
            _key: "ghi",
            _type: "block",
            children: [
              {
                _key: "jkl",
                _type: "span",
                marks: [],
                text: "Bio for Jane Smith.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        image: {
          _type: "image",
          asset: {
            _ref: "image-test-image-id-2",
            _type: "reference",
            url: "https://cdn.sanity.io/images/tuggecli/production/jane.jpg",
          },
        },
      },
    ];

    render(<TeamSection teamMembers={mockTeamMembers} />);

    expect(screen.getByText("Meet Our Team")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Bio for John Doe.")).toBeInTheDocument();
    expect(screen.getByText("Bio for Jane Smith.")).toBeInTheDocument();
    expect(screen.getByAltText("John Doe")).toHaveAttribute("src", "https://cdn.sanity.io/images/tuggecli/production/john.jpg");
    expect(screen.getByAltText("Jane Smith")).toHaveAttribute("src", "https://cdn.sanity.io/images/tuggecli/production/jane.jpg");
    expect(screen.getByText("Founder")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute("href", "https://twitter.com/johndoe");
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://linkedin.com/in/johndoe");
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:john@example.com");
  });
});
