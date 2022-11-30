const { expect } = require('chai');
const MainPage = require ('../../POM/Darksky/MainPage.js');

describe('Main Page Test Suite', () => {
    
    it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
        
        const mainPage = new MainPage()

        await browser.url('https://www.darksky.net/');

        await browser.pause(2000);

        expect(mainPage.getFeelsLikeTemp() <= mainPage.getHighTemp && mainPage.getFeelsLikeTemp <= mainPage.getHighTemp).to.be.true;
    });

});