import { render, screen, fireEvent } from "@testing-library/react";
import FAQItem from "./index";

describe("FAQItem", () => {
  it("renders the FAQ item and toggles answer visibility", () => {
    const question = "Test Question";
    const answer = "Test Answer";

    render(<FAQItem question={question} answer={answer} />);

    // Check if question is rendered
    expect(screen.getByText(question)).toBeInTheDocument();

    // Answer should be hidden initially
    const answerContainer = screen.getByText(answer).parentElement;
    expect(answerContainer).toHaveClass("hidden");

    // Click question to show answer
    fireEvent.click(screen.getByText(question));
    expect(answerContainer).toHaveClass("block");

    // Click question again to hide answer
    fireEvent.click(screen.getByText(question));
    expect(answerContainer).toHaveClass("hidden");
  });
});
