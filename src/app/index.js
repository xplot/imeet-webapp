'use strict';

angular.module('imeet', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        });
        
        $urlRouterProvider.otherwise('/');
    })
;

$(function() {
    var CordovaInit = function() {

        var onDeviceReady = function() {
          receivedEvent('deviceready');
          console.log('ready');
        };

        var receivedEvent = function(event) {
            console.log('Start event received, bootstrapping application setup.');
            angular.bootstrap($('body'), ['imeet']);
        };

        this.bindEvents = function() {
            document.addEventListener('deviceready', onDeviceReady, false);
        };

        //If cordova is present, wait for it to initialize, otherwise just try to
        //bootstrap the application.
        if (window.cordova !== undefined) {
            console.log('Cordova found, wating for device.');
            this.bindEvents();
        } else {
            console.log('Cordova not found, booting application');
            receivedEvent('manual')
        }
    };
	
    console.log('Bootstrapping!');
	new CordovaInit();
});