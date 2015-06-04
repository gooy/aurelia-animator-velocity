var gulp   = require('gulp');
var fse   = require('fs-extra');
var runSequence = require('run-sequence');

var _dirs = gulp.pkg.directories;
var dirs = gulp.pkg.demo.directories;

/**
 * Copy all files from dist to the deploy directory
 */
gulp.task('demo-deploy-copy', function() {
  fse.copySync(dirs.build,dirs.deploy);
  fse.copySync("config.js",dirs.deploy+"/config.js");
});

/**
 * Build all files for production then copy to the deploy directory
 */
gulp.task('demo-deploy', function(done) {
  return runSequence('demo-build-prod','demo-deploy-copy',done);
});
