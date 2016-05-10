'use strict';

import Dispatcher from '../router/dispatcher'
import mixin      from '../mixin'
import Router     from '../router/base'
import utils      from '../utils'

class DragonApplication {

  constructor(options = {}) {
    this.uid = utils.uniqueId(this)
    //this.mixin(eventsMixin)

    this.disposed = false

    this.options = options

    if(!this.options.router.routes) return console.error('Application requires routes', this.options)

    this.router = new Router({
      routes: this.options.router.routes
    })

    var dispatcher = this.dispatcher = new Dispatcher({
      app: this,
      getController: options.dispatcher.getController
    })

    this.router.on('match', function routeMatchCallback(route, params, options) {

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

Object.assign(DragonApplication.prototype, {mixin})

export default DragonApplication
