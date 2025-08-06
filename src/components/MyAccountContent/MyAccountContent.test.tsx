import { render, screen } from "@testing-library/react";
import MyAccountContent from "./index";

describe("MyAccountContent", () => {
  const mockUserProfile = {
    uid: "123",
    email: "test@example.com",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    address: "123 Test St",
    city: "Test City",
    country: "Test Country",
    postalCode: "12345",
    onboarded: true,
  };

  it("renders personal information correctly", () => {
    render(
      <MyAccountContent userProfile={mockUserProfile} fullName="John Doe" />,
    );

    expect(screen.getByText("Personal information")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("123 Test St")).toBeInTheDocument();
    expect(screen.getByText("Test City")).toBeInTheDocument();
    expect(screen.getByText("Test Country")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });

  it("renders 'N/A' for missing information", () => {
    const incompleteProfile = {
      uid: "123",
      email: "test@example.com",
    };

    render(
      <MyAccountContent userProfile={incompleteProfile} fullName="Test User" />,
    );

    expect(screen.getAllByText("N/A").length).toBeGreaterThan(0);
  });
});
