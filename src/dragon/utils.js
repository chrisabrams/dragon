var Utils = {}

/*
Dragon.Utils.uniqueId

Fork of Exoskeleton's uniqueId: https://github.com/paulmillr/exoskeleton/blob/master/exoskeleton.js
*/
var idCounter = 0

Utils.uniqueId = (prefix) => {

  var id = ++idCounter + ''

  return prefix ? prefix + id : id

}

module.exports = Utils
