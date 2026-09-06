import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// The certificate modal is the one piece of real interactive UI on the site,
// so it gets its own behavioural + accessibility coverage rather than relying
// on the page-level scans, which only ever see it closed.

const PAGES_WITH_CERTIFICATES = ["/about", "/resume"];

for (const path of PAGES_WITH_CERTIFICATES) {
  test(`${path}: certificate opens, is accessible, and closes`, async ({ page }) => {
    await page.goto(path);

    const trigger = page.getByRole("button", { name: /NSQ Level 3.*open certificate/i });
    await expect(trigger).toBeVisible();

    await trigger.click();

    const dialog = page.getByRole("dialog", { name: /certificate/i });
    await expect(dialog).toBeVisible();

    // The credential images must actually load, not 404.
    const firstPage = dialog.getByRole("img").first();
    await expect(firstPage).toBeVisible();
    const loaded = await firstPage.evaluate(
      (img) => (img as HTMLImageElement).naturalWidth > 0
    );
    expect(loaded, "certificate image failed to load").toBe(true);

    // Verification and source-document links are the point of the feature.
    await expect(dialog.getByRole("link", { name: /verify with issuer/i })).toBeVisible();
    await expect(dialog.getByRole("link", { name: /original pdf/i })).toBeVisible();

    // Audit the page while the modal is open.
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    const seriousOrWorse = results.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? "")
    );
    expect(seriousOrWorse, JSON.stringify(seriousOrWorse, null, 2)).toEqual([]);

    // Native <dialog> should close on Escape.
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
}

test("/about: certificate modal closes via the Close button", async ({ page }) => {
  await page.goto("/about");
  await page.getByRole("button", { name: /NSQ Level 3.*open certificate/i }).click();

  const dialog = page.getByRole("dialog", { name: /certificate/i });
  await expect(dialog).toBeVisible();

  await dialog.getByRole("button", { name: /close/i }).click();
  await expect(dialog).toBeHidden();
});

test("a certification with no attached document renders as plain text", async ({ page }) => {
  await page.goto("/about");
  // ALX has no credential file, so it must not be a button.
  await expect(page.getByRole("button", { name: /ALX Software Engineering/i })).toHaveCount(0);
  await expect(page.getByText("ALX Software Engineering").first()).toBeVisible();
});
