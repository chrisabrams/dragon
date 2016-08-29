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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dispatcher Class
 *
 * @public
 * @class Dispatcher
 */
var Dispatcher = function () {
  function Dispatcher() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, Dispatcher);


    this.uid = _utils2.default.uniqueId(this);

    this.disposed = false;

    this.options = options;

    this.app = options.app;

    this.currentController = null;
  }

  (0, _createClass3.default)(Dispatcher, [{
    key: 'dispatch',
    value: function dispatch(route, params) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


      if (this.currentController && this.currentController.dispose) {

        this.currentController.dispose();
      }

      var req = {
        params: params
      };

      var res = {
        navigate: _index2.default.navigate
      };

      var controller = null;

      if (options.Controller) {
        controller = new options.Controller();
        controller[options.action](req, res, this.next);
      } else {
        var segs = route.pattern.split('/');

        var controllerName = segs[1],
            actionName = options.action || segs[2];

        var Controller = this.options.getController(controllerName);
        controller = new Controller();

        controller[actionName](req, res, this.next);
      }

      this.currentController = controller;
    }
  }, {
    key: 'next',
    value: function next() {}
  }, {
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {

        _utils2.default.dispose(this, {
          ignoreProperties: ['app']
        });
      }
    }
  }]);
  return Dispatcher;
}();

exports.default = Dispatcher;
//# sourceMappingURL=dispatcher.js.map