;(function () {
  'use strict';

  var app = angular.module('app.components');

  app.controller('BioCtrl', function () {
    var _ctrl = this;
  });

  app.directive('bio', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/javascripts/components/bio/bio.html',
      controller: 'BioCtrl',
      controllerAs: 'bioCtrl'
    }
  });

})();
