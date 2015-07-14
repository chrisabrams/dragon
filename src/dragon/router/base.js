//var Route = require('./route')
var Grapnel = require('grapnel')

class DragonRouter {

  constructor(options) {

    this.options = options
    this.router  = new Grapnel(options)

  }

  get() {

    return this.router.get.apply(this.router, arguments)

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
