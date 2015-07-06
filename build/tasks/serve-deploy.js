var gulp = require('gulp');
var gls = require('gulp-live-server');

/**
 * Serve the deploy directory for deploy testing
 */
gulp.task('serve-deploy', function() {
  var server = gls.new(["server-deploy.js"]);
  server.start();
});
