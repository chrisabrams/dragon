'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g,
    optionalRegExp = /\((.*?)\)/g,
    paramRegExp = /(?::|\*)(\w+)/g;

/**
 * Route Class
 *
 * @public
 * @class Route
 */

var Route = function () {
  function Route(pattern, Controller, action, options) {
    (0, _classCallCheck3.default)(this, Route);


    this.action = action;
    this.Controller = Controller;
    this.options = options;
    this.pattern = pattern;

    this.allParams = [];
    this.requiredParams = [];
    this.optionalParams = [];

    this.createRegExp();
  }

  (0, _createClass3.default)(Route, [{
    key: 'createRegExp',
    value: function createRegExp() {
      var _this = this;

      var pattern = this.pattern;

      pattern = pattern.replace(escapeRegExp, '\\$&');

      this.replaceParams(pattern, function (match, param) {

        return _this.allParams.push(param);
      });

      pattern = pattern.replace(optionalRegExp, this.parseOptionalPortion);

      pattern = this.replaceParams(pattern, function (match, param) {

        _this.requiredParams.push(param);
        return _this.paramCapturePattern(match);
      });

      return this.regExp = new RegExp('^' + pattern + '(?=\\/*(?=\\?|$))');
    }
  }, {
    key: 'extractParams',
    value: function extractParams(path) {

      var params = {},
          matches = this.regExp.exec(path);

      var ref = matches.slice(1);

      for (var i, index = i = 0, len = ref.length; i < len; index = ++i) {
        var match = ref[index];
        var paramName = this.allParams.length ? this.allParams[index] : index;
        params[paramName] = match;
      }

      return params;
    }
  }, {
    key: 'normalizeParams',
    value: function normalizeParams(params) {

      if (params instanceof Array) {

        if (params.length < this.requiredParams.length) return false;

        var paramsHash = {};

        for (var paramIndex = i = 0, len = this.requiredParams.length; i < len; paramIndex = ++i) {

          var paramName = this.requiredParams[paramIndex];

          paramsHash[paramName] = params[paramIndex];
        }

        if (!this.testConstraints(paramsHash)) return false;

        params = paramsHash;
      } else {

        params = params || {};

        if (!this.testParams(params)) return false;
      }

      return params;
    }
  }, {
    key: 'paramCapturePattern',
    value: function paramCapturePattern(param) {

      if (param.charAt(0) == ':') {
        return '([^\/\?]+)';
      } else {
        return '(.*?)';
      }
    }
  }, {
    key: 'parseOptionalPortion',
    value: function parseOptionalPortion(match, optionalPortion) {
      var _this2 = this;

      var portion = this.replaceParams(optionalPortion, function (match, param) {

        _this2.optionalParams.push(param);

        return _this2.paramCapturePattern(match);
      });

      return '(?:' + portion + ')?';
    }
  }, {
    key: 'removeTrailingSlash',
    value: function removeTrailingSlash(path) {

      if (path.slice(-1) === '/') {
        path.slice(0, -1);
      }

      return path;
    }
  }, {
    key: 'replaceParams',
    value: function replaceParams(s, cb) {

      return s.replace(paramRegExp, cb);
    }
  }, {
    key: 'test',
    value: function test(path) {

      if (!this.regExp.test(path)) return false;

      if (this.options.constraints) {
        return this.testConstraints(this.extractParams(path));
      }

      return true;
    }
  }, {
    key: 'testConstraints',
    value: function testConstraints() {

      var constraints = this.options.constraints;

      if (constraints) {

        for (var name in constraints) {

          if (!{}.hasOwnProperty.call(constraints, name)) continue;

          constraint = constraints[name];

          if (!constraint.test(params[name])) {

            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: 'testParams',
    value: function testParams(params) {

      for (var i = 0, len = this.requiredParams.length; i < len; i++) {

        paramName = this.requiredParams[i];

        if (params[paramName] === void 0) {
          return false;
        }
      }

      return this.testConstraints(params);
    }
  }]);
  return Route;
}();

exports.default = Route;
//# sourceMappingURL=route.js.map