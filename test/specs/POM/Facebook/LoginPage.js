const Commands = require('../Commands');

class LoginPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage (variables)
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    loginButtonLocator = '<button>';
    createNewAccountLocator = '//a[text()="Create New Account" or text()="Create new account"]';
    oculusLinkLocator = '=Oculus';

    instagramLocator = '=Instagram';
    portalLocator = '=Portal';
    metaPayLocator = '=Meta Pay';

    // functions to interact with the web-Elements on the LoginPage
    async enterLoginEmail(userEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd) {
        await this.commands.typeInWebElement(this.loginPassLocator, userPwd);
    }

    async clickLoginInButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

    async clickCreateNewAccountButton() {
        await this.commands.clickWebElement(this.createNewAccountLocator);
    }

    async clickOculusButton() {
        await this.commands.clickWebElement(this.oculusLinkLocator)
    }

    async clickInstagramButton() {
        await this.commands.clickWebElement(this.instagramLocator)
    }

    async clickPortalButton() {
        await this.commands.clickWebElement(this.portalLocator)
    }

    async clickMetaPayButton() {
        await this.commands.clickWebElement(this.metaPayLocator)
    }
}
module.exports = LoginPage;