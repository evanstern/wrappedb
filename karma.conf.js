module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/*.js',
      'test/*.js'
    ],

    reporters: ['mocha'],

    port: 9876,

    runnerPort: 9100,

    colors: true,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};

