'use strict';

var composeStore = require('../lib/composeStore'),
    utils        = require('../utils')

class DragonController {

  constructor() {
    this.uid = utils.uniqueId(this)
  }

  compose(key, val, options = {}) {

    if(arguments.length == 1) return composeStore[key]

    /*
    TODO: Figure out how updating/replacing a composition would work.
    */
    if(!composeStore[key] || options.update) {

      composeStore[key] = val

    }

  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this, {
        ignoreProperties: ['app']
      })

    }

  }

}

DragonController.prototype.disposed = false

module.exports = DragonController
