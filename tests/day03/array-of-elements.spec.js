import { test, expect } from "@playwright/test";
let elements;

test.describe("Array of Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify there are 50 links", async ({ page }) => {
    // let count = await elements.count();
    // expect(count).toBe(50);
    await expect(elements).toHaveLength(50);
    //console.log(count);
  });

  test("Verify those 50 links are visible and clickable", async ({ page }) => {
    // await page.goto("https://the-internet-5chk.onrender.com/");
    // let elements = await page.locator("//ul[@class='list-group']/li/a").all();

    for (let element of elements) {
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
    }
  });

  test("verify each link has href tag", async ({ page }) => {
    // await page.goto("https://the-internet-5chk.onrender.com/");
    //let elements = await page.locator("//ul[@class='list-group']/li/a").all();

    for (let element of elements) {
      await expect(element).toHaveAttribute("href");
      console.log(await element.getAttribute("href"));
    }
  });
});
