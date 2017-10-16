const loginCommands = {
	validateForm(){
		return this.waitForElementVisible('@username', 3000)
			.verify.visible('@username')
			.verify.visible('@password')
			.verify.visible('@submit')
			.verify.elementNotPresent('@error')
	},
	fillInForm(username, password){
		return this.waitForElementVisible('@username', 3000)
			.setValue('@username', username)
			.setValue('@password', password)
	},
	submit(){
		return this.waitForElementVisible('@submit', 3000)
			.click('@submit')
	},
	validateError(errorMessage){
		return this.waitForElementVisible('@error', 3000)
			.verify.containsText('@error', errorMessage)

	},
    validateLogin(){
        return this.waitForElementVisible('@logo', 10000);
	}

};


module.exports = {
	commands: [loginCommands],
	url: function() { 
		return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector: 'input[ng-model="loginCtrl.emailOrUsername"]'
		},
		password: {
			selector: 'input[type=password]'
		},
		submit: {
			selector: 'button[class="md-accent md-raised md-button md-ink-ripple"]'
		},
		error: {
			selector: 'div[class="error-message ng-scope"]'
		},
		logo: {
			selector: 'div[class="company-logo"]'
		}
	}
};