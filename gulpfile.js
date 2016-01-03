var babel          = require('gulp-babel'),
    chalk          = require('chalk'),
    glob           = require('glob'),
    gulp           = require('gulp'),
    gutil          = require('gulp-util'),
    livereload     = require('gulp-livereload'),
    mocha          = require('gulp-mocha'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    nodemon        = require('gulp-nodemon'),
    path           = require('path'),
    webpack        = require('webpack-stream')

gulp.task('b', ['build'])

gulp.task('mocha-browser-build', function(done) {

  buildBrowserMocha({
    testFiles: './test/unit/browser/**/*.js'
  }, done)

})

gulp.task('mocha-build-bind-existing-dom', function(done) {

  buildBrowserMocha({
    testFiles: './test/bind/existing-dom/**/*.js'
  }, done)

})

gulp.task('mocha-build-events-ui', function(done) {

  buildBrowserMocha({
    testFiles: './test/events/ui/**/*.js'
  }, done)

})

gulp.task('mocha-build-ui-events', function(done) {

  buildBrowserMocha({
    testFiles: './test/ui/events/**/*.js'
  }, done)

})

gulp.task('mocha-browser', ['mocha-build'], function() {

  return gulp
    .src('./test/helpers/browser/runner.html')
    .pipe(mochaPhantomJS({reporter: 'spec'}))

})

gulp.task('mocha-collections', function() {

  return gulp
    .src([
      './test/helpers/cli/runner.js',
      './lib/polyfills/**/*.js',
      './test/unit/collections/**/*.js'
    ], {read: false})
    .pipe(mocha({reporter: 'spec'}))

})

gulp.task('mocha-models', function() {

  return gulp
    .src([
      './test/helpers/cli/runner.js',
      './lib/polyfills/**/*.js',
      './test/unit/models/**/*.js'
    ], {read: false})
    .pipe(mocha({reporter: 'spec'}))

})

gulp.task('mocha-server-run', function() {

  return gulp
    .src([
      './test/helpers/cli/runner.js',
      './lib/polyfills/**/*.js',
      './test/unit/models/**/*.js',
      './test/unit/server/**/*.js'
    ], {read: false})
    .pipe(mocha({reporter: 'spec'}))

})

gulp.task('sandbox', function() {

  return gulp.src([])
  .pipe(webpack(require('./test/sandbox/webpack.config')))
  .pipe(gulp.dest('./test/sandbox/public/js/'))

})

gulp.task('t', [
  //'mocha-cli',
  //'mocha-browser-run'
  'mocha-models',
  'mocha-collections'
])

gulp.task('watch', function () {

  nodemon({
    //env: ,
    ext: 'html',
    //nodeArgs: ['--debug'],
    script: 'test/helpers/browser/runner.js',
    watch: ['./test/']
  })
  .on('start', function() {

    livereload.listen()

    gulp.watch('src/**/*.js', ['test-webpack'])
    gulp.watch('src/**/*.js', livereload.reload)
    gulp.watch('test/integration/**/*.js', ['test-webpack'])
    gulp.watch('test/unit/**/*.js', ['test-webpack'])

  })
  .on('restart', function () {

    var files = arguments[0]

    files.forEach( function(file) {
      file = file.replace(process.cwd(), '') // Just show relative file path.

      console.log('File changed:', chalk.yellow(file))
    })

  })

})

gulp.task('test-webpack', function() {

  gulp.src([])
  .pipe(webpack(require('./webpack.test')))
  .pipe(gulp.dest('./test/helpers/browser/js/'))

})

gulp.task('w', ['test-webpack', 'watch'])

/*.on('error', function(err) {
  console.error(err)
  process.exit(1)
})
.on('end', function() {
  process.exit(0)
})*/
