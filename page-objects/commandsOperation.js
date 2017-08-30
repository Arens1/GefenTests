/**
 * Created by michaelarens on 7/26/17.
 */




const operationCommands = {
    validateForm(){
        return this.waitForElementVisible('@organization', 3000)
            .verify.visible('@settings')
         .verify.visible('@roles')
        // .verify.visible('@plans')
         .verify.visible('@organization')
         .verify.visible('@automation')
         .verify.visible('@data')
         .verify.visible('@style')
         .verify.visible('@languages')
         .verify.visible('@support')

    },
    clickOrganization(){
        return this.waitForElementVisible('@organization', 3000)
            .click('@organization')
    },
    clickRules(){
        return this.waitForElementVisible('@roles', 3000)
            .click('@roles')
    },
    clickData(){
        return this.waitForElementVisible('@data', 3000)
            .click('@data')
    },
    clickSettings(){
        return this.waitForElementVisible('@settings', 3000)
            .click('@settings')
    }
};


module.exports = {
    commands: [operationCommands],
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        settings: {
            selector: 'button[gfpermitted="userMaster.operation.settings"]'
        },
        roles: {
            selector: 'button[gfpermitted="userMaster.operation.roles"]'
        },
        plans: {
            selector: 'button[gfpermitted="userMaster.operation.plans]'
        },
        organization: {
            selector: 'button[gfpermitted="userMaster.operation.organization"]'
        },
        automation: {
            selector: 'button[gfpermitted="userMaster.operation.automation"]'
        },
        data: {
            selector: 'button[gfpermitted="userMaster.operation.data"]'
        },
        style: {
            selector: 'button[gfpermitted="userMaster.operation.stylesheet"]'

        },
        languages: {
            selector: 'button[gfpermitted="userMaster.operation.languages"]'
        },
        support: {
            selector: 'button[gfpermitted="userMaster.operation.support"]'
        }
    }

};