var Auth = require('./controllers/auth')

module.exports = (router) => {

  router.get('/auth/create', {
    controller: Auth,
    action: 'create'
  })

  router.get('/auth/login', {
    controller: Auth,
    action: 'login'
  })

  //router.get('/', '/auth/login')

}
