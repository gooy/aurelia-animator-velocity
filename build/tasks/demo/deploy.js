var gulp   = require('gulp');
var glob   = require('glob');
var fse   = require('fs-extra');
var fs   = require('fs');
var runSequence = require('run-sequence');

var _dirs = gulp.pkg.directories;
var dirs = gulp.pkg.demo.directories;

/**
 * Copy all files from dist to the deploy directory
 */
gulp.task('demo-deploy-copy', function() {
  fse.copySync(dirs.build,dirs.deploy);
});


gulp.task('demo-deploy-filter', function(done) {
  var patterns = [
    dirs.deploy+"/app/**/*.js",
    dirs.deploy+"/app/**/*.map"
  ];
  removeAll(patterns,{
    ignore:[dirs.deploy+"/app/aurelia.js",dirs.deploy+"/app/app-bundle.js"]
  },done);
});


/**
 * Build all files for production then copy to the deploy directory
 */
gulp.task('demo-deploy', function(done) {
  return runSequence('demo-build-prod','demo-deploy-copy','demo-deploy-filter','demo-unbundle',done);
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
