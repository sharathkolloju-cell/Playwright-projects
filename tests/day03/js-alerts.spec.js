import { test } from "@playwright/test";

test.describe("JS Alerts", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/javascript_alerts");
  });

  test("JS Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(alert.message());
      await alert.accept();
    });
    await page.click("text=Click for JS Alert");

    //how to get the color of the result text

    await page.innerText("p[id='result']").then(async (text) => {
      let color = await page.locator("p[id='result']").evaluate((element) => {
        return window.getComputedStyle(element).color;
      });
      console.log(color);
      console.log(text);
    });
  });

  test("JS Confirm", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(alert.message());
      await alert.accept();
    });
    await page.click("text=Click for JS Confirm");
    await page.innerText("p[id='result']").then((text) => {
      console.log(text);
    });
  });

  test("JS Prompt", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(alert.message());
      await alert.accept("Playwright  is awesome!");
    });
    await page.click("text=Click for JS Prompt");
    await page.innerText("p[id='result']").then((text) => {
      console.log(text);
    });
  });
});
