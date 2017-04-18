var loginCommands = {
	validateForm: function() {
		return this.waitForElementVisible('@username', 3000)
			.verify.visible('@username')
			.verify.visible('@password')
			.verify.visible('submit')
			.verify.elementNotPresent('@error')
	},
	fillInForm: function(username, password) {
		return this.waitForElementVisible('@username', 3000)
			.setValue('@username', username)
			.setValue('@password', password)
	},
	submit: function() {
		return this.waitForElementVisible('@submit', 3000)
			.click('@submit')
	},
	validateError: function(errorMessage) {
		return this.waitForElementVisible('@error', 3000)
			.verify.containsText('@error', errorMessage)

	},
    validateLogin: function() {
        return this.waitForElementVisible('@logo', 3000);
	}
};


module.exports = {
	commands: [loginCommands],
	url: function() { 
		return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector: 'input[id=input_0]'
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