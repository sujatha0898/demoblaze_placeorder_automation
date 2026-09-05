class AddProduct{
    constructor(page){
        this.page=page
        this.addcart=page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")
        this.cartbadge=page.locator("//span[@class='shopping_cart_badge']")
        this.cartlink=page.locator("//a[@class='shopping_cart_link']")
        this.removebtn=page.locator("//button[text()='Remove']")
        

    }

    async Addcart(){
        await this.addcart.click()
    

    }
    async Remove(){
        await this.cartlink.click()
        await this.removebtn.click()
    }

    async AddMultipleProduct(productId){
        await this.page.locator(`#add-to-cart-${productId}`).click()
       
        
    }
}
module.exports={AddProduct}