

const emailCampaignsCommands = {
    validateForm() {
        return this.waitForElementVisible('@newParentButton', 3000)
          .verify.visible('@settings')
    },
//page object pause func
    pause: function(time) {
        this.api.pause(time)
        return this
    },
    keys: function(browser) {
        this.api.keys(browser)
        return this
    },

    createNewParentCampaign() {
        return this.waitForElementVisible('@newParentButton', 3000)
          .click('@newParentButton')
          .waitForElementVisible('@parentCampaignNameInput', 4000)
          .click('@parentCampaignNameInput')
          .setValue('@parentCampaignNameInput', "New Automated Parent Campaign")
          // .waitForElementVisible('@preventEditCheckbox', 4500)
          // .click('@preventEditCheckbox')
          .waitForElementVisible('@campaignIDInput', 3000)
          // .setValue('@campaignIDInput', "12345")
          .waitForElementVisible('@campaignSubject', 2500)
          .setValue('@campaignSubject', "Automated typed subject")
          .waitForElementVisible('@openTagEditor', 2000)
          .click('@openTagEditor')
          .waitForElementVisible('@campaignTagInput', 2500)
          .click('@campaignTagInput')
          .waitForElementVisible('@createTagInput', 2000)
          .setValue('@createTagInput', "2017")
          .keys(this.api.Keys.ENTER) //use the function written above in order to use browser.something (a way to use it outside of Tests scripts)
          .waitForElementVisible('@popMenuFirstChoice', 2500)
          .click('@popMenuFirstChoice')
          .pause(1000)
          .keys(this.api.Keys.DOWN_ARROW)
          .pause(500)
          .keys(this.api.Keys.ENTER)
          .pause(500)
          .keys(this.api.Keys.RIGHT_ARROW)
          .waitForElementVisible('@continueButton' ,3500)
          .click('@continueButton')
    },

    addRecipients(){
        return this.waitForElementVisible('@firstGroupCheckbox', 3000)
          .click('@firstGroupCheckbox')
          .waitForElementVisible('@contentButton' ,3500)
          .click('@contentButton')
          .waitForElementVisible('@templatesButton', 3000)
          .click('@templatesButton')
          .waitForElementVisible('@templateCard', 2000)
          .click('@templateCard')
          .waitForElementVisible('@sendingTabButton' ,3500)
          .click('@sendingTabButton')
    },
    initSettings(){
        return this
          // .waitForElementVisible('@sendingTabButton', 3000)
          // .click('@uploadSwitch')
          //TODO: add initialization the Editor & Enjoyers permissions
          .waitForElementVisible('@sendToXRecipients', 4000)
          .click('@sendToXRecipients')
          .waitForElementVisible('@confirmSendButton', 4000)
          .click('@confirmSendButton')
          .waitForElementVisible('@closeKingOfEmail', 3000)
          .click('@closeKingOfEmail')
    }


}

module.exports = {
    commands: [emailCampaignsCommands],

    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        campaignsTab: {
            selector: 'body > div > div > div > gf-tabs > div > md-toolbar > div > div.tab-container.ng-scope.active > button'
        },
        newParentButton: {
            selector: 'body > div > div > div > gf-tabs > div > div > div > div > button > span'
        },
        parentCampaignNameInput: {
            selector: 'input[aria-hidden="false"]'
        },
        campaignIDInput: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-subject > md-content > div > md-input-container.subject-input.no-error.ng-scope > input'

        },
        campaignTagInput: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-subject > md-content > div > gf-chips > md-chips > md-chips-wrap > div > div > md-autocomplete'
        },
        popMenuFirstChoice: {
            selector: ' body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-subject > md-content > div > gf-chips > md-chips > md-chips-wrap > div > div > md-autocomplete > md-autocomplete-wrap > input[aria-invalid="false"]'
        },
        campaignSubject: {
            selector: 'md-input-container[class="subject-input ng-scope"] input[aria-hidden="false"]'
        },
        preventEditCheckbox: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-subject > md-content > div > md-checkbox > div._md-container'
        },
        continueButton: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > md-toolbar > div > button' //'body > div > div > div > email-camp-ctrl > div > div > div > div > div > md-toolbar > div > button > span'
        },
        contentButton:{
            selector: 'body > div.ng-scope > div > div > email-camp-ctrl > div > div > div > md-toolbar > div > div:nth-child(3) > button'
        },
        openTagEditor: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-subject > md-content > div > button > span'
        },
        createTagInput:{
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-subject > md-content > div > gf-tags-management > md-chips > md-chips-wrap > div > div > input'
        },
        groupsButton: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-recipients > div > md-content > div > div.div-recipients-menu.div-menu.layout-column > div.contacts-area > gf-menu-item > div > md-list-item > div > button'
        },
        firstGroupCheckbox:{
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-recipients > div > md-content > div > div.div-recipients-menu.div-menu.layout-column > div.contacts-area > gf-menu-item > div > div > gf-sub-menu-item:nth-child(1) > div > md-list-item > div > div._md-list-item-inner > md-checkbox'
        },
        templatesButton: {
            selector: 'body > div.ng-scope > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-content > div > div.email-content-view.layout-row.flex > div > md-toolbar > div.layout-align-start-start.layout-row.flex > button.md-icon-button.style.md-button.ng-scope'
        },
        templateCard: {
            selector: 'body > div.ng-scope > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-email-content > div > div.email-content-view.layout-row.flex > div > div > div.template-viewer.layout-align-start-stretch.layout-row > gf-template-viewer > md-card'
        },
        sendingTabButton: {
            selector: 'body > div.ng-scope > div > div > email-camp-ctrl > div > div > div > md-toolbar > div > div:nth-child(4) > button'
        },
        sendToXRecipients: {
            selector: 'body > div.ng-scope > div > div > email-camp-ctrl > div > div > div > div > div > md-toolbar > div > button.md-accent.md-raised.btn-save.md-button.ng-scope'
        },
        confirmSendButton: {
            selector: 'body > div.md-dialog-container.ng-scope > md-dialog > md-dialog-actions > button.md-raised.md-accent.md-button.md-default-theme.md-ink-ripple'
        },
        closeKingOfEmail: {
            selector: 'body > div > div > div > email-camp-ctrl > div > div > div > div > div > div > div > gf-campaign-emails-sent > md-content > md-content > button'
        }
    }
};