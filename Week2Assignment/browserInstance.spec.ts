import{chromium, firefox, test} from "@playwright/test";

test("RedBus", async () =>{
    const browser = await chromium.launch({
    channel: 'msedge'
});
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(6000)
    console.log(page.title())
    console.log(page.url())
})

test("Flipkart", async () =>{
     const browser = await firefox.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
await page.goto("https://www.flipkart.com")
await page.waitForTimeout(6000)
 console.log(page.title())
 console.log(page.url())
})