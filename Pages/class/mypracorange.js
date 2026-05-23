
class Orange {
    constructor(page,logindet){
        this.page=page;
        this.loginname="//input[@placeholder='Username']"
        this.password="//input[@placeholder='Password']"
        this.loginbutton="//button[normalize-space()='Login']"
        this.adminbutton="//a[@class='oxd-main-menu-item active']//span[1]"
        this.username="(//input[@class='oxd-input oxd-input--active'])[2]"
        this.userrole="//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]"
        this.empname="//input[@placeholder='Type for hints...']"
        this.status="//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]"
     }

     async applogin(){
        this.page.locator(this.loginname).fill(logindet.username)
        this.page.locator(this.password).fill(logindet.password)
        this.page.click(this.loginbutton)

     }
     async adminuser(){
      this.page.click(this.adminbutton)
      this.page.locator(this.username).fill(logindet.adusername)
      

     }
}