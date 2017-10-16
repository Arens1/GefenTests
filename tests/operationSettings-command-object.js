/**
 * Created by michaelarens on 9/11/17.
 */

const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const settingsCommandObj = require('./settings-command-object');


const login = loginCommandObj['Login with correct username and password'];
const loginerror = loginCommandObj['Enter wrong username and password'];
const dashboard = dashboardCommandObj['click on operation card'];
const changePass = settingsCommandObj['change password'];
const changePassError = settingsCommandObj['change password error'];
const logout = settingsCommandObj['logout'];


module.exports = {
    'CapitalLetters'(browser) {
        const operationSettings = browser.page.commandsOperationSettings();

        login(browser, 'ArensGefen', 'A123456#');
        dashboard(browser);

        operationSettings.validateForm()
            .checkCapitalLetters();

        changePassError(browser, 'a123456#');
        browser.pause(2000);
        operationSettings.openOperationTab()
            .validateForm()
            .unCheckCapitalLetters();

        changePass(browser, 'a123456#');
        logout(browser);
        browser.pause(1000);
        login(browser, 'ArensGefen', 'a123456#');
        browser.end();
    },
    'CapitalChars'(browser) {
        const operationSettings = browser.page.commandsOperationSettings();

        login(browser, 'ArensGefen', 'A123456#');
        dashboard(browser);

        operationSettings.validateForm()
            .unCheckSpecialChars();
        browser.refresh();
        changePass(browser, 'A1234567');
        browser.pause(1000);
        operationSettings.openOperationTab()
            .validateForm()
            .checkSpecialChars();

        changePassError(browser, 'A1234567');
        browser.end();
    },
    'ForceResetFirstLogin'(browser) {
        const operationSettings = browser.page.commandsOperationSettings();

        login(browser, 'ArensGefen', 'A123456#');
        dashboard(browser);

        operationSettings.validateForm()
            .checkForceResetFirstLogin();
        browser.refresh();
        operationSettings.unCheckForceResetFirstLogin();
        browser.end();
    },

    'changeLength'(browser){
        const operationSettings = browser.page.commandsOperationSettings();

        login(browser, 'ArensGefen', 'A123456#');
        dashboard(browser);
        operationSettings.validateForm()
            .changeLength("six");
        changePassError(browser, 'a1234');
        browser.pause(2000);
        operationSettings.openOperationTab()
            .validateForm()
            .changeLength("eight");
        changePassError(browser, 'a1234');
        browser.pause(2000);
        operationSettings.openOperationTab()
            .validateForm()
            .changeLength("ten");
        changePassError(browser, 'a1234');
        browser.pause(2000);
        operationSettings.openOperationTab()
            .validateForm();
        changePass(browser, 'a1234567890#');


    },
};

