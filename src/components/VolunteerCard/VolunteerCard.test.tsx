import { render, screen } from "@testing-library/react";
import VolunteerCard from "./index";
import { vi } from "vitest";

// Mock urlFor from sanity.ts
vi.mock("../../lib/sanity", () => ({
  urlFor: vi.fn((source) => ({
    url: () => source.asset.url,
  })),
}));

describe("VolunteerCard", () => {
  it("renders the volunteer card with volunteer details", () => {
    const mockVolunteer = {
      _id: "1",
      _type: "volunteer",
      name: "Test Volunteer",
      position: "Test Position",
      bioRaw: [
        {
          _key: "abc",
          _type: "block",
          children: [
            {
              _key: "def",
              _type: "span",
              marks: [],
              text: "This is a test bio.",
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
      photo: {
        _type: "image",
        asset: {
          _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-128x128-jpg",
          _type: "reference",
          url: "https://cdn.sanity.io/images/tuggecli/production/test-image.jpg",
        },
      },
      socialMedia: {
        facebook: "https://facebook.com/test",
        twitter: "https://twitter.com/test",
        instagram: "https://instagram.com/test",
        linkedin: "https://linkedin.com/test",
      },
    };

    render(<VolunteerCard volunteer={mockVolunteer} />);

    expect(screen.getByText(mockVolunteer.name)).toBeInTheDocument();
    expect(screen.getByText(mockVolunteer.position)).toBeInTheDocument();
    expect(screen.getByText("This is a test bio.")).toBeInTheDocument();
    expect(screen.getByAltText(mockVolunteer.name)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      mockVolunteer.socialMedia.facebook,
    );
    expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
      "href",
      mockVolunteer.socialMedia.twitter,
    );
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      mockVolunteer.socialMedia.instagram,
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      mockVolunteer.socialMedia.linkedin,
    );
  });
});
