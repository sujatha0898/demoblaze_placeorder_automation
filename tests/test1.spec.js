const{test,expect}=require('@playwright/test')   //imported playwright methods and assigned to const variable

//test method 1
test('Flowers',async function({page}){
    await page.goto('https://bouqs.com/blog/prettiest-flowers-the-worlds-most-beautiful-flowers/?srsltid=AfmBOoqBkQyvNxesLAvZeHHJpYArOQDAYRQHmyfNbcBFcPA4eTl-ByoM')
    await expect(page).toHaveURL('https://bouqs.com/blog/prettiest-flowers-the-worlds-most-beautiful-flowers/?srsltid=AfmBOoqBkQyvNxesLAvZeHHJpYArOQDAYRQHmyfNbcBFcPA4eTl-ByoM')
     const tit=await page.title()
    
    console.log('the title of the page'+tit)
})

test('Birds',async function({page}){
   await page.goto("https://www.vecteezy.com/free-photos/beautiful-birds")
   await expect(page).toHaveTitle('Beautiful Birds Stock Photos, Images and Backgrounds for Free Download')
  const tit2=await page.title()
  console.log("the second title is "+tit2)

})

test('verify login',async function({page}){
    await page.goto('https://practice.expandtesting.com/#tools')
    await page.click("//a[@href='/login'][normalize-space()='Try it out']")
    await page.locator("//input[@name='username']").fill('practice')
    await page.locator("//input[@id='password']").fill('SuperSecretPassword!')
    await page.click("//button[@id='submit-login']")
    page.waitForLoadState
    await expect(page).toHaveURL('https://practice.expandtesting.com/secure')
    await page.waitForTimeout(6000)
    

})

test.skip('sample1',async function({page}){

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user',{delay:500})
    await page.getByPlaceholder('Password').fill('secret_sauce',{delay:500})
    await page.waitForTimeout(5000)
    await page.getByRole('button',{name:'login-button'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.click("//button[text()='Open Menu']")
    await page.click("//a[text()='Logout']")
    await expect(page).toHaveURL('https://www.saucedemo.com/')

})


test('newtest',async function({page}){
    await page.goto('https://practicesoftwaretesting.com/')
    await page.getByText('Sign in').click()
    await page.waitForTimeout(2000)
    //verify error message for mail and pasword
    await page.locator("//input[@value='Login']").click()
    const mailerror=await page.locator("//div[contains(text(),'Email is required')]").textContent()
    console.log("the mail error msg is :"+mailerror)
    expect(mailerror.includes('required')).toBeTruthy()
    //verify error message for password
    const passerr=await page.locator("//div[contains(text(),'Password is required')]").textContent()
    console.log("the pass error msg is"+passerr)
    expect(passerr==="Password is required").toBeTruthy
    
    //verify invalid err for mail
    await page.getByPlaceholder('Your email').fill("34r5t3e4r")

    const inverr=await page.locator("//div[contains(text(),'Email format is invalid')]").textContent()
    expect(inverr.includes('invalid')).toBeTruthy()
    console.log('invalid error msg:',inverr)

    //verify invalid pass
    await page.getByPlaceholder('Your email').fill("sujatha@gmail.com")
    await page.locator("//input[@id='password']").fill('uy3er98ye')
    await page.locator("//input[@value='Login']").click()
    const invpass=await page.locator("//div[@class='help-block']").textContent()
    console.log('the invalid pass:',invpass)
    expect(invpass.includes('password')).toBeTruthy()


})
