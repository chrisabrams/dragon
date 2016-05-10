'use strict';

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = {};

Utils.uid = {};

Utils.clone = function (o) {

  if (typeof o == 'string') {
    var t = { o: o };

    o = JSON.parse((0, _stringify2.default)(t)).o;
  } else {

    o = JSON.parse((0, _stringify2.default)(o));
  }

  return o;
};

Utils.dispose = function (_this) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


  if (_this.disposed || _this.indisposable && options.force !== true) return;

  (0, _keys2.default)(_this).forEach(function (property) {

    /*
    Sometimes a property is passed in from a parent, and the parent doesn't want
    to lose it just because the child disappeared.
    */
    if (options.ignore && options.ignoreProperties.indexOf(property) > -1) return;

    if (_this && _this[property] && typeof _this[property].dispose == 'function') {

      /*_this[property].dispose(function() {
        delete _this[property]
      })*/

      _this[property].dispose();

      delete _this[property];
    }
  });

  _this.disposed = true;

  // Winter is coming
  (0, _freeze2.default)(_this);
};

Utils.log = function () {

  if (this._debug) console.log.apply(console, arguments);
};

/*
Dragon.Utils.uniqueId
what if we use the new primitive type symbols as a uid
*/

Utils.uniqueId = function (_this) {

  return (0, _symbol2.default)('uid');
};

module.exports = Utils;
//# sourceMappingURL=utils.js.map