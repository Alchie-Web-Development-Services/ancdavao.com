import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ForgotPasswordForm from "./index";
import { vi } from "vitest";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

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

  beforeEach(() => {
    mockResetPassword.mockClear();
    toast.success.mockClear();
    toast.error.mockClear();
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
    expect(screen.getByRole("button", { name: "Reset Password" })).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Reset Password" }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    await waitFor(() => {
      expect(mockResetPassword).toHaveBeenCalledWith("test@example.com");
      expect(toast.success).toHaveBeenCalledWith("Password reset email sent! Check your inbox.");
      expect(screen.getByRole("button", { name: "Reset Password" })).toBeEnabled();
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
      expect(screen.getByRole("button", { name: "Reset Password" })).toBeEnabled();
    });
  });

  it("redirects if user is logged in", () => {
    const mockPush = vi.fn();
    require("next/router").useRouter.mockReturnValue({ push: mockPush });
    mockUseAuth.mockReturnValue({
      user: { uid: "123" },
      loading: false,
    });

    render(<ForgotPasswordForm />);

    expect(mockPush).toHaveBeenCalledWith("/my/account");
  });

  it("shows loading state", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      loading: true,
    });

    const { container } = render(<ForgotPasswordForm />);
    expect(container.firstChild).toHaveClass("flex"); // Assuming Loading component is rendered
  });
});
