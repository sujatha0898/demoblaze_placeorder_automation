const{test}=require('@playwright/test')
const Login = require("../Pages/login")

const Homepage = require('../Pages/home')
let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page= await context.newPage()
  await page.goto('https://cd-r3.finwyze.com/')
  
});



test('amcrmlogin',async function(){
    
    const login=new Login(page)
    await login.RMlogin()


    


})
test('adminpage',async function(){
    
    const home=new Homepage(page)
    const[page2]=await Promise.all([page.context().waitForEvent('page'),home.adminuser()]);
    //await page2.pause()
    

})