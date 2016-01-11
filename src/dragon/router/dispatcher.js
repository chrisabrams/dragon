'use strict';

import utils from '../utils'

class DragonDispatcher {

  constructor(options = {}) {

    this.uid = utils.uniqueId(this)

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

    var controller = new options.controller()

    /*
    TODO: Find a better way to pass app instance to controller
    */
    controller.app = this.app

    controller[options.action](req)

    this.currentController = controller

  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this, {
        ignoreProperties: ['app']
      })

    }

  }

}

DragonDispatcher.prototype.disposed = false

export default DragonDispatcher
