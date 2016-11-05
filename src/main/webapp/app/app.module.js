(function() {
    'use strict';
    console.log('AAAAAAAAAAAAAAA started angular module');
    angular
        .module('striperApp', [
            'ngStorage', 
            'tmh.dynamicLocale',
            'pascalprecht.translate', 
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
    	console.log('AAAAAAAAAAAAAAA calling run');
        stateHandler.initialize();
        translationHandler.initialize();
    }
})();
