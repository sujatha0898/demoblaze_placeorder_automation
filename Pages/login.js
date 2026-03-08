const{expect}=require('@playwright/test')

class Login{
    constructor(page){
        this.page=page   //initiating page in class
        this.username='//select[@id="custody"]'
        this.email="//input[@id='username']"
        this.captcha="//input[@id='captcha']"
        this.password="//input[@id='password']"
        this.verify="//input[@value='Verify']"
        this.otp="//input[@id='otpVerifyField']"
        this.submit="//input[@value='Submit']"
    }

    async RMlogin(){
         await expect(this.page.locator(this.username)).toBeVisible({ timeout: 10000 })
        await this.page.locator(this.username).selectOption('DOMESTIC')
        await this.page.fill(this.email,'ft.ambit.amcrm02@fintuple.com')
        await this.page.fill(this.captcha,'a2C4dE')
        await this.page.fill(this.password,'Fintuple@1')
        await this.page.click(this.verify)
        await expect(this.page.locator(this.otp)).toBeVisible()
        await this.page.fill(this.otp,'857362')
        await this.page.click(this.submit)
        expect(this.page.locator('(//a[text()="View Task"])[1]')).toBeVisible()
      

    }

    async verifyRmLogin(){
        await this.page.click(this.verify)
        const custerr=await this.page.locator('//small[@id="custodyErrors"]').textContent()
        expect(custerr.includes('required')).toBeTruthy()
        const mailerr=await this.page.locator("//small[@id='emailErrors']").textContent()
        expect(mailerr.includes('required')).toBeTruthy()
        const captchaerr=await this.page.locator('//small[@id="captchaError"]').textContent()
        expect(captchaerr.includes('required')).toBeTruthy()
        //const passerr=await this.page.locator("")


    }
}
module.exports=Login