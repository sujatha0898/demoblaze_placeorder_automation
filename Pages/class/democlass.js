export class democlass{
    constructor(page){
        this.page=page
        this.myaccount='//span[normalize-space()="My Account"]'
        this.login="//a[@class='dropdown-item'][normalize-space()='Login']"
        this.register="//a[@class='dropdown-item'][normalize-space()='Register']"
        this.email="//input[@id='input-email']"
        this.password="//input[@id='input-password']"
        this.loginbutton="//button[normalize-space()='Login']"
        this.name="//input[@id='input-firstname']"
        this.lastname="//input[@id='input-lastname']"
        this.pvctog="//input[@name='agree']"
        this.subscribe="//input[@id='input-newsletter']"
        this.continue="//button[normalize-space()='Continue']"
        this.con2="//a[normalize-space()='Continue']"
        this.search="//input[@placeholder='Search']"
        this.go="//i[@class='fa-solid fa-magnifying-glass']"
        this.addtocart="//body[1]/main[1]/div[2]/div[1]/div[1]/div[5]/div[2]/div[1]/div[2]/form[1]/div[1]/button[1]"
        this.mycart="//button[normalize-space()='1 item(s) - $123.20']"
        this.viewcart="//strong[normalize-space()='View Cart']"
        this.checkout="//strong[normalize-space()='Checkout']"
        this.checkoutbutton="//a[@class='btn btn-primary']"

        


    }

    async register(demodata){
        await this.page.click(this.myaccount)
        await this.page.click(this.register)
        await this.page.fill(this.name,demodata.firstname)
        await this.page.fill(this.lastname,demodata.lastname)
        await this.page.fill(this.email,demodata.email)
        await this.page.fill(this.password,demodata.password)
        await this.page.click(this.subscribe)
        await this.page.click(this.pvctog)
        await this.page.click(this.continue)
        await this.page.click(this.con2)

    }

    async login(demodata){

        this.page.fill(this.email,demodata.email)
        this.page.fill(this.password,demodata.password)
        this.page.click(this.loginbutton)

    }
    
    
    async addproducttocart(demodata){
        this.page.fill(this.search,demodata.search)
        this.page.click(this.go)
        this.page.click(this.addtocart)
        this.page.click(this.mycart)
        this.page.click(this.viewcart)

}
}