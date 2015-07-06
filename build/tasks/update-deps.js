var gulp = require('gulp');
var shell = require('child-process-promise');
var runSequence = require('run-sequence').use(gulp);

/**
 * Update all dependencies
 */
gulp.task('npm-update-deps', function () {
  return shell.exec("npm-check-updates -u")
  .then(function(){ return shell.exec("npm install") })
    ;
});

gulp.task('jspm-update-loader', function () {
  return shell.exec("jspm dl-loader");
});


/**
 * Clean the dist directory first then build the files.
 */
gulp.task('update-all', function(done) {
  return runSequence(
    'npm-update-deps',
    'jspm-update-loader',
    done
  );
});
