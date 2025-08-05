import { render, screen } from "@testing-library/react";
import MomentsOfHopeSection from "./index";

describe("MomentsOfHopeSection", () => {
  const mockMoments = [
    {
      _id: "1",
      title: "Feeding Program Success",
      date: "2023-01-15T00:00:00Z",
      link: "/moments-of-hope/feeding-program-success",
    },
    {
      _id: "2",
      title: "New Scholarship Grant",
      date: "2023-02-20T00:00:00Z",
      link: "/moments-of-hope/new-scholarship-grant",
    },
  ];

  it("renders the section title", () => {
    render(<MomentsOfHopeSection momentsOfHope={mockMoments} />);
    expect(screen.getByText("Moments of Hope")).toBeInTheDocument();
  });

  it("renders each moment of hope with title, date, and link", () => {
    render(<MomentsOfHopeSection momentsOfHope={mockMoments} />);

    mockMoments.forEach((moment, index) => {
      expect(screen.getByText(moment.title)).toBeInTheDocument();
      expect(screen.getByText(new Date(moment.date).toLocaleDateString())).toBeInTheDocument();
                  expect(screen.getAllByRole("link", { name: "Learn More" })[index]).toHaveAttribute("href", moment.link);
    });
  });

  it("renders without links if link is not provided", () => {
    const momentsWithoutLink = [
      {
        _id: "3",
        title: "Community Outreach",
        date: "2023-03-10T00:00:00Z",
        link: null,
      },
    ];
    render(<MomentsOfHopeSection momentsOfHope={momentsWithoutLink} />);
    expect(screen.queryByRole("link", { name: "Learn More" })).not.toBeInTheDocument();
  });
});
