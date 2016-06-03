'use strict';

/**
 * Module Dependencies
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _stardux = require('stardux');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CollectionView Class
 *
 * @public
 * @class CollectionView
 */

var CollectionView = function (_View) {
  (0, _inherits3.default)(CollectionView, _View);


  /**
   * CollectionView constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */

  function CollectionView() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, CollectionView);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CollectionView).call(this, (0, _assign2.default)({}, {
      View: options.View || _index2.default
    }, options)));
  }

  (0, _createClass3.default)(CollectionView, [{
    key: 'render',
    value: function render() {

      if (!this.container) {
        console.error('Container type not valid.', this.uid);
        return this;
      }

      if (this.attached) {
        return this;
      }

      if (this.el) {
        return;
      } else {
        this.ensureElement();
      }

      this.idom = (0, _stardux.createContainer)(this.el, {}, this.reducer.bind(this));

      this.el.innerHTML = this.getTemplate();

      this.refreshIDOM();

      this.renderAllItems();

      this.emit('render');

      return this;
    }
  }, {
    key: 'renderAllItems',
    value: function renderAllItems() {
      var _this2 = this;

      if (this.collection) {
        var models = this.collection.models;
        (0, _keys2.default)(models).forEach(function (key, i) {

          _this2.renderItem(models[key], i);
        });
      }
    }
  }, {
    key: 'renderItem',
    value: function renderItem(model, i) {

      this.view('collection-view-' + i, new this.View({
        model: model
      }));
    }
  }]);
  return CollectionView;
}(_index2.default);

exports.default = CollectionView;
//# sourceMappingURL=collection-view.js.map