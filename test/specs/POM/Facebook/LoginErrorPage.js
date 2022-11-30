const Commands = require('../Commands');

class LoginErrorPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginErrorPage (variables)
    loginErrorMsgLocator = '//div[contains(text() , "The email or mobile number")]'


    // functions to interact with the web-Elements on the LoginErrorPage
    async isLoginErrorDisplayed() {
        return await this.commands.isElementDisplayed(this.loginErrorMsgLocator)
    }

    getErrorMsg() {
        const ourExpectedError = this.commands.getTextOfWebElement(this.loginErrorMsgLocator)
        const ourExpectedError1 = ourExpectedError.split('Find')[0];
        return ourExpectedError1;
    }
}
module.exports = LoginErrorPage
