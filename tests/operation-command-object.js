/**
 * Created by michaelarens on 7/26/17.
 */
const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];

module.exports = {
    'Login'(browser){
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Operation'(browser){
        dashboard(browser);
    },
    'click Organization'(browser){
        const operation = browser.page.commandsOperation();
        operation.validateForm();
     //   browser.pause(3000);
        operation.clickOrganization();
    },
    'click Roles'(browser){
        const operation = browser.page.commandsOperation();
        operation.validateForm();
        operation.clickRoles();
    },
    'click Automation'(browser) {
        const automation = browser.page.commandsOperation();
        automation.validateForm();
        automation.clickAutomations()
    }
};
