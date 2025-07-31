import { render, screen } from "@testing-library/react";
import PageHeader from "./index";

describe("PageHeader", () => {
  it("renders the page header with a title and subtitle", () => {
    render(<PageHeader title="Test Title" subtitle="Test Subtitle" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });
});
