;(function () {
  'use strict';

  var module = angular.module('app.services');

  module.service('github', function ($http, $q, config) {
    var _config = config.get(),
        _domain = 'https://api.github.com/',
        _slug   = _config.github.user.name,
        _posts = {
          repo:   _config.github.posts.repo,
          branch: _config.github.posts.branch,
          path:   _config.github.posts.path
        },
        _excludedRepos = _config.github.projects.except,
        _requestParams = {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        };

    this.get = function (url) {
      var deferred = $q.defer();

      $http.get(url, _requestParams).then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }

    this.getReposList = function () {
      var url = _domain + 'users/' + _slug + '/repos',
          deferred = $q.defer();

      $http.get(url, _requestParams).then(function (response) {
        var filteredList = response.data.filter(function (item) {
          return _excludedRepos.indexOf(item.name) === -1;
        });

        deferred.resolve(filteredList);
      }, function (response) {
        deferred.reject(response);
      });

      return deferred.promise;
    };

    this.getPostsList = function () {
      var url = _domain + 'repos/' + _slug + '/' + _posts.repo + '/contents/' +
                _posts.path + '?ref=' + _posts.branch,
          deferred = $q.defer();

      $http.get(url, _requestParams).then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }

  });
})();
