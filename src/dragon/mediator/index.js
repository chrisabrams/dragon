'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import EventEmitter from '../events'

/**
 * Mediator Class
 *
 * @public
 * @class Mediator
 */
class Mediator {

  /**
   * Mediator constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  constructor(options = {}) {
    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)
  }

}

export default Mediator
