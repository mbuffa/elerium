;(function () {
  var module = angular.module('app.services');

  module.service('i18n', function ($q, $http, $sce) {
    var _deffered = $q.defer(),
        _locales = {},
        _availableLocales = [];
        _currentLocale = navigator.language || 'en-US';

    var init = function () {
      $http.get('config/i18n.json').then(function (response) {
        _deffered.resolve(response.data);

        _locales = angular.copy(response.data);
        _availableLocales = Object.keys(response.data);

        if (_availableLocales.indexOf(_currentLocale) === -1) {
          _currentLocale = _availableLocales[0];
        }
      }, function (response) {
        _deffered.reject(response.data);
      });
    }

    var find = function (locale, path) {
      var nodes = path.split('.'),
          ptr   = _locales[locale];

      for (var nodeIndex in nodes) {
        if (ptr === undefined) break;
        ptr = ptr[ nodes[nodeIndex] ];
      }
      return ptr;
    }

    init();

    this.getAvailableLocales = function () {
      return _availableLocales;
    }

    this.getLocale = function () {
      return _currentLocale;
    }

    this.setLocale = function (locale) {
      _currentLocale = locale;
    }

    this.translate = function (path, options) {
      var locale = _currentLocale,
          translation = find(locale, path),
          options = options || {};

      if (translation === undefined && locale !== _currentLocale) {
        translation = find(_currentLocale, path);
      }

      if (translation === undefined) {
        translation = "translation missing: " + path;
      }

      if (Object.prototype.toString.call(translation) === '[object Array]') {
        translation = translation.join(' ');
      }

      if (options.trust) {
        translation = $sce.trustAsHtml(translation);
      }

      if (options.params && Object.prototype.toString.call(options.params) === '[object Array]') {
        for (var paramIndex in options.params) {
          translation = translation.replace('%{}', options.params[paramIndex]);
        }
      }

      return translation;
    };

    this.getPromise = function () {
      return _deffered.promise;
    };
  });
})();
