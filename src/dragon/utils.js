'use strict'

var Utils = {},_ = require('lodash')

// Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
var cb = function(iteratee, instance) {
  if (_.isFunction(iteratee)) return iteratee;
    /*  if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee); not ready for this
        if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };*/ 
  return iteratee;
};

// `Function#apply` can be slow so we use the method's arg count, if we know it.
Utils.addMethod = function(length, method, attribute) {
  switch (length) {
    case 1: return function() {
      return _[method](this[attribute]); //require lodash methos instead of underscore
    };
    case 2: return function(value) {
      return _[method](this[attribute], value);
    };
    case 3: return function(iteratee, context) {
      return _[method](this[attribute], cb(iteratee, this), context);
    };
    case 4: return function(iteratee, defaultVal, context) {
      return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
    };
    default: return function() {
      var args = [].slice.call(arguments);
      args.unshift(this[attribute]);
      return _[method].apply(_, args);
    };
  }
};

Utils.addLodashMethods = function(Class, methods, attribute) {
  _.each(methods, function(length, method) {
    if (_[method]) Class.prototype[method] = Utils.addMethod(length, method, attribute);
  });
};

Utils.uid = {}

Utils.clone = function(o) {

  if(typeof o == 'string') {
    var t = {o: o}

    o = JSON.parse(JSON.stringify(t)).o

  }

  else {

    o = JSON.parse(JSON.stringify(o))

  }

  return o

}

Utils.dispose = function(_this, options = {}) {

  if(_this.disposed || (_this.indisposable && options.force !== true)) return

  Object.keys(_this).forEach( (property) => {

    /*
    Sometimes a property is passed in from a parent, and the parent doesn't want
    to lose it just because the child disappeared.
    */
    if(options.ignore && options.ignoreProperties.indexOf(property) > -1) return

    if(_this && _this[property] && typeof _this[property].dispose == 'function') {

      /*_this[property].dispose(function() {
        delete _this[property]
      })*/

      _this[property].dispose()

      delete _this[property]

    }

  })

  _this.disposed = true

  // Winter is coming
  Object.freeze(_this)

}

Utils.log = function() {

  if(this._debug) console.log.apply(console, arguments)

}

/*
Dragon.Utils.uniqueId
what if we use the new primitive type symbols as a uid
*/

Utils.uniqueId = (_this) => {

  return Symbol('uid')

}

module.exports = Utils
