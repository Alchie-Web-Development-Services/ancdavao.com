import React from "react";
import { render, screen } from "@testing-library/react";
import { PledgeContent } from "./index";
import { vi } from "vitest";

// Mock the AuthContext module as it's used in PledgeContent
vi.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    user: { uid: "test-uid" },
    loading: false,
  }),
}));

describe("PledgeContent", () => {
  it("renders the My Pledge heading", () => {
    render(<PledgeContent pledge={null} />);
    expect(
      screen.getByRole("heading", { name: /my pledge/i }),
    ).toBeInTheDocument();
  });
});
