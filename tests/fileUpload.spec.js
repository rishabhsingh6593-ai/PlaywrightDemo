const {test, expect}=require('@playwright/test');
test("valid login" ,async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles(".\\tests\\Upload\\sample.jpg");
    await page.locator("input[type='submit']").click();
    expect(await page.locator("h3")).toHaveText("File Uploaded!");

});