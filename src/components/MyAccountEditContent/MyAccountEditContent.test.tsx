import { render, screen, fireEvent, act } from "@testing-library/react";
import MyAccountEditContent from "./index";
import { vi } from "vitest";
import * as userService from "@/services/userService";

// Mock the userService module
vi.mock("@/services/userService", () => ({
  updateUserProfile: vi.fn(),
}));

describe("MyAccountEditContent", () => {
  it("renders the edit personal information heading and form fields", () => {
    const mockUserProfile = {
      uid: "123",
      email: "test@example.com",
      displayName: "Test User",
      firstName: "Test",
      lastName: "User",
      phoneNumber: "123-456-7890",
      address: "123 Test St",
      city: "Testville",
      country: "Testland",
      postalCode: "12345",
    };

    render(<MyAccountEditContent userProfile={mockUserProfile} />);

    expect(
      screen.getByRole("heading", { name: "Edit Personal Information" }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postal Code/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Save Changes/i }),
    ).toBeInTheDocument();
  });

  it("calls updateUserProfile on form submission", async () => {
    const mockUserProfile = {
      uid: "123",
      email: "test@example.com",
      displayName: "Test User",
      firstName: "Test",
      lastName: "User",
      phoneNumber: "123-456-7890",
      address: "123 Test St",
      city: "Testville",
      country: "Testland",
      postalCode: "12345",
    };

    render(<MyAccountEditContent userProfile={mockUserProfile} />);

    const saveButton = screen.getByRole("button", { name: /Save Changes/i });
    await act(async () => {
      fireEvent.click(saveButton);
    });

    expect(userService.updateUserProfile).toHaveBeenCalledWith(
      mockUserProfile.uid,
      {
        firstName: mockUserProfile.firstName,
        lastName: mockUserProfile.lastName,
        phoneNumber: mockUserProfile.phoneNumber,
        address: mockUserProfile.address,
        city: mockUserProfile.city,
        country: mockUserProfile.country,
        postalCode: mockUserProfile.postalCode,
      },
    );
  });
});
