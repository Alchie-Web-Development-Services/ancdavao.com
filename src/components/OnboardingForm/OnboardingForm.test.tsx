import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OnboardingForm from "./index";
import { vi } from "vitest";
import { useAuth } from "@/context/AuthContext";
import { useMy } from "@/context/MyContext";
import { updateUserProfile, getUserProfile } from "@/services/userService";

// Mock hooks and services
vi.mock("@/context/AuthContext", () => ({
  useAuth: vi.fn(),
}));
vi.mock("@/context/MyContext", () => ({
  useMy: vi.fn(),
}));
vi.mock("@/services/userService", () => ({
  updateUserProfile: vi.fn(),
  getUserProfile: vi.fn(),
}));

import { useRouter } from "next/router";

// Mock next/router
import { useRouter } from "next/router";

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

describe("OnboardingForm", () => {
  const mockUseAuth = useAuth as vi.Mock;
  const mockUseMy = useMy as vi.Mock;
  const mockUpdateUserProfile = updateUserProfile as vi.Mock;
  const mockGetUserProfile = getUserProfile as vi.Mock;
  const mockPush = vi.fn();

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      user: { uid: "test-uid", email: "test@example.com" },
      loading: false,
    });
    mockUseMy.mockReturnValue({
      onboarded: false,
    });
    mockGetUserProfile.mockResolvedValue(null);
    mockUpdateUserProfile.mockResolvedValue({});
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form fields", () => {
    render(<OnboardingForm />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postal Code/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Complete Profile" }),
    ).toBeInTheDocument();
  });

  it("pre-fills form with existing user profile data", async () => {
    mockGetUserProfile.mockResolvedValue({
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "12345",
      address: "123 Main St",
      city: "Anytown",
      country: "USA",
      postalCode: "98765",
    });

    render(<OnboardingForm />);

    await waitFor(() => {
      expect(screen.getByLabelText(/First Name/i)).toHaveValue("Jane");
      expect(screen.getByLabelText(/Last Name/i)).toHaveValue("Doe");
      expect(screen.getByLabelText(/Phone Number/i)).toHaveValue("12345");
      expect(screen.getByLabelText(/Address/i)).toHaveValue("123 Main St");
      expect(screen.getByLabelText(/City/i)).toHaveValue("Anytown");
      expect(screen.getByLabelText(/Country/i)).toHaveValue("USA");
      expect(screen.getByLabelText(/Postal Code/i)).toHaveValue("98765");
    });
  });

  it("handles form submission and updates user profile", async () => {
    render(<OnboardingForm />);

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Smith" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Complete Profile" }));

    expect(screen.getByRole("button", { name: "Saving..." })).toBeDisabled();

    await waitFor(() => {
      expect(mockUpdateUserProfile).toHaveBeenCalledWith("test-uid", {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        onboarded: true,
      });
      expect(mockPush).toHaveBeenCalledWith("/my/account");
    });
  });

  it("redirects to /my/account if already onboarded", () => {
    mockUseMy.mockReturnValue({
      onboarded: true,
    });

    render(<OnboardingForm />);
    expect(mockPush).toHaveBeenCalledWith("/my/account");
  });

  it("redirects to /auth/login if user is not logged in", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      loading: false,
    });

    render(<OnboardingForm />);
    expect(mockPush).toHaveBeenCalledWith("/auth/login");
  });
});
