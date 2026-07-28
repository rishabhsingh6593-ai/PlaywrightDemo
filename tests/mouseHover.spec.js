const {test, expect}=require('@playwright/test');
test("valid login" ,async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").type("admin@email.com");
    await page.getByPlaceholder("Enter Password").type("admin@123");
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(2000);
   await page.locator("div[class='nav-menu-item-manage'] span").hover();
   await page.waitForTimeout(2000);
   await page.locator("//a[normalize-space()='Manage Courses']").click();


});