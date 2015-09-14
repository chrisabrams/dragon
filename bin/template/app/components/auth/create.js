var CreateView = require('./views/create'),
    Dragon     = require('dragon'),
    Model      = require('./models/auth'),
    schema     = require('./schemas/create')

class CreateAuthComponent extends Dragon.Component {

  constructor() {
    super()

    this.model = new Model(null, {
      schema
    })

    this.view = new CreateView({
      model: this.model
    })

  }

}

module.exports = CreateAuthComponent
