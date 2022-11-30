const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage')
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage')

describe('Login error tests', () => {

    it('Verify user gets error when submits empty login form', async () => {

        const loginErrorPage = new LoginErrorPage();
        const loginPage = new LoginPage();

        await browser.url('/');

        loginPage.clickLoginInButton();

        await browser.pause(2000);

        expectedErrorMsg = "The email or mobile number you entered isn’t connected to an account. "

        expect(loginErrorPage.getErrorMsg(), 'Error Message is NOT present').to.be.equal(expectedErrorMsg);
        
    });
});
