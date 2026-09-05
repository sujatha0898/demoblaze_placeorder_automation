const {AddProduct}=require('../Pages/class/product')
const {LoginPage}=require('../Pages/class/loginpage')
const { test,expect } = require('@playwright/test')

test.beforeEach(async({page})=>{
 const login=new LoginPage(page)
 await login.goto()
 await login.login('standard_user','secret_sauce')
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test.only('addcart with shortwait', async({page}) => {
    const product = new AddProduct(page);
    await product.Addcart();
    await expect(product.cartbadge).toHaveText('1')
    
});

test('removecart',async({page})=>{
    const product = new AddProduct(page); 
    await product.Addcart()
    await product.Remove()
    await expect(product.cartbadge).toBeHidden()

});

test('multiple items',async({page})=>{
    const product=new AddProduct(page)
    await product.AddMultipleProduct('sauce-labs-bolt-t-shirt')
    await product.AddMultipleProduct('sauce-labs-bike-light')
    await expect(product.cartbadge).toHaveText('2')
    console.log('the text in cartbage: ',await product.cartbadge.textContent())


})

 


