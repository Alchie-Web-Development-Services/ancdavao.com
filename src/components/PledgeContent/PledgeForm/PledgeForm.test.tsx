import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { PledgeForm } from "./PledgeForm";
import { vi } from "vitest";
import * as pledgeService from "@/services/pledgeService";

// Mock the pledgeService and authContext modules
vi.mock("@/services/pledgeService", () => ({
  createPledge: vi.fn(),
  updatePledge: vi.fn(),
}));

vi.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    user: { uid: "test-uid" },
    loading: false,
  }),
}));

describe("PledgeForm", () => {
  const mockPledge = {
    uid: "test-uid",
    amount: 1000,
    frequency: "monthly",
    startDate: "2025-01-01",
  };

  it("renders the pledge form fields", () => {
    render(<PledgeForm pledge={null} />);
    expect(screen.getByLabelText(/Pledge Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Frequency/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Save Pledge/i }),
    ).toBeInTheDocument();
  });

  it("populates form fields when a pledge is provided", () => {
    render(<PledgeForm pledge={mockPledge} />);
    expect(screen.getByLabelText(/Pledge Amount/i)).toHaveValue(
      mockPledge.amount,
    );
    expect(screen.getByLabelText(/Frequency/i)).toHaveValue(
      mockPledge.frequency,
    );
    expect(screen.getByLabelText(/Start Date/i)).toHaveValue(
      mockPledge.startDate,
    );
  });

  it("calls createPledge on form submission if no existing pledge", async () => {
    render(<PledgeForm pledge={null} />);

    fireEvent.change(screen.getByLabelText(/Pledge Amount/i), {
      target: { value: 500 },
    });
    fireEvent.change(screen.getByLabelText(/Frequency/i), {
      target: { value: "annually" },
    });
    fireEvent.change(screen.getByLabelText(/Start Date/i), {
      target: { value: "2025-03-15" },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Save Pledge/i }));
    });

    expect(pledgeService.createPledge).toHaveBeenCalledWith("test-uid", {
      amount: 500,
      frequency: "annually",
      startDate: "2025-03-15",
      uid: "test-uid",
    });
  });

  it("calls updatePledge on form submission if an existing pledge is present", async () => {
    render(<PledgeForm pledge={mockPledge} />);

    fireEvent.change(screen.getByLabelText(/Pledge Amount/i), {
      target: { value: 1500 },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Save Pledge/i }));
    });

    expect(pledgeService.updatePledge).toHaveBeenCalledWith(mockPledge.uid, {
      ...mockPledge,
      amount: 1500,
    });
  });
});
