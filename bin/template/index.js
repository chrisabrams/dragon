require('babel/register')({
  //ignore node modules that don't start with paradigm, but do ignore paradigm-gulp-watch since 6to5 + gaze do not play well together
  ignore:  /node_modules\/(?!paradigm.*)|(paradigm-gulp-watch)/
})
require('babel/polyfill')

var Server = require('paradigm-server-express')

var glob = require('glob'),
    hbs  = require('./node_modules/paradigm-server-express/node_modules/hbs')

var helpers = glob.sync('./app/templates/helpers/*.js')

helpers.forEach(function(helper) {
  require(helper)(hbs)
})

var server = new Server({
  paths: {
    routes: './server/routes',
    views: './app',
  },
  port: 9999
})
