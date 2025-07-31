import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("Logo", () => {
  it("renders the logo with version v1", () => {
    render(<Logo version="v1" />);
    expect(screen.getByAltText("ANC Davao Logo")).toBeInTheDocument();
  });

  it("renders the logo with version v2", () => {
    render(<Logo version="v2" />);
    expect(screen.getByAltText("ANC Davao Logo")).toBeInTheDocument();
  });
});
