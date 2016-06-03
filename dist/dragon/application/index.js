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

var _dispatcher = require('../router/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _index = require('../router/index');

var _index2 = _interopRequireDefault(_index);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Application Class
 *
 * @public
 * @class Application
 */

var Application = function () {

  /**
   * Application constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */

  function Application() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, Application);

    /**
     * Application UID
     *
     * @private
     * @type {String}
     */
    this.uid = _utils2.default.uniqueId(this);

    /**
     * Disposed
     *
     * @private
     * @type {Object}
     */
    this.disposed = false;

    /**
     * Options
     *
     * @private
     * @type {Object}
     */
    this.options = options;

    if (!this.options.router.routes) return console.error('Application requires routes', this.options);

    /**
     * Router.
     *
     * @private
     * @type {Object}
     */
    this.router = new _index2.default({
      routes: this.options.router.routes
    });

    /**
     * Dispatcher.
     *
     * @private
     * @type {Object}
     */
    var dispatcher = this.dispatcher = new _dispatcher2.default({
      app: this,
      getController: options.dispatcher.getController
    });

    this.router.on('match', function routeMatchCallback(route, params, options) {

      dispatcher.dispatch(route, params, options);
    });
  }

  /**
   * Dispose of the application
   *
   * @example
   *   application.dispose()
   *
   * @public
   */


  (0, _createClass3.default)(Application, [{
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {

        _utils2.default.dispose(this);
      }
    }

    /**
     * Start the application
     *
     * @example
     *   application.start()
     *
     * @public
     */

  }, {
    key: 'start',
    value: function start() {

      this.router.start();
    }
  }]);
  return Application;
}();

(0, _assign2.default)(Application.prototype, { mixin: _mixin2.default });

exports.default = Application;
//# sourceMappingURL=index.js.map