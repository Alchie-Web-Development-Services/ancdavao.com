import { render, screen, fireEvent } from "@testing-library/react";
import MyAccountHeader from "./index";

describe("MyAccountHeader", () => {
  it("renders the header with title and sign out button", () => {
    const mockOnLogout = vi.fn();
    render(<MyAccountHeader onLogout={mockOnLogout} />);

    expect(screen.getByText("My Account")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Sign out" }),
    ).toBeInTheDocument();
  });

  it("calls onLogout when sign out button is clicked", () => {
    const mockOnLogout = vi.fn();
    render(<MyAccountHeader onLogout={mockOnLogout} />);

    fireEvent.click(screen.getByRole("button", { name: "Sign out" }));
    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
