const {test, expect}=require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))
test('valid login', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='email1']").fill(testdata.username);
    await page.locator("//input[@name='password1']").fill(testdata.password);
   //await page.locator("//button[@class='submit-btn']").click();
       await page.pause()

});