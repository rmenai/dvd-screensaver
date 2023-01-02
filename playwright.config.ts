import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

// See https://playwright.dev/docs/test-configuration.
const config: PlaywrightTestConfig = {
  testDir: "tests/e2e",
  outputDir: "tests/e2e/artifacts",
  snapshotDir: "tests/snapshots",

  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [["html", { outputFolder: "tests/e2e/report" }]],
  use: { trace: "retain-on-failure" },

  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://localhost:3000",
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        baseURL: "http://localhost:3000",
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        baseURL: "http://localhost:3000",
      },
    },
  ],

  // Run your local dev server before starting the tests.
  webServer: {
    reuseExistingServer: !process.env.CI,
    command: "npm run preview",
    port: 3000,
  },
};

export default config;
