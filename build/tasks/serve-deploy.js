var gulp = require('gulp');
var server = require('gulp-express');

/**
 * Serve the deploy directory for deploy testing
 */
gulp.task('serve-deploy', function() {
  server.run(['server-deploy.js']);
});
