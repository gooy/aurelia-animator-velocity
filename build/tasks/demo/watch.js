var gulp = require('gulp');
var fs = require('fs');
var browserSync = require('browser-sync');

var dirs = gulp.pkg.demo.directories;

/**
 * Watch files for changes and transpile/copy then to the dist direcotry during development.
 */
gulp.task('demo-watch', ['demo-serve'], function() {

  gulp.watch(gulp.pkg.directories.lib+"/**/*.js", ['jspm-link', browserSync.reload]).on('change', reportChange);
  gulp.watch(gulp.pkg.directories.lib+"/**/*.html", ['jspm-link', browserSync.reload]).on('change', reportChange);

  //app files
  gulp.watch(dirs.lib+"/**/*.js", ['demo-build-system', browserSync.reload]).on('change', reportChange);
  gulp.watch(dirs.lib+"/**/*.html", ['demo-build-html', browserSync.reload]).on('change', reportChange);

  //root files
  gulp.watch(dirs.lib+"/index.html", ['demo-build-root', browserSync.reload]).on('change', reportChange);
  gulp.watch("config.js", ['demo-build-root',browserSync.reload]).on('change', reportChange);

  //images
  gulp.watch(dirs.lib+"/images/**/*", ['build-images', browserSync.reload]).on('change', reportChange);

  //assets
  if(fs.existsSync(dirs.lib+"/locales")) gulp.watch(dirs.lib+"/locales/**/*", ['demo-build-assets', browserSync.reload]).on('change', reportChange);
  if(fs.existsSync(dirs.lib+"/api")) gulp.watch(dirs.lib+"/api/**/*", ['demo-build-assets', browserSync.reload]).on('change', reportChange);
  if(fs.existsSync(dirs.lib+"/fonts")) gulp.watch(dirs.lib+"/fonts/**/*", ['demo-build-assets', browserSync.reload]).on('change', reportChange);

  //less
  var bootstrap = dirs.lib+"/less/bootstrap.less";
  gulp.watch([dirs.lib+"/less/**/*.less","!"+bootstrap], ['demo-less',browserSync.reload]).on('change', reportChange);
  //gulp.watch(bootstrap, ['demo-less_bootstrap',browserSync.reload]).on('change', reportChange);
});

/**
 * outputs changes to files to the console
 * @param event
 */
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}
