import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

// Mock useFetchJson hook before importing the component
vi.mock("@/hooks/useFetchJson", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    data: {
      "General Questions": [
        {
          question: "What is ANC Davao?",
          answer: "ANC Davao is a non-profit organization...",
        },
        {
          question: "Where is ANC Davao located?",
          answer: "We are located in Davao City.",
        },
      ],
      Donations: [
        {
          question: "How can I donate?",
          answer: "You can donate via our website.",
        },
      ],
    },
    loading: false,
    error: null,
  })),
}));

// Mock next/link before importing the component
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// Mock FAQItem component
vi.mock("../FAQItem", () => ({
  __esModule: true,
  default: vi.fn(
    ({ question, answer }: { question: string; answer: string }) => (
      <div data-testid="faq-item">
        <button
          onClick={() => {}}
          aria-expanded="false"
          aria-controls={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {question}
        </button>
        <div id={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}>
          {answer}
        </div>
      </div>
    ),
  ),
}));

import FAQSection from "./index";

describe("FAQSection", () => {
  it("renders the FAQ section with categories and questions", () => {
    render(<FAQSection />);

    expect(screen.getByText("How Can We Help You?")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "General Questions" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Donations" }),
    ).toBeInTheDocument();
    expect(screen.getByText("What is ANC Davao?")).toBeInTheDocument();
    expect(screen.getByText("Where is ANC Davao located?")).toBeInTheDocument();
  });

  it("allows switching between categories", () => {
    render(<FAQSection />);

    // Initial category should be "General Questions"
    const generalQuestionsButton = screen.getByRole("button", {
      name: "General Questions",
    });
    expect(generalQuestionsButton).toHaveClass("bg-primary-100");

    // Click on Donations category
    const donationsButton = screen.getByRole("button", { name: "Donations" });
    fireEvent.click(donationsButton);

    // Now Donations should be active
    expect(donationsButton).toHaveClass("bg-primary-100");
    expect(screen.getByText("How can I donate?")).toBeInTheDocument();
  });

  it("shows contact information", () => {
    render(<FAQSection />);

    expect(screen.getByText("Still have questions?")).toBeInTheDocument();
    expect(screen.getByText("Need more help?")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Support")).toBeInTheDocument();
  });
});
