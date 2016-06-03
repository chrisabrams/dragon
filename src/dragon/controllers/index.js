'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import composeStore from '../lib/composeStore'
import utils        from '../utils'

/**
 * Controller Class
 *
 * @public
 * @class Controller
 */
class Controller {

  /**
   * Controller constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  constructor(options = {}) {
    this.uid = utils.uniqueId(this)
  }

  compose(key, Val, options = {}) {

    if(arguments.length == 1 || typeof composeStore[key] == 'object') {
      var composition = composeStore[key]

      return composition
    }

    /*
    TODO: Figure out how updating/replacing a composition would work.
    */
    if(!composeStore[key] || options.update) {

      composeStore[key] = new Val(options)

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

Controller.prototype.disposed = false

export default Controller
