const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const operationCommandObj = require('./operation-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];
const operation = operationCommandObj['click Automation'];



module.exports = {
    'Login'(browser) {
        login(browser, 'borism', '12345678*');
    },
    'open Operation'(browser) {
        dashboard(browser);
    },
    'click on Automation tab'(browser) {
        operation(browser)
    },
    'create new automation'(browser){
        const automation = browser.page.commandsAutomation();
        automation.createNewAutomation();
    }
}