var AuthComponent       = require('../components/auth/index'),
    Dragon              = require('dragon'),
    NavigationComponent = require('../components/navigation/index')

class AuthController extends Dragon.Controller {

  constructor() {
    super()
  }

  create(req, next) {

    this.navigation = new NavigationComponent()
    var auth        = new AuthComponent()
    this.create     = auth.create()

  }

  login(req, next) {

    this.navigation = new NavigationComponent()
    var auth        = new AuthComponent()
    this.login      = auth.login()

  }

}

module.exports = AuthController
