var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var ghPages = require('gulp-gh-pages');
var dirs = gulp.pkg.directories;
var del = require('del');
var vinylPaths = require('vinyl-paths');

/**
 * Clean the dist directory first then build the files.
 */
gulp.task('deploy', function(done) {
  return runSequence(
    'clean-deploy',
    'demo-deploy',
    done
  );
});

// upload the deploy directory to gh-pages branch
gulp.task('deploy-gh-pages', function() {
  return gulp.src([dirs.deploy+'/**/*'])
  .pipe(ghPages({push:true}));
});

/**
 * Clean the dist direcotry
 */
gulp.task('clean-deploy', function() {
  return gulp.src([dirs.deploy])
  .pipe(vinylPaths(del));
});
