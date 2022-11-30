const Commands = require('../Commands');

class MainPage {

    commands = new Commands();

    feelsLikeTempLocator = '.feels-like-text'
    lowTempLocator = '.low-temp-text';
    highTempLocator = '.high-temp-text';

    async getFeelsLikeTemp() {
        const feelsLikeTemp = await this.commands.getTextOfWebElement(this.feelsLikeTempLocator);
        return await Number(feelsLikeTemp.split('˚')[0]);
    }
    async getLowTemp() {
        const lowTemp = await this.commands.getTextOfWebElement(this.lowTempLocator);
        return await Number(lowTemp.split('˚')[0]);
    }
    async getHighTemp() {
        const highTemp = await this.commands.getTextOfWebElement(this.highTempLocator);
        return await Number(highTemp.split('˚')[0]);
    }


}
module.exports = MainPage;