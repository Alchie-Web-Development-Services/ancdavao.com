import { render, screen } from "@testing-library/react";
import CausesSection from "./index";

describe("CausesSection", () => {
  it("renders the causes section with a title and cause cards", () => {
    const mockCauses = [
      {
        _id: "1",
        _type: "cause",
        title: "Support for Children",
        slug: { current: "support-for-children" },
        startDate: "",
        endDate: "",
        goalAmount: 1000,
        raised: 500,
        descriptionRaw: [
          {
            _key: "abc",
            _type: "block",
            children: [
              {
                _key: "def",
                _type: "span",
                marks: [],
                text: "Description for Support for Children.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        mainImage: null,
      },
      {
        _id: "2",
        _type: "cause",
        title: "Food for Syrian",
        slug: { current: "food-for-syrian" },
        startDate: "",
        endDate: "",
        goalAmount: 2000,
        raised: 1000,
        descriptionRaw: [
          {
            _key: "abc",
            _type: "block",
            children: [
              {
                _key: "def",
                _type: "span",
                marks: [],
                text: "Description for Food for Syrian.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        mainImage: null,
      },
      {
        _id: "3",
        _type: "cause",
        title: "Uganda Education",
        slug: { current: "uganda-education" },
        startDate: "",
        endDate: "",
        goalAmount: 3000,
        raised: 1500,
        descriptionRaw: [
          {
            _key: "abc",
            _type: "block",
            children: [
              {
                _key: "def",
                _type: "span",
                marks: [],
                text: "Description for Uganda Education.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        mainImage: null,
      },
    ];

    render(<CausesSection causes={mockCauses} />);

    expect(screen.getByText("Popular Causes")).toBeInTheDocument();
    expect(screen.getByText("Support for Children")).toBeInTheDocument();
    expect(screen.getByText("Food for Syrian")).toBeInTheDocument();
    expect(screen.getByText("Uganda Education")).toBeInTheDocument();
  });
});
