/**
 * Created by michaelarens on 8/24/17.
 */

const contactsCommands = {
    validateForm(){
        return this.waitForElementVisible('@newContactButton', 3000)
            .verify.visible('@uploadButton')

    },
    clickOnUpload(){
        return this.waitForElementVisible('@uploadButton', 3000)
            .click('@uploadButton')
    },
    clickGooglePlugin(){
        return this.waitForElementVisible('@googlePlugin', 3000)
            .assert.containsText('@googlePlugin', "test plugin")
            .click('@googlePlugin')
    }

};


module.exports = {
    commands: [contactsCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        newContactButton: {
            selector: 'button[gfpermitted="MyNetwork.People.New"]'

        },
        NewGroupButton: {
            selector: 'button[gfpermitted="MyNetwork.Groups.New"]'

        },
        uploadButton: {
            selector: 'button[gfpermitted="MyNetwork.People.BulkUpload"]'

        },
        exportButton: {
            selector: 'button[gfpermitted="MyNetwork.People.PluginExport"]'

        },
        googlePlugin: {
            selector: 'div[ng-repeat="plugin in gfUploadPluginDialogCtrl.plugins"]:nth-last-child(1) > div > div:nth-child(1) > span.md-title.ng-binding'
        }
    }

};

