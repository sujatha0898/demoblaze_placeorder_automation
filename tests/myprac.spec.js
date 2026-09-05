import{test,expect}from '@playwright/test';

//const{test,expect}=require('@playwright/test')

test('t1',async({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Football')
    expect(page).toHaveURL('https://en.wikipedia.org/wiki/Football')


});
