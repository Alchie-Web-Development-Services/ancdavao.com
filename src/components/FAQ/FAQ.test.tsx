import { render, screen } from "@testing-library/react";
import FAQ from "./index";
import { vi } from "vitest";

// Mock useFetchJson hook
vi.mock("@/hooks/useFetchJson", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    data: {
      "General Questions": [
        {
          question: "Do I need a business plan?",
          answer:
            "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
        },
        {
          question: "How long should a business plan be?",
          answer:
            "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense do we. Uncommonly no questions. Letters do hastily futureBRANCH branch. ",
        },
      ],
      Donations: [],
      Volunteering: [],
      Programs: [],
      Partnerships: [],
    },
    loading: false,
    error: null,
  })),
}));

describe("FAQ", () => {
  it("renders the FAQ section with a title and accordion items", () => {
    render(<FAQ />);

    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Do I need a business plan?")).toBeInTheDocument();
    expect(
      screen.getByText("How long should a business plan be?"),
    ).toBeInTheDocument();
  });
});
