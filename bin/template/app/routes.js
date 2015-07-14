var Auth = require('./controllers/auth')

module.exports = (router) => {

  router.get('/', new Auth().login)

}
