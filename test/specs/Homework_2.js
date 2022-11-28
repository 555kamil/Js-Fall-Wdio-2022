const { expect } = require("chai");

describe('Homework 2', () => {

/**
* TC-1: https://www.facebook.com/
* Facebook: Verify current date is displayed on Sign-Up form
* 
* Steps:
* 1. Launch facebook.com
* 2. Click Create New Account button
* 3. Verify current date is displayed in Date of birth dropdowns
*
 */

it ('TC-1', async () => {
     
    const moment = require('moment');

    const now = moment();
    
    await browser.url('/');
     
    await $('=Create new account').click();

    await browser.pause(1000);

    const currentDate = await $('//select[@id="day"]//option[@selected]').getText();
    
    const currentMonth = await $('//select[@id="month"]//option[@selected]').getText();

    const currentYear = await $('//select[@id="year"]//option[@selected]').getText();

    expect(now.date(), 'Current date is incorrect').to.equal(Number(currentDate));

    expect(moment().format('MMM'), 'Current month is incorrect').to.equal(currentMonth);

    expect(now.year(), 'Current year is incorrect').to.equal(Number(currentYear));

});
   
/**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 * 
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */

it ('TC-2', async() => {

    await browser.url('/');

    await $('button[name=login]').click();
    
    await browser.pause(1000);

    expectedErrorMsg = "The email or mobile number you entered isn’t connected to an account. ";
    const loginErrorMsg = await $('//div[contains(text() , "The email or mobile number")]');
    const ourExpectedError = await loginErrorMsg.getText();
    const ourExpectedError1 = await ourExpectedError.split('Find')[0];
    expect (ourExpectedError1, 'Error Message is NOT present').to.equal(expectedErrorMsg)
    
    await browser.pause(1000);
});


/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 * 
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 * 
 */

 it ('TC - 3', async () => {
        
    await browser.url('/');

    await $('=Messenger').click();

    await browser.pause(2000);

    const messengerCheckBox = await $('//input[@type="checkbox"]').isSelected();
    expect(messengerCheckBox, 'Keep me signed in is ALREADY selected').to.be.false;

    await $('#loginbutton').click();

    await browser.pause(2000);

    const errorLinkDisplayed = await $('=Find your account and log in.').isDisplayed();
    expect(errorLinkDisplayed, 'Find your account and log in is NOT displayed').to.be.true;

    await browser.pause(1000);

    const isContinueEnabled = await $('#loginbutton').isEnabled();
    expect(isContinueEnabled, 'Continue is not enabled').to.be.true;

    const errorCheckBox = await $('//input[@type="checkbox"]').isSelected();
    expect(errorCheckBox, 'Keep me signed in is ALREADY selected').to.be.false;

    await $('//label[@class="uiInputLabelInput"]').click();

    await browser.pause(2000);

    const errorCheckBox2 = await $('//input[@type="checkbox"]').isSelected();
    expect(errorCheckBox2, 'Keep me signed in is NOT selected').to.be.true;
    

});



/**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 * 
 * 31˚(string) -> 31(string) -> 31(number)
 * 25˚(string) -> 25(string) -> 25(number)
 * 39˚(string) -> 39(string) -> 39(number)
 * 
 * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
 * 
*/

it('TC-4', async () => {
    
    await browser.url('https://www.darksky.net/');

    const feelsLikeTemp = await $('.feels-like-text').getText();
    const feelsLikeTempValue = Number(feelsLikeTemp.split('˚')[0]);

    const lowTemp = await $('.low-temp-text').getText();
    const lowTempValue = Number(lowTemp.split('˚')[0]);

    const highTemp = await $('.high-temp-text').getText();
    const highTempValue = Number(highTemp.split('˚')[0]);

    await browser.pause(2000);

    expect(feelsLikeTempValue <= lowTempValue && feelsLikeTempValue <= highTempValue, '').to.be.true;
    
});
});