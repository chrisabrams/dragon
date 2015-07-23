var chalk          = require('chalk'),
    concat         = require('gulp-concat'),
    fs             = require('fs'),
    glob           = require('glob'),
    gulp           = require('gulp'),
    gutil          = require('gulp-util'),
    mkdirp         = require('mkdirp'),
    mocha          = require('gulp-mocha'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    nib            = require('nib'),
    path           = require('path'),
    sequence       = require('run-sequence'),
    size           = require('gulp-size'),
    source         = require('vinyl-source-stream'),
    stylus         = require('gulp-stylus'),
    watching       = require('paradigm-minimist-watching')

gulp.task('app-css', function() {

  return gulp.src([
    './app/styles/base/app.styl',
    './app/styles/blocks/**/xs.styl',
    './app/styles/blocks/**/sm.styl',
    './app/styles/blocks/**/md.styl',
    './app/styles/blocks/**/lg.styl',
    './app/styles/blocks/**/xl.styl',
    './app/components/**/xs.styl',
    './app/components/**/sm.styl',
    './app/components/**/md.styl',
    './app/components/**/lg.styl',
    './app/components/**/xl.styl',
  ])
  .pipe(concat('app.styl')) // This is a temp concat (the file is not physically created); it speeds up stylus processing by ~70%.
  .pipe(stylus({
    cache: false,
    import: [
      'nib',
      path.join(__dirname, './app/styles/base/vars.styl')
    ],
    paths: [],
    /*sourcemap: {
      basePath: 'public/css',
      inline: true,
      sourceRoot: '/'
    },*/
    use: [nib()] // This accounts for ~90% of compilation time.
  }))
  /*.pipe(sourcemaps.init({
  loadMaps: true
  }))*/
  .pipe(concat('app.css'))
  /*.pipe(sourcemaps.write('./public/css', {
  includeContent: false,
  sourceRoot: '/app'
  }))*/
  .pipe(size({showFiles: true}))
  .pipe(gulp.dest('./public/css'))

})

gulp.task('app-js', function(done) {

  var bundler;

  if(watching()) {

    bundler = watchify(browserify('./app', {
      bundleExternal: true,
      cache: {},
      debug: true,
      detectGlobals: false,
      extensions: ['.hbs'],
      fullPaths: true,
      insertGlobals: false,
      packageCache: {}
    }))

  } else {

    bundler = browserify('./app', {
      bundleExternal: true,
      cache: {},
      debug: true,
      detectGlobals: false,
      extensions: ['.hbs'],
      fullPaths: true,
      insertGlobals: false,
      packageCache: {}
    })

  }

  var bundle = function() {

    // Map to files in vendor.js
    //if(!watching()) {
      //bundler.external('dragon')
      //bundler.external('handlebars')
      //bundler.external('hbsfy/runtime')
    //}

    // Build project
    if(watching()) {

      bundler
        .transform(hbsfy)
        .transform(babelify.configure({
          blacklist: ["useStrict"]
        }))
        .bundle()
        .on('error', function() {
          console.log(arguments)
        })
        .pipe(source('app.js'))
        //.pipe(size({showFiles: true}))
        .pipe(gulp.dest('./public/js/'))
        .pipe(livereload())
        .on('end', function() {
          console.log('public/js/app.js created.')

          done()
        })

    } else {

      bundler
        .transform(hbsfy)
        .transform(babelify)
        .bundle()
        .on('error', function() {
          console.log(arguments)
        })
        .pipe(source('app.js'))
        //.pipe(size({showFiles: true}))
        .pipe(gulp.dest('./public/js/'))
        .on('end', function() {
          console.log('public/js/app.js created.')

          done()
        })

    }
  }

  if(watching()) {
    bundler.on('update', bundle)
  }

  bundle()

})

gulp.task('b', ['build'])

gulp.task('build', ['styles', 'scripts'])

gulp.task('scripts', ['vendor-js', 'app-js'])

gulp.task('styles', ['app-css', 'vendor-css', 'vendor-fonts'])

gulp.task('vendor', ['vendor-css', 'vendor-js'])

gulp.task('vendor-css', function(done) {

  gulp.src([
    './vendor/css/bootstrap.min.css',
    './vendor/css/flat-ui.min.css'
  ])
  .pipe(concat('vendor.css'))
  .pipe(size({showFiles: true}))
  .pipe(gulp.dest('./public/css'))

  gulp.src([
    './vendor/css/flat-ui.css.map'
  ])
  .pipe(gulp.dest('./public/css'))

  done()

})

gulp.task('vendor-js', function(done) {

  var vendor = browserify({
    cache: {},
    debug: false,
    fullPaths: (watching()) ? true : false,
    insertGlobals: false,
    packageCache: {}
  })

  // Expose libs for app.js
  //vendor.require('./node_modules/jquery/dist/jquery.js', {expose: 'jquery'})
  //vendor.require('dragon', {expose: 'dragon'})
  vendor.require('handlebars/runtime', {expose: 'handlebars'})
  //vendor.require('./node_modules/hbsfy/runtime.js', {expose: 'hbsfy/runtime'})

  vendor
    /*.transform(babelify.configure({
      blacklist: ["useStrict"],
      compact: false
    }))*/
    .bundle()
    .pipe(source('vendor.js'))
    //.pipe(size({showFiles: true}))
    .pipe(gulp.dest('./public/js/'))
    .on('error', function() {
      console.log(arguments)
    })
    .on('end', function() {

      console.log('public/js/vendor.js created.')
      done()

    })

})

gulp.task('vendor-fonts', function() {

  gulp.src([
    './vendor/fonts/**'
  ])
  .pipe(gulp.dest('./public/fonts/'))

})
