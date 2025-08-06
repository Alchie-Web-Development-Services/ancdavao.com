import { render, screen } from "@testing-library/react";
import ContactInfoSection from "./index";

describe("ContactInfoSection", () => {
  it("renders the contact information section", () => {
    render(<ContactInfoSection />);

    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(screen.getByText("Our Location")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Email Address")).toBeInTheDocument();
  });
});
