/**
 * Created by michaelarens on 3/19/17.
 */
module.exports = {
    'Login with correct username and password': function(browser){
        const login = browser.page.commandsLogin();

        login.navigate('https://backoffice.onestage.xyz')
            .fillInForm('ArensGefen', 'A123456#')
            .submit()
            .validateLogin();
        //browser.end();
    },
    'click on messaging card': function(browser){
        const dashboard = browser.page.commandsDashboard();

        dashboard.validateForm()
            .clickMessaging();
        browser.pause(3000)
            .end();
    }

};

