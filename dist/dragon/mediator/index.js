'use strict';

/**
 * Module Dependencies
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _events = require('../events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mediator Class
 *
 * @public
 * @class Mediator
 */
var Mediator =

/**
 * Mediator constructor
 *
 * @public
 * @constructor
 * @param {Object} options
 */
function Mediator() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  (0, _classCallCheck3.default)(this, Mediator);

  // TODO: figure out how to mixin this
  var eventEmitter = new _events2.default();

  this.emit = eventEmitter.emitEvent.bind(eventEmitter);
  this.on = eventEmitter.addListener.bind(eventEmitter);
  this.once = eventEmitter.addOnceListener.bind(eventEmitter);
  this.off = eventEmitter.removeListener.bind(eventEmitter);
};

exports.default = Mediator;
//# sourceMappingURL=index.js.map