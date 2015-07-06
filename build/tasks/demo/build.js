var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var copy = require('gulp-copy');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var fs = require('graceful-fs');
var fse = require('fs-extra');
var sourcemaps = require('gulp-sourcemaps');
var compilerOptions = require('../../babel-options');
var assign = Object.assign || require('object.assign');
var glob = require('glob');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var dirs = gulp.pkg.demo.directories;
var _dirs = gulp.pkg.directories;

/**
 * Transpile es6 code into the dist directory
 */
gulp.task('demo-build-system', function () {
  return gulp.src(dirs.lib+"/app/**/*.js")
  .pipe(plumber())
  //.pipe(changed(dirs.build, {extension: '.js'}))
  .pipe(sourcemaps.init())
  .pipe(babel(assign({}, compilerOptions, {modules:'system'})))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(dirs.build+"/app"));
});

/**
 * Copies html files to the dist directory
 */
gulp.task('demo-build-html', function () {
  return gulp.src(dirs.lib+"/app/**/*.html")
  .pipe(changed(dirs.build, {extension: '.html'}))
  .pipe(gulp.dest(dirs.build+"/app"));
});

/**
 * Copies files from the root directory to the dist directory
 */
gulp.task('demo-build-root', function (done) {
  if(fs.existsSync("config.js")) fse.copySync("config.js",dirs.build+"/config.js");
  if(fs.existsSync(dirs.lib+"/index.html")) fse.copySync(dirs.lib+"/index.html",dirs.build+"/index.html");
  done();
});

/**
 * Copies various assets from the source directory to the dist directory
 */
gulp.task('demo-build-assets', function (done) {
  if(fs.existsSync(dirs.lib+"/fonts")) fse.copySync(dirs.lib+"/fonts",dirs.build+"/fonts");
  if(fs.existsSync(dirs.lib+"/api")) fse.copySync(dirs.lib+"/api",dirs.build+"/api");
  if(fs.existsSync(dirs.lib+"/locales")) fse.copySync(dirs.lib+"/locales",dirs.build+"/locales");
  done();
});

/**
 * Copies only the needed files from jspm_packages into the deploy directory
 */
gulp.task('demo-build-jspm-packages', function (done) {
  var patterns = [
  	"jspm_packages/github/webcomponents/webcomponentsjs@*.js",
    "jspm_packages/github/webcomponents/webcomponentsjs@*/HTMLImports.min.js",
    "jspm_packages/github/aurelia/html-template-element@*.js",
    "jspm_packages/github/aurelia/html-template-element@*/HTMLTemplateElement.js",
    "jspm_packages/github/aurelia/html-template-element@*/HTMLTemplateElement.min.js",
    "jspm_packages/github/ajaxorg/ace-builds@*/**/*",
    "jspm_packages/*.js",
    "jspm_packages/*.map"
  ];

  var promises = patterns.map(function(pattern){
      return new Promise(function(resolve,reject){
        return glob(pattern, {}, function (er, files){
          if(er) {
            console.error(er);
            reject(er)
          }
          for(var i2 = 0, l2 = files.length; i2 < l2; i2++){
            var file = files[i2];
            fse.copySync(file, _dirs.deploy+"/"+file);
          }
          resolve();
        });
      })
  });

  Promise.all(promises).then(function(){
    done();
  });

});

gulp.task('demo-dist-filter', function(done) {
  var patterns = [
    dirs.build+"/app/**/*.js",
    dirs.build+"/app/**/*.map"
  ];
  removeAll(patterns,{
    ignore:[dirs.build+"/app/aurelia.js",dirs.build+"/app/app-bundle.js"]
  },done);
});


/**
 * Clean the dist direcotry
 */
gulp.task('demo-clean-dist', function() {
  return gulp.src([dirs.build])
  .pipe(vinylPaths(del));
});

/**
 * Clean the dist directory first then build the files.
 */
gulp.task('demo-build', function(done) {
  return runSequence(
    'demo-clean-dist',
    'demo-build-images',
    'demo-iconfont',
    ['demo-build-system','demo-build-html','demo-build-root','demo-build-assets'],
    ['demo-less','demo-less_bootstrap'],
    done
  );
});

/**
 * Clean the dist directory first then build the optimized files for production.
 */
gulp.task('demo-build-prod', function(done) {
  return runSequence(
    'demo-clean-dist',
    ['demo-build-system','demo-build-html','demo-build-assets'],
    ['demo-less-prod','demo-less_bootstrap-prod'],
    'demo-bundle',
    'demo-bundle-app',
    'demo-dist-filter',
    'demo-uglify-dist',
    'demo-build-root',
    'demo-build-images',
    'jspm-link',
    'demo-build-jspm-packages',
    'demo-unbundle',
    done
  );
});

function removeAll(patterns,options,done){
  var promises = patterns.map(function(pattern){
    return new Promise(function(resolve,reject){
      return glob(pattern, options, function (er, files){
        if(er) {
          console.error(er);
          reject(er)
        }
        for(var i2 = 0, l2 = files.length; i2 < l2; i2++){
          var file = files[i2];
          if(fs.existsSync(file)) {
            fs.unlinkSync(file);
          }
        }
        resolve();
      });
    })
  });

  Promise.all(promises).then(function(){
    done();
  });
}
