var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var resolve = require("resolve-dep");
var deepExtend = require("deep-extend");
//var sourcemaps = require('gulp-sourcemaps');

var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');

var cleancss = new LessPluginCleanCSS({ advanced: true });
var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 3 versions"] });

var dirs = gulp.pkg.demo.directories;

/**
 * less options for development
 */
var options_dev = {
  compress: false
};

/**
 * less options for production
 */
var options_prod = {
  compress: true
};

gulp.task('demo-less', function(){ return compileFile(dirs.lib+'/less/style.less', dirs.build+'/css', options_dev); });
gulp.task('demo-less_bootstrap', function(){ return compileFile(dirs.lib+'/less/bootstrap.less', dirs.build+'/css', options_dev); });

gulp.task('demo-less-prod', function(){ return compileFile(dirs.lib+'/less/style.less', dirs.build+'/css', options_prod); });
gulp.task('demo-less_bootstrap-prod', function(){ return compileFile(dirs.lib+'/less/bootstrap.less', dirs.build+'/css', options_prod); });

/**
 * Compile a less file
 */
function compileFile(input, output, options){

  //console.log(resolve.npm('aurelia-docs-style'));

  return gulp.src(input)
      //.pipe(sourcemaps.init())
    .pipe(less(deepExtend({
        filename: input,
        paths: [
          '.',
          //path.dirname(path.dirname(resolve.npm('aurelia-docs-style')[0]))+"/less",
          'node_modules/aurelia-docs-style/less',
          path.dirname(path.dirname(resolve.npm('bootstrap-less')[0]))
        ]
      }, options)))
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(minify({restructuring: true, keepBreaks: !options.compress}))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
    ;
}
