/**
 * Created by michaelarens on 8/22/17.
 */

/**
 * Created by michaelarens on 8/10/17.
 */


const dataCommands = {
    validateForm(){
        return this.waitForElementVisible('@newDataButton', 3000)
            .verify.visible('@newDataButton')
            .verify.visible('@addPermittedRole')
            .verify.visible('@pluginTitle')
            .verify.visible('@pluginDescription')
            .verify.visible('@pluginTypeButton')
            .verify.visible('@pluginEntityButton')
            .verify.visible('@pluginDirectionButton')
            .verify.visible('@pluginURL')

    },
    addPlugin(){
        return this.waitForElementVisible('@newDataButton', 3000)
            .click('@newDataButton')
    },
    addRole(role){
        return this.waitForElementVisible('@addPermittedRole', 3000)
            .clearValue('@addPermittedRole')
            .setValue('@addPermittedRole', role)
    },
    addTitle(title){
        return this.waitForElementVisible('@pluginTitle', 3000)
            .setValue('@pluginTitle', title)
    },
    addDescription(description){
        return this.waitForElementVisible('@pluginDescription', 3000)
            .clearValue('@pluginDescription')
            .setValue('@pluginDescription', description)
    },

    save(){
        return this.waitForElementVisible('@save', 3000)
            .click('@save')
    },
    addType(){
        return this.waitForElementVisible('@pluginTypeButton', 3000)
            .click('@pluginTypeButton')
            .waitForElementVisible('@pluginTypeValue', 3000)
            .click('@pluginTypeValue')
    },
    addEntity(){
        return this.waitForElementVisible('@pluginEntityButton', 3000)
            .click('@pluginEntityButton')
            .waitForElementVisible('@pluginEntityValue', 3000)
            .click('@pluginEntityValue')
    },
    addDirection(){
        return this.waitForElementVisible('@pluginDirectionButton', 3000)
            .click('@pluginDirectionButton')
            .waitForElementVisible('@pluginDirectionValue', 3000)
            .click('@pluginDirectionValue')
    },
    addURL(url){
        return this.waitForElementVisible('@pluginURL', 3000)
            .clearValue('@pluginURL')
            .setValue('@pluginURL', url)
    },
    selectLastPlugin(){
        return this.waitForElementVisible('@lastPluginInList', 3000)
            .click('@lastPluginInList')
    },
    selectBeforeLastPlugin(){
        return this.waitForElementVisible('@beforeLastPluginInList', 3000)
            .click('@beforeLastPluginInList')
    },
    deleteLastPlugin(){
        return this.waitForElementVisible('@deleteLastPluginInList', 3000)
            .click('@deleteLastPluginInList')
            .waitForElementVisible('@deleteButton', 3000)
            .click('@deleteButton')
    }
    };


module.exports = {
    commands: [dataCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        newDataButton: {
            selector: 'button[translate="PAGES.OPERATION.DATA.PLUGINS.SIDEBAR.CREATE_NEW"]'

        },
        addPermittedRole: {
            selector: 'input[placeholder="Add role"]'
        },
        pluginTitle: {
            selector: 'input[ng-model="$ctrl.plugin.title"]'
        },
        pluginDescription: {
            selector: 'input[ng-model="$ctrl.plugin.description"]'
        },
        pluginTypeButton: {
            selector: 'md-select[ng-model="$ctrl.plugin.type"]'
        },
        pluginTypeValue: {
        selector: 'md-option[value="GoogleCsvPlugin"]'
        },
        pluginEntityButton: {
            selector: 'md-select[ng-model="$ctrl.plugin.entity"]'
        },
        pluginEntityValue: {
            selector: 'md-option[value="CONTACTS"]'
        },
        pluginDirectionButton: {
            selector: 'md-select[ng-model="$ctrl.plugin.direction"]'
        },
        pluginDirectionValue: {
            selector: 'md-option[value="IMPORT"]'
        },
        pluginURL: {
            selector: 'input[ng-model="$ctrl.plugin.url"]'
        },
        save: {
            selector: 'button[ng-class="button.classes"]'
        },
        lastPluginInList: {
            selector: 'body > div > div > div > div > gf-tabs > div > div > gf-tabs > div > div > plugins > div > div > md-list > md-content > md-list-item:nth-last-child(1) > div > button'
        },
        beforeLastPluginInList: {
            selector: 'body > div > div > div > div > gf-tabs > div > div > data > div > div > md-list > md-content > md-list-item:nth-last-child(2) > div > button'
        },
        deleteLastPluginInList: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > gf-tabs > div > div > plugins > div > div > md-list > md-content > md-list-item:nth-last-child(1) > div > div._md-list-item-inner > div > div.header.flex-grow > md-menu > button'
        },
        deleteButton: {
            selector: 'body > div:nth-last-child(1)>md-menu-content > md-menu-item > button'
        }
    }
};

