var gulp = require('gulp');
var fs = require('fs');
var fse = require('fs-extra');
var changelog = require('conventional-changelog');
var mkdirp = require('mkdirp');

var dirs = gulp.pkg.directories;

/**
 * Generates the changelog from git commit messages.
 */
gulp.task('changelog', function() {

  var outputFile = dirs.doc+'/CHANGELOG.md';

  //create doc direcotry if it doesn't exist yet
  if(!fs.existsSync(dirs.doc)) mkdirp.sync(dirs.doc);

  //delete current changelog
  if(fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

  var header = "# Changelog";
  //get the header template
  if(fs.existsSync(dirs.doc+'/CHANGELOG.header.md')) header = fs.readFileSync(dirs.doc+'/CHANGELOG.header.md');

  //generate new changelog from git commits
  return changelog({
    repository: gulp.pkg.repository.url,
    version: gulp.pkg.version,
    grep: '^feat|^fix|^refactor|^fix|^style|^perf|^test|BREAKING',
    file: (fs.existsSync(outputFile))? outputFile : null
  }, function(err, log) {
    fs.writeFileSync(outputFile, header+"\n"+log);
  });
});
