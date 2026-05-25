import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("Review Page", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(
      page,
      "Sharath",
      "Kolloju",
      "sha@gmail.com",
      "9496077154",
      "Facebook",
    );
    await CommonUI.completePaymentPlanStep(page, "5 Installments"); //Upfront,5 Installments
    await page.waitForTimeout(10000);
  });

  test("1", async ({ page }) => {
    console.log("Review Success");
  });

  //test("2", async ({ page }) => {});
});
