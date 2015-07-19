var gulp = require('gulp');
var jspm = require('jspm');
var fs = require('fs');
var shell = require('child-process-promise');
var filesize = require('filesize');
var gzipSize = require('gzip-size');
var uglify = require('gulp-uglify');

var dirs = gulp.pkg.demo.directories;

/**
 * Bundle aurelia-framework
 */
gulp.task('demo-bundle', function (done) {

  var distFile = 'aurelia.js';
  var outputFile = dirs.build+'/app/' + distFile;

  var cmd = [
    'aurelia-bootstrapper',
    'aurelia-http-client',
    'aurelia-dependency-injection',
    'aurelia-framework',
    'aurelia-router',
    'npm:core-js',

    'github:aurelia/metadata@0.7.0',
    'github:aurelia/task-queue@0.6.0',
    'github:aurelia/event-aggregator@0.6.0',
    'github:aurelia/templating@0.13.11',
    'github:aurelia/history@0.6.0',
    'github:aurelia/history-browser@0.6.0',
    'github:aurelia/event-aggregator@0.6.0',
    'github:aurelia/templating-router@0.14.0',
    'github:aurelia/templating-resources@0.13.0',
    'github:aurelia/templating-binding@0.13.0',
    'github:aurelia/binding@0.8.2',
    'github:aurelia/loader-default@0.9.0'


  ].join(' + ');

  jspm.bundle(cmd,distFile,{inject:true,minify:true}).then(function(){
    fs.rename(distFile, outputFile, function(){
      showStats(outputFile);
      done();
    });
  });

});

/**
 * Bundle application and vendor files.
 */
gulp.task('demo-bundle-app', function (done) {

  var distFile = 'app-bundle.js';
  var outputFile = dirs.build+'/app/' + distFile;

  if(fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

  var cmd =  "**/* - aurelia";
  jspm.bundle(cmd,distFile,{inject:true,minify:true}).then(function(){
    fs.rename(distFile, outputFile, function(){
      showStats(outputFile);
      done();
    });
  });
});

/**
 * Uglify all js files in the dist directory
 */
gulp.task('demo-uglify-dist', function() {
  return gulp.src(dirs.build+'/app/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest(dirs.build+'/app'));
});

/**
 * Unbundle everything and user separate files again
 */
gulp.task('demo-unbundle', function () {
  return shell.exec('jspm unbundle');
});

/**
 * Show filesize statistics for generated bundle files.
 *
 * @param file    file to show statistics for
 */
function showStats(file) {
  if(!fs.existsSync(file)) return null;

  var stats = fs.statSync(file);
  var cssFile = file.substr(0,file.lastIndexOf("."))+".css";

  var cssExists = fs.existsSync(cssFile);
  var cssStats;
  if(cssExists) cssStats = fs.statSync(cssFile);
  console.log("=============== REPORT ================");
  if(cssExists) console.log("Javascript Bundle");
  console.log("minified: " + filesize(stats.size));
  console.log("gzipped: " + filesize(gzipSize.sync(fs.readFileSync(file))));

  if(cssExists) {
    console.log("");
    console.log("CSS Bundle");
    console.log("minified: " + filesize(cssStats.size));
    console.log("gzipped: " + filesize(gzipSize.sync(fs.readFileSync(cssFile))));
  }
  console.log("=======================================");
}
