/**
 * Created by michaelarens on 9/12/17.
 */


const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on settings card'];



module.exports = {
    'Login'(browser) {
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Settings'(browser) {
        dashboard(browser)
    },
    'change password'(browser, pass){
        const settings = browser.page.commandsSettings();
        settings.openSettingFromSideMenu()
            .changePassword(pass)
            .save()
    },
    'change password error'(browser, pass){
        const settings = browser.page.commandsSettings();
        settings.openSettingFromSideMenu()
            .changePassword(pass)
            .save()
            .verifyError()
    },
    'logout'(browser){
        const settings = browser.page.commandsSettings();

        settings.validateForm()
            .logout();
    }
};