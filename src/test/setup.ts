import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Set up environment variables for testing
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "test-project-id";
process.env.NEXT_PUBLIC_SANITY_DATASET = "test-dataset";

// Mock the @/lib/sanity module
vi.mock("@/lib/sanity", () => ({
  urlFor: vi.fn((source) => {
    // Return a simple string for the URL in tests
    return {
      url: () =>
        `http://localhost/test-image/${source._ref || "placeholder"}.jpg`,
    };
  }),
  client: {}, // Mock client if it's imported elsewhere
  SANITY_GRAPHQL_URL: "http://localhost/graphql", // Mock the URL
}));

// Clean up after each test file
afterEach(() => {
  cleanup();
});

// Optional: if you have a server to close or other global setup/teardown
// beforeAll(() => { /* ... */ });
// afterAll(() => { /* ... */ });
