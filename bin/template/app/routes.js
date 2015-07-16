var Auth = require('./controllers/auth')

module.exports = (router) => {

  var auth = new Auth()

  router.get('/auth/create', auth.create)

  router.get('/auth/login', auth.login)

  router.get('/', '/auth/login')

}
