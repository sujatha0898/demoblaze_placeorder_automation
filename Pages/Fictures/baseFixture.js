const base = require('@playwright/test');

const CartPage = require('../class/CartPage');

exports.test = base.test.extend({

    cartPage: async ({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);

    }

});

exports.expect = base.expect;