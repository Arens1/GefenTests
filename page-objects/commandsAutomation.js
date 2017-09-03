/**
 * Created by borism on 22/8/17
 */


const automationsCommands = {
    validateForm(){
        return this.waitForElementVisible('@createNew', 3000)
    },
    createNewAutomation(){
        return this.waitForElementVisible('@createNew', 3000)
            .click('@createNew')
            .waitForElementVisible('@createNew', 3000)
            .click('@createNew')
            .waitForElementVisible('@eventsSubMenu', 3000)
            .click('@eventsSubMenu')
            .waitForElementVisible('@eventsNewWebsiteVisit', 3000)
            .click('@eventsNewWebsiteVisit')
            .waitForElementVisible('@channelSubMenu', 3000)
            .click('@channelSubMenu')
            .waitForElementVisible('@pushWeb', 3000)
            .click('@pushWeb')
            .waitForElementVisible('@titleAutomation', 3000)
            .setValue('@titleAutomation', "Test")
            .waitForElementVisible('@messageAutomation', 4500)
            .setValue('@messageAutomation', "Test_Message")
            .waitForElementVisible('@saveNewAutomation', 3000)
            .click('@saveNewAutomation')
            .waitForElementVisible('@saveNotification', 3000) //wait for the 'automation saved' notification
            //.api.refresh() ---> after refresh, can't select elements. so disabled refresh for now
            .waitForElementVisible('@chooseFirstAutomation', 3000)
            .click('@chooseFirstAutomation')
            //edit newly created automation
            .waitForElementVisible('@chooseCreatedAutomation', 3000)
            .click('@chooseCreatedAutomation')
            .waitForElementVisible('@eventsSubMenu', 3000)
            .click('@eventsSubMenu')
            .waitForElementVisible('@eventsNewMessage', 3000)
            .click('@eventsNewMessage')
            .waitForElementVisible('@channelSubMenu', 3000)
            .click('@channelSubMenu')
            .waitForElementVisible('@pushApp', 3000)
            .click('@pushApp')
            .waitForElementVisible('@onByDefaultTickBox', 3000)
            .click('@onByDefaultTickBox')
            .waitForElementVisible('@runWhenOnlineTickBox', 3000)
            .click('@runWhenOnlineTickBox')
            .waitForElementVisible('@titleAutomation', 3000)
            .clearValue('@titleAutomation')
            .setValue('@titleAutomation', "TestAltered")
            .waitForElementVisible('@messageAutomation', 4500)
            .clearValue('@messageAutomation')
            .setValue('@messageAutomation', "Test_Message_Altered")
            .waitForElementVisible('@saveNewAutomation', 3000)
            .click('@saveNewAutomation')
            //.waitForElementVisible('@saveNotification', 3000) // sometimes, it won't work
            //delete created automation - there is a known bug with the delete button
            // .waitForElementVisible('@optionMenu', 3000)
            // .click('@optionMenu')
            // .waitForElementVisible('@deleteAutomation', 10000)
            // .click('@deleteAutomation')
    }
};


module.exports = {
    commands: [automationsCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        createNew: {
            selector: 'button[translate="PAGES.OPERATION.AUTOMATION.SIDEBAR.CREATE_NEW"]'
        },
        eventsSubMenu: {
            selector: 'md-select[placeholder="Events"]'
        },
        eventsNewWebsiteVisit: {
            selector: 'md-option[value="NEW_VISIT"]'
        },
        eventsNewMessage: {
            selector: 'md-option[value="NEW_MESSAGE"]'
        },
        channelSubMenu: {
            selector: 'md-select[placeholder="Channel"]'
        },
        pushWeb: {
            selector: 'md-option[value="PUSH_WEB"]'
        },
        pushApp: {
            selector: 'md-option[value="PUSH_APP"]'
        },
        titleAutomation: {
            selector: 'input[ng-model="$ctrl.automation.subject"]'
        },
        saveNewAutomation: {
            selector: 'span[translate="COMPONENTS.GF_BOTTOM_TOOLBAR.SAVE"]'
        },
        saveNotification: {
            selector: 'md-toast > div > span' //sometimes this works better: 'md-toast > div '
        },
        messageAutomation: {
            selector: 'textarea[ng-model="$ctrl.automation.push_message"]'
        },
        chooseFirstAutomation: {
            selector: 'button[aria-label="New Lead    via Push Web"]'
        },
        chooseCreatedAutomation: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > automations > div > div > md-list > md-content > gf-automation-list-item:nth-child(53) > md-list-item > div > button'
        },
        onByDefaultTickBox: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > automations > div > div > div > gf-automation-detail > md-content > div > div.automation-content.layout-column.flex > div.automation-attributes.ng-scope.layout-column > md-checkbox > div._md-container'
        },
        runWhenOnlineTickBox: {
            selector: '#radio_1209 > div._md-container'
        },
        optionMenu: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > automations > div > div > md-list > md-content > gf-automation-list-item:nth-child(53) > md-list-item > div > div._md-list-item-inner > div > div.header.flex-grow > gf-menu > md-menu > button'
        },
        deleteAutomation: {
            selector: '#menu_container_1938 > md-menu-content > md-menu-item > button'
        }
    },
}

