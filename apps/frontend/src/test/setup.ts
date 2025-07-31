import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Clean up after each test file
afterEach(() => {
  cleanup();
});

// Optional: if you have a server to close or other global setup/teardown
// beforeAll(() => { /* ... */ });
// afterAll(() => { /* ... */ });
