import test from "@playwright/test";

test("Simple google test @Test1", async ({ page }) => {
  // test codes
  await page.goto("https://www.google.com");

  await page.waitForTimeout(3000);

  // await page.locator("button").click();
});
//const {test} = require("@playwright/test");
