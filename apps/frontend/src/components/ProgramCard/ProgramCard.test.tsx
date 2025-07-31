import { render, screen } from "@testing-library/react";
import ProgramCard from "./index";

describe("ProgramCard", () => {
  it("renders the program card with title, description, icon, and link", () => {
    render(
      <ProgramCard
        title="Test Program"
        description="This is a test description."
        icon={<span>💡</span>}
        link="/test-program"
      />,
    );

    expect(screen.getByText("Test Program")).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
    expect(screen.getByText("💡")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn more" }),
    ).toBeInTheDocument();
  });
});
