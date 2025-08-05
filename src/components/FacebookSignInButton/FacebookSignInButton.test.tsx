import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FacebookSignInButton from "./index";
import { vi } from "vitest";
import { signInWithPopup } from "firebase/auth";

// Mock firebase auth functions
vi.mock("firebase/auth", () => ({
  FacebookAuthProvider: vi.fn(() => ({})),
  signInWithPopup: vi.fn(),
}));

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

describe("FacebookSignInButton", () => {
  it("renders the button and handles successful sign-in", async () => {
    const mockOnError = vi.fn();
    const mockPush = vi.fn();
    require("next/router").useRouter.mockReturnValue({ push: mockPush });
    (signInWithPopup as vi.Mock).mockResolvedValueOnce({});

    render(<FacebookSignInButton onError={mockOnError} />);

    expect(screen.getByRole("button", { name: /Sign in with Facebook/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Sign in with Facebook/i }));

    await waitFor(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith("/my/account");
      expect(mockOnError).not.toHaveBeenCalled();
    });
  });

  it("calls onError on sign-in failure", async () => {
    const mockOnError = vi.fn();
    const mockPush = vi.fn();
    require("next/router").useRouter.mockReturnValue({ push: mockPush });
    const errorMessage = "Facebook sign-in failed";
    (signInWithPopup as vi.Mock).mockRejectedValueOnce(new Error(errorMessage));

    render(<FacebookSignInButton onError={mockOnError} />);

    fireEvent.click(screen.getByRole("button", { name: /Sign in with Facebook/i }));

    await waitFor(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(mockPush).not.toHaveBeenCalled();
      expect(mockOnError).toHaveBeenCalledWith(errorMessage);
    });
  });
});
