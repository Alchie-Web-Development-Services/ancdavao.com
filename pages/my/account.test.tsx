import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MyAccount from "../../pages/my/account";
import { vi } from "vitest";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";

// Mock useRouter
vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

// Mock useAuth
vi.mock("@/context/AuthContext", () => ({
  useAuth: vi.fn(),
}));

// Mock firebase auth signOut
vi.mock("firebase/auth", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    signOut: vi.fn(),
    getAuth: vi.fn(() => ({})), // Mock getAuth
  };
});

describe("MyAccount", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", () => {
    (useAuth as vi.Mock).mockReturnValue({
      user: null,
      loading: true,
    });
    render(<MyAccount />);
    expect(screen.getByText("Loading user data...")).toBeInTheDocument();
  });

  it("redirects to login if no user is authenticated", () => {
    (useAuth as vi.Mock).mockReturnValue({
      user: null,
      loading: false,
    });
    render(<MyAccount />);
    expect(screen.getByText("Redirecting to login...")).toBeInTheDocument();
    expect(mockPush).toHaveBeenCalledWith("/auth/login");
  });

  it("renders account details and handles logout", async () => {
    const mockUser = {
      displayName: "Test User",
      email: "test@example.com",
    };
    (useAuth as vi.Mock).mockReturnValue({
      user: mockUser,
      loading: false,
    });
    render(<MyAccount />);

    expect(screen.getByText("Nespola Account")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test User" })).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-email")).toHaveTextContent("test@example.com");
            expect(screen.getByRole("heading", { name: "Personal information" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Personal information" })).toBeInTheDocument();
    expect(screen.getByText("Billing & Payments")).toBeInTheDocument();
    expect(screen.getByText("Order History")).toBeInTheDocument();
    expect(screen.getByText("Gift Cards")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByText("07 July 1993")).toBeInTheDocument();
    expect(screen.getByText("Country Region")).toBeInTheDocument();
    expect(screen.getByText("Philippines, Davao City")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("English (US) - English")).toBeInTheDocument();
    expect(screen.getByText("Contactable at")).toBeInTheDocument();
    expect(screen.getByText("Contactable at")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-email")).toHaveTextContent("test@example.com");
    expect(screen.getByText("Contactable at")).toBeInTheDocument();
    expect(screen.getByText(mockUser.email, { selector: 'p.text-gray-700' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Sign out" }));

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledWith(expect.anything());
      expect(mockPush).toHaveBeenCalledWith("/auth/login");
    });
  });
});
