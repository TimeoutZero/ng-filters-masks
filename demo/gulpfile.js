'use strict';

var gutil = require('gulp-util');

/*
  ==========================
  Basic Options
  ==========================
*/
var options = {
  mainAngularModule : 'ngFiltersMasks'
};


/*
  ==========================
  Base build
  ==========================
*/

options.modulesData = {
  server : {
    routes : {
      '/bower_components': 'bower_components',
      '/vendors'         : 'vendors'
    }
  },
  proxy: {
    isEnabled: false
  }
}

/*
  ==========================
  Read gulp files
  ==========================
*/
require('basebuild-angular')(options);