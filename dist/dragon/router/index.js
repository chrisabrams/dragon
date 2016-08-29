'use strict';

/**
 * Module Dependencies
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = undefined;

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

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Router Class
 *
 * @public
 * @class Router
 */
var Router = function () {
  function Router() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, Router);

    this.uid = _utils2.default.uniqueId(this);

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    this.on = eventEmitter.addListener.bind(eventEmitter);
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    this._currentHandler = null;
    this._currentUrl = null;
    this._debug = options.debug || false;
    this._history = window.history;
    this._location = window.location;
    this._routes = [];
    this._started = false;

    this.desposed = false;

    this.options = options;

    if (!this.options.routes) return console.error('Router needs routes');
    this.loadRoutes();

    document.addEventListener('click', this.onLinkClick.bind(this), false);
  }

  (0, _createClass3.default)(Router, [{
    key: 'back',
    value: function back() {
      window.history.back();
    }
  }, {
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {

        this.stop();

        document.removeEventListener('click', this.onLinkClick, false);

        _utils2.default.dispose(this);
      }
    }
  }, {
    key: 'forward',
    value: function forward() {
      window.history.forward();
    }
  }, {
    key: 'get',
    value: function get(pattern) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


      var route = new _route2.default(pattern);

      this._routes.push({ route: route, options: options });

      /*let forwardPath = arguments[1]
       // Forward route
      if(typeof forwardPath == 'string') {
         this.navigate(forwardPath)
        return
      }
       return this.router.get(path, (req, next) => {
         this.currentHandler = handler
         handler.call(this.router, req, next)
       })*/
    }
  }, {
    key: 'getPath',
    value: function getPath() {

      //path.charAt(0) === '/' ? path.slice(1) : path;
      return window.location.pathname;
    }
  }, {
    key: 'isIgnoredLink',
    value: function isIgnoredLink(el) {

      var href = el.getAttribute('href'),
          rel = el.getAttribute('rel');

      if (!href || href == '' || href.charAt(0) == '#' || rel && rel == 'external' || href.indexOf('//') > -1) return true;

      return false;
    }
  }, {
    key: 'loadRoutes',
    value: function loadRoutes() {

      this.options.routes(this);
    }
  }, {
    key: 'navigate',
    value: function navigate(path) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


      this._history[options.replace ? 'replaceState' : 'pushState']({}, document.title, path);
      this.onUrlChange();
    }
  }, {
    key: 'onLinkClick',
    value: function onLinkClick(e) {

      var el = e.target;

      if (el.nodeName == 'A') {

        if (this.isIgnoredLink(el)) return;

        /*if(external) {
          window.open(href)
        }*/

        e.preventDefault();

        this.navigate(el.href);
      }
    }
  }, {
    key: 'onUrlChange',
    value: function onUrlChange() {

      var matched = false,
          path = this.getPath();

      for (var i = 0, l = this._routes.length; i < l; i++) {

        var item = this._routes[i],
            options = item.options,
            route = item.route;

        if (route.regExp.test(path)) {

          var params = route.extractParams(path);

          this.emit('match', route, params, options);
          matched = true;

          break;
        }
      }
    }
  }, {
    key: 'start',
    value: function start() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


      if (this._started) return console.error('Router already started.');

      this._started = true;

      this._usePushState = true;

      window.addEventListener('popstate', this.onUrlChange.bind(this), false);

      // popstate doesn't fire on page load
      this.onUrlChange();
    }
  }, {
    key: 'stop',
    value: function stop() {

      if (!this._started) return;

      window.removeEventListener('popstate', this.onUrlChange, false);

      this._started = false;
    }
  }, {
    key: 'use',
    value: function use() {}
  }]);
  return Router;
}();

(0, _assign2.default)(Router.prototype, { mixin: _mixin2.default });

exports.Route = _route2.default;
exports.default = Router;
//# sourceMappingURL=index.js.map