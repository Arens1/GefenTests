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

        operation.validateForm()
            .clickOrganization()

    },
    'click Roles'(browser){
        const operation = browser.page.commandsOperation();

        operation.validateForm()
            .clickRoles()

    },
    'click Data'(browser){
        const operation = browser.page.commandsOperation();

        operation.validateForm()
            .clickData();

    },
    'click Settings'(browser){
        const operation = browser.page.commandsOperation();

        operation.validateForm()
            .clickSettings();
    },
    'end test'(browser){
        browser.end();
    }


};
