'use strict';

/**
 * Polyfills
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = exports.Utils = exports.Store = exports.Router = exports.Model = exports.Mediator = exports.EventSourceMediator = exports.EventEmitter = exports.Dispatcher = exports.Controller = exports.Component = exports.CollectionView = exports.Collection = exports.Application = undefined;

require('../lib/polyfills/element.remove');

require('../lib/polyfills/node.prependchild');

require('../lib/polyfills/nodelist.queryselectorall');

require('../lib/polyfills/nodelist.remove');

require('../lib/polyfills/Array.from');

var _application = require('./dragon/application');

var _application2 = _interopRequireDefault(_application);

var _collections = require('./dragon/collections');

var _collections2 = _interopRequireDefault(_collections);

var _collectionView = require('./dragon/views/collection-view');

var _collectionView2 = _interopRequireDefault(_collectionView);

var _components = require('./dragon/components');

var _components2 = _interopRequireDefault(_components);

var _controllers = require('./dragon/controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _dispatcher = require('./dragon/router/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _events = require('./dragon/events');

var _events2 = _interopRequireDefault(_events);

var _eventSource = require('./dragon/event-source');

var _eventSource2 = _interopRequireDefault(_eventSource);

var _mediator = require('./dragon/mediator');

var _mediator2 = _interopRequireDefault(_mediator);

var _models = require('./dragon/models');

var _models2 = _interopRequireDefault(_models);

var _router = require('./dragon/router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./dragon/models/store');

var _store2 = _interopRequireDefault(_store);

var _utils = require('./dragon/utils');

var _utils2 = _interopRequireDefault(_utils);

var _views = require('./dragon/views');

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dragon = {
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Layout         : require('./dragon/views/layout'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  Application: _application2.default,
  Collection: _collections2.default,
  CollectionView: _collectionView2.default,
  Component: _components2.default,
  Controller: _controllers2.default,
  Dispatcher: _dispatcher2.default,
  EventEmitter: _events2.default,
  EventSource: _eventSource2.default,
  Mediator: _mediator2.default,
  Model: _models2.default,
  Router: _router2.default,
  Store: _store2.default,
  Utils: _utils2.default,
  View: _views2.default
};exports.Application = _application2.default;
exports.Collection = _collections2.default;
exports.CollectionView = _collectionView2.default;
exports.Component = _components2.default;
exports.Controller = _controllers2.default;
exports.Dispatcher = _dispatcher2.default;
exports.EventEmitter = _events2.default;
exports.EventSourceMediator = _eventSource2.default;
exports.Mediator = _mediator2.default;
exports.Model = _models2.default;
exports.Router = _router2.default;
exports.Store = _store2.default;
exports.Utils = _utils2.default;
exports.View = _views2.default;
exports.default = Dragon;
//# sourceMappingURL=dragon.js.map