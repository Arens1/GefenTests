/**
 * Created by michaelarens on 3/23/17.
 */

//const loginCommandObj = require('./login-command-object');
//const _ = require('lodash');

//const commsCommandObj = {
module.exports = {
    'Login with correct username and password'(browser){
        const login = browser.page.commandsLogin();

        login.navigate('https://backoffice.onestage.xyz')
            .fillInForm('ArensGefen', 'A123456#')
            .submit()
            .validateLogin();
    },

    'composeNewMessage'(browser){
        const messaging = browser.page.commandsComms();

        messaging.navigate('https://backoffice.onestage.xyz/chat')
            .validateForm()
            .startConversation()
            .addParticipant('david arens')
            .sendMessage('Hi, how are you doing?');
    },
    'searchAndReplyToMessage'(browser){
        const messaging = browser.page.commandsComms();

        messaging//.searchValue('natalie arens')
           .openFirstConversation()
            .sendMessage('hey yo, this is my reply')
    }

};

//module.exports = Object.assign({}, commsCommandObj, _.pick(loginCommandObj, ['Login with correct username and password']))
