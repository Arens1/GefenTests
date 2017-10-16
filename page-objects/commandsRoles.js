
const rolesCommands = {
    validateForm(){
        return this.waitForElementVisible('@newRoleButton', 3000)
    },
    createNewRole(){
        return this.waitForElementVisible('@newRoleButton', 3000)
          .click('@newRoleButton')
          .waitForElementVisible('@inputNewRoleName', 2000)
          .clearValue('@inputNewRoleName')
          .setValue('@inputNewRoleName', "AAA Automated Role")
          .waitForElementVisible('@firstCheckbox', 3000)
          .click('@firstCheckbox')
          .waitForElementVisible('@saveRoleButton', 2000)
          .click('@saveRoleButton');
    },
    editRole(){
        return this.waitForElementVisible('@newRoleButton', 3000)
          .waitForElementVisible('@goToAutomatedRole', 2500)
          .click('@goToAutomatedRole')
          .waitForElementVisible('@detailsButton', 2500)
          .click('@detailsButton')
          .waitForElementVisible('@inputNewRoleName', 2000)
          .clearValue('@inputNewRoleName')
          .setValue('@inputNewRoleName', "AA Automated Role") //this does 'edit details' for the role you have just created
          .waitForElementVisible('@secondCheckbox', 2000)
          .click('@secondCheckbox')
          .waitForElementVisible('@saveRoleButton', 3500)
          .click('@saveRoleButton');
    },
    deleteRole(){
        return this.waitForElementVisible('@newRoleButton', 3000)
          .waitForElementVisible('@moreOptionsButton', 5000)
          .click('@moreOptionsButton')
          .waitForElementVisible('@deleteRoleInDropdown', 5000)
          .click('@deleteRoleInDropdown')
          .waitForElementVisible('@confirmDelete', 5000)
          .click('@confirmDelete');
    }

}


module.exports = {
    commands: [rolesCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        newRoleButton: {
            selector: 'a[class="md-raised md-accent md-button"]'
        },
        inputNewRoleName:{
            selector: 'input[ng-model="roleDetailsCtr.role.name"]'
        },
        firstCheckbox: {
            selector: 'body > div.ng-scope > div > div > div > md-content > div > label:nth-child(1) > md-checkbox > div._md-container' // a new way to check selector with 'copy selector' and on the console: $$('<selector name>')
        },
        secondCheckbox: {
            selector: 'body > div.ng-scope > div > div > div > md-content > div > label:nth-child(2) > md-checkbox > div._md-container'
        },
        saveRoleButton: {
            selector: 'body > div.ng-scope > div > div > div > md-toolbar > div > button.md-accent.md-raised.btn-save.md-button.ng-scope' //see one comment above
        },
        goToAutomatedRole: {
            selector: 'body > div > div > div > div > gf-tabs > div > div > div > md-content > md-card:nth-child(1) > md-card-content > span.role_name.ng-binding'
        },
        detailsButton: {
            selector: 'body > div > div > div > div > gf-tabs > div > div > div > md-content > md-card:nth-child(1) > md-card-actions > a > span'
        },
        moreOptionsButton: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > div > md-content > md-card:nth-child(1) > div > md-menu > button > md-icon'
        },
        deleteRoleInDropdown: {
            selector: 'div[aria-hidden="false"] > md-menu-content > md-menu-item > button[ng-click="rolesCtr.deleteRole(role)"]'
        },
        confirmDelete: {
            selector: 'body > div.md-dialog-container.ng-scope > md-dialog > md-dialog-actions > button.md-raised.md-accent.md-button.md-default-theme.md-ink-ripple > span'
        }

    }
};


