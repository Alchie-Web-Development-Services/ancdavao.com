import { render, screen } from "@testing-library/react";
import NotFoundContent from "./index";

describe("NotFoundContent", () => {
  it("renders the 404 page content", () => {
    render(<NotFoundContent />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByText(/The page you're looking for doesn't exist/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Return Home" }),
    ).toBeInTheDocument();
  });
});
