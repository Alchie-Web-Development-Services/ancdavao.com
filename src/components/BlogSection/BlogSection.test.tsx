import { render, screen } from "@testing-library/react";
import BlogSection from "./index";

describe("BlogSection", () => {
  it("renders the blog section with a title and posts", () => {
    const mockArticles = [
      {
        _id: "1",
        _type: "article",
        title: "A Day in the Life of a Volunteer",
        slug: { current: "a-day-in-the-life-of-a-volunteer" },
        abstract: "",
        mainImage: null,
        publishedAt: "",
        author: null,
      },
      {
        _id: "2",
        _type: "article",
        title: "How Your Donations Make a Difference",
        slug: { current: "how-your-donations-make-a-difference" },
        abstract: "",
        mainImage: null,
        publishedAt: "",
        author: null,
      },
      {
        _id: "3",
        _type: "article",
        title: "Building a Brighter Future Through Education",
        slug: { current: "building-a-brighter-future-through-education" },
        abstract: "",
        mainImage: null,
        publishedAt: "",
        author: null,
      },
    ];

    render(<BlogSection articles={mockArticles} />);

    expect(screen.getByText("Recent Blog")).toBeInTheDocument();
    expect(
      screen.getByText("A Day in the Life of a Volunteer"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("How Your Donations Make a Difference"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Building a Brighter Future Through Education"),
    ).toBeInTheDocument();
  });
});
