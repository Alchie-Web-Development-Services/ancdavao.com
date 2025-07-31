import { render } from "@testing-library/react";
import ScrollToTop from "./index";

describe("ScrollToTop", () => {
  it("renders null", () => {
    const { container } = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });
});
