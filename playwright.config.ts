import { defineConfig, devices } from "@playwright/test";

// Uma raia (worktree de issue) sem PORT reusaria em silencio o servidor da main
// em 3100 (reuseExistingServer). Fora de raia, 3100 continua o padrao.
const inWorktree = process.cwd().includes("/.claude/worktrees/");
if (inWorktree && !process.env["PORT"]) {
  throw new Error("Raia sem PORT: rode via bin/raia <n> -- pnpm test:e2e");
}
const PORT = Number(process.env["PORT"] ?? 3100);
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
