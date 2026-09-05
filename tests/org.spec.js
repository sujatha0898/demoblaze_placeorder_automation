import {test,expect} from '@playwright/test'
import fixture2 from '../Pages/Fictures/fixture2'
test.beforeAll('loginurl', async({page})=>{
await page.goto(loginurl.loginurl)
await page.waitForTimeout(5000);

})