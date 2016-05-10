'use strict';

// Polyfills
// TODO: which of these are still needed?

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = exports.Utils = exports.Store = exports.Router = exports.Model = exports.Mediator = exports.EventEmitter = exports.Dispatcher = exports.Controller = exports.Component = exports.CollectionView = exports.Collection = exports.Application = undefined;

require('../lib/polyfills/element.remove');

require('../lib/polyfills/node.prependchild');

require('../lib/polyfills/nodelist.queryselectorall');

require('../lib/polyfills/nodelist.remove');

require('../lib/polyfills/Object.assign');

require('../lib/polyfills/Array.from');

var _base = require('./dragon/application/base');

var _base2 = _interopRequireDefault(_base);

var _base3 = require('./dragon/collections/base');

var _base4 = _interopRequireDefault(_base3);

var _collectionView = require('./dragon/views/collection-view');

var _collectionView2 = _interopRequireDefault(_collectionView);

var _base5 = require('./dragon/components/base');

var _base6 = _interopRequireDefault(_base5);

var _base7 = require('./dragon/controllers/base');

var _base8 = _interopRequireDefault(_base7);

var _dispatcher = require('./dragon/router/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _events = require('./dragon/events');

var _events2 = _interopRequireDefault(_events);

var _mediator = require('./dragon/mediator');

var _mediator2 = _interopRequireDefault(_mediator);

var _base9 = require('./dragon/models/base');

var _base10 = _interopRequireDefault(_base9);

var _base11 = require('./dragon/router/base');

var _base12 = _interopRequireDefault(_base11);

var _store = require('./dragon/models/store');

var _store2 = _interopRequireDefault(_store);

var _utils = require('./dragon/utils');

var _utils2 = _interopRequireDefault(_utils);

var _base13 = require('./dragon/views/base');

var _base14 = _interopRequireDefault(_base13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dragon = {
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Layout         : require('./dragon/views/layout'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  Application: _base2.default,
  Collection: _base4.default,
  CollectionView: _collectionView2.default,
  Component: _base6.default,
  Controller: _base8.default,
  Dispatcher: _dispatcher2.default,
  EventEmitter: _events2.default,
  Mediator: _mediator2.default,
  Model: _base10.default,
  Router: _base12.default,
  Store: _store2.default,
  Utils: _utils2.default,
  View: _base14.default
};

exports.Application = _base2.default;
exports.Collection = _base4.default;
exports.CollectionView = _collectionView2.default;
exports.Component = _base6.default;
exports.Controller = _base8.default;
exports.Dispatcher = _dispatcher2.default;
exports.EventEmitter = _events2.default;
exports.Mediator = _mediator2.default;
exports.Model = _base10.default;
exports.Router = _base12.default;
exports.Store = _store2.default;
exports.Utils = _utils2.default;
exports.View = _base14.default;
exports.default = Dragon;
//# sourceMappingURL=dragon.js.map