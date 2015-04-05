/*
Dragon.Utils.uniqueId

Fork of Exoskeleton's uniqueId: https://github.com/paulmillr/exoskeleton/blob/master/exoskeleton.js
*/

var idCounter = 0

module.exports = function uniqueId(prefix) {

  var id = ++idCounter + ''

  return prefix ? prefix + id : id

}
