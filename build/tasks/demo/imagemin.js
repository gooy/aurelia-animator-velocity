var gulp = require('gulp');
var fse = require('fs-extra');

var dirs = gulp.pkg.demo.directories;

gulp.task('demo-build-images', function (done) {
  fse.copy(dirs.lib+"/images",dirs.build+"/images",done);
});
