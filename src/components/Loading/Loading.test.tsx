import { render, screen } from "@testing-library/react";
import Loading from "./index";

describe("Loading", () => {
  it("renders the loading spinner", () => {
    render(<Loading />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
