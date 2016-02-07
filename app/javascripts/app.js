;(function () {
  'use strict';

  angular.module('app.services', []);
  angular.module('app.components', ['app.services']);

  var appDependencies = [
    'ngRoute',
    'app.services',
    'app.components'
  ];

  var app = angular.module('app', appDependencies);

  app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);

    var vanillaWhen = $routeProvider.when;

    $routeProvider.when = function (path, route) {
      route.resolve = route.resolve || {};
      route.resolve._settings = function (config) {
        return config.getPromise();
      };
      route.resolve._locale = function (i18n) {
        return i18n.getPromise();
      };

      return vanillaWhen.call($routeProvider, path, route);
    }

    $routeProvider
      .when('/', {
        controller: 'BlogCtrl',
        controllerAs: 'blogCtrl',
        templateUrl: 'app/javascripts/components/blog/blog.html'
      })
      .when('/projects', {
        controller: 'ProjectsCtrl',
        controllerAs: 'projectsCtrl',
        templateUrl: 'app/javascripts/components/projects/projects.html'
      })
      .when('/contact', {
        controller: 'ContactCtrl',
        controllerAs: 'contactCtrl',
        templateUrl: 'app/javascripts/components/contact/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
