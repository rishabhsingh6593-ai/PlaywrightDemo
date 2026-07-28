const {test, expect}=require('@playwright/test');
test("valid login" ,async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("(//input[@id='name'])[1]").fill("Rohit");
    await page.locator("#email").fill("rohit@example.com");
    await page.locator("#password").fill("123456");
    await page.locator("#state").selectOption({label:"Goa"});
    await page.waitForTimeout(2000);
    await page.locator("#state").selectOption({value:"Arunachal Pradesh"});
    await page.waitForTimeout(2000);
    await page.locator("#state").selectOption({index:4});
    await page.waitForTimeout(2000);
    // // const value = await page.locator("#state").textContent();
    // console.log("All dropdown values: "+value);
    // await expect(value.includes("Kerala")).toBeTruthy();

    // 

    let state = await page.$("#state")
    let allElements = await state.$$("option")
    let ddStatus = false;

    for(let i=0; i<allElements.length; i++)
    {
       let element = allElements[i];
       let value = await element.textContent();
       console.log("value from dropdown using for loop "+value);

      if(value.includes("Rajasthan"))
      {
        ddStatus = true;
        break;
      }
 }
     await expect(ddStatus).toBeTruthy();
     
         ///// multi select dropdown /////

     await page.locator("#hobbies").selectOption(["Playing","Reading","Swimming","Singing","Dancing"]);
     await page.waitForTimeout(2000);

});


