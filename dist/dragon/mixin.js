'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mixin(source) {
  var _this = this;

  source = source.prototype;

  (0, _getOwnPropertyNames2.default)(source).forEach(function propertyName(name) {

    if (name !== 'constructor') {
      (0, _defineProperty2.default)(_this, name, (0, _getOwnPropertyDescriptor2.default)(source, name));
    }
  });
}

exports.default = mixin;
//# sourceMappingURL=mixin.js.map