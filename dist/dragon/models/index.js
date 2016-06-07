'use strict';

/**
 * Module Dependencies
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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
 * Model Class
 *
 * @public
 * @class Model
 */

var Model = function () {
  function Model() {
    var attr = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    (0, _classCallCheck3.default)(this, Model);

    this.uid = _utils2.default.uniqueId(this);

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    this.on = eventEmitter.addListener.bind(eventEmitter);
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    this.defaults = {};

    this.disposed = false;

    this.url = '';

    this.options = options;

    Object.defineProperty(this, 'attr', {
      configurable: false,
      enumerable: true,
      writable: true
    });

    this.attr = (0, _assign2.default)({}, this.defaults, attr);

    //this.observeAttributes()
  }

  /*
  TODO: not the full appr
  */


  (0, _createClass3.default)(Model, [{
    key: 'clear',
    value: function clear() {

      this.attr = {};
      this.emit('change');
    }
  }, {
    key: 'getData',
    value: function getData() {
      return (0, _assign2.default)({}, this.attr);
    }

    /*
    TODO: add an an unobserve option
    */

  }, {
    key: 'observeAttributes',
    value: function observeAttributes() {

      // Trigger changes on model
      //Object.observe(this.attr, this.observeHandler.bind(this))

    }
  }, {
    key: 'observeHandler',
    value: function observeHandler(changes) {

      //this.emit('change', changes)

      /*
      TODO: consider making this a mixin and expanding to watch specific properties
      */

      var add = [],
          del = [],
          update = [];

      changes.forEach(function (change) {

        switch (change.type) {

          case 'add':
            add.push(change);break;
          case 'delete':
            del.push(change);break;
          case 'update':
            update.push(change);break;

        }
      });

      if (add.length > 0) this.emit('add', add);
      if (del.length > 0) this.emit('delete', del);
      if (update.length > 0) this.emit('update', update);
    }

    /*
    TODO: Undecided on appraoch for sync/fetch/save/etc.
    */

  }, {
    key: 'sync',
    value: function sync() {}
  }, {
    key: 'toJSON',
    value: function toJSON() {

      return (0, _stringify2.default)(this.attr);
    }
  }, {
    key: 'pairs',
    value: function pairs() {
      var object = arguments.length <= 0 || arguments[0] === undefined ? this.attr : arguments[0];

      var index = -1,
          props = this.keys(object),
          length = props.length,
          result = Array(length);
      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    // Internal pick helper function to determine if `obj` has key `key`.

  }, {
    key: 'keyInObj',
    value: function keyInObj(value, key, obj) {
      return key in obj;
    }

    // Return a copy of the object only containing the whitelisted properties.

  }, {
    key: 'pick',
    value: function pick() {
      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }

      var obj = this.attr,
          result = {},
          iteratee = keys[0];
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

  }, {
    key: 'omit',
    value: function omit() {
      for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      var obj = this.attr,
          iteratee = keys[0],
          context;
      if (typeof iteratee === 'function') {
        iteratee = iteratee;
        if (keys.length > 1) context = keys[1];
      } else {
        iteratee = function (value, key, obj) {
          return keys.indexOf(key) == -1;
        };
      }
      return this.pick(iteratee, context);
    }
  }, {
    key: 'baseValues',
    value: function baseValues(object, props) {
      var index = -1,
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }
  }, {
    key: 'values',
    value: function values() {
      var object = arguments.length <= 0 || arguments[0] === undefined ? this.attr : arguments[0];

      return this.baseValues(object, this.keys(object));
    }
  }, {
    key: 'keys',
    value: function keys() {
      var object = arguments.length <= 0 || arguments[0] === undefined ? this.attr : arguments[0];

      return (0, _keys2.default)(object);
    }

    // Invert the keys and values of an object. The values must be serializable.

  }, {
    key: 'invert',
    value: function invert() {
      var obj = arguments.length <= 0 || arguments[0] === undefined ? this.attr : arguments[0];

      var result = {},
          index = -1,
          props = this.keys(obj),
          length = props.length;

      while (++index < length) {
        result[obj[props[index]]] = props[index];
      }
      return result;
    }
  }, {
    key: 'isArrayLike',
    value: function isArrayLike(collection) {
      var length = collection[length];
      return typeof length == 'number' && length >= 0 && length <= Math.pow(2, 53) - 1;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var value = arguments.length <= 0 || arguments[0] === undefined ? this.attr : arguments[0];

      if (value == null) return true;
      if (isArrayLike(value) && (_.isArray(value) || _.isString(value) || _.isArguments(value))) return value.length === 0;
      return this.keys(value).length === 0;
    }
  }, {
    key: 'set',
    value: function set(obj) {
      var _this = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


      var keysChanged = [];
      (0, _keys2.default)(obj).forEach(function (key) {

        _this.attr[key] = obj[key];
        keysChanged.push(key);
      });

      // Don't emit a change event if silence is requested
      if (options.silent) return;
      this.emit('change', keysChanged);
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


      _utils2.default.dispose(this, options);
    }
  }]);
  return Model;
}();

(0, _assign2.default)(Model.prototype, { mixin: _mixin2.default });

exports.default = Model;
//# sourceMappingURL=index.js.map