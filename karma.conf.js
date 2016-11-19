module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'directives/**/*.module.js',
            'main/**/*.module.js',
            '*.module.js',
            'directives/**/*.js',
            'main/**/*.js'
        ],

        exclude: [
            // 'main/*.spec.js',
            // 'main/about/**/*.spec.js',
            // 'main/home/**/*.spec.js',
            // 'directives/**/*.spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ]
    });
};
