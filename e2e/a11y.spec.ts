import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

/**
 * Accessibility gate: the app must have ZERO WCAG 2.2 AA violations. Automated
 * axe covers ~30–40% of WCAG; the rest (keyboard walkthrough, screen-reader
 * smoke, focus order) is manual per docs/standards/ui-ux.md.
 *
 * As pages/flows land, add tests here that navigate and re-run `.analyze()` on
 * the revealed UI (dialogs, expanded content, error states).
 */
test("home page has no WCAG 2.2 AA violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});
