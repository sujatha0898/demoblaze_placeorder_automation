const{test,expect}=require('@playwright/test')

test('f1',async function({page}){
    await page.goto('https://demo.automationtesting.in/WebTable.html')
    await page.locator('//a[text()="SwitchTo"]').hover()
    await page.locator('//a[text()="Iframe with in an Iframe"]').click()
    const iframe= page.locator('//iframe[@id="singleframe"]')
    await iframe.locator('input[type="text"]').fill('sujatha');



})