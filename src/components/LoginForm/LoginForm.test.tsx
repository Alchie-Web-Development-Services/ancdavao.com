import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./index";
import { vi } from "vitest";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

// Mock firebase auth functions
vi.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(() => ({})), // Mock getAuth as well if it's used internally by auth
}));

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

// Mock GoogleSignInButton and FacebookSignInButton
vi.mock("@/components/GoogleSignInButton", () => ({
  __esModule: true,
  default: ({ onError }: { onError: (message: string) => void }) => (
    <button onClick={() => onError("Google error")} data-testid="google-signin-button">Google Sign In</button>
  ),
}));

vi.mock("@/components/FacebookSignInButton", () => ({
  __esModule: true,
  default: ({ onError }: { onError: (message: string) => void }) => (
    <button onClick={() => onError("Facebook error")} data-testid="facebook-signin-button">Facebook Sign In</button>
  ),
}));

describe("LoginForm", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
    (signInWithEmailAndPassword as vi.Mock).mockClear();
    mockPush.mockClear();
  });

  it("renders the login form", () => {
    render(<LoginForm />);

    expect(screen.getByText("Welcome Back!")).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("handles successful login", async () => {
    (signInWithEmailAndPassword as vi.Mock).mockResolvedValueOnce({});

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "password123" } });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), "test@example.com", "password123");
      expect(mockPush).toHaveBeenCalledWith("/my/account");
      expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
    });
  });

  it("displays error message on failed login", async () => {
    const errorMessage = "Invalid credentials";
    (signInWithEmailAndPassword as vi.Mock).mockRejectedValueOnce(new Error(errorMessage));

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "wrongpassword" } });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
      expect(mockPush).not.toHaveBeenCalled();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it("navigates to register page", () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByText("Register"));
    expect(mockPush).toHaveBeenCalledWith("/auth/register");
  });
});
