
const emailCampaigns = require('../tests/emailCampaigns-command-object');
const createNewParentCampaign = emailCampaigns['create new parent campaign'];


module.exports = {
    'create new parent campaigns'(browser) {
        createNewParentCampaign(browser, 'yotamlevy', 'Y12345678*', 'New Automated Parent Campaign Name');

        // createEditDelete(browser, 'borism', '12345678*', 'VISIT_ENDED', 'SMS', 'title2', 'message2',
        //   'NEW_BU_RATING', 'PUSH_APP', 'userOffline', 'titlealtered', 'messagealtered');
    }
}
