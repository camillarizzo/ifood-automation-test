const time = require("../core/helpers/time-config");
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: [
        './test/*.js'
    ],
    // ============
    // Capabilities
    // ============
    capabilities: [{
        automationName: "UiAutomator2",
        device: "Google Pixel 3",
        os_version: "9.0",
        app: process.env.BROWSERSTACK_APP_ID,
        realMobile: "true",
        autoAcceptAlerts:true,
        autoGrantPermissions:true,
        unicodeKeyboard: true,
        resetKeyboard: true,
        noReset: false,
        newCommandTimeout: time.timeoutConfig.timeout,
        build: process.env.BUILD_ANDROID,
        'browserstack.appium_version': '1.16.0'
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://camillarizzo2:vq7m7JqnrkuBzYTKBnYU@hub-cloud.browserstack.com/wd/hub',
    waitforTimeout: time.timeWait.implicitWait,
    connectionRetryCount: 3,
    services: ['browserstack'] ,   
    appium: {
        command: 'appium',
    },
    framework: 'mocha',
    reporters: [
          ['allure', {
            outputDir: './report/allure-results/android',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            }],
            'spec',
        ],
    mochaOpts: {
        ui: 'bdd',
        timeout: time.timeoutConfig.timeout,
        require: ['@babel/register']
    },
    afterTest: function(test) {
        if (test.error !== undefined ) {
            browser.takeScreenshot();
        }
    }
}

