var AuthComponent       = require('../components/auth/index'),
    Dragon              = require('dragon'),
    NavigationComponent = require('../components/navigation/index')

class AuthController extends Dragon.Controller {

  constructor() {
    super()
  }

  login(req, ev) {

    this.navigation = new NavigationComponent()
    this.auth       = new AuthComponent()

  }

}

module.exports = AuthController
