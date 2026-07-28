const { test, expect } = require("@playwright/test");
test("verify error message", async function({page}){
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

 await page.getByPlaceholder("Username").fill("Admin",{delay:100});
 await page.locator("input[placeholder='Password']").fill("admin12345",{delay:100});
 await page.locator("button[type='submit']").click();
 const errorMessage =await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent();
console.log("Error message is " + errorMessage);

//check the error messgae 
expect(errorMessage.includes("Invalid credentials")).toBeTruthy();
//if you want to check the exact error message then use below code
expect(errorMessage==="Invalid credentials").toBeTruthy();
});