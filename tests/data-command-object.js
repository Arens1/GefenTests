/**
 * Created by michaelarens on 8/22/17.
 */

const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const operationCommandObj = require('./operation-command-object');
const contactsCommandObj = require('./contacts-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];
const contactsCard = dashboardCommandObj['click on contacts card'];
const operation = operationCommandObj['click Data'];
const contacts = contactsCommandObj['click upload'];


module.exports = {
    'Login'(browser){
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Operation'(browser){
        dashboard(browser);
    },
    'click Data'(browser){
        operation(browser)
    },
    'add new plugin'(browser){
        const data = browser.page.commandsData();

        data.validateForm()
            .addPlugin()
    },
    'fill data in plugin'(browser){
        const data = browser.page.commandsData();

        data.addRole('onestage - marketing manager');
        browser.pause(2000)
            .keys(browser.Keys.DOWN_ARROW)
            .pause(1000)
            .keys(browser.Keys.ENTER);
        data.addTitle('test plugin')
            .addDescription('description test')
            .addType()
            .addEntity()
            .addDirection();
        browser.pause(2000);
        data.addURL('/googleplugintest')
        .save()
            .api.refresh();
        //browser.end();

    },
    'edit plugin'(browser){
        const data = browser.page.commandsData();
        const dataCommandObj = require('./data-command-object');
        const fillData = dataCommandObj['fill data in plugin'];

        data.selectLastPlugin();
        fillData(browser);
        data.api.refresh();
        browser.end();
    },
    /*'delete last plugin'(browser){
        const data = browser.page.commandsData();

        data.selectLastPlugin();
            browser.pause(2000);
        data.deleteLastPlugin()
            .api.refresh();

    },*/
    'verify plugin added to role'(browser){
        login(browser, 'ArensGefen', 'A123456#');
        contactsCard(browser);
        contacts(browser)
    }


};

