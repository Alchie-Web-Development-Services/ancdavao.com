import { render, screen } from "@testing-library/react";
import TeamSection from "./index";
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

// Mock the TeamMember component as it's a dependency
vi.mock("../TeamMember", () => ({
  __esModule: true,
  default: ({ member }: any) => (
    <div data-testid="team-member">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{member.bioRaw?.[0]?.children?.[0]?.text || ""}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={member.photo?.asset?.url} alt={member.name || "Team member"} />
      {member.socialMedia?.twitter && <a href={member.socialMedia.twitter}>Twitter</a>}
      {member.socialMedia?.linkedin && <a href={member.socialMedia.linkedin}>LinkedIn</a>}
      {member.email && <a href={`mailto:${member.email}`}>Email</a>}
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
        photo: {
          _type: "image",
          asset: {
            _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg",
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