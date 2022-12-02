const Commands = require('../Commands');

class MetaPayPage {

    commands = new Commands();

    // Locators
    metaPayButtonLocator  = '//img[@class="_9jpk img"]';
    onlineCheckoutLocator = '//a[text()="Online Checkout"]'

    // functions

    async closeAllWindowsButMetaPay() {

        const allHandles = await this.commands.getHandles();

        for (const handle of allHandles) {
          await this.commands.switchToWindowHandle(handle);
          const title = await this.commands.getWebPageTitle();
          if (!title.startsWith('Meta Pay')) {
            await this.commands.closeThisWindow();
          } 
        }
    }

    async isUsingMetaPayDisplayed() {
        return await this.commands.isElementDisplayed(this.metaPayButtonLocator);
    }

    async isOnlineCheckoutDisplayed() {
        return await this.commands.isElementDisplayed(this.onlineCheckoutLocator);
    }

    async moveMouseToMetaPay() {
        await this.commands.moveMouseOn(this.metaPayButtonLocator);
    }
}

module.exports = MetaPayPage;