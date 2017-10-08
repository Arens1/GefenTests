

const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const operationCommandObj = require('./operation-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];
const operation = operationCommandObj['click Roles'];


module.exports = {
    'Login'(browser) {
        login(browser, 'yotamlevy', 'Y12345678*');
    },
    'open Operation'(browser) {
        dashboard(browser)
    },
    'click on Roles Tab'(browser) {
        operation(browser)
    },
    'create new role'(browser){
        const roles = browser.page.commandsRoles();
        roles.createNewRole();
    },
    'edit role'(browser){
        const roles = browser.page.commandsRoles();
        roles.editRole();
    },
    'delete role'(browser) {
        const roles = browser.page.commandsRoles();
        roles.deleteRole();
    }

};