const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const operationCommandObj = require('./operation-command-object');

const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on operation card'];
const operation = operationCommandObj['click Automation'];

module.exports = {
    'CreateEditDeleteAutomation'(browser,username,password,event,channel,title,message,editedEvent,editedChannel,tickbox,editedTitle,editedMessage) {
        const automation = browser.page.commandsAutomation();
        //browser.start_session();
        login(browser,username,password);
        dashboard(browser);
        operation(browser);
        automation.createNewAuto()
        .chooseEvent(event)
        .chooseChannel(channel)
        .inputAndSave(title,message)
        .chooseCreatedAuto()
        .chooseEvent(editedEvent)
        .chooseChannel(editedChannel)
        .tickBoxes(tickbox)
        .inputAndSave(editedTitle,editedMessage)
        .deleteCreatedAuto().pause(2000)
        browser.end();
    },
        // 'Login'(browser) {
        //     login(browser, 'borism', '12345678*');
        // },
        // 'open Operation'(browser) {
        //     dashboard(browser);
        // },
        // 'click on Automation tab'(browser) {
        //     operation(browser)
        // },
        // 'click create new'(browser){
        //     const automation = browser.page.commandsAutomation();
        //     automation.createNewAuto();
        // },
        // 'choose an event'(browser){
        //     const automation = browser.page.commandsAutomation();
        //     automation.chooseEvent('@NEW_SYSTEM_MESSAGE');
        // },
        // 'choose a channel'(browser){
        //     const automation = browser.page.commandsAutomation();
        //     automation.chooseChannel('@PUSH_WEB');
        // },
        // 'input title and message and save'(browser){
        //     const automation = browser.page.commandsAutomation();
        //     automation.inputAndSave("testTitle","testMessage");
        // },
        // 'edit newly created automation'(browser){
        //     const automation = browser.page.commandsAutomation();
        //     automation.chooseCreatedAuto();
        //     automation.chooseEvent(event);
        //     automation.chooseChannel('@PUSH_APP');
        //     automation.tickBoxes('@userOffline');
        //     automation.inputAndSave("testTitleAltered","testMessageAltered");
        // },
        // 'delete created automation' (browser) {
        //     const automation = browser.page.commandsAutomation();
        //     automation.deleteCreatedAuto();
        // }
    }

