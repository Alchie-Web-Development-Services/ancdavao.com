import { render, screen } from "@testing-library/react";
import CauseCard from "./index";

describe("CauseCard", () => {
  it("renders the cause card with cause details", () => {
    const mockCause = {
      _id: "1",
      _type: "cause",
      title: "Test Cause Title",
      slug: { current: "test-cause-title" },
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
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-test-image-800x600-jpg",
          _type: "reference",
        },
      },
      raised: 500,
      goalAmount: 1000,
    };

    render(<CauseCard cause={mockCause} />);

    expect(screen.getByText(mockCause.title)).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
    expect(screen.getByAltText(mockCause.title)).toBeInTheDocument();
    expect(
      screen.getByText(`Raised: $${mockCause.raised}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Goal: \$\d{1,3}(?:,\d{3})*(?:\.\d+)?/),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Donate Now" })).toHaveAttribute(
      "href",
      `/causes/${mockCause.slug.current}`,
    );
  });
});
