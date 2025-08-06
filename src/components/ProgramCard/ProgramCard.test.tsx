import { render, screen } from "@testing-library/react";
import ProgramCard from "./index";
import { vi } from "vitest";

// Mock urlFor from Sanity
vi.mock("@/lib/sanity", () => ({
  urlFor: vi.fn(() => ({
    url: () => "/test-image.jpg",
  })),
}));

describe("ProgramCard", () => {
  it("renders the program card with title, description, icon, and link", () => {
    const mockProgram = {
      _id: "1",
      title: "Test Program",
      descriptionRaw: [
        {
          _key: "abc",
          _type: "block",
          children: [
            {
              _key: "def",
              _type: "span",
              marks: [],
              text: "This is a test description.",
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
      slug: {
        current: "test-program",
      },
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-test",
          _type: "reference",
        },
      },
    };

    render(<ProgramCard program={mockProgram} />);

    expect(screen.getByText("Test Program")).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test Program" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn more" }),
    ).toHaveAttribute("href", "/programs-and-services/test-program");
  });
});
