import { render, screen } from "@testing-library/react";
import PrivateLayout from "./index";

import { vi } from "vitest";

// Mock MyProvider to avoid context issues in isolated tests
vi.mock("@/context/MyContext", () => ({
  MyProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="my-provider">{children}</div>
  ),
}));

describe("PrivateLayout", () => {
  it("renders children within MyProvider", () => {
    render(
      <PrivateLayout>
        <div data-testid="child-component">Test Child</div>
      </PrivateLayout>,
    );

    expect(screen.getByTestId("my-provider")).toBeInTheDocument();
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
