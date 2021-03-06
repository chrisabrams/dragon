'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import Router from './index'
import utils  from '../utils'

/**
 * Dispatcher Class
 *
 * @public
 * @class Dispatcher
 */
class Dispatcher {

  constructor(options = {}) {

    this.uid = utils.uniqueId(this)

    this.disposed = false

    this.options = options

    this.app = options.app

    this.currentController = null

  }

  dispatch(route, params, options = {}) {

    if(this.currentController && this.currentController.dispose) {

      this.currentController.dispose()
    }

    var req = {
      params: params
    }

    var res = {
      navigate: Router.navigate
    }

    var controller = null

    if(options.Controller) {
      controller = new options.Controller()
      controller[options.action](req, res, this.next)
    }

    else {
      var segs = route.pattern.split('/')

      var controllerName = segs[1],
          actionName     = options.action || segs[2]

      var Controller = this.options.getController(controllerName)
      controller = new Controller()

      controller[actionName](req, res, this.next)
    }

    this.currentController = controller

  }

  next() {

  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this, {
        ignoreProperties: ['app']
      })

    }

  }

}

export default Dispatcher
