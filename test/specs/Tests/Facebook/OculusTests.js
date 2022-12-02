const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage')
const OculusPage = require('../../POM/Facebook/OculusPage')

describe('Oculus Page Tests', () => {
    
    it('Verify the Oculus page is launched in new window', async () => {
        
        const loginPage = new LoginPage();
        const oculusPage = new OculusPage();

        await browser.url('/');

        await loginPage.clickOculusButton();

        await oculusPage.switchToNewWindow();

        await browser.pause(2000);

        expect(await oculusPage.isSupportDisplayed(), 'Support tab is NOT displayed').to.be.true;


        expect(await oculusPage.getAllHandlesLength(), '').to.equal(2);
    });

    // npx wdio run ./wdio.conf.js --spec ./test/specs/Tests/Facebook/OculusTests.js

   
});
