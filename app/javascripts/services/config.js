;(function () {
  var module = angular.module('app.services');

  module.service('config', function ($q, $http) {
    var _deffered = $q.defer(),
        _config = {};

    var init = function () {
      $http.get('config/config.json').then(function (response) {
        _deffered.resolve(response.data);
        _config = angular.copy(response.data);
      }, function (response) {
        _deffered.reject(response.data);
      });
    }

    init();

    this.get = function () {
      return _config;
    };

    this.getPromise = function () {
      return _deffered.promise;
    };
  });
})();
