/**
 * Created by michaelarens on 8/10/17.
 */


const organizationCommands = {
    validateForm(){
        return this.waitForElementVisible('@newBUCardViewButton', 3000)

    },
    clickBUtab(){
        return this.waitForElementVisible('@busTab', 3000)

            .click('@busTab')
    },
    createNewBU(){
        return this.waitForElementVisible('@newBUCardViewButton', 3000)

            .click('@newBUCardViewButton')
    },
     fillNameAndAddress(agencyName, Address){
         return this.waitForElementVisible('@AgencyName', 3000)

             .setValue('@AgencyName', agencyName)
            .waitForElementVisible('@fullAddress', 3000)
             .setValue('@fullAddress',Address)


     },
    fillPhoneAndEmail(Address, number){
        return this.waitForElementVisible('@phoneNumber', 3000)
            .setValue('@phoneNumber', number)
            .waitForElementVisible('@emailAddress', 3000)
            .setValue('@emailAddress', Address)

    },
    fillManagingBU(managingBUName){
        return this.waitForElementVisible('@managingBU', 3000)
            .setValue('@managingBU', managingBUName)
    },
    fillExternalIdAndDescription(id, description){
        return this.waitForElementVisible('@externalId', 3000)
            .setValue('@externalId', id)
            .waitForElementVisible('@Description', 3000)
            .setValue('@Description', description)
    },
    fillLegalAddress(address){
        return this.waitForElementVisible('@legalAddress', 3000)
            .setValue('@legalAddress', address)
    },
    clickSave(){
        return this.waitForElementVisible('@save', 3000)
            .click('@save')

    }, changeView(){
        return this.waitForElementVisible('@changeViewButton', 3000)
            .click('@changeViewButton')

    },
    searchBU(BUname){
        return this.waitForElementVisible('@searchButton', 3000)
            .click('@searchButton')
            .waitForElementVisible('@searchTextField', 3000)
            .setValue('@searchTextField', BUname)

    },
    clickBU(){
        return this.waitForElementVisible('@firstSearchResult', 3000)
            .click('@firstSearchResult')

    },
    clickBUTabListView(){
        return this.waitForElementVisible('@busListButton', 3000)
            .click('@busListButton')
    }
};


module.exports = {
    commands: [organizationCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        busTab: {
            selector: 'button[gfpermitted="userMaster.operation.organization.cards.business_units"]'
        },
        usersTab: {
            selector: 'button[gfpermitted="userMaster.operation.organization.cards.users"]'
        },
        newBUCardViewButton: {
            selector: 'button[translate="PAGES.OPERATION.BU.NEW"]'
        },
        newBUListViewButton: {
            selector: 'a[translate="PAGES.OPERATION.ORGANIZATION.NEW_BU"]'
        },
        changeViewButton: {
            selector: 'button[gfpermitted="userMaster.organization.change_view"]'
        },
        closeButton: {
            selector: 'button[name"close"]'
        },
        AgencyName: {
            selector: 'input[ng-model="entity.companyInfo.name"]'
        },
        AgencyEnglishName: {
            selector: 'label[translate="English"] input'
        },
        AgencyGermanName: {
            selector: 'label[translate="German"] input'
        },
        AgencyItalianName: {
            selector: 'label[translate="Italian"] input'
        },
        fullAddress: {
            selector: 'input[id="address-input"]'
        },
        phoneNumber: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > div > div > md-content > div > div.div-contacts-list.ng-scope.layout-align-start-end.flex > div > md-content > div > gf-edit-company > div > div:nth-child(1) > div > div:nth-child(5) > div > md-input-container > input'
        },
        emailAddress: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > div > div > md-content > div > div.div-contacts-list.ng-scope.layout-align-start-end.flex > div > md-content > div > gf-edit-company > div > div:nth-child(1) > div > div:nth-child(7) > md-input-container> input'
        },
        managingBU: {
            selector: 'label[name="Managing BU"] input'
        },
        manager: {
            selector: 'label[name="Manager Name"] input'
        },
        externalId: {
            selector: 'input[placeholder="ID"]'
        },
        Description: {
            selector: 'input[placeholder="Description"]'
        },
        legalAddress: {
            selector: 'input[id="legal-address-input"]'
        },
        save: {
            selector: 'span[translate="COMPONENTS.GF_BOTTOM_TOOLBAR.SAVE"]'
        },
        searchButton: {
            selector: 'div[class="spyglass ng-scope"] button'
        },
        searchTextField: {
            selector: 'input[ng-model="listController.networkParent.search"] '
        },
        firstSearchResult: {
            selector: 'div[class="contacts-list layout-column"] gf-contact-list-item:nth-of-type(1) div div:nth-of-type(2) div span'
        },
        busListButton: {
            selector: '/html/body/div/div/div/div/gf-tabs/div/div/div/div/md-content/div/div[1]/gf-sub-menu-item[2]/div/md-list-item/div/button',
            locateStrategy: 'xpath'
        },
        selectBU: {
            selector: 'body > div > div > div > div > gf-tabs > div > div > div > div > md-content > div > div.div-contacts-list.ng-scope.layout-align-start-end.flex > div > gf-contact-list > div > div > gf-contact-list-item:nth-child(1) > div > div.avatar-part.ng-scope > gf-entity-avatar > div > span.ng-binding'
        },
        deleteBUButton: {
            selector: 'body > div.ng-scope > div > div > div > gf-tabs > div > div > div > div > md-toolbar > div > div > button'
        }
    }
};

