var CreateAuthComponent = require('../components/auth/create'),
    LoginAuthComponent  = require('../components/auth/login'),
    Dragon              = require('dragon'),
    NavigationComponent = require('../components/navigation/index')

class AuthController extends Dragon.Controller {

  constructor(options = {}) {
    super(options)
  }

  create(req, next) {

    //this.navigation = new NavigationComponent()
    this.compose('navigation', new NavigationComponent({
      app: this.app
    }))
    this.create     = new CreateAuthComponent()

  }

  login(req, next) {

    //this.navigation = new NavigationComponent()
    this.compose('navigation', new NavigationComponent({
      app: this.app
    }))
    this.login      = new LoginAuthComponent()

  }

}

module.exports = AuthController
