import { render, screen } from "@testing-library/react";
import MyAccountSidebar from "./index";
import { vi } from "vitest";

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/my/account", // Mock the current pathname
  }),
}));

describe("MyAccountSidebar", () => {
  it("renders the sidebar with user info and navigation links", () => {
    render(
      <MyAccountSidebar fullName="John Doe" email="john.doe@example.com" />,
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Personal information" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pledge" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Donation History" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Sponsorships" }),
    ).toBeInTheDocument();
  });
});
