'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import EventEmitter      from '../events'
import mixin             from '../mixin'
import utils             from '../utils'

/**
 * Model Class
 *
 * @public
 * @class Model
 */
class Model {

  constructor(attr = {}, options = {}) {
    this.uid = utils.uniqueId(this)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    this.defaults = {}

    this.disposed = false

    this.url = ''
    this.options = options

    Object.defineProperty(this, 'attr', {
      configurable: false,
      enumerable: true,
      writable: true
    })

    this.attr = Object.assign({}, this.defaults, attr)

    //this.observeAttributes()
  }

  /*
  TODO: not the full appr
  */
  clear() {

    this.attr = {}
    this.emit('change')

  }

  getData() {
    return Object.assign({}, this.attr)
  }

  /*
  TODO: add an an unobserve option
  */
  observeAttributes() {

    // Trigger changes on model
    //Object.observe(this.attr, this.observeHandler.bind(this))

  }

  observeHandler(changes) {

    //this.emit('change', changes)

    /*
    TODO: consider making this a mixin and expanding to watch specific properties
    */

    var add    = [],
        del    = [],
        update = []

    changes.forEach( (change) => {

      switch(change.type) {

        case 'add'    : add.push(change); break;
        case 'delete' : del.push(change); break;
        case 'update' : update.push(change); break;

      }

    })

    if(add.length > 0)    this.emit('add', add)
    if(del.length > 0)    this.emit('delete', del)
    if(update.length > 0) this.emit('update', update)

  }

  /*
  TODO: Undecided on appraoch for sync/fetch/save/etc.
  */
  sync() {

  }

  toJSON() {

    return JSON.stringify(this.attr)

  }
  isArrayLike(collection) {
    var length = collection[length];
    return typeof length == 'number' && length >= 0 && length <= (Math.pow(2, 53) - 1);
  };
  set(obj, options = {}) {

    var keysChanged = []
    Object.keys(obj).forEach((key) => {

      this.attr[key] = obj[key]
      keysChanged.push(key)

    })

    // Don't emit a change event if silence is requested
    if(options.silent) return
    this.emit('change', keysChanged)
  }

  dispose(options = {}) {

    utils.dispose(this, options)

  }

}
var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
  omit: 0, chain: 1, isEmpty: 1};

// Mix in each Lodash method as a proxy to `Model#attributes`.
utils.addLodashMethods(Model, modelMethods, 'attr');

Object.assign(Model.prototype, {mixin})

export default Model
