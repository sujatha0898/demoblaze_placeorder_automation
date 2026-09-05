const{expect}=require('@playwright/test')
export class OrangeLogin{
    constructor(page){
        this.page=page;
        this.username='//input[@placeholder="Username"]'
        this.password="//input[@placeholder='Password']"
        this.loginbtn="//button[normalize-space()='Login']"

    }

    async login(username,password){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await this.page.fill(this.username,username)
        await this.page.fill(this.password,password)
        await this.page.click(this.loginbtn)
        await this.page.pause()
    }

       
}



