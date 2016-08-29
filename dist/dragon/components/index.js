'use strict';

/**
 * Module Dependencies
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _index = require('../views/index');

var _index2 = _interopRequireDefault(_index);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component Class
 *
 * @public
 * @class Component
 */
var Component = function () {

  /**
   * Component constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  function Component() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, Component);

    this.uid = _utils2.default.uniqueId(this);
    this.$ = _index2.default.prototype.$;

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    this.on = eventEmitter.addListener.bind(eventEmitter);
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    this.attached = false;
    this.attachOnInit = options.attachOnInit || true;
    this.disposed = false;

    /*
    Direct Options
    Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
    */
    this.directOptions = ['attachOnInit', 'attachPlacement', 'class', // why did CSS use this?
    'collection', 'container', 'id', 'model', 'renderOnInit', 'tagName'];

    _index2.default.prototype.assignOptions.call(this, options);

    //this._registry = {}

    //console.log(this)
    _index2.default.prototype.ensureContainer.call(this);

    if (!this.attached && this.attachOnInit) {

      this.once('render', function () {

        _index2.default.prototype.attach.call(_this);
      });
    }

    this.render();
  }

  /*get() {
   }
   set(name, ) {
   }*/

  (0, _createClass3.default)(Component, [{
    key: 'render',
    value: function render() {
      this.el = document.createElement(this.tagName || 'div');

      if (this.id) this.el.id = this.id;
      if (this.class) this.el.className = this.class;

      this.emit('render');

      return this;
    }
  }, {
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {

        _utils2.default.dispose(this);
      }
    }
  }]);
  return Component;
}();

(0, _assign2.default)(Component.prototype, {
  mixin: _mixin2.default
});

exports.default = Component;
//# sourceMappingURL=index.js.map