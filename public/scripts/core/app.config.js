'use strict';

import angular from 'angular';

class AngularConfig {
  constructor($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/home.html',
      caseInsensitiveMatch: true
    }).otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }
}

angular.module('releet').config(($routeProvider, $locationProvider) => new AngularConfig($routeProvider, $locationProvider));
