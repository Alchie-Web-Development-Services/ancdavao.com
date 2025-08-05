import { render, screen } from "@testing-library/react";
import PledgeProgressBar from "./index";

describe("PledgeProgressBar", () => {
  it("renders the progress bar with the correct width", () => {
    render(<PledgeProgressBar progress={0.5} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveStyle("width: 50%");
  });

  it("renders with 0% width when progress is 0", () => {
    render(<PledgeProgressBar progress={0} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveStyle("width: 0%");
  });

  it("renders with 100% width when progress is 1", () => {
    render(<PledgeProgressBar progress={1} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveStyle("width: 100%");
  });
});
