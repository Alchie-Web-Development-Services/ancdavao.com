import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from "./index";
import { vi } from "vitest";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

// Mock firebase auth functions
vi.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: vi.fn(),
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
    <button
      onClick={() => onError("Google error")}
      data-testid="google-signin-button"
    >
      Google Sign In
    </button>
  ),
}));

vi.mock("@/components/FacebookSignInButton", () => ({
  __esModule: true,
  default: ({ onError }: { onError: (message: string) => void }) => (
    <button
      onClick={() => onError("Facebook error")}
      data-testid="facebook-signin-button"
    >
      Facebook Sign In
    </button>
  ),
}));

describe("RegisterForm", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
    (createUserWithEmailAndPassword as vi.Mock).mockClear();
    mockPush.mockClear();
  });

  it("renders the registration form", () => {
    render(<RegisterForm />);

    expect(screen.getByText("Create an Account")).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("handles successful registration", async () => {
    (createUserWithEmailAndPassword as vi.Mock).mockResolvedValueOnce({});

    render(<RegisterForm />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Register" }));

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        expect.any(Object),
        "test@example.com",
        "password123",
      );
      expect(mockPush).toHaveBeenCalledWith("/my/account");
      expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
    });
  });

  it("displays error message on failed registration", async () => {
    const errorMessage = "Email already in use";
    (createUserWithEmailAndPassword as vi.Mock).mockRejectedValueOnce(
      new Error(errorMessage),
    );

    render(<RegisterForm />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Register" }));

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(mockPush).not.toHaveBeenCalled();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it("navigates to login page", () => {
    render(<RegisterForm />);
    fireEvent.click(screen.getByText("Login"));
    expect(mockPush).toHaveBeenCalledWith("/auth/login");
  });
});
