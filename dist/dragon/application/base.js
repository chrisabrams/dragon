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

var _dispatcher = require('../router/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _base = require('../router/base');

var _base2 = _interopRequireDefault(_base);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragonApplication = function () {
  function DragonApplication() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, DragonApplication);

    this.uid = _utils2.default.uniqueId(this);
    //this.mixin(eventsMixin)

    this.disposed = false;

    this.options = options;

    if (!this.options.router.routes) return console.error('Application requires routes', this.options);

    this.router = new _base2.default({
      routes: this.options.router.routes
    });

    var dispatcher = this.dispatcher = new _dispatcher2.default({
      app: this,
      getController: options.dispatcher.getController
    });

    this.router.on('match', function routeMatchCallback(route, params, options) {

      dispatcher.dispatch(route, params, options);
    });
  }

  (0, _createClass3.default)(DragonApplication, [{
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {

        _utils2.default.dispose(this);
      }
    }
  }, {
    key: 'start',
    value: function start() {

      this.router.start();
    }
  }]);
  return DragonApplication;
}();

(0, _assign2.default)(DragonApplication.prototype, { mixin: _mixin2.default });

exports.default = DragonApplication;
//# sourceMappingURL=base.js.map