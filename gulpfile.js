
var gutil = require('gulp-util');

var bbComponentOptions = {};
var bbAngularOptions = {};

if(gutil.env._[0] === 'bundle'){
  require('basebuild-component')(bbComponentOptions);
} else {
  require('basebuild-angular')(bbAngularOptions);
}