import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Set up environment variables for testing
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "test-project-id";
process.env.NEXT_PUBLIC_SANITY_DATASET = "test-dataset";

// Clean up after each test file
afterEach(() => {
  cleanup();
});

// Optional: if you have a server to close or other global setup/teardown
// beforeAll(() => { /* ... */ });
// afterAll(() => { /* ... */ });
