const {test, expect}=require('@playwright/test');
test("valid login" ,async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("username").type("Admin",{delay:100});
await page.locator("input[name='password']").type("admin1234",{delay:100});
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000);

await expect(page).toHaveURL(/dashboard/);
await page.getByAltText("profile picture").first().click();
await page.getByText("Logout").click();
})