const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];


module.exports = {
    'Login'(browser) {
        login(browser, 'ArensGefen', 'A123456#');
    },
    'open Operation'(browser) {
        dashboard(browser);
    },
    'click Automation'(browser) {
        const automation = browser.page.commandsOperation();

        automation.validateForm();
        //   browser.pause(3000);
        automation.clickAutomations()
    },
    'click create new'(browser){
        const automation = browser.page.commandsAutomation();

        automation.clickCreateNew();
    },
    'click on Events'(browser){
        const automation = browser.page.commandsAutomation();
        automation.clickOnEvents();
    },
    // 'choose new message'(browser){
    //
    // },
    // 'click channel'(browser){
    //
    // },
    // 'choose Push web'(browser){  //notice that notification icon appears -> a way to validate
    //
    // },
    // 'click on title'(browser){
    //
    // },
    // 'input title "test"'(browser){
    //
    // },
    // 'click save'(browser){
    //
    // },
    // 'check if automation created'(browser){
    //
    // },
}