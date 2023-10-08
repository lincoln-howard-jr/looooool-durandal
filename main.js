requirejs.config({
    paths: {
        'durandal': './node_modules/durandal/js',
        'plugins': './node_modules/durandal/js/plugins',
        'transitions': './node_modules/durandal/js/transitions',
        'knockout': './node_modules/knockout/build/output/knockout-latest',
        'jquery': './node_modules/jquery/dist/jquery',
        'text': './node_modules/requirejs-text/text',
    }
});
define(function (require) {
    const app = require('durandal/app');
    app.title = 'Durandal Starter Kit';
    app.configurePlugins({
        router: true,
        dialog: true
    });
    app.start().then(function () {
        app.setRoot('shell');
    });
});