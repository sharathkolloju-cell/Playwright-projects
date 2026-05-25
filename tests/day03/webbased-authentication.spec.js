import { test } from "@playwright/test";
import { buffer } from "node:stream/consumers";

test("With URL", async ({ page }) => {
  //https://admin:admin@the-internet-5chk.onrender.com/basic_auth
  await page.goto(
    "https://admin:admin@the-internet-5chk.onrender.com/basic_auth",
  );
  //await page.waitForTimeout(3000);
});

test("Without URL", async ({ page }) => {
  let encoded = Buffer.from("admin:admin").toString("base64");
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encoded}` });
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
  await page.innerText("p").then((text) => console.log(text));
});
