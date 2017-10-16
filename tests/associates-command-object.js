/**
 * Created by michaelarens on 8/1/17.
 */

const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on associates card'];

module.exports = {
    'Login'(browser){
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Associates'(browser){
        dashboard(browser);
    },
    'send SMS to user'(browser){
        const associates = browser.page.commandsAssociates()

        associates.validateForm()
            .SearchUser('david arens');
        browser.pause(2000)
        .end();
    }
};