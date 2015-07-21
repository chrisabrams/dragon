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

Utils.dispose = function(_this) {

  //var uid = Utils.clone(_this.uid)

  Object.keys(_this).forEach( (property) => {

    if(_this && _this[property] && typeof _this[property].dispose == 'function') {

      _this[property].dispose()

      delete _this[property]

    }

  })

  Object.freeze(_this)

  //if(_this) _this.disposed = true
  //console.log("deleting uid", uid)
  //console.log(Utils.uid[uid])
  //console.log(Utils.uid)
  //delete Utils.uid[uid]

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

  //Utils.uid[uid] = _this

  return uid

}

module.exports = Utils
