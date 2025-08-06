import React from "react";
import { render, screen } from "@testing-library/react";
import { PledgeDisplay } from "./PledgeDisplay";

describe("PledgeDisplay", () => {
  const mockPledgeData = {
    amount: 1000,
    currency: "₱",
    timeframe: 30, // days
    fulfilled: 200,
    reminders: [
      { day: 1, sent: true },
      { day: 3, sent: false },
      { day: 7, sent: false },
    ],
    level: "Bronze",
    badges: ["First Donation Made"],
    progress: 0.2, // 20%
    autoPay: false,
    impact: {
      kidsFed: 1,
      weeks: 1,
    },
    urgent: {
      percentFunded: 85,
      amountNeeded: 5000,
      deadline: "2025-08-12",
    },
  };

  it("renders the pledge amount and timeframe from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(screen.getByText(/₱1000 pledged in 30 days/i)).toBeInTheDocument();
  });

  it("renders the fulfilled amount from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(
      screen.getByText(/you have fulfilled ₱200 so far./i),
    ).toBeInTheDocument();
  });

  it("renders the Donate Now button", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(
      screen.getByRole("button", { name: /donate now/i }),
    ).toBeInTheDocument();
  });

  it("renders the pledge level from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(screen.getByText(/bronze/i)).toBeInTheDocument();
  });

  it("renders the badges from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(screen.getByText(/first donation made/i)).toBeInTheDocument();
  });

  it("renders the urgency section with funded percentage from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(screen.getByText(/85% funded/i)).toBeInTheDocument();
  });

  it("renders the impact section with kids fed and weeks from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(
      screen.getByText((content, element) => {
        const hasText = (node) =>
          node.textContent ===
          "You have helped feed 1 kid(s) for 1 week(s) so far!";
        const elementHasText = hasText(element);
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child),
        );
        return elementHasText && childrenDontHaveText;
      }),
    ).toBeInTheDocument();
  });

  it("renders the auto-pay checkbox from mock data", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(
      screen.getByText(/enable auto-pay for monthly giving/i),
    ).toBeInTheDocument();
  });

  it("renders the Trust & Transparency links", () => {
    render(<PledgeDisplay mockPledgeData={mockPledgeData} />);
    expect(
      screen.getByRole("link", { name: /financial transparency/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /previous successful projects/i }),
    ).toBeInTheDocument();
  });
});
