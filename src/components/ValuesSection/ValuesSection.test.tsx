import { render, screen } from "@testing-library/react";
import ValuesSection from "./index";

describe("ValuesSection", () => {
  it("renders the Our Values section with titles and descriptions", () => {
    render(<ValuesSection />);

    expect(screen.getByText("Our Values")).toBeInTheDocument();
    expect(screen.getByText("Community")).toBeInTheDocument();
    expect(screen.getByText("Empowerment")).toBeInTheDocument();
    expect(screen.getByText("Compassion")).toBeInTheDocument();
    expect(screen.getByText("Inclusivity")).toBeInTheDocument();
  });
});
