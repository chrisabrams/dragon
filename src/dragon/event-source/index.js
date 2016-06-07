import EventEmitter from '../events'
import mixin        from '../mixin'
import utils        from '../utils'

/**
 * EventSourceMediator Class
 *
 * @public
 * @class EventSourceMediator
 */
class EventSourceMediator {

  /**
   * EventSourceMediator constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  constructor(options = {}) {
    if(!options.path || typeof options.path != 'string') throw new Error('Path must be set to use Event Source')

    this.source = new EventSource(options.path)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    this.source.addEventListener('message', this.onMessage, false)
    this.source.addEventListener('open', this.onOpen, false)
    this.source.addEventListener('error', this.onClose, false)
  }

  dispose() {

    if(!this.disposed) {
      this.source.removeEventListener('message', this.onMessage, false)
      this.source.removeEventListener('open', this.onOpen, false)
      this.source.removeEventListener('error', this.onClose, false)

      utils.dispose(this)

    }

  }

  onClose(e) {
    this.emit('close')
  }

  onMessage(e) {
    this.emit('message')
  }

  onOpen(e) {
    this.emit('open')
  }

}

Object.assign(EventSourceMediator.prototype, {mixin})

export default EventSourceMediator
