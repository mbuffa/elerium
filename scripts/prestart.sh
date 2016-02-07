#!/bin/sh

npm install

cp node_modules/angular/angular.min.js deps
cp node_modules/angular-route/angular-route.min.js deps
cp node_modules/showdown/dist/showdown.min.js deps

mkdir -p deps/bootstrap/js
cp node_modules/bootstrap/dist/js/bootstrap.min.js deps/bootstrap/js

mkdir -p deps/bootstrap/css
cp node_modules/bootstrap/dist/css/bootstrap.min.css deps/bootstrap/css

mkdir -p deps/font-awesome/css
cp -R node_modules/font-awesome/fonts deps/font-awesome/
cp node_modules/font-awesome/css/font-awesome.min.css deps/font-awesome/css

bundle exec compass watch &
