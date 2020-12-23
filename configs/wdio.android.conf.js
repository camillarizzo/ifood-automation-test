const { config } = require('./wdio.shared.conf');

config.specs =
[
   './test/*.js'
],
    config.reporters= ['spec',
            ['allure', {outputDir: 'report/allure-results/android', disableWebdriverScreenshotsReporting: false, disableWebdriverStepsReporting: true}, ],
    ],

    config.capabilities =
    [{
        maxInstances: 1,
        automationName: "UiAutomator2",
        deviceName: "emulator-5554",
        platformName: "Android",
        platformVersion: "10",
        appPackage: "com.ifood.testqa",
        appActivity: "host.exp.exponent.MainActivity",
        autoAcceptAlerts:true,
        autoGrantPermissions:true,
        unicodeKeyboard: true,
        resetKeyboard: true,
        noReset: false,
        newCommandTimeout: 60000,
        chromedriverExecutableDir: process.cwd().concat('/node_modules/chromedriver/lib/chromedriver')
    }];


exports.config = config;