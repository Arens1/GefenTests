/**
 * Created by michaelarens on 3/19/17.
 */
const loginCommandObj = require('./login-command-object');
const login = loginCommandObj['Login with correct username and password']

module.exports = {
    'Login'(browser){
        login(browser,'yotamlevy','Y12345678*');
    },
    'click on messaging card'(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm()
                .clickMessaging();
        browser.pause(2000);
    },
    'click on operation card'(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm()
            .clickOperation();
        browser.pause(3000);

    },
    'click on associates card'(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm()
            .clickAssociates();
        browser.pause(3000);
    },
    'click on contacts card'(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm()
            .clickContacts();
        browser.pause(3000);
    },
    'click on Email Campaigns card'(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm().clickEmailCampaigns();

        browser.pause(3000);
    },
    'go back to dashboard'(browser){
        const dashboard = browser.page.commandsDashboard();
        dashboard.clickDashboardIcon()
    }

};

