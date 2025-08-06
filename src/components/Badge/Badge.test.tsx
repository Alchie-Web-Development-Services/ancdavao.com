import { render, screen } from "@testing-library/react";
import Badge from "./index";

describe("Badge", () => {
  it("renders the badge with the given label", () => {
    render(<Badge label="Test Badge" />);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });
});
