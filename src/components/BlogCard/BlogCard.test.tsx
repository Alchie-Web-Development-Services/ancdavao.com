import { render, screen } from "@testing-library/react";
import BlogCard from "./index";

describe("BlogCard", () => {
  it("renders the blog card with article details", () => {
    const mockArticle = {
      _id: "1",
      _type: "article",
      title: "Test Article Title",
      slug: { current: "test-article-title" },
      abstract: "This is a test abstract.",
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-test-image-id",
          _type: "reference",
          url: "https://cdn.sanity.io/images/tuggecli/production/test-image.jpg",
        },
      },
    };

    render(<BlogCard article={mockArticle} />);

    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
    expect(screen.getByAltText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Read More" })).toHaveAttribute(
      "href",
      `/blog/${mockArticle.slug.current}`,
    );
  });
});
