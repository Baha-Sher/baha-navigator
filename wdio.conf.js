exports.config = {
    hostname: 'localhost',
    port: 4444,
    path: '/',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        //'./test/specs/clients.spec.js',
        './test/specs/example.e2e.js',
        './test/specs/login.spec.js',
        './test/specs/search.spec.js',
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://167.114.201.175:5000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
