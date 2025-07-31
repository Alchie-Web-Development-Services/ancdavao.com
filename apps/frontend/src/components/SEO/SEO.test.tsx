import React from "react";
import { render } from "@testing-library/react";
import SEO from "./index";
import { useRouter } from "next/router";
import { vi } from "vitest";

// Mock useRouter
vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

// Mock next/head
vi.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      // Directly manipulate document.title for testing purposes
      if (
        typeof children === "object" &&
        children !== null &&
        "type" in children &&
        children.type === "title"
      ) {
        Object.defineProperty(document, "title", {
          writable: true,
          value: children.props.children,
        });
      }
      return <>{children}</>;
    },
  };
});

describe("SEO", () => {
  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({
      asPath: "/test-path",
    });
  });

  it("renders default meta tags when no props are provided", () => {
    render(<SEO />);

    expect(document.title).toBe("ANC Davao - Advancing the Kingdom of God");
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "Advancing the Kingdom of God through discipleship, community, and service in Davao City and beyond.",
    );
    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute(
      "content",
      "ANC Davao, church, Davao, Christian, discipleship, community, service, kingdom of God",
    );
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "ANC Davao - Advancing the Kingdom of God",
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://ancdavao.com/test-path",
    );
  });

  it("renders custom meta tags when props are provided", () => {
    render(
      <SEO
        title="Custom Title"
        description="Custom Description"
        keywords="custom, keywords"
        ogImage="/custom-image.png"
        ogUrl="https://example.com/custom-path"
      />,
    );

    expect(document.title).toBe("Custom Title | ANC Davao");
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "Custom Description",
    );
    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute(
      "content",
      "custom, keywords",
    );
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Custom Title",
    );
    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "/custom-image.png",
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://example.com/custom-path",
    );
  });
});
