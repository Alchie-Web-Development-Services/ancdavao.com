import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ForgotPasswordForm from "./index";
import { vi } from "vitest";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

// Mock Loading component
vi.mock("@/components/Loading", () => ({
  __esModule: true,
  default: () => <div data-testid="loading-component">Loading...</div>,
}));

// Mock useAuth hook
vi.mock("@/context/AuthContext", () => ({
  useAuth: vi.fn(),
}));

// Mock react-toastify
vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("ForgotPasswordForm", () => {
  const mockResetPassword = vi.fn();
  const mockUseAuth = useAuth as vi.Mock;
  const mockPush = vi.fn();

  beforeEach(() => {
    mockResetPassword.mockClear();
    toast.success.mockClear();
    toast.error.mockClear();
    mockPush.mockClear();
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
    mockUseAuth.mockReturnValue({
      resetPassword: mockResetPassword,
      user: null,
      loading: false,
    });
  });

  it("renders the form and handles successful password reset", async () => {
    render(<ForgotPasswordForm />);

    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Reset Password" }),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Reset Password" }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    await waitFor(() => {
      expect(mockResetPassword).toHaveBeenCalledWith("test@example.com");
      expect(toast.success).toHaveBeenCalledWith(
        "Password reset email sent! Check your inbox.",
      );
      expect(
        screen.getByRole("button", { name: "Reset Password" }),
      ).toBeEnabled();
    });
  });

  it("handles password reset failure", async () => {
    const errorMessage = "User not found";
    mockResetPassword.mockRejectedValueOnce(new Error(errorMessage));

    render(<ForgotPasswordForm />);

    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Reset Password" }));

    await waitFor(() => {
      expect(mockResetPassword).toHaveBeenCalledWith("test@example.com");
      expect(toast.error).toHaveBeenCalledWith(errorMessage);
      expect(
        screen.getByRole("button", { name: "Reset Password" }),
      ).toBeEnabled();
    });
  });
});
