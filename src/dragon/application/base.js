'use strict';

var Dispatcher = require('../router/dispatcher'),
    Router     = require('../router/base'),
    utils      = require('../utils')

class DragonApplication {

  constructor(options) {
    this.uid = utils.uniqueId(this)

    this.options = options

    this.router = new Router({
      routes: this.options.routes
    })

    var dispatcher = this.dispatcher = new Dispatcher({
      app: this
    })

    this.router.on('match', function(route, params, options) {

      dispatcher.dispatch(route, params, options)

    })

  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

  start() {

    this.router.start()

  }

}

DragonApplication.prototype.disposed = false

module.exports = DragonApplication
