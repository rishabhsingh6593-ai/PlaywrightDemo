const { test, expect } =require('@playwright/test');
test.skip('Alert', async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.on('dialog',async (d)=>{
    expect(d.type()).toContain("alert");
    expect(d.message()).toContain("I am a JS Alert");
    await d.accept();
})

await page.locator("button[onclick='jsAlert()']").click();

// await page.locator("body").click();

});
 
test.skip('Confirm Alert', async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.on('dialog',async (dialogWindow)=>{
    expect(dialogWindow.type()).toContain("confirm");
    expect(dialogWindow.message()).toContain("I am a JS Confirm");
    await dialogWindow.dismiss();
})

await page.locator("button[onclick='jsConfirm()']").click();
});

// test('Handle prompt', async ({ page }) => {

// await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
// await page.on('dialog',async (dialogWindow)=>{
//     expect(dialogWindow.type()).toContain("prompt");
//     expect(dialogWindow.message()).toContain("I am a JS Prompt");
//     await dialogWindow.accept("Rishabh");
// })

// await page.locator("//button[normalize-space()='Click for JS Prompt']").click();
// await page.waitForTimeout(5000);
// });

test('Handle prompt', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on('dialog', async (dialogWindow) => {
    expect(dialogWindow.type()).toBe("prompt");
    expect(dialogWindow.message()).toBe("I am a JS prompt");

    await dialogWindow.accept("Rishabh");
  });

  await page.locator("//button[normalize-space()='Click for JS Prompt']").click();
});