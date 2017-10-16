
const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on Email Campaigns card'];



module.exports = {
    // 'Login'(browser, username, password) {
    //     login(browser, username, password);
    // },
    // 'click on Email Campaigns card'(browser) {
    //     dashboard(browser)
    // },
    // 'create new parent campaign'(browser, parentCampaignNameInput){
    //     const parentCampaign = browser.page.commandsEmailCampaigns();
    //
    //     parentCampaign.createNewParentCampaign(parentCampaignNameInput, campaignsTags);
    // },
    // 'add Recipients'(browser){
    //     const parentCampaign = browser.page.commandsEmailCampaigns();
    //     parentCampaign.addRecipients();
    //
    // },
    // 'initialize campaign settings'(browser){
    //     const parentCampaign = browser.page.commandsEmailCampaigns();
    //     parentCampaign.initSettings();
    //
    // }
    'create new parent campaign'(browser, username, password, parentCampaignNameInput){
    const parentCampaign = browser.page.commandsEmailCampaigns();
    login(browser, username, password);
    dashboard(browser);
    parentCampaign.createNewParentCampaign(parentCampaignNameInput)
      .addRecipients()
      .initSettings()
    }


};
