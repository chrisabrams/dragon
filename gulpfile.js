var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('t', function () {

  return gulp
    .src(['./test/helpers/runner.js', './test/unit/**/*.js'], {read: false})
    .pipe(mocha({reporter: 'spec'}));

})
