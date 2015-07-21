var utils = require('../utils')

class DragonDispatcher {

  constructor(options = {}) {

    this.uid = utils.uniqueId(this)

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

    controller[options.action](req)

    this.currentController = controller


  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

DragonDispatcher.prototype.disposed = false

module.exports = DragonDispatcher
