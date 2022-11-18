const { expect } = require("chai");
const { it, describe } = require("mocha");

describe('WebElements Test cases', () => {
 // To be complete as homework
 it('Verify default no gender button is selected on Sign up page', async () => {
    /**
     * Steps:
     * 1. Launch facebook.com
     * 2. Click Create New Account
     * 3. Verify female-gender button is not selected
     * 4. Verify male-gender button is not selected
     * 5. Verify custom-gender button is not selected
     * 6. If female gender is NOT selected, then click on female gender radio button
     * 7. Verify female-gender button is selected
     */

    // 1. Launch facebook.com
    await browser.url('/');

    // 2. Click Create New Account button
    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();

    await browser.pause(7000);

    // 3. Verify female-gender button is not selected
    const femaleRadioButton = await $('input[value="1"]');
    const isFemaleGenderSelected = await femaleRadioButton.isSelected();
    expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

    await browser.pause(7000);

    // 4. Verify male-gender button is not selected
    const maleRadioButton = await $('input[value="2"]');
    const isMaleGenderSelected = await maleRadioButton.isSelected();
    expect(isMaleGenderSelected, 'Male gender is already selected').to.be.false;

    await browser.pause(7000);

    // 5. Verify custom-gender button is not selected
    const customGenRadioButton = await $('input[value="-1"]');
    const isCustomGenSelected = await customGenRadioButton.isSelected();
    expect(isCustomGenSelected, 'Custom-gender gender is already selected').to.be.false;

    await browser.pause(7000);

    // If female gender is NOT selected, then click on female gender radio button
    if (expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false) {
        const femaleRadioButton = await $('input[value="1"]');
        femaleRadioButton.click();
    }

    await browser.pause(7000);

    // Verify female-gender button is selected
    const femaleRadioButton1 = await $('input[value="1"]');
    const isFemaleGenderSelected1 = await femaleRadioButton1.isSelected();
    expect(isFemaleGenderSelected1, 'Female gender is already selected').to.be.true;


});

})
