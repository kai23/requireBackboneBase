require.config({
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery', 'jqueryui'],
            exports: 'bootstrap'
        },
        'jqueryui': {
            deps: ['jquery'],
            exports: 'jqueryui'
        }
    },
    paths: {
        jquery:     'libs/jquery/jquery.min',
        async:      'libs/require/async',
        jqueryui:   'libs/jquery/jquery-ui.min',
        underscore: 'libs/underscore/underscore.min',
        backbone:   'libs/backbone/backbone.min',
        bootstrap:  'libs/bootstrap/bootstrap.min',
        text:       'libs/require/text',
        json2:      'libs/json/json2',
        fonctions:   "libs/helpers/fonctions"
    }

});

require(['app', 'json2','bootstrap'], function(app) {
    app.initialize();
});