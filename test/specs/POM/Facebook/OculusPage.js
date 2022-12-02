const Commands = require('../Commands');

class OculusPage {

    commands = new Commands();

    supportLocator = '//span[text()="Support"]';

  async switchToNewWindow() {

    const fbLoginHandle = await this.commands.getHandle();
    
    const allHandles = await this.commands.getHandles();

    for (const handle of allHandles) {
            if (handle !== fbLoginHandle) {
            this.commands.switchToWindowHandle(handle);
            break;
}}
    }

 async isSupportDisplayed() {
        return await this.commands.isElementDisplayed(this.supportLocator)
    }

 async getAllHandlesLength() {
        const allHandles = await this.commands.getHandles();
        return allHandles.length;
    }
}
module.exports = OculusPage;