import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

describe("Header", () => {
  it("renders the header with navigation links and a donate button", () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByRole("link", { name: "ANC DAVAO" })).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Event")).toBeInTheDocument();
    expect(screen.getByText("Causes")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Pages")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Donate Now")).toBeInTheDocument();
  });
});
