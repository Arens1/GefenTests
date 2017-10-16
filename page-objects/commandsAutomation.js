/**
 * Created by borism on 22/8/17
 */


const automationsCommands = {
    validateForm(){
        return this.waitForElementVisible('@createNew', 3000)
    },
    //page object pause func
    pause: function(time) {
        this.api.pause(time)
        return this
    },
    //page object refresh func
    refresh: function() {
        this.api.refresh()
        return this
    },
    //using keys func
    keys: function(browser){
        this.api.keys(browser)
        return this
    },

    createNewAuto(){
        return this.waitForElementVisible('@createNew', 3000)
            .click('@createNew')
    },
    chooseEvent(event){
        return this.waitForElementVisible('@eventsSubMenu', 3000)
            .click('@eventsSubMenu')
            .waitForElementVisible('@'+event, 3000)
            .click('@'+event)
    },
    chooseChannel(channel){
         return this.waitForElementVisible('@channelSubMenu', 3000)
            .click('@channelSubMenu')
            .waitForElementVisible('@'+channel, 3000)
            .click('@'+channel)
    },
    inputAndSave(title,message){
        return this.waitForElementVisible('@titleAutomation', 3000).pause(1000)
            .clearValue('@titleAutomation')
            .setValue('@titleAutomation', title).pause(1000)
            .waitForElementVisible('@messageAutomation', 3500)
            .clearValue('@messageAutomation')
            .setValue('@messageAutomation', message).pause(1000)
            .waitForElementVisible('@saveNewAutomation', 3000)
            .click('@saveNewAutomation')
            .waitForElementVisible('@saveNotification', 3000) //wait for the 'automation saved' notification
    },
    chooseCreatedAuto(){
        return this.refresh().pause(3000)
            .waitForElementVisible('@chooseCreatedAutomation', 3000)
            .click('@chooseCreatedAutomation')
    },
    tickBoxes(box){
        return this.waitForElementVisible('@onByDefaultTickBox', 3000)
            .click('@onByDefaultTickBox')
            .waitForElementVisible('@'+box, 3000)
            .click('@'+box)
    },
    deleteCreatedAuto() {
        return this.waitForElementVisible('@optionMenu', 3000)
            .click('@optionMenu')
            .keys(this.api.Keys.RIGHT_ARROW)
            .pause(4000)
            .keys(this.api.Keys.ENTER)
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
        //list of events
        NEW_VISIT: {
            selector: 'md-option[value="NEW_VISIT"]'
        },
        NEW_MESSAGE: {
            selector: 'md-option[value="NEW_MESSAGE"]'
        },
        AUDIT_APPROVAL: {
            selector: 'md-option[value="AUDIT_APPROVAL"]'
        },
        AUDIT_REJECT: {
            selector: 'md-option[value="AUDIT_REJECT"]'
        },
        AUDIT_REQUEST: {
            selector: 'md-option[value="AUDIT_REQUEST"]'
        },
        CAMPAIGN_DELIVERED: {
            selector: 'md-option[value="CAMPAIGN_DELIVERED"]'
        },
        CAMPAIGN_ITEM_BOUNCED: {
            selector: 'md-option[value="CAMPAIGN_ITEM_BOUNCED"]'
        },
        CAMPAIGN_ITEM_COMPLAINT: {
            selector: 'md-option[value="CAMPAIGN_ITEM_COMPLAINT"]'
        },
        CAMPAIGN_SEND_FAILED: {
            selector: 'md-option[value="CAMPAIGN_SEND_FAILED"]'
        },
        CAMPAIGN_SENT: {
            selector: 'md-option[value="CAMPAIGN_SENT"]'
        },
        CHANNEL_UNSUBSCRIBE: {
            selector: 'md-option[value="CHANNEL_UNSUBSCRIBE"]'
        },
        EMAIL_OPEN: {
            selector: 'md-option[value="EMAIL_OPEN"]'
        },
        EMAIL_PUSH_UPDATE: {
            selector: 'md-option[value="EMAIL_PUSH_UPDATE"]'
        },
        EMAIL_VISIBLE_PARENT: {
            selector: 'md-option[value="EMAIL_VISIBLE_PARENT"]'
        },
        EMAIL_VISIBLE_TEMPLATE: {
            selector: 'md-option[value="EMAIL_VISIBLE_TEMPLATE"]'
        },
        FILE_UPLOAD_FAILED: {
            selector: 'md-option[value="FILE_UPLOAD_FAILED"]'
        },
        FILE_UPLOAD_FINISHED: {
            selector: 'md-option[value="FILE_UPLOAD_FINISHED"]'
        },
        FORGOT_PASSWORD: {
            selector: 'md-option[value="FORGOT_PASSWORD"]'
        },
        INSUFFICIENT_SERVICE_PLAN_BALANCE: {
            selector: 'md-option[value="INSUFFICIENT_SERVICE_PLAN_BALANCE"]'
        },
        KNOWN_VISIT: {
            selector: 'md-option[value="KNOWN_VISIT"]'
        },
        LINK_CLICK: {
            selector: 'md-option[value="LINK_CLICK"]'
        },
        NEW_BU_RATING: {
            selector: 'md-option[value="NEW_BU_RATING"]'
        },
        NEW_LEAD: {
            selector: 'md-option[value="NEW_LEAD"]'
        },
        NEW_RATING: {
            selector: 'md-option[value="NEW_RATING"]'
        },
        NEW_SYSTEM_MESSAGE: {
            selector: 'md-option[value="NEW_SYSTEM_MESSAGE"]'
        },
        OFFLINE_MESSAGE: {
            selector: 'md-option[value="OFFLINE_MESSAGE"]'
        },
        ORDER_CREATION: {
            selector: 'md-option[value="ORDER_CREATION"]'
        },
        ORDER_PAID: {
            selector: 'md-option[value="ORDER_PAID"]'
        },
        ORDER_PAYMENT_FAILED: {
            selector: 'md-option[value="ORDER_PAYMENT_FAILED"]'
        },
        REFERRED_VISIT: {
            selector: 'md-option[value="REFERRED_VISIT"]'
        },
        SMS_PUSH_UPDATE: {
            selector: 'md-option[value="SMS_PUSH_UPDATE"]'
        },
        SMS_VISIBLE_PARENT: {
            selector: 'md-option[value="SMS_VISIBLE_PARENT"]'
        },
        SMS_VISIBLE_TEMPLATE: {
            selector: 'md-option[value="SMS_VISIBLE_TEMPLATE"]'
        },
        THEME_PAGE_FORCE_CHANGE: {
            selector: 'md-option[value="THEME_PAGE_FORCE_CHANGE"]'
        },
        THEME_PAGE_OFFER_CHANGE: {
            selector: 'md-option[value="THEME_PAGE_OFFER_CHANGE"]'
        },
        VISIT_ENDED: {
            selector: 'md-option[value="VISIT_ENDED"]'
        },
        WEBSITE_SESSION_PAGE: {
            selector: 'md-option[value="WEBSITE_SESSION_PAGE"]'
        },
        //end of events list
        channelSubMenu: {
            selector: 'md-select[placeholder="Channel"]'
        },
        //list of channels
        PUSH_WEB: {
            selector: 'md-option[value="PUSH_WEB"]'
        },
        PUSH_APP: {
            selector: 'md-option[value="PUSH_APP"]'
        },
        SMS: {
            selector: 'md-option[value="SMS"]'
        },
        EMAIL: {
            selector: 'md-option[value="EMAIL"]'
        },
        WEBHOOK: {
            selector: 'md-option[value="WEBHOOK"]'
        },
        //end of channels list
        titleAutomation: {
            selector: 'input[ng-model="$ctrl.automation.subject"]'
        },
        saveNewAutomation: {
            selector: 'button[class="md-accent md-button ng-scope btn-save"]'
        },
        saveNotification: {
            selector: 'md-toast > div > span'
        },
        messageAutomation: {
            selector: 'textarea[ng-model="$ctrl.automation.push_message"]'
        },
        chooseCreatedAutomation: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > automations > div > div > md-list > md-content > gf-automation-list-item:nth-child(53) > md-list-item > div > button'
        },
        //tick-boxes
        onByDefaultTickBox: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > automations > div > div > div > gf-automation-detail > md-content > div > div.automation-content.layout-column.flex > div.automation-attributes.ng-scope.layout-column > md-checkbox > div._md-container'
        },
        BccSender: {
            selector: 'md-checkbox[ng-model="$ctrl.automation.bcc"]'
        },
        runAlways: {
            selector: 'md-radio-button[value="always"]'
        },
        userOnline: {
            selector: 'md-radio-button[value="userOnline"]'
        },
        userOffline: {
            selector: 'md-radio-button[value="userOffline"]'
        },
        none: {
            selector: 'md-radio-button[value="none"]'
        },
        //end of tick-boxes
        optionMenu: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > automations > div > div > md-list > md-content > gf-automation-list-item:nth-child(53) > md-list-item > div > div._md-list-item-inner > div > div.header.flex-grow > gf-menu > md-menu > button'
        },
        deleteAutomation: {
            selector: 'button[class="md-button ng-scope" translate="COMPONENTS.GF_BOTTOM_TOOLBAR.DELETE"]'
        }
    },
}

