
module.exports = {
  'Login Page Initial Render'(browser){
      const login = browser.page.commandsLogin();

    login.navigate()
      .validateForm();

    browser.end();
  },



  'Try to login with no username or password'(browser){
      const login = browser.page.commandsLogin();
    
    login.navigate()
      .submit()
      .validateError('The username and password do not match');

    browser.end();
  },



  'Try to login with a username and no password'(browser, username, password){
      const login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm(username, password)
      .submit()
      .validateError('The username and password do not match');

    browser.end();
  },



  'Try to login with a password and no username'(browser, username, password){
      const login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm('', 'test')
      .submit()
      .validateError('The username and password do not match');

    browser.end();
  },



  'Enter wrong username and password'(browser, username, password){
    const login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm(username, password)
      .submit()
      .validateError('The username and password do not match');

    browser.end();
  },

    'Login with correct username and password'(browser, username, password){
      const login = browser.page.commandsLogin();

        login.navigate()
            .fillInForm(username, password)
            .submit()
            .validateLogin();
       // browser.end();
    },

    'Login with email and password'(browser, email, password){
        const login = browser.page.commandsLogin();

        login.navigate()
            .fillInForm(email, password)
            .submit()
            .validateLogin();
        browser.end();
    }


};
