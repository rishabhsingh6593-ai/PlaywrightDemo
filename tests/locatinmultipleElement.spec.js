const {test, expect}=require('@playwright/test');

test("Multiple elements" ,async function({page}){
await page.goto("https://www.demoblaze.com/index.html");
// const links=await page.$$("a");
// for(const link of links){
//    const text=await link.textContent();
//    console.log("link text is: "+text);
// }
page.waitForSelector("//div[id='tbodyid']//div//h4//a");
   const products = await page.$$("//div[id='tbodyid']//div//h4//a");
   for(const product of products){
    const productName = await product.textContent();
    console.log(productName);}

});