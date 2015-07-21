var utils = require('../utils')

class DragonController {

  constructor() {
    this.uid = utils.uniqueId(this)
  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

DragonController.prototype.disposed = false

module.exports = DragonController
