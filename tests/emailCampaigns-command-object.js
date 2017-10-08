
const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on Email Campaigns card'];



module.exports = {
    'Login'(browser) {
        login(browser, 'yotamlevy', 'Y12345678*');
    },
    'click on Email Campaigns card'(browser) {
        dashboard(browser)
    },
    'create new parent campaign'(browser){
        const parentCampaign = browser.page.commandsEmailCampaigns();
        
        parentCampaign.createNewParentCampaign();
    },
    'add Recipients'(browser){
        const parentCampaign = browser.page.commandsEmailCampaigns();
        parentCampaign.addRecipients();

    },
    'initialize campaign settings'(browser){
        const parentCampaign = browser.page.commandsEmailCampaigns();
        parentCampaign.initSettings();

    }
};