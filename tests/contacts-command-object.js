/**
 * Created by michaelarens on 8/24/17.
 */
const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on contacts card'];


module.exports = {
    'Login'(browser){
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Contacts'(browser){
        dashboard(browser);
    },
    'click upload'(browser){
        const contacts = browser.page.commandsContacts();

        contacts.validateForm()
            .clickOnUpload()
            .clickGooglePlugin()
    }


};

