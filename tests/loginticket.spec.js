const { beforeEach } = require('node:test');
import { LoginPage } from '../Pages/class/loginpage';
const { test,expect } = require('@playwright/test');


test.beforeEach(async({page})=>{
    const login=new LoginPage(page)
    await login.goto()
    
}

)
test('valid login',async({page})=>{
    const login=new LoginPage(page)
    await login.login('standard_user','secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    

})

test('invalid login',async({page})=>{
    const login=new LoginPage(page)
    await login.login('aaaaaaa','7656')
    await expect(login.errorMessage).toBeVisible()
    await expect(login.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
   

})
