/**
 * Created by michaelarens on 3/23/17.
 */

//const loginCommandObj = require('./login-command-object');
//const _ = require('lodash');

//const commsCommandObj = {
module.exports = {
    'Login with correct username and password'(browser){
        const login = browser.page.commandsLogin();

        login.navigate('https://backoffice.onestage.xyz');
        browser.pause(3000);
        login.fillInForm('arenstest', 'A123456#')
            .submit()
            .validateLogin();
    },

    'composeNewMessage'(browser){
        const messaging = browser.page.commandsComms();

        messaging.navigate('https://backoffice.onestage.xyz/chat')
            .validateForm();
        browser.pause(3000);
        messaging.startConversation();
        browser.pause(3000);
        messaging.searchParticipant('michael')
            .sendMessage('Hi, how are you doing?')
    },
    'searchAndReplyToMessage'(browser){
        const messaging = browser.page.commandsComms();

        messaging.searchValue('arens');
            browser.pause(3000);
        messaging.openFirstConversation()
            .sendMessage('hey yo, this is my reply')
    }

};

//module.exports = Object.assign({}, commsCommandObj, _.pick(loginCommandObj, ['Login with correct username and password']))
