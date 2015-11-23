'use strict';

var Utils = {}

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
    Sometimes a property is passed in from a parent, and parent would be happy to not have property deleted by child
    */
    if(options.ignore && options.ignoreProperties.indexOf(property) > -1) return

    if(_this && _this[property] && typeof _this[property].dispose == 'function') {

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

Fork of Exoskeleton's uniqueId: https://github.com/paulmillr/exoskeleton/blob/master/exoskeleton.js
*/
var idCounter = 0

Utils.uniqueId = (_this) => {

  ++idCounter

  var id = `u${idCounter}`

  //var uid = prefix ? prefix + id : id
  var uid = id

  return uid

}

module.exports = Utils
