/**
 * Created by michaelarens on 9/11/17.
 */


const operationSettingsCommands = {
    validateForm(){
        return this.waitForElementVisible('@capitalLettersCheckbox', 3000)
            .verify.visible('@forceResetFirstLogin','forceResetFirstLogin button is displayed' )
            .verify.visible('@specialChars')

    },
    checkCapitalLetters(){
        return this.waitForElementVisible('@capitalLettersCheckbox', 3000)

            .click('@capitalLettersCheckbox')
            .click('@save')
            .expect.element('@capitalLettersCheckbox').to.have.attribute('aria-checked').which.contains('true')

    },
    unCheckCapitalLetters(){
        return this.waitForElementVisible('@capitalLettersCheckbox', 3000)

            .click('@capitalLettersCheckbox')
            .click('@save')
            .expect.element('@capitalLettersCheckbox').to.have.attribute('aria-checked').which.contains('false')

    },
    checkSpecialChars(){
        return this.waitForElementVisible('@specialChars', 3000)

            .click('@specialChars')
            .click('@save')
            .expect.element('@specialChars').to.have.attribute('aria-checked').which.contains('true')

    },
    unCheckSpecialChars(){
        return this.waitForElementVisible('@specialChars', 3000)

            .click('@specialChars')
            .click('@save')
            .expect.element('@specialChars').to.have.attribute('aria-checked').which.contains('false')

    },
    checkForceResetFirstLogin(){
        return this.waitForElementVisible('@forceResetFirstLogin', 3000)

            .click('@forceResetFirstLogin')
            .click('@save')
            .expect.element('@forceResetFirstLogin').to.have.attribute('aria-checked').which.contains('true')

    },
    unCheckForceResetFirstLogin(){
        return this.waitForElementVisible('@forceResetFirstLogin', 3000)

            .click('@forceResetFirstLogin')
            .click('@save')
            .expect.element('@forceResetFirstLogin').to.have.attribute('aria-checked').which.contains('false')

    },
    changeLength(length){
        return this.waitForElementVisible('@minLength', 3000)

            .click('@minLength')
            .waitForElementVisible('@'+length, 10000)
            .click('@'+length)
            .click('@save')
    },
    openOperationTab(){
        return this.waitForElementVisible('@sideMenuOperationTab', 3000)
            .click('@sideMenuOperationTab')
            .click('@save')
    }

};

module.exports = {
    commands: [operationSettingsCommands],
    url () {
        return this.api.launchUrl;
    },
    elements: {
        capitalLettersCheckbox: {
            selector: 'md-checkbox[ng-model="oprSetCtrl.editOperation.password_strength.must_capital_letters"]'
        },
        forceResetFirstLogin: {
            selector: 'md-checkbox[ng-model="oprSetCtrl.editOperation.password_strength.ResetOnFirstLogin"]'
        },
        specialChars: {
            selector: 'md-checkbox[ng-model="oprSetCtrl.editOperation.password_strength.must_special_chars"]'

        },
        minLength: {
            selector: 'md-select[placeholder="Chars"]'
        },
        six: {
            selector: 'md-option[value="6"]:nth-of-type(1)'
        },
        eight: {
            selector: 'md-option[value="8"]:nth-of-type(2)'
        },
        ten: {
            selector: 'md-option[value="10"]:nth-of-type(3)'
        },
        save: {
            selector: 'button[ng-if="callback.save && !hideSave"]'
        },
        sideMenuOperationTab: {
            selector: 'md-list-item[gfpermitted="userMaster.operation"] button'
        }
    }
};



