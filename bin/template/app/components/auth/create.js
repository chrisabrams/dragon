var CreateView = require('./views/create'),
    Dragon = require('dragon'),
    Model  = require('./models/auth')

class CreateAuthComponent extends Dragon.Component {

  constructor() {
    super()

    this.model = new Model()

    this.view = new CreateView({
      model: this.model
    })

  }

}

module.exports = CreateAuthComponent
