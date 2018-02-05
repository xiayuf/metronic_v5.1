var gutil = require('gulp-util');

// merge with default parameters
var args = Object.assign({'prod': false, default: true, angular: false}, gutil.env);

var configs = {default: './../conf/default.json', angular: './../conf/angular.json'};
var config = configs.default;
// angular flag true or path name has angular
if (args.angular || process.cwd().indexOf('angular') !== -1) {
  config = configs.angular;
}
module.exports = require(config);