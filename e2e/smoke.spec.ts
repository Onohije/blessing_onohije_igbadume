import { test, expect } from "@playwright/test";

const PAGES = ["/", "/about", "/projects", "/resume", "/blog", "/contact", "/privacy"];

for (const path of PAGES) {
  test(`renders ${path} with a heading and no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("h1, h2").first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("primary navigation links to every main section", async ({ page }) => {
  await page.goto("/");
  for (const { name, href } of [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]) {
    await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name })).toHaveAttribute(
      "href",
      href
    );
  }
});

test("contact form rejects an incomplete submission client-side", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send message/i }).click();
  // Native HTML5 validation blocks submission; the success message must not appear.
  await expect(page.getByRole("status")).toHaveCount(0);
});
