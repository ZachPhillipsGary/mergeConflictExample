var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
// task
gulp.task('minify-html', function () {
    gulp.src('./Html/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('path/to/destination'));
})
gulp.task('default', ['webserver']);

