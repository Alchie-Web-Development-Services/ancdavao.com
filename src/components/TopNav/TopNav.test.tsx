import { render, screen } from "@testing-library/react";
import TopNav from "./index";

describe("TopNav", () => {
  it("renders contact information and social media links", () => {
    render(<TopNav />);

    expect(screen.getByText("California, TX 70240")).toBeInTheDocument();
    expect(screen.getByText("Info@Gmail.Com")).toBeInTheDocument();
    expect(screen.getByText("+123 456 7890")).toBeInTheDocument();

    expect(screen.getByLabelText("facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("dribbble")).toBeInTheDocument();
    expect(screen.getByLabelText("pinterest")).toBeInTheDocument();
  });
});
