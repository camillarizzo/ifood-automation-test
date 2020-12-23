const { config } = require('./wdio.shared.conf');

config.specs = 
    [
        './test/*.js'
    ];
config.reporters= ['spec',
['allure', {outputDir: 'report/allure-results/iOS', disableWebdriverScreenshotsReporting: false, disableWebdriverStepsReporting: true}, ],
],  
config.capabilities = 
    [{
        maxInstances: 1,

        automationName: "XCUITest",
        deviceName: "iPhone 8",
        platformName: "iOS",
        platformVersion: "14.2",
        app: "ifood-test.app",
        autoAcceptAlerts:true,
        autoGrantPermissions:true,
        noReset: false,
        newCommandTimeout: 120000,
        chromedriverExecutableDir: process.cwd().concat('/node_modules/chromedriver/lib/chromedriver')
        }];

exports.config = config;