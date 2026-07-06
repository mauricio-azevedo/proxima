import { defineConfig, devices } from "@playwright/test";

// Próxima runs on 3100 (see package.json dev/start) to avoid clashing with
// other local dev servers on the default 3000.
const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

/**
 * End-to-end tests. These boot a real Next.js server and drive a real browser,
 * so they catch integration issues unit tests can't.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  // Fail CI if a `test.only` was committed by accident.
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["html", { open: "never" }], ["list"]] : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // Production build mirrors what ships; reused locally if already running.
    command: "pnpm build && pnpm start",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
