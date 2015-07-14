var Router = require('../router/base')

class DragonApplication {

  constructor(options) {

    this.options = options
    this.routes  = this.options.routes

    this.initialize()

  }

  initialize() {

    this.router = new Router({
      pushState: true
    })

    this.loadRoutes()

  }

  loadRoutes() {

    this.routes(this.router)

  }

}

module.exports = DragonApplication
