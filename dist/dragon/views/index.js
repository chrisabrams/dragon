'use strict';

/**
 * Module Dependencies
 *
 * @ignore
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stardux = require('stardux');

var _starplate = require('starplate');

var _events = require('../events');

var _events2 = _interopRequireDefault(_events);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stardux = require('stardux');

// Thanks: http://stackoverflow.com/questions/7238177/detect-htmlcollection-nodelist-in-javascript
function isNodeList(nodes) {
  var stringRepr = Object.prototype.toString.call(nodes);

  return (typeof nodes === 'undefined' ? 'undefined' : (0, _typeof3.default)(nodes)) === 'object' && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && typeof nodes.length === 'number' && (nodes.length === 0 || (0, _typeof3.default)(nodes[0]) === "object" && nodes[0].nodeType > 0);
}

/**
 * View Class
 *
 * @public
 * @class View
 */

var View = function () {

  /**
   * View constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */

  function View() {
    var _this2 = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, View);


    /**
     * View UID
     *
     * @private
     * @type {String}
     */
    this.uid = _utils2.default.uniqueId(this);

    // TODO: figure out how to mixin this
    var eventEmitter = new _events2.default();

    /**
     * Event Emitter's emit method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.emit = eventEmitter.emitEvent.bind(eventEmitter);
    /**
     * Event Emitter's on method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.on = eventEmitter.addListener.bind(eventEmitter);
    /**
     * Event Emitter's once method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.once = eventEmitter.addOnceListener.bind(eventEmitter);
    /**
     * Event Emitter's off method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.off = eventEmitter.removeListener.bind(eventEmitter);

    /**
     * Whether the view attached to the DOM
     * @type {Boolean}
     * @private
     */
    this.attached = false;

    /**
     * Whether to attach the view on initialization
     * @type {Boolean}
     */
    this.attachOnInit = true;

    /**
     * Determines where the view is attached into the container
     * @type {String}
     */
    this.attachPlacement = 'after';

    /**
     * Whether to bind data from Incremental DOM to the view on initialization.
     * @type {Boolean}
     */
    this.bindDataOnInit = true;

    /**
     * Whether the view has been disposed of.
     * @type {Boolean}
     * @private
     */
    this.disposed = false;

    /**
     * Whether to render the view's template(s) on initialization
     * @type {Boolean}
     */
    this.renderOnInit = true;

    //this._childContainers = {}
    /**
     * Events attached to the view
     * @type {Array}
     * @private
     */
    this._events = [];
    /**
     * Listeners attached to the view
     * @type {Array}
     * @private
     */
    this._listeners = [];
    /**
     * Partial templates available to use in the reducer
     * @type {Object}
     * @private
     */
    this._partials = {};
    /**
     * Sub views attached to the view
     * @type {Object}
     * @private
     */
    this._views = {};

    this.assignOptions(options);

    //this.setProperties()

    //this.ensureElement()
    this.ensureContainer();

    if (this.options.idom instanceof _stardux.createContainer) {
      //this.$container =
      //TODO: figure out how to get $container from an already created container
      this.idom = this.options.idom;
      this.attached = true; // Since the idom container is being passed in, we assume it's been attached (although I guess its possible it hasn't been)
    }

    if (!this.attached && this.attachOnInit) {

      this.once('render', function () {

        _this2.attach();
      });
    }

    if (this.bindDataOnInit && (this.model || this.models || this.collection || this.collections)) {
      this.bindDataOnChange();
    }

    if (this.renderOnInit) this.render();
  }

  (0, _createClass3.default)(View, [{
    key: 'addedToDOM',
    value: function addedToDOM() {}
    // Intended to be over-written


    /*
    @method attach
    @type Function
    @return this
    @desc Attaches the view to the DOM
    */

  }, {
    key: 'assignOptions',
    value: function assignOptions() {
      var _this3 = this;

      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


      // Object.assign is used so that options passed into parent constructor are not lost when child is disposed
      this.options = (0, _assign2.default)({}, options);

      if (this.options.partials) {

        (0, _keys2.default)(this.options.partials).forEach(function (key) {
          _this3.partial(key, _this3.options.partials[key]);
        });
        //delete this.options.partials
      }

      (0, _keys2.default)(this.options).forEach(function (option) {

        if (_this3.directOptions && _this3.directOptions.indexOf(option) > -1) {

          _this3[option] = options[option];
        } else {

          _this3.options[option] = options[option];
        }
      });
    }
  }, {
    key: 'attach',
    value: function attach() {
      var _this4 = this;

      try {

        /*
        Can't use .forEach() on NodeLists
        Tempting to use NodeList.prototype.forEach = Array.prototype.forEach but that's a no no
        See for basic info: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
        See this guy (which I ignore) for a super long list of reasons: http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
        */

        Array.prototype.forEach.call(this.$container, function ($container) {

          var placement;

          switch (_this4.attachPlacement) {

            // Attach before all other children in container
            case 'first':
              $container['prependChild'](_this4.el);break;
            case 'prepend':
              $container['prependChild'](_this4.el);break;

            // Attach normally, after all children in container
            default:
              $container['appendChild'](_this4.el);

          }
        });
      } catch (e) {

        console.error(e);
      }

      /*if(!this.$el) {
        this.setElement()
      }*/

      this.attached = true;

      this.emit('addedToDOM');
      if (this.onAddedToDOM) this.onAddedToDOM();

      return this;
    }
  }, {
    key: 'bindDataOnChange',
    value: function bindDataOnChange() {
      var _this5 = this;

      if (this.model && this.model.on) this.model.on('change', this.render.bind(this));
      if (this.collection && this.collection.on) this.collection.on('change', this.render.bind(this));

      if (this.models) {
        (0, _keys2.default)(this.models).forEach(function (key) {
          _this5.models[key].on('change', function () {
            _this5.render.call(_this5);
          });
        });
      }

      if (this.collections) {
        (0, _keys2.default)(this.collections).forEach(function (key) {
          _this5.collections[key].on('change', function () {
            _this5.render.call(_this5);
          });
        });
      }
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {

      if (typeof arguments[2] == 'undefined') throw new Error('Event "' + arguments[0] + '" on ' + this.constructor.name + ' requires callback');

      var action = arguments[0],
          handler = arguments[arguments.length - 1].bind(this);

      switch (arguments.length) {

        case 3:

          var $selector = arguments[1];

          Array.prototype.forEach.call($selector, function (selector) {

            selector.addEventListener(action, handler, false);
          });

          break;

        default:

      }
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {

      this._events.forEach(function (item) {

        var action = item[0],
            $selector = item[1],
            // TODO: scope this locally
        listener = item[2];

        Array.prototype.forEach.call($selector, function (selector) {

          selector.addEventListener(action, listener, false);
        });
      });
    }
  }, {
    key: 'childContainer',
    value: function childContainer(name, selector, reducer) {

      if (!selector) {
        return this._childContainers[name];
      }

      var $el = this.$(selector);
      if ($el) {
        this._childContainers[name] = (0, _stardux.createContainer)($el, {}, reducer);
      }
    }

    /*bindListens() {
       this.listen.forEach( (item) => {
         var eventName = item[0],
            handler   = item[1]
         this.on(eventName, handler)
       })
     }*/

  }, {
    key: 'delegateEvent',
    value: function delegateEvent(action, $el, selector, handler) {
      var _this = this;

      if (typeof $el == 'string') $el = document.querySelectorAll($el);

      if ((typeof $el === 'undefined' ? 'undefined' : (0, _typeof3.default)($el)) == 'object' && $el.$ref) {
        $el = $el.$ref;
      }

      if ((typeof selector === 'undefined' ? 'undefined' : (0, _typeof3.default)(selector)) == 'object' && selector.selector) {
        selector = selector.selector;
      }

      var handlerWrap = function handlerWrap(e) {
        var t = e.target;
        while (t && t !== this) {
          if (t.matches(selector)) {
            var index = null;

            if (t.tagName == 'LI') {
              var c = t.parentNode.childNodes;
              for (var i = 0, l = c.length; i < l; i++) {
                if (c[i] == t) {
                  index = i;
                  break;
                }
              }
            }

            handler.call(_this, e, index);
          }
          t = t.parentNode;
        }
      };

      this._events.push([action, $el, handlerWrap]);

      Array.prototype.forEach.call($el, function (el) {

        el.addEventListener(action, handlerWrap);
      });
    }

    /*
    @method detach
    @type Function
    @desc Detachs the view from the DOM
    */

  }, {
    key: 'detach',
    value: function detach() {
      var _this6 = this;

      //console.log("DEBUG: Detaching: Container", this.$container)
      //console.log("DEBUG: Detaching: El", this.$el)

      if (this.detached) {
        console.error('Cannot detach view as it has already been detached');
        return;
      }

      /*
      TODO:
      This is a weird error; if you put a return here, then it will not detach, but the error makes it sound like there is no DOM node to detach.
      */
      if (!this.$container) {

        console.error('DEBUG: Detach Error: this.$container is not defined');
        //return
      }

      Array.prototype.forEach.call(this.$container, function (container) {

        /*
        TODO: not happy with this
        */
        var identifier = _this6.el.tagName.toLowerCase();
        if (_this6.el.id) {
          identifier = '#' + _this6.el.id;
        } else if (_this6.el.className) {
          identifier = '.' + _this6.el.className.replace(' ', ' .');
        }

        var els = container.querySelectorAll(identifier);

        Array.prototype.forEach.call(els, function (el) {

          container.removeChild(el);
        });
      });

      this.detached = true;
      this.emit('detach');

      /*Array.prototype.forEach.call(this.$el, function(el) {
         container.removeChild
         // I've always thought this is a funny way to remove Nodes from the DOM :O
        console.log("el", el)
         console.log("parent", el.parentNode)
         //TODO: Fix the angryness from multiple copies of same ID - yes the developer *shouldnt* do that, but this should still communicate that instead of just freaking out
         el.parentNode.removeChild(el)
       })*/
    }

    /*
    @method detach
    @type Function
    @desc Completely disposes of the view, any sub views, it's DOM, events, etc.
    */

  }, {
    key: 'dispose',
    value: function dispose() {
      var _this7 = this;

      if (!this.disposed) {

        this.unBindEvents();
        this.unBindListens();

        (0, _keys2.default)(this._views).forEach(function (key) {
          var view = _this7._views[key];
          view.dispose();
        });

        this.on('detach', function () {
          _utils2.default.dispose(_this7);
        });

        this.detach();
      }
    }
  }, {
    key: 'ensureContainer',
    value: function ensureContainer() {

      if (this.container) {

        if (this.container instanceof Node) {
          this.$container = [this.container];
        } else if (typeof this.container == 'string') {
          this.$container = this.$(this.container);
        }
      }

      if (this.renderOnInit) {
        if (!this.container || !this.$container || this.$container.length == 0) console.error('No container(s) found.', this, this.container);
      }
    }
  }, {
    key: 'ensureElement',
    value: function ensureElement() {

      // We need a wrapping tag; it's too dangerous to patch a template without one
      if (!this.tagName) this.tagName = 'div';

      this.el = document.createElement(this.tagName);

      if (this.id) this.el.id = this.id;
      if (this.class) this.el.className = this.class;
    }
  }, {
    key: 'event',
    value: function event() {
      var _this8 = this,
          _arguments = arguments;

      if (!this.attached) {
        this.on('addedToDOM', function () {

          _this8._event.apply(_this8, _arguments);
        });
      } else {
        this._event.apply(this, arguments);
      }
    }
  }, {
    key: '_event',
    value: function _event(action) {
      var _this9 = this;

      var handler = arguments[arguments.length - 1],
          origHandler = arguments[arguments.length - 1],
          selector,
          _this = this;

      switch (arguments.length) {

        case 2:

          selector = this.el;

          break;

        case 3:

          selector = arguments[1];

          break;

        default:

      }

      if (typeof selector == 'string') selector = this.$(selector);

      if ((typeof selector === 'undefined' ? 'undefined' : (0, _typeof3.default)(selector)) == 'object' && selector.$ref) {
        selector = selector.$ref;
      }

      switch (action) {

        case 'enter':

          action = 'keydown';

          handler = function (e) {

            if (e.keyCode == 13) {
              e.preventDefault();
              origHandler.call(_this, e);
            }
          };

          break;

        default:

      }

      this._events.push([action, selector, handler]);

      if (this.attached) {
        this.bindEvent(action, selector, handler);
      } else {
        this.on('addedToDOM', function () {
          _this9.bindEvent(action, selector, handler);
        });
      }
    }
  }, {
    key: 'getTagName',
    value: function getTagName(template) {

      var el = document.createElement('div');
      el.innerHTML = template;

      return el.firstElementChild.tagName.toLowerCase();
    }

    /*
    @method getTemplate
    @type Function
    @returns String
    @desc Gets the template for the view
     @notes This function can do whatever the developer desires. Mixins, such as Handlebars Mixin, will take overwrite this. The developer should feel comfortable overwriting this.
    */

  }, {
    key: 'getTemplate',
    value: function getTemplate() {

      return this.template;
    }
  }, {
    key: 'getIDOMData',
    value: function getIDOMData() {

      var pkg = {};

      // Property naming ensues
      if (this.models || this.collections) {

        if (this.models) {
          for (var j in this.models) {
            pkg[j] = this.models[j].attr;
          }
        }

        if (this.collections) {
          for (var k in this.collections) {
            pkg[k] = this.collections[k].getData();
          }
        }
      }

      // Classic Backbone
      else {

          if (this.model) {
            pkg = (0, _assign2.default)({}, this.model.attr);
          } else if (this.collection) {
            pkg = (0, _assign2.default)({}, { collection: this.collection.getData() });
          }
        }

      return pkg;
    }
  }, {
    key: 'listen',
    value: function listen() {

      var ev = arguments[0],
          handler = arguments[1];

      switch (arguments.length) {

        case 2:

          this.on(ev, handler.bind(this));

          break;

        default:

      }

      this._listeners.push(ev, handler);
    }
  }, {
    key: 'partial',
    value: function partial(name, html) {
      if (html) {
        this._partials[name] = new _starplate.Template(html);
      }

      return this._partials[name];
    }
  }, {
    key: 'rebindEvents',
    value: function rebindEvents() {

      this.unBindEvents();
      this.bindEvents();
    }
  }, {
    key: 'refreshIDOM',
    value: function refreshIDOM() {
      var pkg = this.getIDOMData();

      this.idom.update((0, _assign2.default)({}, pkg));
    }

    /*
    @method render
    @type Function
    @return this
    @desc Renders the view
    */

  }, {
    key: 'render',
    value: function render() {

      /*
      TODO: Debug incremental dom and see if it is firing more times than
      necessary
      */
      //console.log('render called', this.attached, this.id)
      /*
      TODO: really both should exist, but gotta figure out how to get container from existing idom passed in
      */
      if (!this.container && !this.idom) {
        console.error('Container type not valid.', this.uid);
        return this;
      }

      /*
      Remember with Backbone you would call .render() to update the template?
      If the template has been attached, then update the template with Incremental DOM
      */
      if (this.attached) {
        this.refreshIDOM();
        //console.log('DEBUG: am i already attached?', this.constructor.name)
        return this;
      }

      /*
      TODO: What is going on that is re-defining el? Is it a race condition with
      an update the container, which triggers multiple updates within milliseconds?
       If this.el is attempted to be re-assigned, an error will be thrown about not
      re-assigning a read-only property.
      */
      if (this.el) {
        //console.log('DEBUG: el is already assigned on', this.constructor.name)
        return;
      } else {
        // Ideally this gets called in constructor, but see above
        this.ensureElement();
      }

      //var Container = stardux.Container
      this.idom = (0, _stardux.createContainer)(this.el, {}, this.reducer.bind(this));

      this.el.innerHTML = this.getTemplate();

      this.refreshIDOM();

      this.emit('render');

      return this;
    }

    /*
    @method setAttributes
    @type Function
    @returns Void
    @desc Assigns attributes to view
     @param attributes {Object}
    */

  }, {
    key: 'setAttributes',
    value: function setAttributes() {
      var _this10 = this;

      this.attributes = {};

      var el = document.createElement('div');
      el.innerHTML = this.getTemplate();

      if (el.firstChild.id) {

        this.id = el.firstChild.id;
      }

      if (el.firstChild.className) {

        this.className = el.firstChild.className;
      }

      var ignore = ['class', 'id'];

      (0, _from2.default)(el.firstChild.attributes).forEach(function (item) {

        // If the attribute is not on the ignore list
        if (ignore.indexOf(item.name) == -1) {
          _this10.attributes[item.name] = item.value;
        }
      });
    }
  }, {
    key: 'setElement',
    value: function setElement() {

      if (this.id) {
        var id = '#' + this.id;

        if (!this.el) this.el = id;
        this.$el = this.$(id);
      } else if (this.className) {

        var splitClassName = this.className.split(' ');
        var className = '';

        for (var i = 0, l = splitClassName.length; i < l; i++) {

          className += '.' + splitClassName[i];
        }

        if (!this.el) this.el = className;
        this.$el = this.$(className);
      }

      // TODO: only query within container
      else {
          var tagName = this.tagName;

          if (!this.el) this.el = tagName;
          this.$el = this.$(tagName);
        }
    }
  }, {
    key: 'setProperties',
    value: function setProperties() {
      var _this11 = this;

      var allowedOptions = ['container', 'el', 'template'];

      var options = (0, _assign2.default)(this.options);

      (0, _keys2.default)(options).forEach(function (key) {

        // If the property is not on the ignore list
        if (allowedOptions.indexOf(key) > -1) {

          _this11[key] = options[key];
          delete _this11.options[key];
        }
      });
    }
  }, {
    key: 'state',
    value: function state(action) {
      this.idom.update({ current: action });
    }
  }, {
    key: 'unBindEvent',
    value: function unBindEvent(removeAction, removeSelector) {
      var $removeSelector = document.querySelectorAll(removeSelector);

      this._events.forEach(function (item) {

        var action = item[0],
            $selector = item[1],
            listener = item[2];

        if (action == removeAction && $selector == $removeSelector) {
          Array.prototype.forEach.call($selector, function (selector) {

            selector.removeEventListener(action, listener, false);
          });
        }
      });
    }
  }, {
    key: 'unBindEvents',
    value: function unBindEvents() {

      this._events.forEach(function (item) {

        var action = item[0],
            $selector = item[1],
            // TODO: scope this locally
        listener = item[2];

        Array.prototype.forEach.call($selector, function (selector) {

          selector.removeEventListener(action, listener, false);
        });
      });

      //this._events = []
    }
  }, {
    key: 'unBindListens',
    value: function unBindListens() {
      var _this12 = this;

      this._listeners.forEach(function (item) {

        var ev = item[0],
            handler = item[1];

        _this12.off(ev, handler);
      });
    }

    /*
    Keep track of sub-views
    */

  }, {
    key: 'view',
    value: function view(name, _view) {

      if (arguments.length == 1) {
        return this._views[name];
      } else {
        this._views[name] = _view;
      }
    }
  }]);
  return View;
}();

(0, _assign2.default)(View.prototype, { mixin: _mixin2.default });

/* Developer Notes
The following properties & methods are assigned on the prototype to allow for easier overriding.
*/

/*
@property $
@type Object
@default native
@desc $ query engine
*/
//DragonBaseView.prototype.$ = document.querySelectorAll.bind(document)
View.prototype.$ = function (selector) {

  var doc = null;

  if ((typeof global === 'undefined' ? 'undefined' : (0, _typeof3.default)(global)) == 'object' && global.document) doc = global.document;
  if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && window.document) doc = window.document;

  return doc.querySelectorAll.call(doc, selector);
};

/**
 * Direct Options. Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
 *
 * @private
 * @const
 * @type {Array}
 */
View.prototype.directOptions = ['attachOnInit', 'attachPlacement', 'bindDataOnInit', 'class', // why did CSS use this?
'collection', 'collections', 'component', 'container', 'events', 'id', 'listen', 'mediator', 'model', 'models', 'reducer', 'renderOnInit', 'tagName', 'template', 'View'];

exports.default = View;
//# sourceMappingURL=index.js.map