//var Route = require('./route')
var Grapnel = require('grapnel')

class DragonRouter {

  constructor(options) {

    this.options = options
    this.router  = new Grapnel(options)

  }

  get(path, handler) {

    let forwardPath = arguments[1]

    // Forward route
    if(typeof forwardPath == 'string') {

      this.navigate(forwardPath)
      return
    }

    return this.router.get(path, (req, ev, next) => {

      ev.stopPropagation()

      handler.call(this.router, req, next)

    })

  }

  navigate() {

    return this.router.navigate.apply(this.router, arguments)

  }

  on() {

    return this.router.on.apply(this.router, arguments)

  }

  once() {

    return this.router.once.apply(this.router, arguments)

  }

  trigger() {

    return this.router.trigger.apply(this.router, arguments)

  }

  use() {

    return this.router.use.apply(this.router, arguments)

  }

}

module.exports = DragonRouter
