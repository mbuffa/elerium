;(function () {
  'use strict';

  var app = angular.module('app.components');

  app.controller('BlogCtrl', function (github, config, markdown) {
    var _ctrl = this,
        _posts = [];

    github.getPostsList().then(function (response) {
      var files = response.filter(function (item) {
        return item.name.match(/^\w+\.md$/);
      });

      files.map(function (file) {
        github.get(file.url).then(function (fileResponse) {
          var post = {
            name: file.name,
            content: markdown.toHtml(atob(fileResponse.content))
          };
          _posts.push(post);
        });
      });
    });

    this.getPosts = function () { return _posts; }
  });

})();
