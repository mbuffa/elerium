;(function () {
  'use strict';

  var app = angular.module('app.components');

  app.controller('MainController', function ($rootScope, $scope, $q, $location, i18n, config) {
    var _ctrl = this,
        _dependenciesLoaded = false,
        _promises = [
          i18n.getPromise(),
          config.getPromise()
        ];

    var init = function () {
      $q.all(_promises).then(function () {
        $rootScope.i18n = {
          t: function (string)    { return i18n.translate(string); }
        };

        _dependenciesLoaded = true;
      });
    }

    init();

    this.isLoaded = function () { return _dependenciesLoaded; }

    this.getFooterTranslation = function () {
      return i18n.translate('footer', { trust: true });
    }

    this.getAvailableLocales = function () {
      return i18n.getAvailableLocales();
    }

    this.setLocale = function (locale) {
      i18n.setLocale(locale);
    }

    this.getLocaleCssClass = function (locale) {
      return { active: i18n.getLocale() === locale };
    }

    this.getNavCssClass = function (path) {
      return { active: $location.path() === path };
    }
  });

  app.directive('mainContainer', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/javascripts/components/main/main.html',
      controller: 'MainController',
      controllerAs: 'mainCtrl'
    }
  });

})();
