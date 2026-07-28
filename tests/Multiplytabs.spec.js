// const { test, expect } =require('@playwright/test');
// test('Multiple Tabs', async ({ browser }) => {
//     const context =browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://freelance-learn-automation.vercel.app/login");

//     const [newPage] =await Promise.all
//     (
//      [
//         context.waitForEvent("page"),
//         page.locator("//div[@class='container-child']//a[4]//*[name()='svg']").click
//      ]   
        
//     )

//    await newPage.locator("(// input[@name='email'])[2]").fill("rishabhsingh@gmail.com");
//    await newPage.locator("(//input[@type='password'])").fill("Rishabh@123");
//    await newPage,locator("(// button[@'name='login'])").click();
// });





const { test, expect } = require('@playwright/test');

test('Multiple Tabs', async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//div[@class='container-child']//a[4]//*[name()='svg']").click()
    ]);
         await newPage.waitForTimeout(3000);

    await newPage.locator("(//input[@name='email'])[2]").fill("rishabhsingh@gmail.com");

    await newPage.waitForTimeout(3000);
    await newPage.close();
    
    await page.locator("#email1").fill("mukeshadwani@gmail.com");
    await page.waitForTimeout(3000);
});