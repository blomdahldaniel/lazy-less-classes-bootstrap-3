var gulp = require('gulp'),
    less = require('gulp-less'),
  cssmin = require('gulp-cssmin'),

gulp.task('watch', function () {
  gulp.watch('./*.less', ['less']);
});

gulp.task('less', function () {

  return gulp.src('./lazy-less/all-my-lazy-stuff.less')
  .pipe(less().on('error', function (err) {
    console.log(err);
  }))
  .pipe(cssmin().on('error', function(err) {
    console.log(err);
  }))
  .pipe(gulp.dest('./dist'));

});

gulp.task('default', ['less', 'watch']);
