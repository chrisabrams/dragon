'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _events = require('../events');

var _events2 = _interopRequireDefault(_events);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Store Class
 *
 * @public
 * @class Store
 */
var Store = function () {
  function Store() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, Store);

    this.uid = _utils2.default.uniqueId(this);

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    this.on = eventEmitter.addListener.bind(eventEmitter);
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    this.options = options;

    this.name = options.name;
  }

  (0, _createClass3.default)(Store, [{
    key: 'get',
    value: function get() {
      var o = {};
      try {
        o = JSON.parse(localStorage.getItem(this.name));
      } catch (e) {}

      return o;
    }
  }, {
    key: 'set',
    value: function set(val) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      localStorage.setItem(this.name, (0, _stringify2.default)(val));

      this.emit('change', this.name);
    }
  }]);
  return Store;
}(); /**
      * Module Dependencies
      *
      * @ignore
      */


(0, _assign2.default)(Store.prototype, { mixin: _mixin2.default });

exports.default = Store;
//# sourceMappingURL=store.js.map