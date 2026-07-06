import { expect, test } from "@playwright/test";

/**
 * Smoke test: boots a real production server and confirms the app responds and
 * renders. Replace/extend with real user-flow tests as features land (Fase 6).
 */
test("home page loads and renders", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.locator("body")).toBeVisible();
});
