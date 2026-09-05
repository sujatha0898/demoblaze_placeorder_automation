const {users}= require ('../Pages/datafile/users')
const {test,expect}= require('@playwright/test')
const{LoginPage}=require('../Pages/class/loginpage')

for(const user of users){
test(`login test for ${user.username}`, async({page})=>{
       const log=new LoginPage(page)
        await log.goto()
        await log.login(user.username,user.password)
        if(user.expectedresult=='success'){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
            console.log("the login happened successfully");
        }
        else{
            await expect(log.errorMessage).toBeVisible()
            console.log("the login failed")
        }

    });
}