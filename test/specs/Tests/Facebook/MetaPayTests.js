const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage')
const MetaPayPage = require('../../POM/Facebook/MetaPayPage')

describe('Meta Pay Page Tests ', () => {

    it('Verify Using Meta Pay is displayed', async () => {
       
        const loginPage = new LoginPage();
        const metaPayPage = new MetaPayPage();

        await browser.url('/')

        await loginPage.clickInstagramButton();
        await loginPage.clickPortalButton();
        await loginPage.clickOculusButton();
        await loginPage.clickMetaPayButton();

        await metaPayPage.closeAllWindowsButMetaPay();

        await browser.pause(2000);

        expect(await metaPayPage.isUsingMetaPayDisplayed(), 'Using Meta Pay not displayed').to.be.true;

        await metaPayPage.moveMouseToMetaPay();

        await browser.pause(2000);

        expect(await metaPayPage.isOnlineCheckoutDisplayed(), 'Online Checkout pop-up is not displayed').to.be.true;

    });
});
