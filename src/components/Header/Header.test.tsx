import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("renders the header with navigation links and a donate button", () => {
    render(<Header />);

    expect(screen.getByText("ANC Davao")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByText("Get Involved")).toBeInTheDocument();
    expect(screen.getByText("Stories & Impact")).toBeInTheDocument();
    expect(screen.getByText("News & Events")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Donate")).toBeInTheDocument();
  });
});
