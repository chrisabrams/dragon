var express     = require('express'),
    path        = require('path'),
    server      = express(),
    serveStatic = require('serve-static')

server.use(serveStatic(__dirname))

server.get('/events/ui', function(req, res, next) {
  res.sendfile(path.join(__dirname, '../../ui/events', 'runner.html'))
})

server.get('/', function(req, res, next) {
  res.sendfile(path.join(__dirname, 'runner.html'))
})

server.listen(4567)
console.log('Dragon Test Runner listening on localhost:4567')
