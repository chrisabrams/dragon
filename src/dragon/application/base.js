var Dispatcher = require('../router/dispatcher'),
    Router     = require('../router/base')

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

    var dispatcher = this.dispatcher = new Dispatcher()

    this.router.on('match', function(route, params, options) {

      dispatcher.dispatch(route, params, options)

    })

    this.router.start()

  }

  loadRoutes() {

    this.routes(this.router)

  }

}

module.exports = DragonApplication
