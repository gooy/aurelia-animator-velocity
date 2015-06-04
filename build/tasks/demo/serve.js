var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require("fs");
var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
//var history = require('connect-history-api-fallback');

var oneDay = 86400000;
var oneHour = 3600000;

var dirs = gulp.pkg.demo.directories;

/**
 * Serve the dist directory for development
 */
gulp.task('demo-serve',['demo-build','jspm-link'], function(done) {

  var app = express();
  app.use(compression());
  //app.use(history());

  //serve the main directory as a static website (to simulate shared hosting or github environments)
  app.use(serveStatic(dirs.build, {'index': ['index.html'],maxAge:oneHour,setHeaders:function(res, path, stat){
    res.setHeader("Access-Control-Allow-Origin", "*");
  }}));

  //serve the jspm_packages and config from the root in dev mode
  app.use('/jspm_packages',express.static(gulp.pkg.basePath+'/jspm_packages'));

  var server = app.listen(9001);

  server.on('connection', function(socket) {
    // allow keep-alive of 30 seconds
    // console.log("A new connection was made by a client.");
    socket.setTimeout(30 * 1000);
  });

  browserSync({
    open: false,
    port: 9000,
    proxy: "http://localhost:9001"
  },done);
});


