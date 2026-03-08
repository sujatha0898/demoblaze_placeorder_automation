const{test,expect}=require('@playwright/test')

test('f1',async function({page}){
    await page.goto('https://practice.expandtesting.com/frames');
    const iframe=await page.frameLocator('//iframe[@title="Rich Text Area"]')
    await iframe.locator('//body[@id="tinymce"]').fill('8654i3wejrfg');
    await page.waitForTimeout(2000)


})