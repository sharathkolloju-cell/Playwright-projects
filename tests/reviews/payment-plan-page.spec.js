import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("Payment Plan Page", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(
      page,
      "John",
      "Doe",
      "john.doe@example.com",
      "1234567890",
      "Facebook",
    );
  });

  test("Payment Plan Selection", async ({ page }) => {
    let stepCircle1 = page.locator("(//div[@class='step-circle'])[1]");
    let stepCircle2 = page.locator("(//div[@class='step-circle'])[2]");
    // stepCircle3 = page.locator("(//div[@class='step-circle'])[3]");

    await expect(stepCircle1).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    ); // green

    await expect(stepCircle2).toHaveCSS("background-color", "rgb(1, 201, 255)");
    // blue

    let nextButtonOnPaymentPlan = page.locator(
      "div.action-buttons > button.next-button",
    ); //used css locator here
    await expect(nextButtonOnPaymentPlan).toBeDisabled();

    // let installments = page.locator(
    //  "//span[@class='payment-type' and normalize-space()='5 Installments']",
    //  );
    let upfrontPayment = page.locator(
      "//span[@class='payment-type' and normalize-space()='Upfront']",
    );
    await upfrontPayment.click();
    await page.waitForTimeout(3000);
    await upfrontPayment.click();

    await nextButtonOnPaymentPlan.click();
    await expect(stepCircle2).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    ); // green
    await page.waitForTimeout(10000);
  });
});
