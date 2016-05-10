import EventEmitter from '../events'
import mixin        from '../mixin'
import utils        from '../utils'

class DragonStore {

  constructor(options = {}) {
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

Object.assign(DragonStore.prototype, {mixin})

var eventEmitter = new EventEmitter()

DragonStore.prototype.emit  = eventEmitter.emitEvent.bind(eventEmitter)
DragonStore.prototype.on    = eventEmitter.addListener.bind(eventEmitter)
DragonStore.prototype.once  = eventEmitter.addOnceListener.bind(eventEmitter)
DragonStore.prototype.off   = eventEmitter.removeListener.bind(eventEmitter)

export default DragonStore
