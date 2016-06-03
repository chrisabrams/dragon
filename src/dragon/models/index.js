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

  pairs(object = this.attr) {
    var index = -1,
    props = this.keys(object),
    length = props.length,
    result = Array(length);
    while (++index < length) {
      let key = props[index];
      result[index] = [key, object[key]];
    }
    return result;
  }

  // Internal pick helper function to determine if `obj` has key `key`.
  keyInObj(value, key, obj) {
    return key in obj;
  }

  // Return a copy of the object only containing the whitelisted properties.
  pick(...keys) {
    var obj=this.attr,result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (typeof iteratee === 'function') {
      if (keys.length > 1) iteratee = iteratee; //TODO optimized callback for enable context
      keys = this.keys(obj); //not working in inherited properties keys
    } else {
      iteratee = this.keyInObj;
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  }

  // Return a copy of the object without the blacklisted properties.
  omit(...keys) {
    var obj=this.attr,iteratee = keys[0], context;
    if (typeof iteratee === 'function') {
      iteratee = iteratee;
      if (keys.length > 1) context = keys[1];
    } else {
      iteratee = function(value, key, obj) {
        return keys.indexOf(key) == -1;
      };
    }
    return this.pick(iteratee, context);
  }

  baseValues(object , props) {
    var index = -1,
    length = props.length,
    result = Array(length);

    while (++index < length) {
      result[index] = object[props[index]];
    }
    return result;
  }

  values(object = this.attr) {
    return this.baseValues(object, this.keys(object));
  }

  keys(object = this.attr){
    return Object.keys(object);
  }

  // Invert the keys and values of an object. The values must be serializable.
  invert(obj = this.attr) {
    var result = {},
    index = -1,
    props = this.keys(obj),
    length = props.length;

    while (++index < length) {
      result[obj[props[index]]] = props[index];
    }
    return result;
  }

  isArrayLike(collection) {
    var length = collection[length];
    return typeof length == 'number' && length >= 0 && length <= (Math.pow(2, 53) - 1);
  };

  isEmpty(value = this.attr) {
    if (value == null) return true;
    if (isArrayLike(value) && (_.isArray(value) || _.isString(value) || _.isArguments(value))) return value.length === 0;
    return this.keys(value).length === 0;
  }

  set(o) {

    var keysChanged = []
    Object.keys(o).forEach((key) => {

      this.attr[key] = o[key]
      keysChanged.push(key)

    })

    this.emit('change', keysChanged)
  }

  dispose(options = {}) {

    utils.dispose(this, options)

  }

}

Object.assign(Model.prototype, {mixin})

export default Model
