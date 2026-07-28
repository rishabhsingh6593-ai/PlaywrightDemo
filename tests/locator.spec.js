const {test,expect} = require('@playwright/test');
test("verify locator", async function ({ page}) {
    await page.goto("https://www.demoblaze.com/index.html");

    await page.locator("id=login2").click();
    //login user name 
        await page.waitForTimeout(5000);
    await page.locator("#loginusername").type("pavanol");
    //login password
    await page.waitForTimeout(5000);
    await page.locator("#loginpassword").type("test@123");
    //login button
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/index.html/);
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]");
    await expect(logoutLink).toBeVisible();
    await page.close();

});