/**
 * Created by michaelarens on 3/19/17.
 */

const dashboardCommands = {
    validateForm: function () {
        return this.waitForElementVisible('@logo', 3000)
            .verify.visible('@messaging');
           /* .verify.visible('@calendar')
            .verify.visible('@emailCampaigns')
            .verify.visible('@smsCampaigns')
            .verify.visible('@documents')
            .verify.visible('@adwords')
            .verify.visible('@website')
            .verify.visible('@siteThemes')
            .verify.visible('@reports')
            .verify.visible('@settings')*/

    },
    clickMessaging: function() {
        return this.waitForElementVisible('@messaging', 3000)
            .click('@messaging');
           // .waitForElementVisible('@messaging', 3000);
           /* .browser.getTitle(function(title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal(title, 'Messaging');
        });// assert title*/
    }
};


module.exports = {
    commands: [dashboardCommands],
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        messaging: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.chat"]'
        },
        calendar: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.editorial_calendar"]'
        },
        emailCampaigns: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.email_campaigns_cards"]'
        },
        smsCampaigns: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.sms_campaigns"]'
        },
        documents: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.documents"]'
        },
        adwords: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.adwords"]'
        },
        website: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.website_cards"]'

        },
        siteThemes: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.site_themes"]'
        },
        reports: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.reports"]'
        },
        auditing: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.auditing"]'
        },
        operation: {
            selector: 'gf-dashboard-card[gfpermitted="userMaster.operation"]'
        },
        settings: {
            selector: 'gf-dashboard-card[gfpermitted="COMPONENTS.SIDE_MENU.SETTINGS"]'
        },
        logo: {
            selector: 'div[class="company-logo"]'
        }
    }

};