/**
 * Created by michaelarens on 3/23/17.
 */

const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');
const fs = require('fs');
const login = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on messaging card'];


    module.exports = {
        'Login'(browser){
            login(browser, 'ArensGefen', 'A123456#');
        },
        'open Messaging'(browser){
            dashboard(browser);
        },

        'composeNewMessage'(browser){
            const messaging = browser.page.commandsComms();

            messaging.validateForm();
            browser.pause(3000);
            messaging.startConversation();

            browser.pause(3000);
            messaging.searchParticipant("david arens");
            browser.pause(5000);
            messaging.selectParticipant()
                .sendMessage('Hi, how are you doing? emailtest@gefen.online')
        },
        'composeNewSmsMessage'(browser){
            const messaging = browser.page.commandsComms();

            messaging.validateForm();
            browser.pause(3000);
            messaging.startSmsConversation();
            browser.pause(3000);
            messaging.searchParticipant('Adar Locker');
            browser.pause(5000);
            messaging.selectParticipant().sendSmsMessage('this is an automated sms message');

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
         messaging.selectParticipant();
         //.removeParticipantFromGroup()
         },

         'searchAndReplyToMessage'(browser){
         const messaging = browser.page.commandsComms();

         messaging.searchValue('arens');
         browser.pause(3000);
         messaging.openFirstConversation()
         .sendMessage('hey yo, this is my reply');
         },

         'uploadImage'(browser){
         const messaging = browser.page.commandsComms();

         messaging.clickUploadImage('/test.png');
         console.log(fs.existsSync(__dirname+ '/test.png'));
         browser.pause(2000);

         }//,
         //'end'(browser){
         //   browser.end();
         //}

         };


//module.exports = Object.assign({}, commsCommandObj, _.pick(loginCommandObj, ['Login with correct username and password']))
