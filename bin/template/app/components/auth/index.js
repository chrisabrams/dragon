var CreateView = require('./views/create'),
    Dragon = require('dragon'),
    Model  = require('./models/auth'),
    LoginView = require('./views/login')

class AuthComponent extends Dragon.Component {

  constructor() {
    super()
  }

  create() {

    this.model = new Model()

    this.view = new CreateView({
      model: this.model
    })

  }

  login() {

    this.model = new Model()

    this.view = new LoginView({
      model: this.model
    })

  }

}

module.exports = AuthComponent
