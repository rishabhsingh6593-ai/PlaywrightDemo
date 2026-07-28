const {test, expect}=require('@playwright/test');

test("verify google title", async function ({ page}) {
 await page.goto("https://www.google.com/");
 const url=await page.url();
 console.log("url is: "+url);
const title=await page.title();
console.log("title is: "+title);
await expect(page).toHaveTitle("yaahoo");
});