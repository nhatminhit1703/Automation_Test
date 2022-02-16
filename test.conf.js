let chai = require("chai");

exports.config = {

    // Test Scripts
    specs: [
        "src/test-scripts/TC_001_LoginOK.js",
        "src/test-scripts/TC_002_Login_wrong_username.js",
        "src/test-scripts/TC_003_Login_wrong_password.js"
    ],

    suites: {
        api_learning: [
            "src/api-learning/alertHandle.js",
            "src/api-learning/click.js"
        ],
        login_function: [
            "src/test-scripts/TC_001_LoginOK.js",
            "src/test-scripts/TC_002_Login_wrong_username.js",
            "src/test-scripts/TC_003_Login_wrong_password.js" 
        ]
    },
    maxInstances: 2,

    capabilities: [
        {
            // maxInstances: 1,
            //// args: ['--headless', '--window-size=1024,768'],
            browserName: 'chrome',
            'goog:chromeOptions': {
                mobileEmulation: {'deviceName': 'Nexus 5'},
                args: [ '--no-sandbox',
                        '--disable-gpu',
                        '--start-fullscreen',
                        '--disable-notifications',
                        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                ]
            }
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',

    baseUrl: "http://the-internet.herokuapp.com",

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],

    before: () => {
        global.expect = chai.expect;
    }
}