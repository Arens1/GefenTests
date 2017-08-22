const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt')

module.exports = {
	"src_folders": ["tests"],
	"output_folder": "reports",
	"custom_commands_path": "",
	"custom_assertions_path": "",
	"page_objects_path": "page-objects",
	"globals_path": "",

	"selenium": {
		"start_process": true,
		"server_path": seleniumServer.path,
		"host": "127.0.0.1",
		"port": 4444,
		"cli_args": {
			"webdriver.chrome.driver": "./bin/drivers/chromedriver",
			"webdriver.gecko.driver" : "./bin/drivers/geckodriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "http://localhost:3000",
			"selenium_host": "localhost",
			"selenium_port": 4444,
			"pathname": "/wd/hub",
			"silent": true,
			"screenshots": {
				"enabled": false,
				"path": ""
			},
			"desiredCapabilities": {
				"browserName": "chrome",
                "chromeOptions" : {
                    "args" : ["--disable-notifications"]//disables chrome notifications (https://github.com/nightwatchjs/nightwatch/wiki/Chrome-Setup)
                }
			}
		},
        "onestage":{
            "launch_url": "https://backoffice.onestage.xyz",
            globals: require('./data/staging')
        },
        "threestage":{
            "launch_url": "https://backoffice.threestage.xyz"
        },
        "prod":{
            "launch_url": "https://backoffice.testim.xyz"
        },

		"ci": {
			"desiredCapabilities": {
				"browserName": "firefox"
			}
		},

		"phantom": {
			"desiredCapabilities": {
				"browserName": "phantomjs",
				"phantomjs.binary.path": phantomjs.path,
			}
		}
	}
}
