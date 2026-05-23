const { test, expect } = require('../Pages/Fictures/baseFixture');

const orderData = require('../Pages/datafile/orderData.json');

test('Place Order in Demoblaze', async ({ page, cartPage }) => {

    // Launch URL
    await page.goto('/index.html');

    // Select Product
    await cartPage.selectPhone();

    // Add To Cart
    await cartPage.addProductToCart();

    // Wait for Alert Handling
    await page.waitForTimeout(2000);

    // Go To Cart
    await cartPage.goToCart();
    await expect(page.locator('//td[text()="Nexus 6"]'))
        .toBeVisible();

    // Place Order
    await cartPage.placeOrder(orderData);
    await expect(page.locator('//h2[text()="Thank you for your purchase!"]'))
        .toBeVisible();

    // Validation
    await expect(page.locator('//h2[text()="Thank you for your purchase!"]'))
        .toBeVisible();

});