/**
 * Created by michaelarens on 9/12/17.
 */


const settingsCommands = {
    validateForm(){
        return this.waitForElementVisible('@logout', 3000)
            .verify.visible('@logout','logout button is visible' )

    },
    logout(){
        return this.waitForElementVisible('@logout', 3000)
            .click('@logout')
            .click('@confirmLogoutButoon')

    },
    changePassword(pass){
        return this.waitForElementVisible('@password', 3000)
            .clearValue('@password')
            .setValue('@password', pass)
    },
    openSettingFromSideMenu(){
        return this.waitForElementVisible('@sideMenuSettingsButton', 3000)
            .click('@sideMenuSettingsButton')
    },
    verifyError(){
        return this.waitForElementVisible('@error', 3000)
            .verify.visible('@error', 'error is displayed')
            .click('@errorOKButton')
    },
    save(){
        return this.waitForElementVisible('@save', 3000)
            .click('@save')
    }
};

module.exports = {
    commands: [settingsCommands],
    url () {
        return this.api.launchUrl;
    },
    elements: {
        logout: {
            selector: 'button[ng-click="logout()"]'
        },
        confirmLogoutButoon: {
            selector: ' md-dialog-actions > button:nth-child(2)'
        },
        password: {
            selector: 'input[placeholder="New Password"]'
        },
        save: {
            selector: 'button[ng-if="callback.save && !hideSave"]'
        },
        sideMenuSettingsButton: {
            selector: '#leftSideMenu > div.sidenav-header.layout-align-start-end.layout-row > div.header-bottom.layout-align-start-end.layout-row.flex > div.ng-scope.layout-align-start-end.layout-row.flex > button'
        },
        error:{
            selector: 'md-dialog[role="alertdialog"]'
        },
        errorOKButton:{
            selector: 'body > div.md-dialog-container.ng-scope > md-dialog > md-dialog-actions > button'
        }

    }
};


