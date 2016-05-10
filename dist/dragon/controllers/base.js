'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _composeStore = require('../lib/composeStore');

var _composeStore2 = _interopRequireDefault(_composeStore);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragonController = function () {
  function DragonController() {
    (0, _classCallCheck3.default)(this, DragonController);

    this.uid = _utils2.default.uniqueId(this);
  }

  (0, _createClass3.default)(DragonController, [{
    key: 'compose',
    value: function compose(key, Val) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


      if (arguments.length == 1 || (0, _typeof3.default)(_composeStore2.default[key]) == 'object') {
        var composition = _composeStore2.default[key];

        return composition;
      }

      /*
      TODO: Figure out how updating/replacing a composition would work.
      */
      if (!_composeStore2.default[key] || options.update) {

        _composeStore2.default[key] = new Val(options);
      }
    }
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
  return DragonController;
}();

DragonController.prototype.disposed = false;

exports.default = DragonController;
//# sourceMappingURL=base.js.map