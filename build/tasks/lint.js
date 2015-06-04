var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var dirs = gulp.pkg.directories;

/**
 * Lint the javascript files for syntax errors.
 */
gulp.task('lint', function () {
  return gulp.src([dirs.lib+'/**/*.js', dirs.unit+'/**/*.js',dirs.e2e+'/**/*.js', 'gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(jshint.reporter('fail'));
});
