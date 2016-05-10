'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require('babel-runtime/core-js/symbol/iterator');

var _iterator3 = _interopRequireDefault(_iterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _events = require('../events');

var _events2 = _interopRequireDefault(_events);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _base = require('../models/base');

var _base2 = _interopRequireDefault(_base);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragonBaseCollection = function () {
  function DragonBaseCollection() {
    var entries = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    (0, _classCallCheck3.default)(this, DragonBaseCollection);

    this.uid = _utils2.default.uniqueId(this);

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    this.on = eventEmitter.addListener.bind(eventEmitter);
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    this.disposed = false;
    this.Model = options.Model || _base2.default;
    this.models = [];
    this.options = options;
    this.url = options.url || this.url || '';

    if (!this.Model || !(this.Model instanceof Function)) {
      throw new Error('Collection requires a valid Model Class');
    }

    if (typeof this.url != 'string') {
      throw new Error('Collection requires a valid url');
    }

    this.ensureEntries(entries);
  }

  (0, _createClass3.default)(DragonBaseCollection, [{
    key: 'add',
    value: function add(entries) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      this.ensureEntries(entries, options);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.models = [];
    }

    /*
    TODO: Clean this up, make checks stronger
    Currently, a mixed array of objects and models could be passed; it's an odd scenario that would cause that to hapen thoug.
    Tecnnically a model instance of a different model could be passed; need to check and prevent that.
    Should also consider concatting arrays as pushing arrays of 1000 or more can be very time consuming/lots of looping.
    Overall this function sucks but helps move the project forward atm.
    */

  }, {
    key: 'ensureEntries',
    value: function ensureEntries(entries) {
      var _this = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


      /*
      TODO: figure out how to clean this up
      */
      if (typeof entries == 'null' || typeof entries == 'undefined' || !entries.length && (typeof entries === 'undefined' ? 'undefined' : (0, _typeof3.default)(entries)) == 'object' && (0, _keys2.default)(entries).length == 0) return;

      // we will suppport all kind of iterable  here !!
      // It is simpler to manage things by making a single item an array
      if (!entries[_iterator3.default]) {
        entries = [entries];
      }

      if (options.at) options.at--;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var entry = _step.value;
          model = null;

          /*
          TODO: should create a collection that supports multiple types of  models
          */

          if (entry instanceof _this.Model) {
            model = entry;
            _this.models.push(model);
          } else {

            /*
            TODO:
            somehow the first item in this.models gets duplicated to the end, and then new items that were added are added :/
            */
            // If collection has entry, merge the results
            if (entry.id) {
              index = null;
              existingModel = _this.models.filter(function (item, i) {
                if (item.attr.id == entry.id) {
                  index = i;
                  return item;
                }
              });


              if (existingModel.length > 0 && index) {
                model = (0, _assign2.default)(_this.models[index], entry);
              }
            }

            // Create a new entry
            if (!model) {
              model = new _this.Model(entry, { storeAutoLoad: false });

              if (options.at) {
                options.at++;
                _this.models.splice(options.at, 0, entry);
                //this.models.splice.apply(this.models, [optoins.at, 0].concat([model]))
              } else {
                  _this.models.push(model);
                }
            }
          }

          _this.emit('change', model, _this.models.length - 1);
        };

        for (var _iterator = (0, _getIterator3.default)(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var model;
          var index;
          var existingModel;

          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /*
    TODO: not really sure what to call this function
    */

  }, {
    key: 'getData',
    value: function getData() {
      var data = [];

      this.models.forEach(function (model) {
        data.push(model.getData());
      });

      return data;
    }
  }, {
    key: 'move',
    value: function move(fromIndex, toIndex) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      this.models.splice(toIndex, 0, this.models.splice(fromIndex, 1)[0]);
    }
  }, {
    key: 'remove',
    value: function remove(index) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var changeEvent = typeof options.changeEvent == 'boolean' ? options.changeEvent : true;

      this.models.splice(index, 1);

      if (changeEvent) {
        this.emit('change');
        this.emit('removed');
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.models.map(function (model) {
        return model.toJSON();
      });
    }
  }, {
    key: _iterator3.default,
    value: function value() {
      var collectionsModels = this.models,
          index = 0;

      return {
        next: function next() {
          if (index + 1 > collectionsModels.length) {
            return { done: true };
          }
          return { value: collectionsModels[index++], done: false };
        }
      };
    }
  }, {
    key: 'dispose',
    value: function dispose() {

      if (!this.disposed) {

        _utils2.default.dispose(this);
      }
    }
  }]);
  return DragonBaseCollection;
}();

(0, _assign2.default)(DragonBaseCollection.prototype, { mixin: _mixin2.default });

module.exports = DragonBaseCollection;
//# sourceMappingURL=base.js.map