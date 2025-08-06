import { render, screen } from "@testing-library/react";
import TopNav from "./index";

describe("TopNav", () => {
  it("renders contact information and social media links", () => {
    render(<TopNav />);

    expect(
      screen.getByText("Pag-asa St, Brgy. 24-C, Fatima, Davao City"),
    ).toBeInTheDocument();
    expect(screen.getByText("info@ancdavao.com")).toBeInTheDocument();
    expect(screen.getByText("+63 (82) 285-1524")).toBeInTheDocument();

    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });
});
