var Dragon = require('dragon'),
    View   = require('./view')

class NavigationComponent extends Dragon.Component {

  constructor(options = {}) {
    super(options)

    this.view = new View({
      model: options.app.models.user
    })
  }

}

module.exports = NavigationComponent
