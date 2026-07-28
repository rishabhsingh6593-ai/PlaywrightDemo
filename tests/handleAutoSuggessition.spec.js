const { test, expect } =require('@playwright/test');

test('Auto Suggestion using keyword', async ({ page }) => {
await page.goto("https://www.google.com/");
await page.locator("#APjFqb").fill("Mukesh otwani");
await page.waitForSelector("li[role='presentation']:visible");
await page.keyboard.down("ArrowDown");
await page.keyboard.down("ArrowDown");
await page.keyboard.press("Enter");
await page.waitForTimeout(5000);
});

test('Auto Suggestion Using loop', async ({ page }) => {
await page.goto("https://www.google.com/");
await page.locator("#APjFqb").type("Mukesh otwani");
await page.waitForSelector("li[role='presentation']:visible");
const element = await page.$$("li[role='presentation']:visible")
for(let i=0; i<element.length;i++){
const text =await element[i].textContent();
if(text.includes('youtube'))
    {
 await element[i] .click()
 break;
};
};


});