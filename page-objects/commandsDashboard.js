/**
 * Created by michaelarens on 3/19/17.
 */

var dashboardCommands = {
    validateForm: function () {
        return this.waitForElementVisible('@logo', 3000)
            .verify.visible('@messaging')
            .verify.visible('@calendar')
            .verify.visible('@emailCampaigns')
            .verify.visible('@smsCampaigns')
            .verify.visible('@documents')
            .verify.visible('@adwords')
            .verify.visible('@website')
            .verify.visible('@siteThemes')
            .verify.visible('@reports')
            .verify.visible('@settings')

    },
    clickMessaging: function() {
        return this.waitForElementVisible('@messaging', 3000)
            .api.pause(2000)
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
            selector: 'gf-dashboard-card[href="/chat"]'
        },
        calendar: {
            selector: 'gf-dashboard-card[href="/editorial_calendar"]'
        },
        emailCampaigns: {
            selector: 'gf-dashboard-card[href="/email_campaigns"]'
        },
        smsCampaigns: {
            selector: 'gf-dashboard-card[href="/sms_campaigns"]'
        },
        documents: {
            selector: 'gf-dashboard-card[href="/documents"]'
        },
        adwords: {
            selector: 'gf-dashboard-card[href="/adwords"]'
        },
        website: {
            selector: 'gf-dashboard-card[href="/website"]'

        },
        siteThemes: {
            selector: 'gf-dashboard-card[href="/site_themes"]'
        },
        reports: {
            selector: 'gf-dashboard-card[href="/reports"]'
        },
        auditing: {
            selector: 'gf-dashboard-card[href="/auditing"]'
        },
        operation: {
            selector: 'gf-dashboard-card[href="/operation"]'
        },
        settings: {
            selector: 'gf-dashboard-card[href="/user_settings"]'
        },
        logo: {
            selector: 'div[class="company-logo"]'
        }
    }

};