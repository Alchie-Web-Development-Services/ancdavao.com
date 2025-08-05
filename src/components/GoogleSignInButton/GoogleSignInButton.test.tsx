import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GoogleSignInButton from "./index";
import { vi } from "vitest";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

// Mock firebase auth functions
vi.mock("firebase/auth", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    GoogleAuthProvider: vi.fn(() => ({})),
    signInWithPopup: vi.fn(),
    getAuth: vi.fn(() => ({})),
  };
});

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

describe("GoogleSignInButton", () => {
  it("renders the button and handles successful sign-in", async () => {
    const mockOnError = vi.fn();
    const mockPush = vi.fn();
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
    (signInWithPopup as vi.Mock).mockResolvedValueOnce({});

    render(<GoogleSignInButton onError={mockOnError} />);

    expect(screen.getByRole("button", { name: /Sign in with Google/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Sign in with Google/i }));

    await waitFor(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith("/my/account");
      expect(mockOnError).not.toHaveBeenCalled();
    });
  });

  it("calls onError on sign-in failure", async () => {
    const mockOnError = vi.fn();
    const mockPush = vi.fn();
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
    const errorMessage = "Google sign-in failed";
    (signInWithPopup as vi.Mock).mockRejectedValueOnce(new Error(errorMessage));

    render(<GoogleSignInButton onError={mockOnError} />);

    fireEvent.click(screen.getByRole("button", { name: /Sign in with Google/i }));

    await waitFor(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(mockPush).not.toHaveBeenCalled();
      expect(mockOnError).toHaveBeenCalledWith(errorMessage);
    });
  });
});
