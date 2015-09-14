var Dragon    = require('dragon'),
    Model     = require('./models/auth'),
    LoginView = require('./views/login'),
    schema    = require('./schemas/login')

class LoginAuthComponent extends Dragon.Component {

  constructor() {
    super()

    this.model = new Model(null, {
      schema
    })

    this.view = new LoginView({
      model: this.model
    })

  }

}

module.exports = LoginAuthComponent
