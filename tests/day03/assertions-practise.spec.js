import { test, expect } from "@playwright/test";


test.describe("Assertions Intro", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    console.log(await page.title());
    expect(await page.title()).toContain("Practice");
    // console.log(expect(await page.title()).toContain("Practice"));
  });

  test("Verify check boxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let isChecked = await page.locator("//input[@id='box1']").isChecked();
    let isChecked1 = await page.locator("//input[@id='box2']").isChecked();

    if (!isChecked) {
      await page.locator("//input[@id='box1']").check();
      console.log("first check has been unselected, so we have to selected it");
    }
    //await page.waitForTimeout(3000);
    if (isChecked1) {
      //await page.locator("//input[@id='box2']").check();
      console.log(
        "second check has been selected, so we have not performed any action",
      );
    }
    //await page.waitForTimeout(3000);
  });
  test("Verify check boxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let Checkbox1 = await page.locator("//input[@id='box1']");
    let Checkbox2 = await page.locator("//input[@id='box2']");
    await page.locator("//input[@id='box1']").check();
    //await page.waitForTimeout(3000);
    await Checkbox1.uncheck();
    //await page.waitForTimeout(3000);
    await Checkbox2.uncheck();
    await page.waitForTimeout(3000);
    expect(Checkbox1).not.toBeChecked();
    expect(Checkbox2).not.toBeChecked();
  });
  //test("Verify text of the element", async ({ page }) => {});
});
