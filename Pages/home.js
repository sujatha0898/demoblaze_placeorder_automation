const{expect}=require('@playwright/test')
class Homepage{

    constructor(page){
        this.page=page
        this.externallink='(//a[text()="View Task"])[1]'
        this.addsingleuser='//button[@id="add"]'
        this.addbulkuser='//button[@id="add_institution_btn"]'
        this.distuser="//span[contains(text(),'Distributor User')]"
        this.addsingleuserdist='//button[@id="add"]'
        this.addbulkuserdist='//button[@id="add_institution_btn"]'
        this.institution="//button[@id='admin/inst/distributors']"
        this.app="//button[@id='admin/applications']"
        this.offlinedoc="//button[@id='admin/offlinedocs']"
        this.report="//button[@id='admin/reports']"




    }
    async adminuser(){
        

        this.page.click(this.externallink)

    }
    
    

    async addbulkdist(){
        await this.page.click(this.distuser)
        await this.page.click(this.addbulkuserdist)
        await this.page.click("//a[normalize-space()='Download Sample format']")
        await this.page.locator("//input[@id='formFile']").setInputFile('D:/amcuser')
        await this.page.click("//button[normalize-space()='Save']")
    }
}
module.exports=Homepage;