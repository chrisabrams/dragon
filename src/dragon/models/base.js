var EventsMixin = require('../events'),
    utils       = require('../utils')

class DragonBaseModel {

  constructor(attr = {}, options = {}) {
    this.uid = utils.uniqueId(this)
    this.attr = {};
    this.options = options

    Object.assign(this.attr, this.defaults, attr)

    this.observeAttributes()
  }

  initialize() {

  }

  /*
  TODO: not the full appr
  */
  clear() {

    this.attr = {}

  }

  /*
  TODO: add an an unobserve option
  */
  observeAttributes() {

    // Trigger changes on model
    Object.observe(this.attr, (changes) => {

      this.trigger('change', changes)

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

      if(add.length > 0)    this.trigger('add', add)
      if(del.length > 0)    this.trigger('delete', del)
      if(update.length > 0) this.trigger('update', update)

    })

  }

  /*
  TODO: Undecided on appraoch for sync/fetch/save/etc.
  */
  sync() {

  }

  toJSON() {

    return JSON.stringify(this.attr)

  }

  dispose(options = {}) {

    utils.dispose(this, options)

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
    return baseValues(object, this.keys(object));
  }

  keys(object = this.attr){
    return Object.keys(object);
  }

  // Invert the keys and values of an object. The values must be serializable.
  invert = function(obj = this.attr) {
    var result = {},
    index = -1,
    props = this.keys(obj),
    length = props.length;

    while (++index < length) {
      result[obj[props[index]]] = props[index];
    }
    return result;
  }

  isEmpty(value = this.attr) {
    if (value == null) {
      return true;
    }
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
    (isObjectLike(value) && isFunction(value.splice)))) {
      return !value.length;
    }
    return !keys(value).length;
  }
}


DragonBaseModel.prototype.defaults = {}

DragonBaseModel.prototype.disposed = false

DragonBaseModel.prototype.indisposable = false

DragonBaseModel.prototype.url = ''

Object.assign(DragonBaseModel.prototype, EventsMixin)

module.exports = DragonBaseModel
