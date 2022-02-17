let chai = require("chai");

exports.config = {

    // Test Scripts
    specs: [
        "src/test-scripts/TC_001_LoginOK.js",
        // "src/test-scripts/TC_002_Login_wrong_username.js",
        // "src/test-scripts/TC_003_Login_wrong_password.js"
    ],

    suites: {
        productDetail:[
            "src/test-scripts-pc/003_Is_Clickable.js"
        ],
        login: [
            "src/test-scripts-pc/001_Login_OK.js",
            "src/test-scripts-pc/002_Login_Wrong.js"
        ],
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
    maxInstances: 5,

    capabilities: [
        {
            browserName: "chrome",
            'goog:chromeOptions': {
                args: ['--window-size=1280,768']
            }
        },
        {
            browserName: "firefox",
            'goog:firefoxOptions': {
                args: ['--window-size=1280,768']
            }
        }
        // ,
        // {
        //     browserName: "MicrosoftEdge"
        //     , 
        //     'goog:MicrosoftEdgeOptions': {
        //         args: ['--window-size=1280,768']
        //     }
        // }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 4444,
    // path: '//',

    baseUrl: "http://192.168.88.218",

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
    },

    afterTest: (test) => {
        // 1. I wanna save a PNG File when the test failed
        if (test.passed === false) {
            let d = new Date,
            dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('_')+'_'+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join('_');
            let fileName = test.fullTitle + "_" + dformat ;
            browser.saveScreenshot('./images/' + fileName + '.png')
        }
    },
}