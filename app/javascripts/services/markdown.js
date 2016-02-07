;(function () {
  'use strict';

  var module = angular.module('app.services');

  module.service('markdown', function ($sce) {
    var _showdown = new showdown.Converter();

    this.toHtml = function (string) {
      return $sce.trustAsHtml(_showdown.makeHtml(string));
    }
  });
})();
