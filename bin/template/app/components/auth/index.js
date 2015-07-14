var Dragon = require('dragon'),
    Model  = require('./models/auth'),
    View   = require('./view')

class AuthComponent extends Dragon.Component {

  constructor() {
    super()

    this.model = new Model()

    this.view = new View({
      model: this.model
    })
  }

}

module.exports = AuthComponent
