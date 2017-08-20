/**
 * Created by michaelarens on 8/1/17.
 */


const associatesCommands = {
    validateForm(){
        return this.waitForElementVisible('@searchButton', 3000)
            .verify.visible('@searchButton')

    },
    SearchUser(username){
        return this.waitForElementVisible('@searchButton', 3000)
            .click('@searchButton')
            .waitForElementVisible('@searchInputField', 3000)
            .setValue('@searchInputField', username)
    },
    clickChat() {
        return this.waitForElementVisible('@chatButton', 3000)
            .click('chatButton')
    }
};


module.exports = {
    commands: [associatesCommands],
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        searchButton: {
            selector: 'div[class="spyglass ng-scope"] button[type="button"]'
        },
        searchInputField: {
            selector: 'input[ng-model="listController.networkParent.search"]'
        },
        chatButton: {
            selector: 'div[class="wrapper_contact_flex"] button[type="button"] '
        }
    }





};



