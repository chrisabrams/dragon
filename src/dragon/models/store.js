/**
 * Module Dependencies
 *
 * @ignore
 */
import EventEmitter from '../events'
import mixin        from '../mixin'
import utils        from '../utils'

/**
 * Store Class
 *
 * @public
 * @class Store
 */
class Store {

  constructor(options = {}) {
    this.uid = utils.uniqueId(this)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    this.options = options

    this.name    = options.name
  }

  get() {
    var o = {}
    try {
      o = JSON.parse(localStorage.getItem(this.name))
    }
    catch(e) {}

    return o
  }

  set(val, options = {}) {
    localStorage.setItem(this.name, JSON.stringify(val))

    this.emit('change', this.name)
  }

}

Object.assign(Store.prototype, {mixin})

export default Store
