// @ts-check
import { test, expect } from "@playwright/test";

test("loading page", async ({ page }) => {
  await page.goto("https://stitch-the-weather.netlify.app");

  const title = await page.getByRole("heading", { name: "Stitch the Weather" });

  // Expect a title "to contain" a substring.
  await expect(title).toContainText("Stitch the Weather");
});
