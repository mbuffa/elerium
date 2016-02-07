;(function () {
  'use strict';

  var app = angular.module('app.components');

  app.controller('ProjectsCtrl', function ($filter, github, i18n) {
    var _ctrl = this,
        _projects = [];

    github.getReposList().then(function (response) {
      _projects = response.map(function (item) {
        return {
          name: item.name,
          description: item.description,
          fork: item.fork,
          language: item.language,
          urls: {
            repository: item.html_url,
            homepage:   item.homepage
          },
          counts: {
            stargazers: item.stargazers_count,
            watchers:   item.watchers_count
          },
          createdAt: item.created_at,
          updatedAt: item.updated_at
        };
      });
    });

    this.getList = function () {
      return _projects;
    }

    this.formatDate = function (value, i18nPath) {
      return i18n.translate(i18nPath, {
        params: [
          $filter('date')(value, 'H:m:s'),
          $filter('date')(value, 'yyyy-MM-d')
        ]
      });
    }
  });

})();
