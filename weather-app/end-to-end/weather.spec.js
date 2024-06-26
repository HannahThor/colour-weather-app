// @ts-check
import { test, expect } from "@playwright/test";

test("find weather in london", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://stitch-the-weather.netlify.app/");

  const title = await page.getByRole("heading", { name: "Stitch the Weather" });

  // Expect a title "to contain" a substring.
  await expect(title).toContainText("Stitch the Weather");

  const inputbox = await page.getByRole("searchbox");

  await expect(inputbox).toBeEmpty();

  await inputbox.fill("London");

  await expect(inputbox).toHaveValue("London");

  const button = await page.getByRole("img");

  await expect(button).toBeVisible();

  await button.click({ force: true });

  await page.waitForSelector(".weather-icon");

  const highTemp = page.getByLabel("high-temp");

  await expect(highTemp).toBeVisible();

  const weatherDescription = page.getByLabel("weather-description");

  await expect(weatherDescription).toBeVisible();
});
