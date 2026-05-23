class CartPage {

    constructor(page) {

        this.page = page;

        // Home Page
        this.phonesOption = '//a[text()="Phones"]';
        this.nexus6 = '//a[text()="Nexus 6"]';

        // Product Page
        this.addToCartBtn = '//a[text()="Add to cart"]';

        // Cart
        this.cartOption = '#cartur';
        this.placeOrderBtn = '//button[text()="Place Order"]';

        // Order Form
        this.name = '#name';
        this.country = '#country';
        this.city = '#city';
        this.card = '#card';
        this.month = '#month';
        this.year = '#year';

        this.purchaseBtn = '//button[text()="Purchase"]';

    }

    async selectPhone() {

        await this.page.click(this.phonesOption);

        await this.page.click(this.nexus6);

    }

    async addProductToCart() {

        await this.page.click(this.addToCartBtn);

        // Handle Alert
        this.page.on('dialog', async dialog => {

            console.log(dialog.message());

            await dialog.accept();

        });

    }

    async goToCart() {

        await this.page.click(this.cartOption);

    }

    async placeOrder(data) {

        await this.page.click(this.placeOrderBtn);

        await this.page.fill(this.name, data.name);

        await this.page.fill(this.country, data.country);

        await this.page.fill(this.city, data.city);

        await this.page.fill(this.card, data.card);

        await this.page.fill(this.month, data.month);

        await this.page.fill(this.year, data.year);

        await this.page.click(this.purchaseBtn);

    }

}

module.exports = CartPage;
