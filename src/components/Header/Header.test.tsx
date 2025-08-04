import { render, screen } from "@testing-library/react";
import Header from "./index";
import { vi } from "vitest";
import { useRouter } from "next/router";

// Mock useRouter
vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("renders the header with navigation links and a donate button", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: "ANC Davao Logo Archdiocesan Nourishment Center",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Causes")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Join the Mission")).toBeInTheDocument();
  });
});
