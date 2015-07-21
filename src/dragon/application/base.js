var Dispatcher = require('../router/dispatcher'),
    Router     = require('../router/base'),
    utils      = require('../utils')

class DragonApplication {

  constructor(options) {
    this.uid = utils.uniqueId(this)

    this.options = options
    this.routes  = this.options.routes

    this.router = new Router()

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

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

DragonApplication.prototype.disposed = false

module.exports = DragonApplication
