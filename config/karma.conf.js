// Karma configuration
// Generated on Thu Jul 07 2016 10:15:49 GMT+0800 (CST)
const path = require('path');
const webpack = require('./webpack.conf.test.js');
// const WebpackConfig = require('webpack-config');
// const contextPath = path.join(__dirname, 'config', 'webpack.context.test.js');
// const config = path.join(__dirname, 'config', 'webpack.config.test.js');
// const webpack = new WebpackConfig().extend(config);

module.exports = function(config) {
  config.set({
    port: 3000,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    // list of files / patterns to load in the browser
    files: [
      path.join(__dirname, 'node_modules', 'phantomjs-polyfill', 'bind-polyfill.js'),
      '../src/**/*.spec.ts'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../src/**/*.spec.ts': ['webpack']
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // webpack config
    webpack: webpack,
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
