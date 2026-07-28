const{test,expect}=require('@playwright/test');
test("Keyword Handling" ,async function({page}){
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").focus();
    await page.keyboard.type("mukesh ambani");
    await page.waitForTimeout(5000);
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("Shift");
    for(let i=0;i<6;i++){
     await page.keyboard.press("ArrowLeft");
    }
    await page.keyboard.up("Shift");
    await page.keyboard.press("Backspace");

    // await page.keyboard.press("Control+A");
    // await page.waitForTimeout(5000);
    // await page.keyboard.press("Control+C");
    // await page.waitForTimeout(5000);
    // await page.keyboard.press("Backspace");
    // await page.waitForTimeout(5000);
    // await page.keyboard.press("Control+V");
    // await page.waitForTimeout(5000);
    // await page.locator("#APjFqb").type("Rishabh Singh");
    // await page.keyboard.press("Enter")
    // await page.waitForTimeout(5000)



});