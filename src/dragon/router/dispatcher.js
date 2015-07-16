class DragonDispatcher {

  constructor(options = {}) {

    this.currentController = null

  }

  dispatch(route, params, options = {}) {

    console.log("current handler", this.currentHandler)
    if(this.currentController && this.currentController.dispose) {
      console.log("dispatcher called dispose")

      this.currentController.dispose()
    }

    var req = {
      params: params
    }

    var controller = new options.controller()

    controller[options.action](req)

    this.currentController = controller


  }

}

module.exports = DragonDispatcher
