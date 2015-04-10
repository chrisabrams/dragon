var express     = require('express'),
    path        = require('path'),
    server      = express(),
    serveStatic = require('serve-static')

server.use('/css', serveStatic(path.join(__dirname, '/css')))
server.use('/js', serveStatic(path.join(__dirname, '/js')))

server.get('/bind/existing-dom', function(req, res, next) {
  res.sendfile(path.join(__dirname, '../../bind/existing-dom', 'runner.html'))
})

server.get('/events/ui', function(req, res, next) {
  res.sendfile(path.join(__dirname, '../../events/ui', 'runner.html'))
})

server.get('/ui/events', function(req, res, next) {
  res.sendfile(path.join(__dirname, '../../ui/events', 'runner.html'))
})

server.get('/', function(req, res, next) {
  res.sendfile(path.join(__dirname, 'runner.html'))
})

server.listen(4567)
console.log('Dragon Test Runner listening on localhost:4567')
