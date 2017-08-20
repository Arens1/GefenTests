/**
 * Created by michaelarens on 7/4/17.
 */
const loginCommandObj = require('./login-command-object');
const dashboardCommandObj = require('./dashboard-command-object');

const loginIn = loginCommandObj['Login with correct username and password'];
const dashboard = dashboardCommandObj['click on messaging card'];

loginIn(browser);
dashboard(browser);



