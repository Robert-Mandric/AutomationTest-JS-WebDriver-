describe('eMag.ro', () => {

    it('should have the correct page title', async () => {
        await browser.url('http://www.emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Libertate in fiecare zi');
    });

    it('should contain a cart button', async () => {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
    });

    it('should open eMag Genius page', async () => {
        const geniusButton = await $('[title= "eMAG Genius]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('eMAG genius: serviciul tău premium de cumpărături - eMAG.ro');
    });

    it('should have a working search', async () => {
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');

        await searchBox.setValue('Tricou Polo');
        await searchButton.click();

        await expect(browser).toHaveTitle('Cauți Tricou Polo? Alege din oferta eMAG.ro');
    });
});