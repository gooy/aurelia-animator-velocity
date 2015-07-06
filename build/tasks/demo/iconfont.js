var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

var dirs = gulp.pkg.demo.directories;

var fontname = "iconfont";

gulp.task('demo-iconfont', function(){
  gulp.src([dirs.lib+'/assets/icons/*.svg'])
  .pipe(iconfont({
      fontName: fontname, // required
      fontHeight:512,
      normalize: true,
      appendUnicode: true
    }))
  .on('glyphs', function(glyphs, options) {
      gulp.src(dirs.lib+'/templates/iconfont.css')
      .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: fontname,
          fontPath: '../fonts/',
          className: 's'
        }))
      .pipe(gulp.dest(dirs.build+'/css/'));
    })
  .pipe(gulp.dest(dirs.build+'/fonts/'));
});
