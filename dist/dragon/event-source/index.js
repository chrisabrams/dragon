'use strict';

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

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EventSourceMediator Class
 *
 * @public
 * @class EventSourceMediator
 */

var EventSourceMediator = function () {

  /**
   * EventSourceMediator constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */

  function EventSourceMediator() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, EventSourceMediator);

    if (!options.path || typeof options.path != 'string') throw new Error('Path must be set to use Event Source');

    this.source = new EventSource(options.path);

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    this.on = eventEmitter.addListener.bind(eventEmitter);
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    this.source.addEventListener('message', this.onMessage, false);
    this.source.addEventListener('open', this.onOpen, false);
    this.source.addEventListener('error', this.onClose, false);
  }

  (0, _createClass3.default)(EventSourceMediator, [{
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {
        this.source.removeEventListener('message', this.onMessage, false);
        this.source.removeEventListener('open', this.onOpen, false);
        this.source.removeEventListener('error', this.onClose, false);

        _utils2.default.dispose(this);
      }
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      this.emit('close');
    }
  }, {
    key: 'onMessage',
    value: function onMessage(e) {
      this.emit('message');
    }
  }, {
    key: 'onOpen',
    value: function onOpen(e) {
      this.emit('open');
    }
  }]);
  return EventSourceMediator;
}();

(0, _assign2.default)(EventSourceMediator.prototype, { mixin: _mixin2.default });

exports.default = EventSourceMediator;
//# sourceMappingURL=index.js.map