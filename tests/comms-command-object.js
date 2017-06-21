/**
 * Created by michaelarens on 3/23/17.
 */

//const loginCommandObj = require('./login-command-object');
//const _ = require('lodash');

//const commsCommandObj = {
module.exports = {
    'Login with correct username and password'(browser){
        const login = browser.page.commandsLogin();

        login.navigate('');
        browser.pause(3000);
        login.fillInForm('arenstest', 'A123456#')
            .submit()
            .validateLogin();
    },
    'click on messaging card'(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm()
            .clickMessaging();
        browser.pause(3000)
    },

    'composeNewMessage'(browser){
        const messaging = browser.page.commandsComms();

        messaging.validateForm();
        browser.pause(3000);
        messaging.startConversation();
        browser.pause(3000);
        messaging.searchParticipant('michael arens');
        browser.pause(5000);
        messaging.selectParticipant()
            .sendMessage('Hi, how are you doing?')
    },
    'groupChat'(browser){
        const messaging = browser.page.commandsComms();
        browser.pause(3000);
        messaging.startConversation();
        browser.pause(3000);
        messaging.searchParticipant('michael arens');
        browser.pause(5000);
        messaging.selectParticipant();
        browser.pause(2000);
        messaging.searchParticipant('natalie arens');
        browser.pause(5000);
        messaging.selectParticipant()
            .sendMessage('Hi, how are you doing? emailtest@gefen.online ')
            .changeGroupSubject('test group')
            .addParticipantToGroup('Zurab Arens');
        browser.pause(5000);
        messaging.selectParticipant()
           .removeParticipantFromGroup()
    },

    'searchAndReplyToMessage'(browser){
        const messaging = browser.page.commandsComms();

        messaging.searchValue('arens');
        browser.pause(3000);
        messaging.openFirstConversation()
            .sendMessage('hey yo, this is my reply');
        browser.end();
    }

};

//module.exports = Object.assign({}, commsCommandObj, _.pick(loginCommandObj, ['Login with correct username and password']))
