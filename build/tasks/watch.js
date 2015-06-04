var gulp = require('gulp');
var dirs = gulp.pkg.directories;

/**
 * Watch files for changes and transpile/copy then to the dist direcotry during development.
 */
gulp.task('watch', function() {
  //app files
  gulp.watch(dirs.lib+"/**/*", ['jspm-link']).on('change', reportChange);
});

/**
 * outputs changes to files to the console
 * @param event
 */
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}
