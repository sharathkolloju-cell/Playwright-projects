import { test } from "@playwright/test";

test("Environment Variable Practice", async ({ page }) => {
  console.log(process.env.PRACTICE_USERNAME);
  console.log(process.env.PRACTICE_PASSWORD);
});

test("Without URL", async ({ page }) => {
  let encoded = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encoded}` });
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
  await page.innerText("p").then((text) => console.log(text));
});