import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

/**
 * Unit / component test runner. E2E lives under `e2e/` and is driven by
 * Playwright instead (see playwright.config.ts). The `@/*` path alias is
 * resolved natively from tsconfig via `resolve.tsconfigPaths`.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules/**", "e2e/**", ".next/**"],
    css: true,
  },
});
