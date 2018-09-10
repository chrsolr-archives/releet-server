'use strict';

import angular from 'angular';

class AngularConfig {
  constructor($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/home.html',
      caseInsensitiveMatch: true
    }).otherwise({
      redirectTo: '/'
    });

    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-blue')
      .accentPalette('amber');

    $locationProvider.html5Mode(true);
  }
}

angular.module('releet').config(($routeProvider, $locationProvider, $mdThemingProvider) =>
  new AngularConfig($routeProvider, $locationProvider, $mdThemingProvider));
