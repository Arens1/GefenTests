/**
 * Created by michaelarens on 8/10/17.
 */
const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const operationCommandObj = require('./operation-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];
const operation = operationCommandObj['click Organization'];


module.exports = {
    'Login'(browser){
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Operation'(browser){
        dashboard(browser);
    },
    'click Organization'(browser){
        operation(browser)
    },
    'open BU tab'(browser){
        const operation = browser.page.commandsOrganization();

        operation.clickBUtab()

    },

    'create new BU'(browser){
        const operation = browser.page.commandsOrganization();

        operation.validateForm()
            .createNewBU()
    },
    'fill data in BU'(browser){
        const operation = browser.page.commandsOrganization();

        operation.fillNameAndAddress("ArensTestBU", "givati 18 bat yam");
        browser.pause(1000)
            .keys(browser.Keys.DOWN_ARROW)
            .pause(1000)
            .keys(browser.Keys.ENTER)
            .pause(1000)
            .keys(browser.Keys.PAGEDOWN)//;
      //operation.fillPhoneAndEmail("032453644", "test@gefen.online");
        //browser.pause(1000)
            .keys(browser.Keys.PAGEDOWN);
       // operation.fillManagingBU("arensBU");
        operation.fillExternalIdAndDescription("1234556", "test description")
            .fillLegalAddress("kalisher 20 tel aviv");
        browser.keys(browser.Keys.DOWN_ARROW)
            .pause(1000)
            .keys(browser.Keys.ENTER)
            .pause(3000);
        operation.clickSave();
        /*.changeView()
            .clickBUTabListView()
            .searchBU("arenstest");
        browser.pause(2000);
        operation.clickBU()*/
    },
    'edit BU'(browser){
        const operation = browser.page.commandsOrganization();
        const organizationCommandObj = require('./organization-command-object');
        const fillData = organizationCommandObj['fill data in BU'];
        operation.changeView()
            .clickBUTabListView()
            .searchBU("ArensTestBU");

        browser.pause(2000);
        operation.clickBU();
        fillData(browser)
    },
    'delete BU'(browser){
        const operation = browser.page.commandsOrganization();
        operation.deleteBU()
            .api.refresh();
        browser.end();


    }


};


