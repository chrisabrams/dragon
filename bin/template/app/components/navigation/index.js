var Dragon = require('dragon'),
    View   = require('./view')

class NavigationComponent extends Dragon.Component {

  constructor() {
    super()

    this.view = new View()
  }

}

module.exports = NavigationComponent
