/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"dragon","1":"spec"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stardux = __webpack_require__(9);

	var _events = __webpack_require__(50);

	var _events2 = _interopRequireDefault(_events);

	var _utils = __webpack_require__(51);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	@class DragonBaseView
	*/

	var DragonBaseView = (function () {
	  function DragonBaseView() {
	    var _this2 = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, DragonBaseView);

	    this.uid = _utils2.default.uniqueId(this);

	    /*
	    Defaults
	    */
	    this.attached = false;

	    /*
	    @property attachOnInit
	    @type Boolean
	    @default true
	    @desc Whether to attach the view on initialization
	    */
	    this.attachOnInit = true;

	    /*
	    @property attachPlacement
	    @type String
	    @default 'append'
	    @options 'append', 'prepend'
	    @desc Determines where the view is attached into the container
	    */
	    this.attachPlacement = 'after';

	    /*
	    Direct Options
	    Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
	    */
	    this.directOptions = ['attachOnInit', 'attachPlacement', 'collection',
	    //'container',
	    'events', 'listen', 'model', 'renderOnInit', 'template'];

	    this.disposed = false;

	    /*
	    @property template
	    @type ????
	    @default null
	    @desc Template for the view
	    */
	    this.template = null;

	    this.options = {};

	    Object.keys(options).forEach(function (option) {

	      if (_this2.directOptions.indexOf(option) > -1) {

	        _this2[option] = options[option];
	      } else {

	        _this2.options[option] = options[option];
	      }
	    });

	    this._events = [];
	    this._listeners = [];

	    //this.setProperties()

	    //this.ensureElement()
	    //this.ensureContainer()

	    this.el = document.createElement('div');

	    if (typeof this.options.container == 'string') {
	      this.container = (0, _stardux.createContainer)(this.el);
	    } else if (this.options.container instanceof _stardux.createContainer) {
	      this.container = this.options.container;
	    }

	    this.render();
	  }

	  /*
	  @method attach
	  @type Function
	  @return this
	  @desc Attaches the view to the DOM
	  */

	  _createClass(DragonBaseView, [{
	    key: 'attach',
	    value: function attach() {
	      var _this3 = this;

	      try {

	        /*
	        Can't use .forEach() on NodeLists
	        Tempting to use NodeList.prototype.forEach = Array.prototype.forEach but that's a no no
	        See for basic info: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
	        See this guy (which I ignore) for a super long list of reasons: http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
	        */

	        Array.prototype.forEach.call(this.$container, function ($container) {

	          var placement;

	          switch (_this3.attachPlacement) {

	            // Attach before all other children in container
	            case 'first':
	              $container['prependChild'](_this3._vel);break;

	            // Attach normally, after all children in container
	            default:
	              $container['appendChild'](_this3._vel);

	          }
	        });
	      } catch (e) {

	        console.error(e);
	      }

	      if (!this.$el) {
	        this.setElement();
	      }

	      this.attached = true;

	      this.trigger('addedToDOM');

	      return this;
	    }
	  }, {
	    key: 'bindEvent',
	    value: function bindEvent() {

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

	    /*bindListens() {
	       this.listen.forEach( (item) => {
	         var eventName = item[0],
	            handler   = item[1]
	         this.on(eventName, handler)
	       })
	     }*/

	    /*
	    @method detach
	    @type Function
	    @desc Detachs the view from the DOM
	    */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      var _this4 = this;

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

	        var els = container.querySelectorAll(_this4.el);

	        Array.prototype.forEach.call(els, function (el) {

	          container.removeChild(el);
	        });
	      });

	      this.detached = true;
	      this.trigger('detach');

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
	    @desc Completely disposes of the view, it's DOM, events, etc.
	    */

	  }, {
	    key: 'dispose',
	    value: function dispose() {

	      if (!this.disposed) {

	        this.unBindEvents();
	        this.unBindListens();
	        this.detach();

	        _utils2.default.dispose(this);
	      }
	    }
	  }, {
	    key: 'ensureContainer',
	    value: function ensureContainer() {

	      if (this.container) {

	        this.$container = this.$(this.container);

	        if (this.$container.length == 0) console.error('No container(s) found.');
	      }
	    }
	  }, {
	    key: 'ensureElement',
	    value: function ensureElement() {

	      if (this.el) {

	        var _$el = this.$(this.el);

	        // Binding to an existing DOM
	        if (_$el.length > 0) {

	          this.$el = _$el;
	          this.attached = true;

	          return;
	        } else {
	          console.error('Target element not found.');
	          return;
	        }
	      }

	      // Attach new DOM
	      if (!this.el && !this.container) {
	        console.error('A view must have a container.');
	      }

	      if (!this.el && !this.template) {
	        console.error('A view must have a template.');
	      }
	    }
	  }, {
	    key: 'event',
	    value: function event() {
	      var _this5 = this,
	          _arguments = arguments;

	      if (!this.attached) {
	        this.on('addedToDOM', function () {

	          _this5._event.apply(_this5, _arguments);
	        });
	      } else {
	        this._event.apply(this, arguments);
	      }
	    }
	  }, {
	    key: '_event',
	    value: function _event(action) {
	      var _this6 = this;

	      var handler = arguments[arguments.length - 1],
	          origHandler = arguments[arguments.length - 1],
	          selector,
	          _this = this;

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

	      switch (arguments.length) {

	        case 2:

	          selector = this.el;

	          break;

	        case 3:

	          selector = arguments[1];

	          break;

	        default:

	      }

	      selector = this.$(selector);

	      this._events.push([action, selector, handler]);

	      if (this.attached) {
	        this.bindEvent(action, selector, handler);
	      } else {
	        this.on('addedToDOM', function () {
	          _this6.bindEvent(action, selector, handler);
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

	    /*
	    @method render
	    @type Function
	    @return this
	    @desc Renders the view
	    */

	  }, {
	    key: 'render',
	    value: function render() {

	      if (!this.container) {
	        console.error('Container type not valid.');
	        return this;
	      }

	      this.el.innerHTML = this.template;
	      //this.container.render()

	      console.log('View', this);
	      this.trigger('render');

	      document.querySelector(this.options.container).appendChild(this.el);
	      this.trigger('addedToDOM');

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
	      var _this7 = this;

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

	      Array.from(el.firstChild.attributes).forEach(function (item) {

	        // If the attribute is not on the ignore list
	        if (ignore.indexOf(item.name) == -1) {
	          _this7.attributes[item.name] = item.value;
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
	      var _this8 = this;

	      var allowedOptions = ['container', 'el', 'template'];

	      var options = Object.assign(this.options);

	      Object.keys(options).forEach(function (key) {

	        // If the property is not on the ignore list
	        if (allowedOptions.indexOf(key) > -1) {

	          _this8[key] = options[key];
	          delete _this8.options[key];
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

	      this._events = [];
	    }
	  }, {
	    key: 'unBindListens',
	    value: function unBindListens() {
	      var _this9 = this;

	      this._listeners.forEach(function (item) {

	        var ev = item[0],
	            handler = item[1];

	        _this9.off(ev, handler);
	      });
	    }
	  }]);

	  return DragonBaseView;
	})();

	Object.assign(DragonBaseView.prototype, _events2.default);

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
	DragonBaseView.prototype.$ = function (selector) {

	  var doc = null;

	  if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.document) doc = global.document;
	  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.document) doc = window.document;

	  return doc.querySelectorAll.call(doc, selector);
	};

	exports.default = DragonBaseView;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Module dependencies.
	 *
	 * @ignore
	 */

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = exports.UPDATE = undefined;
	exports.createContainer = createContainer;
	exports.makeContainer = makeContainer;
	exports.restoreContainerFromJSON = restoreContainerFromJSON;
	exports.composeContainers = composeContainers;
	exports.getContainerData = getContainerData;
	exports.restoreOrphanedTree = restoreOrphanedTree;
	exports.realignContainerTree = realignContainerTree;
	exports.saveContainer = saveContainer;
	exports.fetchContainer = fetchContainer;
	exports.createContainerUid = createContainerUid;
	exports.getAllContainers = getAllContainers;
	exports.forEachContainer = forEachContainer;
	exports.traverseContainer = traverseContainer;
	exports.removeContainer = removeContainer;
	exports.clearContainers = clearContainers;
	exports.replaceDOMElement = replaceDOMElement;

	var _redux = __webpack_require__(10);

	var _starplate = __webpack_require__(20);

	var _esprima = __webpack_require__(47);

	var _esprima2 = _interopRequireDefault(_esprima);

	var _extend = __webpack_require__(48);

	var _extend2 = _interopRequireDefault(_extend);

	var _domify = __webpack_require__(49);

	var _domify2 = _interopRequireDefault(_domify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/**
	 * Container symbols.
	 *
	 * @private
	 */

	var $domElement = Symbol('Element');
	var $middleware = Symbol('middleware');
	var $children = Symbol('children');
	var $pipes = Symbol('pipes');
	var $model = Symbol('model');
	var $store = Symbol('store');
	var $uid = Symbol('uid');

	/**
	 * Private stardux data attached to
	 * traversed DOM elements.
	 *
	 * @private
	 * @const
	 * @type {String}
	 */

	var STARDUX_PRIVATE_ATTR = '__starduxData';

	/**
	 * Reducer action type symbols.
	 *
	 * @private
	 * @const
	 * @type {Symbol)
	 */

	var $UPDATE_ACTION = Symbol('UPDATE');

	/**
	 * Known container map by ID
	 *
	 * @private
	 * @type {Map}
	 */

	var CONTAINERS = new Map();

	/**
	 * Clones an object.
	 *
	 * @private
	 * @param {Object} object
	 * @return {Object}
	 */

	function clone(object) {
	  return (0, _extend2.default)(true, {}, object);
	}

	/**
	 * Detects if input is "like" an array.
	 *
	 * @private
	 * @param {Mixed} a
	 * @return {Boolean}
	 */

	function isArrayLike(a) {
	  if ('object' != (typeof a === 'undefined' ? 'undefined' : _typeof(a))) return false;else if (null == a) return false;else return Boolean(Array.isArray(a) || null != a.length || a[0]);
	}

	/**
	 * Make stardux data object on a
	 * node if not already there.
	 *
	 * @private
	 * @param {Object} node
	 * @param {Object} [data = {}]
	 * @return {Object}
	 */

	function mkdux(node) {
	  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (node instanceof Container) node = node.domElement;
	  node[STARDUX_PRIVATE_ATTR] = node[STARDUX_PRIVATE_ATTR] || data;
	  return node[STARDUX_PRIVATE_ATTR];
	}

	/**
	 * Remove stardux data object.
	 *
	 * @private
	 * @param {Object} node
	 */

	function rmdux(node) {
	  if (null == node) return;
	  if (node instanceof Container) node = node.domElement;
	  delete node[STARDUX_PRIVATE_ATTR];
	}

	/**
	 * Returns an array of known tokens
	 * in a javascript string.
	 *
	 * @private
	 * @param {String} string
	 * @return {Array}
	 */

	function getTokens(string) {
	  var tokens = null;
	  try {
	    tokens = _esprima2.default.tokenize('`' + string + '`');
	  } catch (e) {
	    tokens = [];
	  }
	  return tokens;
	}

	/**
	 * Returns an object of identifiers with
	 * empty string or NO-OP function
	 * values.
	 *
	 * @private
	 * @param {Array} tokens
	 * @return {Object}
	 */

	function getIdentifiersFromTokens(tokens) {
	  var identifiers = {};

	  /**
	   * Predicate to determine if token is an identifier.
	   *
	   * @private
	   * @param {Object} token
	   * @return {Boolean}
	   */

	  var isIdentifier = function isIdentifier(token) {
	    return 'Identifier' == token.type;
	  };

	  /**
	   * Mark token as a function identifier.
	   *
	   * @private
	   * @param {Object} token
	   * @param {Number} index
	   * @return {Object} token
	   */

	  var markFunction = function markFunction(token, index) {
	    var next = tokens[index + 1] || null;
	    token.isFunction = 'Identifier' == token.type && 'object' == (typeof next === 'undefined' ? 'undefined' : _typeof(next)) && next && 'Punctuator' == next.type && '(' == next.value ? true : false;
	    return token;
	  };

	  /**
	   * Mark token as a object identifier.
	   *
	   * @private
	   * @param {Object} token
	   * @param {Number} index
	   * @return {Object} token
	   */

	  var markObject = function markObject(token, index) {
	    var next = tokens[index + 1] || null;
	    token.isObject = 'Identifier' == token.type && 'object' == (typeof next === 'undefined' ? 'undefined' : _typeof(next)) && next && 'Punctuator' == next.type && '.' == next.value ? true : false;
	    return token;
	  };

	  /**
	   * Assign token value to identifierss map.
	   *
	   * @private
	   * @param {Object} map
	   * @param {Object} token
	   * @return {Object} map
	   */

	  var assign = function assign(map, token) {
	    var value = token.value;
	    if (token.isFunction) map[value] = function (_) {
	      return '';
	    };else if (token.isObject) map[value] = {};else map[value] = '';
	    return map;
	  };

	  // resolve identifierss and return map
	  return tokens.map(function (t, i) {
	    return markFunction(t, i);
	  }).map(function (t, i) {
	    return markObject(t, i);
	  }).filter(function (t) {
	    return isIdentifier(t);
	  }).reduce(function (map, t) {
	    return assign(map, t);
	  }, identifiers);
	}

	/**
	 * Ensures a DOM string from a given input.
	 *
	 * @private
	 * @param {String} html
	 * @return {String}
	 */

	function ensureDOMString() {
	  var html = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	  html = 'string' == typeof html ? html : String(html || '');
	  return html.trim();
	}

	/**
	 * Ensure DOM element.
	 *
	 * @private
	 * @param {Mixed} input
	 * @return {Element}
	 */

	function ensureDOMElement(input) {
	  var domElement = null;
	  var tmp = null;
	  if (input instanceof Element) {
	    return input;
	  } else if ('string' == typeof input) {
	    tmp = document.createElement('div');
	    tmp.innerHTML = input;
	    domElement = tmp.innerHTML.length ? tmp.children[0] : new _starplate.Template(input);
	  } else {
	    domElement = document.createElement('div');
	  }
	  return domElement;
	}

	/**
	 * Returns a template tring from a given
	 * DOM Element. If the DOM Element given is a
	 * string then it is simply returned.
	 *
	 * @public
	 * @param {Element|String} domElement
	 * @return {String}
	 */

	function getTemplateFromDomElement(domElement) {
	  var data = {};
	  var src = null;

	  if (domElement && domElement[STARDUX_PRIVATE_ATTR]) data = mkdux(domElement);

	  if ('string' == typeof domElement) src = domElement;else if (data.src) src = data.src;else if (domElement.children && 0 == domElement.children.length) src = ensureDOMString(domElement.textContent);else if (domElement.firstChild instanceof Text) src = ensureDOMString(domElement.innerHTML);else if (domElement instanceof Text) src = ensureDOMString(domElement.textContent);else if (domElement) src = domElement.innerHTML || domElement.textContent;

	  return src;
	}

	/**
	 * Ensures container state identifiers (tokens) derived from
	 * the DOM element source are defined on the state if not
	 * already. This is useful to prevent reference errors from
	 * being thrown when ES6 templates are evaulated in starplate's
	 * VM.
	 *
	 * @private
	 * @param {Container} container
	 * @return {Object} identifiers
	 */

	function ensureContainerStateIdentifiers(container) {
	  var domElement = container[$domElement];
	  var template = getTemplateFromDomElement(domElement);
	  var tokens = getTokens(template);
	  var identifiers = getIdentifiersFromTokens(tokens);
	  var update = {};
	  var state = container.state;
	  if (identifiers) {
	    for (var key in identifiers) {
	      if (undefined === state[key]) update[key] = identifiers[key];
	    }

	    container.define(update);
	  }
	  return identifiers || null;
	}

	/**
	 * Creates a root reducer for a Container
	 * instance.
	 *
	 * @private
	 * @param {Container} container
	 * @return {Function}
	 */

	function createRootReducer(container) {
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? { data: {} } : arguments[1];

	    var identifiers = ensureContainerStateIdentifiers(container);
	    var domElement = container[$domElement];
	    var template = getTemplateFromDomElement(domElement);
	    var middleware = container[$middleware].entries();
	    var isBody = domElement == document.body;

	    action.data = action.data || {};

	    /**
	     * Loops over each middleware function
	     * providing state and action values
	     * given to use from redux.
	     *
	     * @private
	     */

	    void (function next() {
	      var step = middleware.next();
	      var done = step.done;
	      var reducer = step.value ? step.value[0] : null;
	      if (done) return;else if (null == reducer) next();else if (false === reducer(state, action)) return;else next();
	    })();

	    switch (action.type) {
	      case $UPDATE_ACTION:
	        container.define(action.data);
	        if (!isBody && identifiers) {
	          var parser = new _starplate.Parser();
	          var partial = new _starplate.Template(template);
	          var src = partial.render(container.state, container);
	          var patch = parser.createPatch(src);
	          patch(domElement);
	        }
	        break;
	    }

	    return (0, _extend2.default)(true, container.state, state, action.data);
	  };
	}

	/**
	 * Creates a pipe reducer for a Container
	 * instance.
	 *
	 * @private
	 * @param {Container} container
	 * @return {Function}
	 */

	function createPipeReducer(container) {
	  return function (_) {
	    var action = arguments.length <= 1 || arguments[1] === undefined ? { data: {} } : arguments[1];

	    var state = container.state;
	    var pipes = container[$pipes].entries();
	    reduce();
	    return container.state;

	    /**
	     * Loops over each pipe function
	     * providing state and action values
	     * given to use from redux.
	     *
	     * @private
	     */

	    function reduce() {
	      var step = pipes.next();
	      var done = step.done;
	      var pipe = step.value ? step.value[1] : null;
	      if (done) return;else if (false === pipe(state, action)) return;else return reduce();
	    }
	  };
	}

	/**
	 * Orphan container.
	 *
	 * @private
	 * @param {Container} container
	 * @param {Boolean} [rouge]
	 */

	function orphanContainerChildren(container) {
	  var rouge = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  container = fetchContainer(container);

	  var children = container.children;

	  if (null == container) throw new TypeError("orphanContainerChildren() Expecting a container ");

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var child = _step.value;

	      container.removeChild(child);
	      if (true === rouge) {
	        orphanContainerChildren(child, true);
	        CONTAINERS.delete(child.id);
	      }
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

	/**
	 * The action type dispatched by the update() method.
	 *
	 * @example <caption>Handle update actions in middleware and reducers.</caption>
	 *
	 *   // Use this value to determine what type of
	 *   // action was dispatched in a reducer or
	 *   // middleware function
	 *   (state, action) => {
	 *     if (UPDATE == action.type) {
	 *        // reducer/middleware logic here
	 *     }
	 *   }
	 *
	 * @public
	 * @const
	 * @type {Symbol}
	 */

	var UPDATE = exports.UPDATE = $UPDATE_ACTION;

	/**
	 * Create a new Container instance with optional
	 * initial state and n reducers.
	 *
	 * @example <caption>Create an anonymouse container.</caption>
	 *   const container = createContainer()
	 *
	 * @example <caption>Create a container for a DOM Element.</caption>
	 *   const container = createContainer(domElement)
	 *
	 * @example <caption>Create a container for a DOM Element with initial state.</caption>
	 *   const container = createContainer(domElement, {value: 0})
	 *
	 * @example <caption>Create a container for a DOM Element with initial state and reducers.</caption>
	 *   const container = createContainer(domElement, {value: 0}, (state = {}, action) => {
	 *     if (UPATE == action.type) {
	 *        return {
	 *          value: state.action + action.data.value
	 *        }
	 *     }
	 *   })
	 *
	 * @public
	 * @param {Element} domElement
	 * @param {?(Object)} [initialState] - Initial state object
	 * @param {...Function} [reducers]
	 * @return {Container}
	 */

	function createContainer(domElement) {
	  var initialState = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  for (var _len = arguments.length, reducers = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    reducers[_key - 2] = arguments[_key];
	  }

	  var container = fetchContainer(domElement) || new (Function.prototype.bind.apply(Container, [null].concat([domElement], reducers)))();
	  return container.update(initialState);
	}

	/**
	 * Creates a or returns a new Container instance
	 * from a given DOM element.
	 *
	 * If a DOM element is already associated with
	 * a container then the container is just
	 * returned, otherwise a new one is created.
	 *
	 * @example <caption>Make a container for a DOM Element.</caption>
	 *   const container = makeContainer(document.body)
	 *
	 * @public
	 * @param {Element} domElement
	 * @return {Container}
	 */

	function makeContainer(domElement) {
	  var container = null;
	  if (false == domElement instanceof Element) throw new TypeError("makeContainer() expects a DOM element.");
	  container = fetchContainer(domElement) || new Container(domElement);
	  return container;
	}

	/**
	 * Create or restore a Container instance
	 * from a JSON object with an optional state
	 * object a reducers.
	 *
	 * Containers are created if they do not already
	 * exist internally.
	 *
	 * @example <caption>Restore or create a container from JSON.</caption>
	 *   const container = restoreContainerFromJSON(json)
	 *
	 * @example <caption>Restore or create a container from JSON with initial state.</caption>
	 *   const container = restoreContainerFromJSON(json, {value: 0})
	 *
	 * @example <caption>Restore or create a container from JSON with initial state and reducers.</caption>
	 *   const container = restoreContainerFromJSON(json, {value: 0}, ...reducers)
	 *
	 * @public
	 * @param {Object} json
	 * @param {?(Object)} [initialState] - Initial state object
	 * @param {...Function} [reducers]
	 * @return {Container}
	 */

	function restoreContainerFromJSON(json) {
	  var initialState = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  var id = json.id;
	  var src = json.src;
	  var data = null;
	  var children = [];
	  var container = fetchContainer(id);
	  var domElement = null;

	  for (var _len2 = arguments.length, reducers = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    reducers[_key2 - 2] = arguments[_key2];
	  }

	  if (null == container) container = new (Function.prototype.bind.apply(Container, [null].concat([null], reducers)))();

	  container[$uid] = id;
	  domElement = container.domElement;
	  data = mkdux(domElement);

	  saveContainer(container);

	  if (src != data.src) data.src = src;

	  if (initialState) container.update(initialState);

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = json.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var child = _step2.value;

	      children.push(restoreContainerFromJSON(child, initialState));
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  realignContainerTree(container, true, true);

	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;

	  try {
	    for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      var child = _step3.value;

	      if (false == container.contains(child)) container.appendChild(child, false);
	    }
	  } catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion3 && _iterator3.return) {
	        _iterator3.return();
	      }
	    } finally {
	      if (_didIteratorError3) {
	        throw _iteratorError3;
	      }
	    }
	  }

	  return container.update();
	}

	/**
	 * Compose a container from containers or DOM elements.
	 * If a Container or Element is given as first argument then
	 * it is treated as the root and all subsequent arguments are
	 * treated as direct descendants of the root. If the second
	 * argument is an array or an "array like" object then it is
	 * treated as direct descendants of the root and all subsequent
	 * arguments are ignored. If an array or "array like" object is
	 * passed as the first argument a new root container is created
	 * and the first argument is treated as direct descendants of
	 * the newly created root container. The root container, newly
	 * created or restored is returned.
	 *
	 * @example <caption>Compose containers together with new root.</caption>
	 *   const a = createContainer()
	 *   const b = createContainer()
	 *   const composed = composeContainers([a, b])
	 *
	 * @example <caption>Compose containers together with given root.</caption>
	 *   const a = createContainer()
	 *   const b = createContainer()
	 *   const c = createContainer()
	 *   const composed = composeContainers(a, [b, c])
	 *
	 * @public
	 * @param {?(Element|Container)} root
	 * @param {?(...Element|Container|String)} containers
	 * @return {Container}
	 */

	function composeContainers(root) {
	  for (var _len3 = arguments.length, containers = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    containers[_key3 - 1] = arguments[_key3];
	  }

	  var composed = null;
	  var updateChildren = false;
	  var children = [];

	  // array of containers
	  if (isArrayLike(root)) {
	    containers = [].concat(_toConsumableArray(root)).map(createContainer);
	    root = null;
	  } else {
	    // derive containers from arguments
	    if (isArrayLike(containers[0])) containers = [].concat(_toConsumableArray(containers[0]));
	    containers = [].concat(_toConsumableArray(containers)).map(createContainer);
	  }

	  composed = createContainer(root || undefined);

	  // create composite
	  var composite = composed;
	  var _iteratorNormalCompletion4 = true;
	  var _didIteratorError4 = false;
	  var _iteratorError4 = undefined;

	  try {
	    for (var _iterator4 = containers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	      var child = _step4.value;

	      if (false == composite.contains(child)) composite = composite.pipe(child);
	    }

	    // realign root tree
	  } catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion4 && _iterator4.return) {
	        _iterator4.return();
	      }
	    } finally {
	      if (_didIteratorError4) {
	        throw _iteratorError4;
	      }
	    }
	  }

	  realignContainerTree(composed, true);

	  // allow consumer to unwind composition
	  composed.decompose = function (_) {
	    var composite = composed;
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = containers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var child = _step5.value;

	        composite = composite.unpipe(child);
	      } // remove this function
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	          _iterator5.return();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }

	    delete composed.decompose;
	    return composed;
	  };

	  return composed;
	}

	/**
	 * Returns immutable private stardux data for a given
	 * input. Input can be a container, an Element,
	 * or a string representing a container ID. If data is
	 * not found then null is returned.
	 *
	 * @example <caption>Get container data for a container.</caption>
	 *   const data = getContainerData(container)
	 *
	 * @example <caption>Get container data for a container from a given DOM element.</caption>
	 *   const data = getContainerData(container)
	 *
	 * @example <caption>Get container data for a container from a given id.</caption>
	 *   const data = getContainerData(id)
	 *
	 * @public
	 * @param {Container|Element|String} arg
	 * @return {Object}
	 */

	function getContainerData(arg) {
	  var data = null;
	  var domElement = null;
	  var container = fetchContainer(arg);

	  if (!(arg instanceof Container || arg instanceof Element || 'string' == typeof arg)) {
	    throw new TypeError("Unexpected input for getContainerData. " + "Expecting an instance of a Container or Element, " + "or a string.");
	  }

	  if (container) domElement = container.domElement;

	  if (domElement) data = domElement[STARDUX_PRIVATE_ATTR];
	  return data ? Object.freeze(data) : null;
	}

	/**
	 * Restores orphaned children containers
	 * still attached to a container. An orphan
	 * container is a container who belongs to
	 * a set of containers and it's DOM element
	 * is not attched to a DOM tree (The parent
	 * container's DOM element).
	 *
	 * @public
	 * @param {Container|Element} container
	 * @param {Boolean} [recursive]
	 */

	function restoreOrphanedTree(container) {
	  var recursive = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  if (container instanceof Element) container = fetchContainer(container);

	  if (null == container) return;

	  var domElement = container.domElement;
	  var children = container[$children];

	  var _arr = [].concat(_toConsumableArray(children));

	  for (var _i = 0; _i < _arr.length; _i++) {
	    var child = _arr[_i];
	    var childDomElement = child.domElement;

	    if (false == domElement.contains(childDomElement)) domElement.appendChild(childDomElement);

	    if (recursive) restoreOrphanedTree(child, true);
	  }
	}

	/**
	 * Realign container DOM tree by removing containers
	 * not found in container DOM tree. If recursive is set to
	 * true then realignment is applied to all subsequent child
	 * containers. If forceOrphanRestoration is set to true then
	 * orphan containers are restored.
	 *
	 * @public
	 * @param {Container} container
	 * @param {Boolean} [recursive]
	 * @param {Boolean} [forceOrphanRestoration]
	 */

	function realignContainerTree(container) {
	  var recursive = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	  var forceOrphanRestoration = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  var domElement = container.domElement;
	  var children = container[$children];

	  if (null == domElement.children) return;

	  var delta = [].concat(_toConsumableArray(children)).length - domElement.children.length;

	  if (delta > 0 || true === forceOrphanRestoration) restoreOrphanedTree(container, recursive);

	  // purge child containers existing in tree where
	  // the DOM element is not a child of the container
	  // DOM element.

	  var _arr2 = [].concat(_toConsumableArray(children));

	  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
	    var child = _arr2[_i2];
	    var childElement = child.domElement;
	    if (false == domElement.contains(childElement)) children.delete(child);
	  }

	  // traverse children

	  var _arr3 = [].concat(_toConsumableArray(domElement.children));

	  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
	    var childElement = _arr3[_i3];
	    var data = childElement[STARDUX_PRIVATE_ATTR];
	    var child = 'object' == (typeof data === 'undefined' ? 'undefined' : _typeof(data)) ? fetchContainer(data.id) : null;

	    // skip DOM elements which are not claimed
	    // by any existing containers
	    if (null == child) continue;

	    children.add(child);

	    // recurse child containers
	    if (true === recursive) realignContainerTree(child, true, forceOrphanRestoration);
	  }
	}

	/**
	 * Save a container to the known containers map. A
	 * DOM element may be passed if it has been claimed by
	 * a Container instance.
	 *
	 * @example <caption>Save a container</caption>
	 *   saveContainer(container)
	 *
	 * @example <caption>Save a container by DOM element</caption>
	 *   saveContainer(domElement)
	 *
	 * @public
	 * @param {(Container|Element)} container
	 * @return {Boolean}
	 */

	function saveContainer(container) {
	  container = fetchContainer(container) || container;
	  if (container && container.id && !CONTAINERS.has(container.id)) {
	    CONTAINERS.set(container.id, container);
	    return true;
	  }
	  return false;
	}

	/**
	 * Fetch a saved container by container ID,
	 * DOM element, or by a container instance.
	 *
	 * @example <caption>Fetch container by id.</caption>
	 *   const container = fetchContainer(id)
	 *
	 * @example <caption>Fetch container by DOM element.</caption>
	 *   const container = fetchContainer(domElement)
	 *
	 * @example <caption>Fetch container by object with id.</caption>
	 *   const container = fetchContainer({id: id})
	 *
	 * @public
	 * @param {(String|Element|Object)} arg
	 * @param {String} [arg.id] - Container ID
	 * @return {class Container}
	 */

	function fetchContainer(arg) {
	  var id = arg && arg.id ? arg.id : arg && arg[STARDUX_PRIVATE_ATTR] ? arg[STARDUX_PRIVATE_ATTR].id : arg;
	  return id ? CONTAINERS.get(id) : null;
	}

	/**
	 * Generates a unique hex ID for Container instances.
	 *
	 * @example <caption>Create a unique container ID</caption>
	 *   const id = createContainerUid()
	 *
	 * @public
	 * @return {String}
	 */

	function createContainerUid() {
	  return Math.random().toString('16').slice(1);
	}

	/**
	 * Returns an interator for all containers.
	 *
	 * @example <caption>Get an iterator for all containers.</caption>
	 *   const it = getAllContainers()
	 *   for (let pair of [ ...it ])
	 *     console.log(pair)
	 *
	 * @public
	 * @return {Array<MapIterator>}
	 */

	function getAllContainers() {
	  return CONTAINERS.entries();
	}

	/**
	 * Execute a function for each container.
	 *
	 * @example
	 *   forEachContainer(container => {
	 *     console.log(container)
	 *   })
	 *
	 * @public
	 * @param {Function} fn
	 * @param {Object} [scope]
	 */

	function forEachContainer(fn) {
	  var scope = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  var containers = getAllContainers();
	  fn = 'function' == typeof fn ? fn : function (_) {
	    return void 0;
	  };
	  var _iteratorNormalCompletion6 = true;
	  var _didIteratorError6 = false;
	  var _iteratorError6 = undefined;

	  try {
	    for (var _iterator6 = containers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	      var kv = _step6.value;

	      fn.call(scope || global, kv[1], containers);
	    }
	  } catch (err) {
	    _didIteratorError6 = true;
	    _iteratorError6 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion6 && _iterator6.return) {
	        _iterator6.return();
	      }
	    } finally {
	      if (_didIteratorError6) {
	        throw _iteratorError6;
	      }
	    }
	  }
	}

	/**
	 * Traverse a container's tree recursively.
	 *
	 * @example
	 *   traverseContainer(container, child => {
	 *     console.log(child)
	 *   })
	 *
	 * @public
	 * @param {Container} container
	 * @param {Function} fn
	 * @param {Object} [scope]
	 */

	function traverseContainer(container, fn, scope) {
	  var children = container.children;

	  var _arr4 = [].concat(_toConsumableArray(children));

	  for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
	    var child = _arr4[_i4];
	    fn.call(scope || global, child, children);
	    traverseContainer(child, fn, scope);
	  }
	}

	/**
	 * Removes a container from the internal tree.
	 * The container is also removed from its parent
	 * if it is attched to one. A string ID, DOM element,
	 * or Container may be used as an argument.
	 *
	 * @example <caption>Remove container by id.</caption>
	 *   removeContainer(id)
	 *
	 * @example <caption>Remove container by DOM element.</caption>
	 *   removeContainer(domElement)
	 *
	 * @example <caption>Remove container by object with id.</caption>
	 *   removeContainer({id: id})
	 *
	 * @public
	 * @param {(String|Container|Element)} arg
	 * @param {Boolean} [recursive]
	 * @return {Boolean}
	 */

	function removeContainer(arg) {
	  var recursive = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  var container = fetchContainer(arg);
	  var id = container ? container.id : null;
	  if (id && CONTAINERS.has(id)) {
	    if (recursive) {
	      var _iteratorNormalCompletion7 = true;
	      var _didIteratorError7 = false;
	      var _iteratorError7 = undefined;

	      try {
	        for (var _iterator7 = container.children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	          var child = _step7.value;

	          removeContainer(child, true);
	        }
	      } catch (err) {
	        _didIteratorError7 = true;
	        _iteratorError7 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion7 && _iterator7.return) {
	            _iterator7.return();
	          }
	        } finally {
	          if (_didIteratorError7) {
	            throw _iteratorError7;
	          }
	        }
	      }
	    }

	    // remove from parent
	    if (container.parent) container.parent.removeChild(container, false, true);

	    // remove stardux data
	    rmdux(container.domElement);

	    // remove from tree
	    CONTAINERS.delete(id);
	    return true;
	  }
	  return false;
	}

	/**
	 * Clears all saved containers. This will call
	 * removeContainer for every saved container.
	 *
	 * @public
	 * @return {undefined}
	 */

	function clearContainers() {
	  // remove stardux data for each container
	  forEachContainer(function (container) {
	    return removeContainer(container);
	  });

	  // sanity clear containers
	  CONTAINERS.clear();
	}

	/**
	 * Replace container element with another. This will remove all
	 * children containers and realign the container tree.
	 *
	 * @public
	 * @param {Container} container
	 * @param {Element} domElement
	 * @return {Container}
	 */

	function replaceDOMElement(container, domElement) {
	  var existingData = mkdux(domElement);
	  var data = mkdux(container.domElement);
	  if (domElement && domElement != container.domElement) {
	    (function () {
	      var storeChildSource = function storeChildSource(node) {
	        var data = mkdux(node);
	        sources.push(data.src || node.innerHTML);

	        var _arr6 = [].concat(_toConsumableArray(node.children));

	        for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
	          var child = _arr6[_i6];
	          storeChildSource(child);
	        }
	      };

	      var restoreChildElementSource = function restoreChildElementSource(node, stack) {
	        var parser = new _starplate.Parser();
	        var source = stack.shift();
	        var data = (0, _extend2.default)(mkdux(node), { src: source });
	        var patch = source ? parser.createPatch(source) : null;
	        if (patch) patch(node);

	        var _arr7 = [].concat(_toConsumableArray(node.children));

	        for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
	          var child = _arr7[_i7];
	          restoreChildElementSource(child, stack);
	        }
	      };

	      mkdux(domElement, data);

	      var id = container.id;
	      var sources = [];
	      var childElements = [].concat(_toConsumableArray(domElement.children));
	      var parent = container.parent;
	      var children = container.children;
	      var parentElement = parent ? parent.domElement : null;
	      var previousDomElement = container.domElement;
	      var existingContainer = fetchContainer(existingData.id);

	      if (existingContainer) {
	        throw new TypeError("replaceDOMElement() expects an unclaimed " + "DOM Element.");
	      }

	      orphanContainerChildren(id, 0 == children.length);

	      // free DOM element of dux data
	      rmdux(previousDomElement);
	      container[$domElement] = domElement;
	      container[$children].clear();

	      var _iteratorNormalCompletion8 = true;
	      var _didIteratorError8 = false;
	      var _iteratorError8 = undefined;

	      try {
	        for (var _iterator8 = childElements[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	          var childElement = _step8.value;

	          storeChildSource(childElement);
	        }
	      } catch (err) {
	        _didIteratorError8 = true;
	        _iteratorError8 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion8 && _iterator8.return) {
	            _iterator8.return();
	          }
	        } finally {
	          if (_didIteratorError8) {
	            throw _iteratorError8;
	          }
	        }
	      }

	      container.update(null, false);

	      var stack = sources.slice();

	      var _arr5 = [].concat(_toConsumableArray(domElement.children));

	      for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
	        var childElement = _arr5[_i5];
	        restoreChildElementSource(childElement, stack);
	      }container[$domElement].innerContents = domElement.innerHTML;

	      realignContainerTree(container, true, true);
	    })();
	  }
	  return container;
	}

	/**
	 * Container class.
	 *
	 * @public
	 * @class Container
	 */

	var Container = exports.Container = (function () {

	  /**
	   * Container constructor.
	   *
	   * @public
	   * @constructor
	   * @param {Element|String} domElement
	   * @param {Function} ...reducers
	   */

	  function Container() {
	    var domElement = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    _classCallCheck(this, Container);

	    // ensure DOM element instance
	    domElement = ensureDOMElement(domElement);

	    /**
	     * Container UID
	     *
	     * @private
	     * @type {String}
	     */

	    this[$uid] = createContainerUid();

	    /**
	     * Instance root DOM Element.
	     *
	     * @private
	     * @type {Element}
	     */

	    this[$domElement] = domElement;

	    /**
	     * Middleware set.
	     *
	     * @private
	     * @type {Set}
	     */

	    this[$middleware] = new Set();

	    /**
	     * Known container pipes.
	     *
	     * @private
	     * @type {Set}
	     */

	    this[$pipes] = new Map();

	    /**
	     * View model.
	     *
	     * @private
	     * @type {Object}
	     */

	    this[$model] = {};

	    /**
	     * Child containers.
	     *
	     * @private
	     * @type {Set}
	     */

	    this[$children] = new Set();

	    /**
	     * Redux store.
	     *
	     * @private
	     * @type {Object}
	     */

	    for (var _len4 = arguments.length, reducers = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	      reducers[_key4 - 1] = arguments[_key4];
	    }

	    this[$store] = (0, _redux.createStore)((0, _redux.combineReducers)([
	    // The root reducer handles container state updates
	    // and propagates them to the internal DOM element
	    // via starplate templates. The DOM tree is patched,
	    // not redrawn. Middleware consumption is also applied
	    // here. The state and action objects provided by redux
	    // may be modified.
	    createRootReducer(this)].concat(reducers, [

	    // Piped reducers are applied when composition occurs between
	    // two containers. They are achievd with the pipe() method. All
	    // dispatched actions are propagated to the piped container via
	    // this reducer. They actually don't reduce state, but simply pass
	    // it on. When an update action occurs via an update() on a container
	    // all containers it has been piped to will effectively have their
	    // update() methods called with the provided data arguments. Please
	    // note that any middleware applied to parent of a pipe chain will
	    // affect the input of the child of a pipe chain.
	    createPipeReducer(this)])));

	    // Replace DOM element with itself effectively
	    // restoring orphaned or lost stardux data.
	    replaceDOMElement(this, domElement);

	    // ensure container state identifers found in
	    // DOM element source is predefined on the internal
	    // state object.
	    ensureContainerStateIdentifiers(this);

	    // Save this container to the internal container map
	    saveContainer(this);

	    // Realign parent tree recursively if it exists and restore
	    // orphaned child containers. This will cause all
	    // child containers to realign themselves recursively.
	    if (this.parent) realignContainerTree(this.parent, true, true);
	    // Realign container and all orphaned child containers if
	    // found in the tree. This will cause child containers to
	    // realign themselves.
	    else realignContainerTree(this, true, true);
	  }

	  /**
	   * Copy of the internal state object.
	   *
	   * @public
	   * @type {Object}
	   */

	  _createClass(Container, [{
	    key: 'define',

	    /**
	     * Extend view model.
	     *
	     * @example <caption>Extend current state model.</caption>
	     *   container.define({value: 0})
	     *
	     * @public
	     * @param {Object} model
	     * @return {Container}
	     */

	    value: function define(model) {
	      if ('object' == (typeof model === 'undefined' ? 'undefined' : _typeof(model))) (0, _extend2.default)(true, this[$model], model);
	      return this;
	    }

	    /**
	     * Consume reducer middleware.
	     *
	     * @example <caption>Install reducer middleware plugin.</caption>
	     *   container.use((state = {}, action) => { ... })
	     *
	     * @public
	     * @param {...Function} plugins
	     * @return {Container}
	     */

	  }, {
	    key: 'use',
	    value: function use() {
	      var middleware = this[$middleware];

	      for (var _len5 = arguments.length, plugins = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        plugins[_key5] = arguments[_key5];
	      }

	      var _iteratorNormalCompletion9 = true;
	      var _didIteratorError9 = false;
	      var _iteratorError9 = undefined;

	      try {
	        for (var _iterator9 = plugins[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	          var plugin = _step9.value;

	          middleware.add(plugin);
	        }
	      } catch (err) {
	        _didIteratorError9 = true;
	        _iteratorError9 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion9 && _iterator9.return) {
	            _iterator9.return();
	          }
	        } finally {
	          if (_didIteratorError9) {
	            throw _iteratorError9;
	          }
	        }
	      }

	      return this;
	    }

	    /**
	     * Updates container and all child containers.
	     *
	     * @example <caption>Update container and its children</caption>
	     *   container.update({value: 0})
	     *
	     * @example <caption>Update only container and not its children</caption>
	     *   container.update({value: 0}, false)
	     *
	     * @public
	     * @param {Object} [data] - New state data
	     * @param {Boolean} [propagate] - Propagate updates to child containers.
	     * @return {Container}
	     */

	  }, {
	    key: 'update',
	    value: function update(data) {
	      var propagate = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var domElement = this.domElement;
	      var template = getTemplateFromDomElement(domElement);

	      // init/update DOM data
	      (0, _extend2.default)(mkdux(domElement), { id: this[$uid] });
	      if (template) {
	        (0, _extend2.default)(mkdux(domElement), {
	          src: getTemplateFromDomElement(domElement)
	        });
	      }

	      // pre alignment
	      realignContainerTree(this, true, true);

	      // update
	      this.dispatch($UPDATE_ACTION, data, { propagate: propagate });

	      if (propagate) {
	        var _arr8 = [].concat(_toConsumableArray(this.children));

	        for (var _i8 = 0; _i8 < _arr8.length; _i8++) {
	          var child = _arr8[_i8];
	          child.update(data || this.state);
	        }
	      }

	      // post alignment
	      realignContainerTree(this);
	      return this;
	    }

	    /**
	     * Render container to a DOM element.
	     *
	     * @example <caption>Render container to a given domElement.</caption>
	     *   container.render(document.body)
	     *
	     * @public
	     * @param {Element} domElement
	     * @return {Container}
	     */

	  }, {
	    key: 'render',
	    value: function render(domElement) {
	      if (!domElement) return this;
	      if (false == domElement.contains(this[$domElement])) {
	        domElement.appendChild(this[$domElement]);
	        realignContainerTree(this);
	      }
	      return this;
	    }

	    /**
	     * Dispatch an event with type, optional data
	     * and optional arguments to the internal redux store.
	     *
	     * @example <caption>Dispatch an action with type and optional data and action argument.</caption>
	     *   container.dispatch({
	     *     type: 'MY_ACTION',
	     *     data: {value: 123},
	     *     propagate: false
	     *   })
	     *
	     * @public
	     * @param {Mixed} type
	     * @param {Object} [data]
	     * @param {Object} [args]
	     * @return {Container}
	     */

	  }, {
	    key: 'dispatch',
	    value: function dispatch(type) {
	      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var args = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	      if (!type) throw new TypeError("Failed to dispatch event without type.");
	      var store = this[$store];
	      var payload = { type: type, data: data };
	      for (var key in args) {
	        payload[key] = args[key];
	      }store.dispatch(payload);
	      return this;
	    }

	    /**
	     * Replace child tree with new children.
	     * @public
	     *
	     * @example
	     *  container.replaceChildren([childA, childB, createContainer()])
	     *
	     * @param {Array<Container|Element>} children
	     * @return {Container}
	     */

	  }, {
	    key: 'replaceChildren',
	    value: function replaceChildren(children) {
	      var _iteratorNormalCompletion10 = true;
	      var _didIteratorError10 = false;
	      var _iteratorError10 = undefined;

	      try {
	        for (var _iterator10 = this.children[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	          var child = _step10.value;

	          this.removeChild(child, false);
	        }
	      } catch (err) {
	        _didIteratorError10 = true;
	        _iteratorError10 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion10 && _iterator10.return) {
	            _iterator10.return();
	          }
	        } finally {
	          if (_didIteratorError10) {
	            throw _iteratorError10;
	          }
	        }
	      }

	      var _iteratorNormalCompletion11 = true;
	      var _didIteratorError11 = false;
	      var _iteratorError11 = undefined;

	      try {
	        for (var _iterator11 = children[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	          var child = _step11.value;

	          this.appendChild(child, false);
	        }
	      } catch (err) {
	        _didIteratorError11 = true;
	        _iteratorError11 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion11 && _iterator11.return) {
	            _iterator11.return();
	          }
	        } finally {
	          if (_didIteratorError11) {
	            throw _iteratorError11;
	          }
	        }
	      }

	      return this.update();
	    }

	    /**
	     * Returns the associated value of the
	     * container.
	     *
	     * @public
	     * @return {Element}
	     */

	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.domElement;
	    }

	    /**
	     * Returns the string reprenstation of
	     * this container.
	     *
	     * @public
	     * @return {String}
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.domElement.textContent;
	    }

	    /**
	     * Converts container to a JSON
	     * serializable object.
	     *
	     * @public
	     * @return {Object}
	     */

	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var root = {};
	      void (function traverse(container, node) {
	        node.id = container.id;
	        node.src = getTemplateFromDomElement(container.domElement);
	        node.state = container.state || {};
	        node.children = [];
	        var _iteratorNormalCompletion12 = true;
	        var _didIteratorError12 = false;
	        var _iteratorError12 = undefined;

	        try {
	          for (var _iterator12 = container.children[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	            var child = _step12.value;

	            var next = {};
	            node.children.push(next);
	            traverse(child, next);
	          }
	        } catch (err) {
	          _didIteratorError12 = true;
	          _iteratorError12 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion12 && _iterator12.return) {
	              _iterator12.return();
	            }
	          } finally {
	            if (_didIteratorError12) {
	              throw _iteratorError12;
	            }
	          }
	        }
	      })(this, root);
	      return root;
	    }

	    /**
	     * Pipe container updates to a given container.
	     *
	     * @example
	     *  containerA.pipe(containerB)
	     *
	     * @public
	     * @param {Container} container
	     * @return {Container} container
	     */

	  }, {
	    key: 'pipe',
	    value: function pipe(container) {
	      var pipes = this[$pipes];
	      var middleware = function middleware(state, action) {
	        switch (action.type) {
	          case $UPDATE_ACTION:
	            if (action.data) container.update(clone(action.data));
	            break;
	          default:
	            container.dispatch(action.type, action.data, action);
	        }
	      };

	      if (false == pipes.has(container)) pipes.set(container, middleware);

	      return container;
	    }

	    /**
	     * Unpipe container updates for a given container.
	     *
	     * @example
	     *  containerA.unpipe(containerB)
	     *
	     * @public
	     * @param {Container} container
	     * @return {Container} container
	     */

	  }, {
	    key: 'unpipe',
	    value: function unpipe(container) {
	      var pipes = this[$pipes];
	      var reducers = this[$middleware];
	      var middleware = pipes.get(container);
	      if (middleware) {
	        pipes.delete(container);
	      }
	      return container;
	    }

	    /**
	     * Append a child container. A child may be an
	     * instance of a Container, Element, Text, or
	     * a string. Containers are derived from their input
	     * and will cause a DOM tree to be restructured.
	     *
	     * @example
	     *   container.appendChild(child)
	     *
	     * @public
	     * @param {Container|Element|Text|String} child
	     * @param {Boolean} [update]
	     * @param {Boolean} [realign]
	     * @return {Container}
	     */

	  }, {
	    key: 'appendChild',
	    value: function appendChild(child) {
	      var update = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	      var realign = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	      var domElement = this.domElement;
	      var childDomElement = null;
	      var container = null;

	      if (child instanceof Container) {
	        container = child;
	      } else if (child instanceof Element) {
	        container = createContainer(child);
	      } else if ('string' == typeof child || child instanceof Text) {
	        container = createContainer(child);
	      } else {
	        throw new TypeError("Unexpected input for appendChild. " + "Expecting an instance of a Container, Element, Text " + "or a string.");
	      }

	      childDomElement = container.domElement;

	      if (update) this.update();

	      try {
	        if (container.parent && container.parent != this) {
	          container.parent.removeChild(container);
	        }
	        domElement.appendChild(childDomElement);
	        this[$children].add(container);
	      } catch (e) {
	        console.warn(e);
	      }

	      if (realign) realignContainerTree(this);

	      return container;
	    }

	    /**
	     * Remove a child container. A child may be an
	     * instance of a Container or Element. Containers
	     * are derived from their input and will cause a
	     * DOM tree to be restructured.
	     *
	     * @example
	     *   container.removeChild(child)
	     *
	     * @public
	     * @param {Container|Element} child
	     * @param {Boolean} [update]
	     * @param {Boolean} [realign]
	     * @return {Container}
	     */

	  }, {
	    key: 'removeChild',
	    value: function removeChild(child) {
	      var update = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	      var realign = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	      var domElement = this.domElement;
	      var childDomElement = null;
	      var container = fetchContainer(child);

	      // bail if there is nothing to do
	      if (null == container) return this;

	      childDomElement = container.domElement;

	      // remove child if it is in tree
	      if (domElement.contains(childDomElement)) domElement.removeChild(childDomElement);

	      // remove from container children tree
	      this[$children].delete(container);

	      // realign tree
	      if (realign) realignContainerTree(this);

	      return this;
	    }

	    /**
	     * Predicate to determine if a container or its
	     * DOM element is a child of the container.
	     *
	     * @example
	     *   if (container.contains(child)) {
	     *     ...
	     *   }
	     *
	     * @public
	     * @param {Container|Element} container
	     * @param {Boolean} [recursive]
	     * @return {Boolean}
	     */

	  }, {
	    key: 'contains',
	    value: function contains(container) {
	      var recursive = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      container = fetchContainer(container);
	      if (this[$children].has(container)) {
	        return true;
	      } else if (recursive) {
	        var _iteratorNormalCompletion13 = true;
	        var _didIteratorError13 = false;
	        var _iteratorError13 = undefined;

	        try {
	          for (var _iterator13 = this.children[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	            var child = _step13.value;

	            if (child.contains(container)) {
	              return true;
	            }
	          }
	        } catch (err) {
	          _didIteratorError13 = true;
	          _iteratorError13 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion13 && _iterator13.return) {
	              _iterator13.return();
	            }
	          } finally {
	            if (_didIteratorError13) {
	              throw _iteratorError13;
	            }
	          }
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'state',
	    get: function get() {
	      return clone(this[$model]);
	    }

	    /**
	     * Container id.
	     *
	     * @public
	     * @type {String}
	     */

	  }, {
	    key: 'id',
	    get: function get() {
	      return this[$uid];
	    }

	    /**
	     * Getter to return parent container if
	     * available. Parent is determined with
	     * DOM traversal up the tree. A container can
	     * be considered orphaned if it doesn't have a
	     * parent DOM element.
	     *
	     * @public
	     * @type {Container|null}
	     */

	  }, {
	    key: 'parent',
	    get: function get() {
	      var domElement = this.domElement;
	      var parentElement = domElement && domElement.parentElement;
	      var parentContainerData = {};
	      var parentElementContainer = null;
	      do {
	        if (null == parentElement) break;
	        parentContainerData = parentElement[STARDUX_PRIVATE_ATTR] || {};
	        parentElement = parentElement.parentElement;
	      } while (!(parentElementContainer = fetchContainer(parentContainerData.id)));
	      return parentElementContainer;
	    }

	    /**
	     * Container DOM element.
	     *
	     * @public
	     * @type {Element}
	     */

	  }, {
	    key: 'domElement',
	    get: function get() {
	      return this[$domElement];
	    }

	    /**
	     * DOM element setter that basically just
	     * calls replaceDOMElement(domElement).
	     *
	     * @ignore
	     * @public
	     * @type {Element}
	     */

	    ,
	    set: function set(domElement) {
	      if (domElement instanceof Element) replaceDOMElement(this, domElement);else throw new TypeError("Cannot set property .domElement. Value must " + "be an Element.");
	      return this.domElement;
	    }

	    /**
	     * Internal contents of the container
	     *
	     * @public
	     * @type {String}
	     */

	  }, {
	    key: 'innerContents',
	    get: function get() {
	      return this.domElement.innerHTML || '';
	    }

	    /**
	     * Sets inner contents of DOM content.
	     * This will set the template source
	     * and update the container. If child
	     * containers exist in tree they will
	     * become orphaned. If value is null
	     * then the value becomes an empty
	     * string (''). undefined values result
	     * in the string 'undefined'.
	     *
	     * @ignore
	     * @public
	     * @type {String}
	     */

	    ,
	    set: function set(value) {
	      if (null === value) value = '';
	      var data = mkdux(this);
	      data.src = String(value);
	      this.update();
	    }

	    /**
	     * Child containers
	     *
	     * @public
	     * @return {Array<Container>}
	     */

	  }, {
	    key: 'children',
	    get: function get() {
	      return [].concat(_toConsumableArray(this[$children].entries())).map(function (kv) {
	        return kv[0];
	      });
	    }
	  }]);

	  return Container;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(11);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(13);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(17);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(18);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(19);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(12);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	var objStringValue = fnToString(Object);

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === objStringValue;
	}

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(11);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _mapValues = __webpack_require__(15);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _pick = __webpack_require__(16);

	var _pick2 = _interopRequireDefault(_pick);

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_isPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = _pick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = _mapValues2['default'](finalReducers, function () {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var hasChanged = false;
	    var finalState = _mapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return hasChanged ? finalState : state;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = pick;

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapValues = __webpack_require__(15);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  return _mapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(19);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module dependencies.
	 */

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _template = __webpack_require__(21);

	var _template2 = _interopRequireDefault(_template);

	var _parser = __webpack_require__(24);

	var _parser2 = _interopRequireDefault(_parser);

	var _view = __webpack_require__(22);

	var _view2 = _interopRequireDefault(_view);

	/**
	 * Module exports.
	 */

	exports.Template = _template2['default'];
	exports.Parser = _parser2['default'];
	exports.View = _view2['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module dependencies.
	 */

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _view = __webpack_require__(22);

	/**
	 * Ensures an object.
	 *
	 * @private
	 * @function
	 * @name ensureObject
	 * @param {Mixed} o
	 * @return {Object}
	 */

	var ensureObject = function ensureObject(o) {
	  return null != o && 'object' == typeof o ? o : {};
	};

	/**
	 * Recursively makes an object safe for partial
	 * usage.
	 *
	 * @private
	 * @function
	 * @name makeSafeObject
	 * @param {Mixed} o
	 * @return {Mixed}
	 */

	function makeSafeObject(o) {
	  var out = String();

	  if ('function' == typeof o) {
	    return o;
	  }

	  if (null == o || 'object' != typeof o) {
	    if ('string' == typeof o) {
	      try {
	        return JSON.stringify(JSON.parse(o));
	      } catch (e) {}
	    }
	    return JSON.stringify(o);
	  }

	  if ('object' == typeof o) {
	    for (var k in o) {
	      o[k] = makeSafeObject(o[k]);
	    }if (Array.isArray(o)) {
	      out += '[';
	      for (var k in o) {
	        out += o[k] + ', ';
	      }out += ']';
	    } else {
	      out += '{';
	      for (var k in o) {
	        out += k + ': ' + o[k] + ', ';
	      }out += '}';
	    }
	  }

	  return out;
	}

	/**
	 * Template class.
	 *
	 * @public
	 * @class Template
	 */

	var Template = (function () {
	  _createClass(Template, null, [{
	    key: 'createPartial',

	    /**
	     * Creates a function that accepts an optional
	     * object creating a variable scope for the
	     * template string. You may pass a string or
	     * function. If a function is passed it is
	     * called when the partial is created. All
	     * data is propagated to functions passed to
	     * this function.
	     *
	     * @public
	     * @static
	     * @method
	     * @name createPartial
	     * @param {String|Function}
	     * @return {Function} (data) => {String}
	     */

	    value: function createPartial(string) {
	      var _this = this;

	      if ('string' == typeof string) string = string.replace(RegExp('`', 'g', '\\`'));

	      /**
	       * Partial template function that accepts
	       * an optional variable scope object.
	       *
	       * @public
	       * @function
	       * @param {Object} [data = {}]
	       * @return {String}
	       */

	      return function (data, scope) {
	        data = ensureObject(data);

	        scope = scope || _this;
	        var wrap = string;
	        var header = Object.keys(data).filter(function (key) {
	          return false == _view.helpers.has(key);
	        }).map(function (key) {
	          var value = makeSafeObject(data[key]);
	          return key + ' = ' + value;
	        });

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = _view.helpers.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var kv = _step.value;

	            header.push(kv[0] + ' = ' + makeSafeObject(kv[1]));
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	              _iterator['return']();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        header = header.length ? 'var ' + header.join(', ') + ';' : '';

	        // allow use of #{} inside of ES6 template strings
	        if ('string' == typeof string) string = string.replace(/\#\{/g, '${');

	        if ('function' != typeof wrap) wrap = new Function('data', '\'use strict\'; ' + header + ' return `' + string + '`');

	        var src = '\'use strict\'; return wrap.call(this, data);';
	        var fn = new Function('data', 'wrap', src);
	        return String(fn.call(scope, data, wrap) || '');
	      };
	    }

	    /**
	     * Template class constructor.
	     *
	     * @public
	     * @constructor
	     * @param {String|Function} source
	     */

	  }]);

	  function Template(source) {
	    _classCallCheck(this, Template);

	    /**
	     * The template source.
	     *
	     * @public
	     * @type {Function|String}
	     * @name source
	     */

	    this.source = null;

	    /**
	     * A partial function used to
	     * render a template.
	     *
	     * @public
	     * @method
	     * @name render
	     * @param {Object} [data = {}]
	     */

	    this.render = null;

	    // intial definition
	    this.define(source);
	  }

	  /**
	   * Defines the template source.
	   *
	   * @public
	   * @method
	   * @name define
	   * @param {String|Function} source
	   */

	  _createClass(Template, [{
	    key: 'define',
	    value: function define(source) {
	      this.source = source;
	      this.render = Template.createPartial(source);
	      return this;
	    }

	    /**
	     * Implements toString.
	     *
	     * @public
	     * @method
	     * @name toString
	     * @return {String}
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return String(this.source || '');
	    }

	    /**
	     * Implements valueOf.
	     *
	     * @public
	     * @method
	     * @name valueOf
	     * @return {Element}
	     */

	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.source;
	    }
	  }]);

	  return Template;
	})();

	exports['default'] = Template;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Module dependencies.
	 */

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _events = __webpack_require__(23);

	var _template = __webpack_require__(21);

	var _template2 = _interopRequireDefault(_template);

	var _parser = __webpack_require__(24);

	var _parser2 = _interopRequireDefault(_parser);

	/**
	 * Grab first element of an array like object
	 * if possible, otherwise use argument.
	 *
	 * @private
	 * @function
	 * @name first
	 * @param {Mixed} a
	 * @return {Mixed}
	 */

	var first = function first(a) {
	  return 'string' == typeof a ? new Text(a) : a && a.length && a[0] ? a[0] : a;
	};

	/**
	 * Creates a DOM from an HTML string.
	 *
	 * @private
	 * @function
	 * @name dom
	 * @param {String} html
	 * @return {Element|NodeList}
	 */

	var dom = function dom(html) {
	  var body = document.createElement('body');
	  var tmp = document.createDocumentFragment();
	  var nodes = null;
	  try {
	    body.innerHTML = html;
	    tmp.appendChild(body);
	    nodes = body.children;
	  } catch (e) {}
	  return (nodes && nodes.length > 1 ? nodes : nodes[0]) || html;
	};

	/**
	 * Deep merge objects
	 *
	 * @private
	 * @function
	 * @name merge
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object}
	 */

	var merge = function merge(a, b) {
	  for (var k in b) {
	    if ('object' == typeof b[k] && 'object' == typeof a[k]) merge(a[k], b[k]);else if ('object' == typeof b[k]) a[k] = merge(Array.isArray(b[k]) ? [] : {}, b[k]);else a[k] = b[k];
	  }
	  return a;
	};

	/**
	 * Clone object
	 *
	 * @private
	 * @function
	 * @name clone
	 * @param {Object} a
	 * @return {Object}
	 */

	var clone = function clone(a) {
	  return merge(Array.isArray(a) ? [] : {}, a);
	};

	/**
	 * Known view helpers defined with View.helper().
	 *
	 * @public
	 * @const
	 * @type {Map}
	 * @name helpers
	 */

	var helpers = new Map();

	exports.helpers = helpers;
	/**
	 * View class.
	 *
	 * @public
	 * @class View
	 * @extends EventEmitter
	 */

	var View = (function (_EventEmitter) {
	  _inherits(View, _EventEmitter);

	  _createClass(View, null, [{
	    key: 'helper',

	    /**
	     * Gets or sets a helper by name.
	     *
	     * @public
	     * @static
	     * @method
	     * @name helper
	     * @param {String} name
	     * @param {Function} [definition]
	     * @return {View|Function}
	     */

	    value: function helper(name, definition) {
	      if (name && definition) {
	        if ('function' != typeof definition) {
	          throw new TypeError("Expecting definition to be a function.");
	        }

	        if ('string' != typeof name) {
	          throw new TypeError("Expecting name to be a string.");
	        }

	        helpers.set(name, definition);
	        return View;
	      } else if (name) {
	        return helpers.get(name) || null;
	      }

	      throw new TypeError("Expecting at least 1 argument.");
	    }

	    /**
	     * View class constructor.
	     *
	     * @public
	     * @constructor
	     * @param {Template} template
	     * @param {Object} model
	     */

	  }]);

	  function View(template) {
	    var model = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, View);

	    _get(Object.getPrototypeOf(View.prototype), 'constructor', this).call(this);

	    // ensure template
	    if (false == template instanceof _template2['default']) {
	      template = new _template2['default'](template);
	    }

	    /**
	     * View data model.
	     *
	     * @public
	     * @type {Object}
	     * @name model
	     */

	    this.model = model || {};

	    /**
	     * The template associated with this view.
	     *
	     * @public
	     * @type {Template}
	     * @name template
	     */

	    this.template = template;

	    /**
	     * The DOM Element associated with this view.
	     *
	     * @public
	     * @type {Element}
	     * @name domElement
	     */

	    this.domElement = first(dom(this.template.render(this.model)));
	  }

	  /**
	   * Renders view to target DOM element.
	   *
	   * @public
	   * @method
	   * @name render
	   * @param {Element} parentDomElement
	   * @return {View}
	   */

	  _createClass(View, [{
	    key: 'render',
	    value: function render() {
	      var parentDomElement = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

	      var domElement = this.domElement;

	      // ensure DOM element
	      if (false == parentDomElement instanceof Element) {
	        throw new TypeError("Expecting a DOM Element.");
	      }

	      // only append if parent does not contain element
	      if (false == parentDomElement.contains(domElement)) {
	        parentDomElement.appendChild(domElement);
	      }
	      return this;
	    }

	    /**
	     * Updates DOM element with optional data
	     *
	     * @public
	     * @method
	     * @name update
	     * @param {Object} data
	     * @return {View}
	     */

	  }, {
	    key: 'update',
	    value: function update(data) {
	      this.model = merge(this.model || {}, data || {});
	      this.patch(dom(this.template.render(clone(this.model))));
	      return this;
	    }

	    /**
	     * Patches view DOM tree with source string
	     * or a given DOM Element.
	     *
	     * @public
	     * @method
	     * @name patch
	     * @param {String|Element} source
	     * @return {View}
	     */

	  }, {
	    key: 'patch',
	    value: function patch(source) {
	      var domElement = this.domElement;
	      var parser = _parser2['default'].sharedInstance();
	      var patch = parser.createPatch(source);
	      patch(domElement);
	      return this;
	    }

	    /**
	     * Destroys view and removes DOM element.
	     *
	     * @public
	     * @method
	     * @name destroy
	     * @return {View}
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var domElement = this.domElement;
	      var parentElement = domElement && domElement.parentElement;
	      if (parentElement && domElement) {
	        if (parentElement.contains(domElement)) {
	          parentElement.removeChild(domElement);
	        }
	      }
	      return this;
	    }

	    /**
	     * Implements toString.
	     *
	     * @public
	     * @method
	     * @name toString
	     * @return {String}
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return String(this.domElement ? this.domElement.outerHTML || '' : '');
	    }

	    /**
	     * Implements valueOf.
	     *
	     * @public
	     * @method
	     * @name valueOf
	     * @return {Element}
	     */

	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.domElement;
	    }
	  }]);

	  return View;
	})(_events.EventEmitter);

	exports['default'] = View;

/***/ },
/* 23 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module dependencies.
	 */

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _parse5 = __webpack_require__(25);

	var _parse52 = _interopRequireDefault(_parse5);

	var _incrementalDom = __webpack_require__(46);

	/**
	 * Generates a random unique hex ID string.
	 *
	 * @private
	 * @function
	 * @name uid
	 * @return {String}
	 */

	var uid = function uid(_) {
	  return Math.abs(Math.random() * Date.now() | 1).toString('16');
	};

	/**
	 * Ensures a function.
	 *
	 * @private
	 * @function
	 * @name ensureFunction
	 * @param {Mixed} fn
	 * @return {Function}
	 */

	var ensureFunction = function ensureFunction(fn) {
	  return 'function' == typeof fn ? fn : function () {
	    return void 0;
	  };
	};

	/**
	 * Parser class.
	 *
	 * @public
	 * @class Parser
	 * @extends parse5.Parser
	 */

	// Parser shared instance
	var instance_ = null;

	var Parser = (function (_parse5$Parser) {
	  _inherits(Parser, _parse5$Parser);

	  _createClass(Parser, null, [{
	    key: 'sharedInstance',

	    /**
	     * Shared parser instance
	     *
	     * @public
	     * @static
	     * @method
	     * @name sharedInstance
	     * @return {Parser}
	     */

	    value: function sharedInstance() {
	      instance_ = instance_ || new Parser();
	      return instance_;
	    }

	    /**
	     * Parser constructor.
	     *
	     * @public
	     * @constructor
	     */

	  }]);

	  function Parser() {
	    _classCallCheck(this, Parser);

	    _get(Object.getPrototypeOf(Parser.prototype), 'constructor', this).call(this, _parse52['default'].TreeAdapters.htmlparser2);

	    /**
	     * Known patches for this parser state.
	     *
	     * @public
	     * @type {Map}
	     * @name patches
	     */

	    this.patches = new Map();
	  }

	  /**
	   * Creates a patch function used for updating
	   * a given DOM Element from the provided source
	   * HTML or DOM Element.
	   *
	   * @public
	   * @method
	   * @name createPatch
	   * @param {String|Element} source
	   * @return {Function} (domElement, [done]) => {Undefined}
	   */

	  _createClass(Parser, [{
	    key: 'createPatch',
	    value: function createPatch(source) {
	      var html = source;

	      // get cached patch if diff doesn't exist
	      if (!this.hasPatch(source)) {
	        return this.getPatch(source);
	      }

	      // consume source HTML if an element is given
	      if (source instanceof HTMLElement) {
	        html = source.innerHTML;
	      }

	      html = String(html).replace(/\n/g, ' ').replace(/\r/g, ' ');
	      var root = this.parseFragment(html);
	      var nodes = root.children;
	      var stack = [];

	      /**
	       * Creates and pushes an instruction
	       * to the render stack.
	       *
	       * @private
	       * @function
	       * @name createInstruction
	       * @param {Function} fn
	       */

	      var createInstruction = function createInstruction(fn) {
	        return stack.push(fn);
	      };

	      /**
	       * Call each routine in stack.
	       *
	       * @private
	       * @function
	       * @name render
	       */

	      var render = function render(_) {
	        return stack.forEach(function (routine) {
	          return routine();
	        });
	      };

	      /**
	       * Patch routine for a given DOM Element.
	       *
	       * @public
	       * @function
	       * @param {Element} domElement
	       * @param {Function} [done]
	       */

	      var partial = function partial(domElement, done) {
	        done = ensureFunction(done);
	        (0, _incrementalDom.patch)(domElement, function (_) {
	          stack.forEach(function (routine) {
	            return routine();
	          });
	          done();
	        });
	      };

	      /**
	       * Traverse node recursively appending
	       * instructions to stack.
	       *
	       * @private
	       * @function
	       * @name traverse
	       * @param {Object} node
	       */

	      function traverse(node) {
	        var kv = [];
	        var id = node.attribs ? node.attribs.id : uid();
	        var attrs = node.attribs;
	        var parent = node.parent;
	        var hasChildren = Boolean(node.children ? node.children.length : 0);

	        if (attrs && Object.keys(attrs).length) for (var key in attrs) {
	          if (attrs[key]) kv.push(key, attrs[key]);
	        }if ('tag' == node.type) {
	          // begin node
	          createInstruction(function (_) {
	            return _incrementalDom.elementOpen.apply(undefined, [node.name, id, null].concat(kv));
	          });

	          // define child nodes
	          if (hasChildren) node.children.forEach(traverse);

	          // close node
	          createInstruction(function (_) {
	            return (0, _incrementalDom.elementClose)(node.name);
	          });
	        } else if ('text' == node.type && node.data) {
	          // handle text nodes
	          createInstruction(function (_) {
	            return (0, _incrementalDom.text)(node.data);
	          });
	        } else if ('script' == node.type) {
	          // skip script
	        } else {
	            // @TODO(werle) - what else ?
	            throw new TypeError('Unhandled node type ' + node.type + '.');
	          }
	      };

	      // Walk tree and generate
	      // incremental DOM routines
	      nodes.forEach(traverse);

	      // set patch
	      this.patches.set(source, partial);

	      // provide partial patch function
	      return partial;
	    }

	    /**
	     * Predicate to determine if source given
	     * is an already defined patch.
	     *
	     * @public
	     * @method
	     * @name hasPatch
	     * @param {Mixed} source
	     * @return {Boolean}
	     */

	  }, {
	    key: 'hasPatch',
	    value: function hasPatch(source) {
	      return false == this.patches.has(source);
	    }

	    /**
	     * Returns patch by source.
	     *
	     * @public
	     * @method
	     * @name getPatch
	     * @param {Mixed} source
	     * @return {Function}
	     */

	  }, {
	    key: 'getPatch',
	    value: function getPatch(source) {
	      return this.patches.get(source) || null;
	    }
	  }]);

	  return Parser;
	})(_parse52['default'].Parser);

	exports['default'] = Parser;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.Parser = __webpack_require__(26);
	exports.SimpleApiParser = __webpack_require__(40);
	exports.TreeSerializer =
	exports.Serializer = __webpack_require__(42);
	exports.JsDomParser = __webpack_require__(43);

	exports.TreeAdapters = {
	    default: __webpack_require__(36),
	    htmlparser2: __webpack_require__(45)
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tokenizer = __webpack_require__(27),
	    OpenElementStack = __webpack_require__(32),
	    FormattingElementList = __webpack_require__(34),
	    LocationInfoMixin = __webpack_require__(35),
	    DefaultTreeAdapter = __webpack_require__(36),
	    Doctype = __webpack_require__(37),
	    ForeignContent = __webpack_require__(38),
	    Utils = __webpack_require__(39),
	    UNICODE = __webpack_require__(29),
	    HTML = __webpack_require__(33);

	//Aliases
	var $ = HTML.TAG_NAMES,
	    NS = HTML.NAMESPACES,
	    ATTRS = HTML.ATTRS;

	//Default options
	var DEFAULT_OPTIONS = {
	    decodeHtmlEntities: true,
	    locationInfo: false
	};

	//Misc constants
	var SEARCHABLE_INDEX_DEFAULT_PROMPT = 'This is a searchable index. Enter search keywords: ',
	    SEARCHABLE_INDEX_INPUT_NAME = 'isindex',
	    HIDDEN_INPUT_TYPE = 'hidden';

	//Adoption agency loops iteration count
	var AA_OUTER_LOOP_ITER = 8,
	    AA_INNER_LOOP_ITER = 3;

	//Insertion modes
	var INITIAL_MODE = 'INITIAL_MODE',
	    BEFORE_HTML_MODE = 'BEFORE_HTML_MODE',
	    BEFORE_HEAD_MODE = 'BEFORE_HEAD_MODE',
	    IN_HEAD_MODE = 'IN_HEAD_MODE',
	    AFTER_HEAD_MODE = 'AFTER_HEAD_MODE',
	    IN_BODY_MODE = 'IN_BODY_MODE',
	    TEXT_MODE = 'TEXT_MODE',
	    IN_TABLE_MODE = 'IN_TABLE_MODE',
	    IN_TABLE_TEXT_MODE = 'IN_TABLE_TEXT_MODE',
	    IN_CAPTION_MODE = 'IN_CAPTION_MODE',
	    IN_COLUMN_GROUP_MODE = 'IN_COLUMN_GROUP_MODE',
	    IN_TABLE_BODY_MODE = 'IN_TABLE_BODY_MODE',
	    IN_ROW_MODE = 'IN_ROW_MODE',
	    IN_CELL_MODE = 'IN_CELL_MODE',
	    IN_SELECT_MODE = 'IN_SELECT_MODE',
	    IN_SELECT_IN_TABLE_MODE = 'IN_SELECT_IN_TABLE_MODE',
	    IN_TEMPLATE_MODE = 'IN_TEMPLATE_MODE',
	    AFTER_BODY_MODE = 'AFTER_BODY_MODE',
	    IN_FRAMESET_MODE = 'IN_FRAMESET_MODE',
	    AFTER_FRAMESET_MODE = 'AFTER_FRAMESET_MODE',
	    AFTER_AFTER_BODY_MODE = 'AFTER_AFTER_BODY_MODE',
	    AFTER_AFTER_FRAMESET_MODE = 'AFTER_AFTER_FRAMESET_MODE';

	//Insertion mode reset map
	var INSERTION_MODE_RESET_MAP = {};

	INSERTION_MODE_RESET_MAP[$.TR] = IN_ROW_MODE;
	INSERTION_MODE_RESET_MAP[$.TBODY] =
	INSERTION_MODE_RESET_MAP[$.THEAD] =
	INSERTION_MODE_RESET_MAP[$.TFOOT] = IN_TABLE_BODY_MODE;
	INSERTION_MODE_RESET_MAP[$.CAPTION] = IN_CAPTION_MODE;
	INSERTION_MODE_RESET_MAP[$.COLGROUP] = IN_COLUMN_GROUP_MODE;
	INSERTION_MODE_RESET_MAP[$.TABLE] = IN_TABLE_MODE;
	INSERTION_MODE_RESET_MAP[$.BODY] = IN_BODY_MODE;
	INSERTION_MODE_RESET_MAP[$.FRAMESET] = IN_FRAMESET_MODE;

	//Template insertion mode switch map
	var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {};

	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.CAPTION] =
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COLGROUP] =
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TBODY] =
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TFOOT] =
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.THEAD] = IN_TABLE_MODE;
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COL] = IN_COLUMN_GROUP_MODE;
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TR] = IN_TABLE_BODY_MODE;
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TD] =
	TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TH] = IN_ROW_MODE;

	//Token handlers map for insertion modes
	var _ = {};

	_[INITIAL_MODE] = {};
	_[INITIAL_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[INITIAL_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInInitialMode;
	_[INITIAL_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
	_[INITIAL_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[INITIAL_MODE][Tokenizer.DOCTYPE_TOKEN] = doctypeInInitialMode;
	_[INITIAL_MODE][Tokenizer.START_TAG_TOKEN] =
	_[INITIAL_MODE][Tokenizer.END_TAG_TOKEN] =
	_[INITIAL_MODE][Tokenizer.EOF_TOKEN] = tokenInInitialMode;

	_[BEFORE_HTML_MODE] = {};
	_[BEFORE_HTML_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[BEFORE_HTML_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHtml;
	_[BEFORE_HTML_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
	_[BEFORE_HTML_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[BEFORE_HTML_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[BEFORE_HTML_MODE][Tokenizer.START_TAG_TOKEN] = startTagBeforeHtml;
	_[BEFORE_HTML_MODE][Tokenizer.END_TAG_TOKEN] = endTagBeforeHtml;
	_[BEFORE_HTML_MODE][Tokenizer.EOF_TOKEN] = tokenBeforeHtml;

	_[BEFORE_HEAD_MODE] = {};
	_[BEFORE_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[BEFORE_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHead;
	_[BEFORE_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
	_[BEFORE_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[BEFORE_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[BEFORE_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagBeforeHead;
	_[BEFORE_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagBeforeHead;
	_[BEFORE_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenBeforeHead;

	_[IN_HEAD_MODE] = {};
	_[IN_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[IN_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInHead;
	_[IN_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[IN_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagInHead;
	_[IN_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagInHead;
	_[IN_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenInHead;

	_[AFTER_HEAD_MODE] = {};
	_[AFTER_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[AFTER_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterHead;
	_[AFTER_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[AFTER_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[AFTER_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[AFTER_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterHead;
	_[AFTER_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterHead;
	_[AFTER_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenAfterHead;

	_[IN_BODY_MODE] = {};
	_[IN_BODY_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
	_[IN_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[IN_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagInBody;
	_[IN_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagInBody;
	_[IN_BODY_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[TEXT_MODE] = {};
	_[TEXT_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[TEXT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
	_[TEXT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[TEXT_MODE][Tokenizer.COMMENT_TOKEN] =
	_[TEXT_MODE][Tokenizer.DOCTYPE_TOKEN] =
	_[TEXT_MODE][Tokenizer.START_TAG_TOKEN] = ignoreToken;
	_[TEXT_MODE][Tokenizer.END_TAG_TOKEN] = endTagInText;
	_[TEXT_MODE][Tokenizer.EOF_TOKEN] = eofInText;

	_[IN_TABLE_MODE] = {};
	_[IN_TABLE_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[IN_TABLE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
	_[IN_TABLE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
	_[IN_TABLE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_TABLE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_TABLE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTable;
	_[IN_TABLE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTable;
	_[IN_TABLE_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_TABLE_TEXT_MODE] = {};
	_[IN_TABLE_TEXT_MODE][Tokenizer.CHARACTER_TOKEN] = characterInTableText;
	_[IN_TABLE_TEXT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_TABLE_TEXT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInTableText;
	_[IN_TABLE_TEXT_MODE][Tokenizer.COMMENT_TOKEN] =
	_[IN_TABLE_TEXT_MODE][Tokenizer.DOCTYPE_TOKEN] =
	_[IN_TABLE_TEXT_MODE][Tokenizer.START_TAG_TOKEN] =
	_[IN_TABLE_TEXT_MODE][Tokenizer.END_TAG_TOKEN] =
	_[IN_TABLE_TEXT_MODE][Tokenizer.EOF_TOKEN] = tokenInTableText;

	_[IN_CAPTION_MODE] = {};
	_[IN_CAPTION_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
	_[IN_CAPTION_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_CAPTION_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[IN_CAPTION_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_CAPTION_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_CAPTION_MODE][Tokenizer.START_TAG_TOKEN] = startTagInCaption;
	_[IN_CAPTION_MODE][Tokenizer.END_TAG_TOKEN] = endTagInCaption;
	_[IN_CAPTION_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_COLUMN_GROUP_MODE] = {};
	_[IN_COLUMN_GROUP_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[IN_COLUMN_GROUP_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInColumnGroup;
	_[IN_COLUMN_GROUP_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[IN_COLUMN_GROUP_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_COLUMN_GROUP_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_COLUMN_GROUP_MODE][Tokenizer.START_TAG_TOKEN] = startTagInColumnGroup;
	_[IN_COLUMN_GROUP_MODE][Tokenizer.END_TAG_TOKEN] = endTagInColumnGroup;
	_[IN_COLUMN_GROUP_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_TABLE_BODY_MODE] = {};
	_[IN_TABLE_BODY_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[IN_TABLE_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
	_[IN_TABLE_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
	_[IN_TABLE_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_TABLE_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_TABLE_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTableBody;
	_[IN_TABLE_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTableBody;
	_[IN_TABLE_BODY_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_ROW_MODE] = {};
	_[IN_ROW_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[IN_ROW_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
	_[IN_ROW_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
	_[IN_ROW_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_ROW_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_ROW_MODE][Tokenizer.START_TAG_TOKEN] = startTagInRow;
	_[IN_ROW_MODE][Tokenizer.END_TAG_TOKEN] = endTagInRow;
	_[IN_ROW_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_CELL_MODE] = {};
	_[IN_CELL_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
	_[IN_CELL_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_CELL_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[IN_CELL_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_CELL_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_CELL_MODE][Tokenizer.START_TAG_TOKEN] = startTagInCell;
	_[IN_CELL_MODE][Tokenizer.END_TAG_TOKEN] = endTagInCell;
	_[IN_CELL_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_SELECT_MODE] = {};
	_[IN_SELECT_MODE][Tokenizer.CHARACTER_TOKEN] = insertCharacters;
	_[IN_SELECT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_SELECT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[IN_SELECT_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_SELECT_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_SELECT_MODE][Tokenizer.START_TAG_TOKEN] = startTagInSelect;
	_[IN_SELECT_MODE][Tokenizer.END_TAG_TOKEN] = endTagInSelect;
	_[IN_SELECT_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_SELECT_IN_TABLE_MODE] = {};
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.CHARACTER_TOKEN] = insertCharacters;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInSelectInTable;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInSelectInTable;
	_[IN_SELECT_IN_TABLE_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

	_[IN_TEMPLATE_MODE] = {};
	_[IN_TEMPLATE_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
	_[IN_TEMPLATE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_TEMPLATE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[IN_TEMPLATE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_TEMPLATE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_TEMPLATE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTemplate;
	_[IN_TEMPLATE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTemplate;
	_[IN_TEMPLATE_MODE][Tokenizer.EOF_TOKEN] = eofInTemplate;

	_[AFTER_BODY_MODE] = {};
	_[AFTER_BODY_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[AFTER_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterBody;
	_[AFTER_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[AFTER_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToRootHtmlElement;
	_[AFTER_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[AFTER_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterBody;
	_[AFTER_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterBody;
	_[AFTER_BODY_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

	_[IN_FRAMESET_MODE] = {};
	_[IN_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[IN_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[IN_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[IN_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[IN_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[IN_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagInFrameset;
	_[IN_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = endTagInFrameset;
	_[IN_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

	_[AFTER_FRAMESET_MODE] = {};
	_[AFTER_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[AFTER_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[AFTER_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
	_[AFTER_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
	_[AFTER_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[AFTER_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterFrameset;
	_[AFTER_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterFrameset;
	_[AFTER_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

	_[AFTER_AFTER_BODY_MODE] = {};
	_[AFTER_AFTER_BODY_MODE][Tokenizer.CHARACTER_TOKEN] = tokenAfterAfterBody;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterAfterBody;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterAfterBody;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.END_TAG_TOKEN] = tokenAfterAfterBody;
	_[AFTER_AFTER_BODY_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

	_[AFTER_AFTER_FRAMESET_MODE] = {};
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterAfterFrameset;
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = ignoreToken;
	_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

	//Searchable index building utils (<isindex> tag)
	function getSearchableIndexFormAttrs(isindexStartTagToken) {
	    var indexAction = Tokenizer.getTokenAttr(isindexStartTagToken, ATTRS.ACTION),
	        attrs = [];

	    if (indexAction !== null) {
	        attrs.push({
	            name: ATTRS.ACTION,
	            value: indexAction
	        });
	    }

	    return attrs;
	}

	function getSearchableIndexLabelText(isindexStartTagToken) {
	    var indexPrompt = Tokenizer.getTokenAttr(isindexStartTagToken, ATTRS.PROMPT);

	    return indexPrompt === null ? SEARCHABLE_INDEX_DEFAULT_PROMPT : indexPrompt;
	}

	function getSearchableIndexInputAttrs(isindexStartTagToken) {
	    var isindexAttrs = isindexStartTagToken.attrs,
	        inputAttrs = [];

	    for (var i = 0; i < isindexAttrs.length; i++) {
	        var name = isindexAttrs[i].name;

	        if (name !== ATTRS.NAME && name !== ATTRS.ACTION && name !== ATTRS.PROMPT)
	            inputAttrs.push(isindexAttrs[i]);
	    }

	    inputAttrs.push({
	        name: ATTRS.NAME,
	        value: SEARCHABLE_INDEX_INPUT_NAME
	    });

	    return inputAttrs;
	}

	//Parser
	var Parser = module.exports = function (treeAdapter, options) {
	    this.treeAdapter = treeAdapter || DefaultTreeAdapter;
	    this.options = Utils.mergeOptions(DEFAULT_OPTIONS, options);
	    this.scriptHandler = null;

	    if (this.options.locationInfo)
	        LocationInfoMixin.assign(this);
	};

	//API
	Parser.prototype.parse = function (html) {
	    var document = this.treeAdapter.createDocument();

	    this._reset(html, document, null);
	    this._runParsingLoop();

	    return document;
	};

	Parser.prototype.parseFragment = function (html, fragmentContext) {
	    //NOTE: use <template> element as a fragment context if context element was not provided,
	    //so we will parse in "forgiving" manner
	    if (!fragmentContext)
	        fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);

	    //NOTE: create fake element which will be used as 'document' for fragment parsing.
	    //This is important for jsdom there 'document' can't be recreated, therefore
	    //fragment parsing causes messing of the main `document`.
	    var documentMock = this.treeAdapter.createElement('documentmock', NS.HTML, []);

	    this._reset(html, documentMock, fragmentContext);

	    if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE)
	        this._pushTmplInsertionMode(IN_TEMPLATE_MODE);

	    this._initTokenizerForFragmentParsing();
	    this._insertFakeRootElement();
	    this._resetInsertionMode();
	    this._findFormInFragmentContext();
	    this._runParsingLoop();

	    var rootElement = this.treeAdapter.getFirstChild(documentMock),
	        fragment = this.treeAdapter.createDocumentFragment();

	    this._adoptNodes(rootElement, fragment);

	    return fragment;
	};

	//Reset state
	Parser.prototype._reset = function (html, document, fragmentContext) {
	    this.tokenizer = new Tokenizer(html, this.options);

	    this.stopped = false;

	    this.insertionMode = INITIAL_MODE;
	    this.originalInsertionMode = '';

	    this.document = document;
	    this.fragmentContext = fragmentContext;

	    this.headElement = null;
	    this.formElement = null;

	    this.openElements = new OpenElementStack(this.document, this.treeAdapter);
	    this.activeFormattingElements = new FormattingElementList(this.treeAdapter);

	    this.tmplInsertionModeStack = [];
	    this.tmplInsertionModeStackTop = -1;
	    this.currentTmplInsertionMode = null;

	    this.pendingCharacterTokens = [];
	    this.hasNonWhitespacePendingCharacterToken = false;

	    this.framesetOk = true;
	    this.skipNextNewLine = false;
	    this.fosterParentingEnabled = false;
	};

	//Parsing loop
	Parser.prototype._iterateParsingLoop = function () {
	    this._setupTokenizerCDATAMode();

	    var token = this.tokenizer.getNextToken();

	    if (this.skipNextNewLine) {
	        this.skipNextNewLine = false;

	        if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
	            if (token.chars.length === 1)
	                return;

	            token.chars = token.chars.substr(1);
	        }
	    }

	    if (this._shouldProcessTokenInForeignContent(token))
	        this._processTokenInForeignContent(token);

	    else
	        this._processToken(token);
	};

	Parser.prototype._runParsingLoop = function () {
	    while (!this.stopped)
	        this._iterateParsingLoop();
	};

	//Text parsing
	Parser.prototype._setupTokenizerCDATAMode = function () {
	    var current = this._getAdjustedCurrentElement();

	    this.tokenizer.allowCDATA = current && current !== this.document &&
	                                this.treeAdapter.getNamespaceURI(current) !== NS.HTML &&
	                                (!this._isHtmlIntegrationPoint(current)) &&
	                                (!this._isMathMLTextIntegrationPoint(current));
	};

	Parser.prototype._switchToTextParsing = function (currentToken, nextTokenizerState) {
	    this._insertElement(currentToken, NS.HTML);
	    this.tokenizer.state = nextTokenizerState;
	    this.originalInsertionMode = this.insertionMode;
	    this.insertionMode = TEXT_MODE;
	};

	//Fragment parsing
	Parser.prototype._getAdjustedCurrentElement = function () {
	    return this.openElements.stackTop === 0 && this.fragmentContext ?
	           this.fragmentContext :
	           this.openElements.current;
	};

	Parser.prototype._findFormInFragmentContext = function () {
	    var node = this.fragmentContext;

	    do {
	        if (this.treeAdapter.getTagName(node) === $.FORM) {
	            this.formElement = node;
	            break;
	        }

	        node = this.treeAdapter.getParentNode(node);
	    } while (node);
	};

	Parser.prototype._initTokenizerForFragmentParsing = function () {
	    var tn = this.treeAdapter.getTagName(this.fragmentContext);

	    if (tn === $.TITLE || tn === $.TEXTAREA)
	        this.tokenizer.state = Tokenizer.MODE.RCDATA;

	    else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME ||
	             tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) {
	        this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
	    }

	    else if (tn === $.SCRIPT)
	        this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;

	    else if (tn === $.PLAINTEXT)
	        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
	};

	//Tree mutation
	Parser.prototype._setDocumentType = function (token) {
	    this.treeAdapter.setDocumentType(this.document, token.name, token.publicId, token.systemId);
	};

	Parser.prototype._attachElementToTree = function (element) {
	    if (this._shouldFosterParentOnInsertion())
	        this._fosterParentElement(element);

	    else {
	        var parent = this.openElements.currentTmplContent || this.openElements.current;

	        this.treeAdapter.appendChild(parent, element);
	    }
	};

	Parser.prototype._appendElement = function (token, namespaceURI) {
	    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

	    this._attachElementToTree(element);
	};

	Parser.prototype._insertElement = function (token, namespaceURI) {
	    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

	    this._attachElementToTree(element);
	    this.openElements.push(element);
	};

	Parser.prototype._insertTemplate = function (token) {
	    var tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs),
	        content = this.treeAdapter.createDocumentFragment();

	    this.treeAdapter.appendChild(tmpl, content);
	    this._attachElementToTree(tmpl);
	    this.openElements.push(tmpl);
	};

	Parser.prototype._insertFakeRootElement = function () {
	    var element = this.treeAdapter.createElement($.HTML, NS.HTML, []);

	    this.treeAdapter.appendChild(this.openElements.current, element);
	    this.openElements.push(element);
	};

	Parser.prototype._appendCommentNode = function (token, parent) {
	    var commentNode = this.treeAdapter.createCommentNode(token.data);

	    this.treeAdapter.appendChild(parent, commentNode);
	};

	Parser.prototype._insertCharacters = function (token) {
	    if (this._shouldFosterParentOnInsertion())
	        this._fosterParentText(token.chars);

	    else {
	        var parent = this.openElements.currentTmplContent || this.openElements.current;

	        this.treeAdapter.insertText(parent, token.chars);
	    }
	};

	Parser.prototype._adoptNodes = function (donor, recipient) {
	    while (true) {
	        var child = this.treeAdapter.getFirstChild(donor);

	        if (!child)
	            break;

	        this.treeAdapter.detachNode(child);
	        this.treeAdapter.appendChild(recipient, child);
	    }
	};

	//Token processing
	Parser.prototype._shouldProcessTokenInForeignContent = function (token) {
	    var current = this._getAdjustedCurrentElement();

	    if (!current || current === this.document)
	        return false;

	    var ns = this.treeAdapter.getNamespaceURI(current);

	    if (ns === NS.HTML)
	        return false;

	    if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML &&
	        token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $.SVG) {
	        return false;
	    }

	    var isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN ||
	                           token.type === Tokenizer.NULL_CHARACTER_TOKEN ||
	                           token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN,
	        isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN &&
	                               token.tagName !== $.MGLYPH &&
	                               token.tagName !== $.MALIGNMARK;

	    if ((isMathMLTextStartTag || isCharacterToken) && this._isMathMLTextIntegrationPoint(current))
	        return false;

	    if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isHtmlIntegrationPoint(current))
	        return false;

	    return token.type !== Tokenizer.EOF_TOKEN;
	};

	Parser.prototype._processToken = function (token) {
	    _[this.insertionMode][token.type](this, token);
	};

	Parser.prototype._processTokenInBodyMode = function (token) {
	    _[IN_BODY_MODE][token.type](this, token);
	};

	Parser.prototype._processTokenInForeignContent = function (token) {
	    if (token.type === Tokenizer.CHARACTER_TOKEN)
	        characterInForeignContent(this, token);

	    else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN)
	        nullCharacterInForeignContent(this, token);

	    else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN)
	        insertCharacters(this, token);

	    else if (token.type === Tokenizer.COMMENT_TOKEN)
	        appendComment(this, token);

	    else if (token.type === Tokenizer.START_TAG_TOKEN)
	        startTagInForeignContent(this, token);

	    else if (token.type === Tokenizer.END_TAG_TOKEN)
	        endTagInForeignContent(this, token);
	};

	Parser.prototype._processFakeStartTagWithAttrs = function (tagName, attrs) {
	    var fakeToken = this.tokenizer.buildStartTagToken(tagName);

	    fakeToken.attrs = attrs;
	    this._processToken(fakeToken);
	};

	Parser.prototype._processFakeStartTag = function (tagName) {
	    var fakeToken = this.tokenizer.buildStartTagToken(tagName);

	    this._processToken(fakeToken);
	    return fakeToken;
	};

	Parser.prototype._processFakeEndTag = function (tagName) {
	    var fakeToken = this.tokenizer.buildEndTagToken(tagName);

	    this._processToken(fakeToken);
	    return fakeToken;
	};

	//Integration points
	Parser.prototype._isMathMLTextIntegrationPoint = function (element) {
	    var tn = this.treeAdapter.getTagName(element),
	        ns = this.treeAdapter.getNamespaceURI(element);

	    return ForeignContent.isMathMLTextIntegrationPoint(tn, ns);
	};

	Parser.prototype._isHtmlIntegrationPoint = function (element) {
	    var tn = this.treeAdapter.getTagName(element),
	        ns = this.treeAdapter.getNamespaceURI(element),
	        attrs = this.treeAdapter.getAttrList(element);

	    return ForeignContent.isHtmlIntegrationPoint(tn, ns, attrs);
	};

	//Active formatting elements reconstruction
	Parser.prototype._reconstructActiveFormattingElements = function () {
	    var listLength = this.activeFormattingElements.length;

	    if (listLength) {
	        var unopenIdx = listLength,
	            entry = null;

	        do {
	            unopenIdx--;
	            entry = this.activeFormattingElements.entries[unopenIdx];

	            if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
	                unopenIdx++;
	                break;
	            }
	        } while (unopenIdx > 0);

	        for (var i = unopenIdx; i < listLength; i++) {
	            entry = this.activeFormattingElements.entries[i];
	            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
	            entry.element = this.openElements.current;
	        }
	    }
	};

	//Close elements
	Parser.prototype._closeTableCell = function () {
	    if (this.openElements.hasInTableScope($.TD))
	        this._processFakeEndTag($.TD);

	    else
	        this._processFakeEndTag($.TH);
	};

	Parser.prototype._closePElement = function () {
	    this.openElements.generateImpliedEndTagsWithExclusion($.P);
	    this.openElements.popUntilTagNamePopped($.P);
	};

	//Insertion modes
	Parser.prototype._resetInsertionMode = function () {
	    for (var i = this.openElements.stackTop, last = false; i >= 0; i--) {
	        var element = this.openElements.items[i];

	        if (i === 0) {
	            last = true;

	            if (this.fragmentContext)
	                element = this.fragmentContext;
	        }

	        var tn = this.treeAdapter.getTagName(element),
	            newInsertionMode = INSERTION_MODE_RESET_MAP[tn];

	        if (newInsertionMode) {
	            this.insertionMode = newInsertionMode;
	            break;
	        }

	        else if (!last && (tn === $.TD || tn === $.TH)) {
	            this.insertionMode = IN_CELL_MODE;
	            break;
	        }

	        else if (!last && tn === $.HEAD) {
	            this.insertionMode = IN_HEAD_MODE;
	            break;
	        }

	        else if (tn === $.SELECT) {
	            this._resetInsertionModeForSelect(i);
	            break;
	        }

	        else if (tn === $.TEMPLATE) {
	            this.insertionMode = this.currentTmplInsertionMode;
	            break;
	        }

	        else if (tn === $.HTML) {
	            this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
	            break;
	        }

	        else if (last) {
	            this.insertionMode = IN_BODY_MODE;
	            break;
	        }
	    }
	};

	Parser.prototype._resetInsertionModeForSelect = function (selectIdx) {
	    if (selectIdx > 0) {
	        for (var i = selectIdx - 1; i > 0; i--) {
	            var ancestor = this.openElements.items[i],
	                tn = this.treeAdapter.getTagName(ancestor);

	            if (tn === $.TEMPLATE)
	                break;

	            else if (tn === $.TABLE) {
	                this.insertionMode = IN_SELECT_IN_TABLE_MODE;
	                return;
	            }
	        }
	    }

	    this.insertionMode = IN_SELECT_MODE;
	};

	Parser.prototype._pushTmplInsertionMode = function (mode) {
	    this.tmplInsertionModeStack.push(mode);
	    this.tmplInsertionModeStackTop++;
	    this.currentTmplInsertionMode = mode;
	};

	Parser.prototype._popTmplInsertionMode = function () {
	    this.tmplInsertionModeStack.pop();
	    this.tmplInsertionModeStackTop--;
	    this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
	};

	//Foster parenting
	Parser.prototype._isElementCausesFosterParenting = function (element) {
	    var tn = this.treeAdapter.getTagName(element);

	    return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn == $.THEAD || tn === $.TR;
	};

	Parser.prototype._shouldFosterParentOnInsertion = function () {
	    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
	};

	Parser.prototype._findFosterParentingLocation = function () {
	    var location = {
	        parent: null,
	        beforeElement: null
	    };

	    for (var i = this.openElements.stackTop; i >= 0; i--) {
	        var openElement = this.openElements.items[i],
	            tn = this.treeAdapter.getTagName(openElement),
	            ns = this.treeAdapter.getNamespaceURI(openElement);

	        if (tn === $.TEMPLATE && ns === NS.HTML) {
	            location.parent = this.treeAdapter.getChildNodes(openElement)[0];
	            break;
	        }

	        else if (tn === $.TABLE) {
	            location.parent = this.treeAdapter.getParentNode(openElement);

	            if (location.parent)
	                location.beforeElement = openElement;
	            else
	                location.parent = this.openElements.items[i - 1];

	            break;
	        }
	    }

	    if (!location.parent)
	        location.parent = this.openElements.items[0];

	    return location;
	};

	Parser.prototype._fosterParentElement = function (element) {
	    var location = this._findFosterParentingLocation();

	    if (location.beforeElement)
	        this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
	    else
	        this.treeAdapter.appendChild(location.parent, element);
	};

	Parser.prototype._fosterParentText = function (chars) {
	    var location = this._findFosterParentingLocation();

	    if (location.beforeElement)
	        this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
	    else
	        this.treeAdapter.insertText(location.parent, chars);
	};

	//Special elements
	Parser.prototype._isSpecialElement = function (element) {
	    var tn = this.treeAdapter.getTagName(element),
	        ns = this.treeAdapter.getNamespaceURI(element);

	    return HTML.SPECIAL_ELEMENTS[ns][tn];
	};

	//Adoption agency algorithm
	//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
	//------------------------------------------------------------------

	//Steps 5-8 of the algorithm
	function aaObtainFormattingElementEntry(p, token) {
	    var formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);

	    if (formattingElementEntry) {
	        if (!p.openElements.contains(formattingElementEntry.element)) {
	            p.activeFormattingElements.removeEntry(formattingElementEntry);
	            formattingElementEntry = null;
	        }

	        else if (!p.openElements.hasInScope(token.tagName))
	            formattingElementEntry = null;
	    }

	    else
	        genericEndTagInBody(p, token);

	    return formattingElementEntry;
	}

	//Steps 9 and 10 of the algorithm
	function aaObtainFurthestBlock(p, formattingElementEntry) {
	    var furthestBlock = null;

	    for (var i = p.openElements.stackTop; i >= 0; i--) {
	        var element = p.openElements.items[i];

	        if (element === formattingElementEntry.element)
	            break;

	        if (p._isSpecialElement(element))
	            furthestBlock = element;
	    }

	    if (!furthestBlock) {
	        p.openElements.popUntilElementPopped(formattingElementEntry.element);
	        p.activeFormattingElements.removeEntry(formattingElementEntry);
	    }

	    return furthestBlock;
	}

	//Step 13 of the algorithm
	function aaInnerLoop(p, furthestBlock, formattingElement) {
	    var element = null,
	        lastElement = furthestBlock,
	        nextElement = p.openElements.getCommonAncestor(furthestBlock);

	    for (var i = 0; i < AA_INNER_LOOP_ITER; i++) {
	        element = nextElement;

	        //NOTE: store next element for the next loop iteration (it may be deleted from the stack by step 9.5)
	        nextElement = p.openElements.getCommonAncestor(element);

	        var elementEntry = p.activeFormattingElements.getElementEntry(element);

	        if (!elementEntry) {
	            p.openElements.remove(element);
	            continue;
	        }

	        if (element === formattingElement)
	            break;

	        element = aaRecreateElementFromEntry(p, elementEntry);

	        if (lastElement === furthestBlock)
	            p.activeFormattingElements.bookmark = elementEntry;

	        p.treeAdapter.detachNode(lastElement);
	        p.treeAdapter.appendChild(element, lastElement);
	        lastElement = element;
	    }

	    return lastElement;
	}

	//Step 13.7 of the algorithm
	function aaRecreateElementFromEntry(p, elementEntry) {
	    var ns = p.treeAdapter.getNamespaceURI(elementEntry.element),
	        newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);

	    p.openElements.replace(elementEntry.element, newElement);
	    elementEntry.element = newElement;

	    return newElement;
	}

	//Step 14 of the algorithm
	function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
	    if (p._isElementCausesFosterParenting(commonAncestor))
	        p._fosterParentElement(lastElement);

	    else {
	        var tn = p.treeAdapter.getTagName(commonAncestor),
	            ns = p.treeAdapter.getNamespaceURI(commonAncestor);

	        if (tn === $.TEMPLATE && ns === NS.HTML)
	            commonAncestor = p.treeAdapter.getChildNodes(commonAncestor)[0];

	        p.treeAdapter.appendChild(commonAncestor, lastElement);
	    }
	}

	//Steps 15-19 of the algorithm
	function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
	    var ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element),
	        token = formattingElementEntry.token,
	        newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);

	    p._adoptNodes(furthestBlock, newElement);
	    p.treeAdapter.appendChild(furthestBlock, newElement);

	    p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
	    p.activeFormattingElements.removeEntry(formattingElementEntry);

	    p.openElements.remove(formattingElementEntry.element);
	    p.openElements.insertAfter(furthestBlock, newElement);
	}

	//Algorithm entry point
	function callAdoptionAgency(p, token) {
	    for (var i = 0; i < AA_OUTER_LOOP_ITER; i++) {
	        var formattingElementEntry = aaObtainFormattingElementEntry(p, token, formattingElementEntry);

	        if (!formattingElementEntry)
	            break;

	        var furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);

	        if (!furthestBlock)
	            break;

	        p.activeFormattingElements.bookmark = formattingElementEntry;

	        var lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element),
	            commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);

	        p.treeAdapter.detachNode(lastElement);
	        aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
	        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
	    }
	}


	//Generic token handlers
	//------------------------------------------------------------------
	function ignoreToken(p, token) {
	    //NOTE: do nothing =)
	}

	function appendComment(p, token) {
	    p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current)
	}

	function appendCommentToRootHtmlElement(p, token) {
	    p._appendCommentNode(token, p.openElements.items[0]);
	}

	function appendCommentToDocument(p, token) {
	    p._appendCommentNode(token, p.document);
	}

	function insertCharacters(p, token) {
	    p._insertCharacters(token);
	}

	function stopParsing(p, token) {
	    p.stopped = true;
	}

	//12.2.5.4.1 The "initial" insertion mode
	//------------------------------------------------------------------
	function doctypeInInitialMode(p, token) {
	    p._setDocumentType(token);

	    if (token.forceQuirks || Doctype.isQuirks(token.name, token.publicId, token.systemId))
	        p.treeAdapter.setQuirksMode(p.document);

	    p.insertionMode = BEFORE_HTML_MODE;
	}

	function tokenInInitialMode(p, token) {
	    p.treeAdapter.setQuirksMode(p.document);
	    p.insertionMode = BEFORE_HTML_MODE;
	    p._processToken(token);
	}


	//12.2.5.4.2 The "before html" insertion mode
	//------------------------------------------------------------------
	function startTagBeforeHtml(p, token) {
	    if (token.tagName === $.HTML) {
	        p._insertElement(token, NS.HTML);
	        p.insertionMode = BEFORE_HEAD_MODE;
	    }

	    else
	        tokenBeforeHtml(p, token);
	}

	function endTagBeforeHtml(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR)
	        tokenBeforeHtml(p, token);
	}

	function tokenBeforeHtml(p, token) {
	    p._insertFakeRootElement();
	    p.insertionMode = BEFORE_HEAD_MODE;
	    p._processToken(token);
	}


	//12.2.5.4.3 The "before head" insertion mode
	//------------------------------------------------------------------
	function startTagBeforeHead(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.HEAD) {
	        p._insertElement(token, NS.HTML);
	        p.headElement = p.openElements.current;
	        p.insertionMode = IN_HEAD_MODE;
	    }

	    else
	        tokenBeforeHead(p, token);
	}

	function endTagBeforeHead(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR)
	        tokenBeforeHead(p, token);
	}

	function tokenBeforeHead(p, token) {
	    p._processFakeStartTag($.HEAD);
	    p._processToken(token);
	}


	//12.2.5.4.4 The "in head" insertion mode
	//------------------------------------------------------------------
	function startTagInHead(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND ||
	             tn === $.COMMAND || tn === $.LINK || tn === $.META) {
	        p._appendElement(token, NS.HTML);
	    }

	    else if (tn === $.TITLE)
	        p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);

	    //NOTE: here we assume that we always act as an interactive user agent with enabled scripting, so we parse
	    //<noscript> as a rawtext.
	    else if (tn === $.NOSCRIPT || tn === $.NOFRAMES || tn === $.STYLE)
	        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);

	    else if (tn === $.SCRIPT)
	        p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);

	    else if (tn === $.TEMPLATE) {
	        p._insertTemplate(token, NS.HTML);
	        p.activeFormattingElements.insertMarker();
	        p.framesetOk = false;
	        p.insertionMode = IN_TEMPLATE_MODE;
	        p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
	    }

	    else if (tn !== $.HEAD)
	        tokenInHead(p, token);
	}

	function endTagInHead(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HEAD) {
	        p.openElements.pop();
	        p.insertionMode = AFTER_HEAD_MODE;
	    }

	    else if (tn === $.BODY || tn === $.BR || tn === $.HTML)
	        tokenInHead(p, token);

	    else if (tn === $.TEMPLATE && p.openElements.tmplCount > 0) {
	        p.openElements.generateImpliedEndTags();
	        p.openElements.popUntilTemplatePopped();
	        p.activeFormattingElements.clearToLastMarker();
	        p._popTmplInsertionMode();
	        p._resetInsertionMode();
	    }
	}

	function tokenInHead(p, token) {
	    p._processFakeEndTag($.HEAD);
	    p._processToken(token);
	}


	//12.2.5.4.6 The "after head" insertion mode
	//------------------------------------------------------------------
	function startTagAfterHead(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.BODY) {
	        p._insertElement(token, NS.HTML);
	        p.framesetOk = false;
	        p.insertionMode = IN_BODY_MODE;
	    }

	    else if (tn === $.FRAMESET) {
	        p._insertElement(token, NS.HTML);
	        p.insertionMode = IN_FRAMESET_MODE;
	    }

	    else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META ||
	             tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
	        p.openElements.push(p.headElement);
	        startTagInHead(p, token);
	        p.openElements.remove(p.headElement);
	    }

	    else if (tn !== $.HEAD)
	        tokenAfterHead(p, token);
	}

	function endTagAfterHead(p, token) {
	    var tn = token.tagName;

	    if (tn === $.BODY || tn === $.HTML || tn === $.BR)
	        tokenAfterHead(p, token);

	    else if (tn === $.TEMPLATE)
	        endTagInHead(p, token);
	}

	function tokenAfterHead(p, token) {
	    p._processFakeStartTag($.BODY);
	    p.framesetOk = true;
	    p._processToken(token);
	}


	//12.2.5.4.7 The "in body" insertion mode
	//------------------------------------------------------------------
	function whitespaceCharacterInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._insertCharacters(token);
	}

	function characterInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._insertCharacters(token);
	    p.framesetOk = false;
	}

	function htmlStartTagInBody(p, token) {
	    if (p.openElements.tmplCount === 0)
	        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
	}

	function bodyStartTagInBody(p, token) {
	    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

	    if (bodyElement && p.openElements.tmplCount === 0) {
	        p.framesetOk = false;
	        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
	    }
	}

	function framesetStartTagInBody(p, token) {
	    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

	    if (p.framesetOk && bodyElement) {
	        p.treeAdapter.detachNode(bodyElement);
	        p.openElements.popAllUpToHtmlElement();
	        p._insertElement(token, NS.HTML);
	        p.insertionMode = IN_FRAMESET_MODE;
	    }
	}

	function addressStartTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._insertElement(token, NS.HTML);
	}

	function numberedHeaderStartTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    var tn = p.openElements.currentTagName;

	    if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
	        p.openElements.pop();

	    p._insertElement(token, NS.HTML);
	}

	function preStartTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._insertElement(token, NS.HTML);
	    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
	    //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
	    p.skipNextNewLine = true;
	    p.framesetOk = false;
	}

	function formStartTagInBody(p, token) {
	    var inTemplate = p.openElements.tmplCount > 0;

	    if (!p.formElement || inTemplate) {
	        if (p.openElements.hasInButtonScope($.P))
	            p._closePElement();

	        p._insertElement(token, NS.HTML);

	        if (!inTemplate)
	            p.formElement = p.openElements.current;
	    }
	}

	function listItemStartTagInBody(p, token) {
	    p.framesetOk = false;

	    for (var i = p.openElements.stackTop; i >= 0; i--) {
	        var element = p.openElements.items[i],
	            tn = p.treeAdapter.getTagName(element);

	        if ((token.tagName === $.LI && tn === $.LI) ||
	            ((token.tagName === $.DD || token.tagName === $.DT) && (tn === $.DD || tn == $.DT))) {
	            p._processFakeEndTag(tn);
	            break;
	        }

	        if (tn !== $.ADDRESS && tn !== $.DIV && tn !== $.P && p._isSpecialElement(element))
	            break;
	    }

	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._insertElement(token, NS.HTML);
	}

	function plaintextStartTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._insertElement(token, NS.HTML);
	    p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
	}

	function buttonStartTagInBody(p, token) {
	    if (p.openElements.hasInScope($.BUTTON)) {
	        p._processFakeEndTag($.BUTTON);
	        buttonStartTagInBody(p, token);
	    }

	    else {
	        p._reconstructActiveFormattingElements();
	        p._insertElement(token, NS.HTML);
	        p.framesetOk = false;
	    }
	}

	function aStartTagInBody(p, token) {
	    var activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);

	    if (activeElementEntry) {
	        p._processFakeEndTag($.A);
	        p.openElements.remove(activeElementEntry.element);
	        p.activeFormattingElements.removeEntry(activeElementEntry);
	    }

	    p._reconstructActiveFormattingElements();
	    p._insertElement(token, NS.HTML);
	    p.activeFormattingElements.pushElement(p.openElements.current, token);
	}

	function bStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._insertElement(token, NS.HTML);
	    p.activeFormattingElements.pushElement(p.openElements.current, token);
	}

	function nobrStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();

	    if (p.openElements.hasInScope($.NOBR)) {
	        p._processFakeEndTag($.NOBR);
	        p._reconstructActiveFormattingElements();
	    }

	    p._insertElement(token, NS.HTML);
	    p.activeFormattingElements.pushElement(p.openElements.current, token);
	}

	function appletStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._insertElement(token, NS.HTML);
	    p.activeFormattingElements.insertMarker();
	    p.framesetOk = false;
	}

	function tableStartTagInBody(p, token) {
	    if (!p.treeAdapter.isQuirksMode(p.document) && p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._insertElement(token, NS.HTML);
	    p.framesetOk = false;
	    p.insertionMode = IN_TABLE_MODE;
	}

	function areaStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._appendElement(token, NS.HTML);
	    p.framesetOk = false;
	}

	function inputStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._appendElement(token, NS.HTML);

	    var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

	    if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE)
	        p.framesetOk = false;

	}

	function paramStartTagInBody(p, token) {
	    p._appendElement(token, NS.HTML);
	}

	function hrStartTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._appendElement(token, NS.HTML);
	    p.framesetOk = false;
	}

	function imageStartTagInBody(p, token) {
	    token.tagName = $.IMG;
	    areaStartTagInBody(p, token);
	}

	function isindexStartTagInBody(p, token) {
	    if (!p.formElement || p.openElements.tmplCount > 0) {
	        p._processFakeStartTagWithAttrs($.FORM, getSearchableIndexFormAttrs(token));
	        p._processFakeStartTag($.HR);
	        p._processFakeStartTag($.LABEL);
	        p.treeAdapter.insertText(p.openElements.current, getSearchableIndexLabelText(token));
	        p._processFakeStartTagWithAttrs($.INPUT, getSearchableIndexInputAttrs(token));
	        p._processFakeEndTag($.LABEL);
	        p._processFakeStartTag($.HR);
	        p._processFakeEndTag($.FORM);
	    }
	}

	function textareaStartTagInBody(p, token) {
	    p._insertElement(token, NS.HTML);
	    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
	    //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
	    p.skipNextNewLine = true;
	    p.tokenizer.state = Tokenizer.MODE.RCDATA;
	    p.originalInsertionMode = p.insertionMode;
	    p.framesetOk = false;
	    p.insertionMode = TEXT_MODE;
	}

	function xmpStartTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P))
	        p._closePElement();

	    p._reconstructActiveFormattingElements();
	    p.framesetOk = false;
	    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
	}

	function iframeStartTagInBody(p, token) {
	    p.framesetOk = false;
	    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
	}

	//NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
	//<noembed> as a rawtext.
	function noembedStartTagInBody(p, token) {
	    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
	}

	function selectStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._insertElement(token, NS.HTML);
	    p.framesetOk = false;

	    if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE ||
	        p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE ||
	        p.insertionMode === IN_CELL_MODE) {
	        p.insertionMode = IN_SELECT_IN_TABLE_MODE;
	    }

	    else
	        p.insertionMode = IN_SELECT_MODE;
	}

	function optgroupStartTagInBody(p, token) {
	    if (p.openElements.currentTagName === $.OPTION)
	        p._processFakeEndTag($.OPTION);

	    p._reconstructActiveFormattingElements();
	    p._insertElement(token, NS.HTML);
	}

	function rpStartTagInBody(p, token) {
	    if (p.openElements.hasInScope($.RUBY))
	        p.openElements.generateImpliedEndTags();

	    p._insertElement(token, NS.HTML);
	}

	function menuitemStartTagInBody(p, token) {
	    p._appendElement(token, NS.HTML);
	}

	function mathStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();

	    ForeignContent.adjustTokenMathMLAttrs(token);
	    ForeignContent.adjustTokenXMLAttrs(token);

	    if (token.selfClosing)
	        p._appendElement(token, NS.MATHML);
	    else
	        p._insertElement(token, NS.MATHML);
	}

	function svgStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();

	    ForeignContent.adjustTokenSVGAttrs(token);
	    ForeignContent.adjustTokenXMLAttrs(token);

	    if (token.selfClosing)
	        p._appendElement(token, NS.SVG);
	    else
	        p._insertElement(token, NS.SVG);
	}

	function genericStartTagInBody(p, token) {
	    p._reconstructActiveFormattingElements();
	    p._insertElement(token, NS.HTML);
	}

	//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
	//It's faster than using dictionary.
	function startTagInBody(p, token) {
	    var tn = token.tagName;

	    switch (tn.length) {
	        case 1:
	            if (tn === $.I || tn === $.S || tn === $.B || tn === $.U)
	                bStartTagInBody(p, token);

	            else if (tn === $.P)
	                addressStartTagInBody(p, token);

	            else if (tn === $.A)
	                aStartTagInBody(p, token);

	            else
	                genericStartTagInBody(p, token);

	            break;

	        case 2:
	            if (tn === $.DL || tn === $.OL || tn === $.UL)
	                addressStartTagInBody(p, token);

	            else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
	                numberedHeaderStartTagInBody(p, token);

	            else if (tn === $.LI || tn === $.DD || tn === $.DT)
	                listItemStartTagInBody(p, token);

	            else if (tn === $.EM || tn === $.TT)
	                bStartTagInBody(p, token);

	            else if (tn === $.BR)
	                areaStartTagInBody(p, token);

	            else if (tn === $.HR)
	                hrStartTagInBody(p, token);

	            else if (tn === $.RP || tn === $.RT)
	                rpStartTagInBody(p, token);

	            else if (tn !== $.TH && tn !== $.TD && tn !== $.TR)
	                genericStartTagInBody(p, token);

	            break;

	        case 3:
	            if (tn === $.DIV || tn === $.DIR || tn === $.NAV)
	                addressStartTagInBody(p, token);

	            else if (tn === $.PRE)
	                preStartTagInBody(p, token);

	            else if (tn === $.BIG)
	                bStartTagInBody(p, token);

	            else if (tn === $.IMG || tn === $.WBR)
	                areaStartTagInBody(p, token);

	            else if (tn === $.XMP)
	                xmpStartTagInBody(p, token);

	            else if (tn === $.SVG)
	                svgStartTagInBody(p, token);

	            else if (tn !== $.COL)
	                genericStartTagInBody(p, token);

	            break;

	        case 4:
	            if (tn === $.HTML)
	                htmlStartTagInBody(p, token);

	            else if (tn === $.BASE || tn === $.LINK || tn === $.META)
	                startTagInHead(p, token);

	            else if (tn === $.BODY)
	                bodyStartTagInBody(p, token);

	            else if (tn === $.MAIN || tn === $.MENU)
	                addressStartTagInBody(p, token);

	            else if (tn === $.FORM)
	                formStartTagInBody(p, token);

	            else if (tn === $.CODE || tn === $.FONT)
	                bStartTagInBody(p, token);

	            else if (tn === $.NOBR)
	                nobrStartTagInBody(p, token);

	            else if (tn === $.AREA)
	                areaStartTagInBody(p, token);

	            else if (tn === $.MATH)
	                mathStartTagInBody(p, token);

	            else if (tn !== $.HEAD)
	                genericStartTagInBody(p, token);

	            break;

	        case 5:
	            if (tn === $.STYLE || tn === $.TITLE)
	                startTagInHead(p, token);

	            else if (tn === $.ASIDE)
	                addressStartTagInBody(p, token);

	            else if (tn === $.SMALL)
	                bStartTagInBody(p, token);

	            else if (tn === $.TABLE)
	                tableStartTagInBody(p, token);

	            else if (tn === $.EMBED)
	                areaStartTagInBody(p, token);

	            else if (tn === $.INPUT)
	                inputStartTagInBody(p, token);

	            else if (tn === $.PARAM || tn === $.TRACK)
	                paramStartTagInBody(p, token);

	            else if (tn === $.IMAGE)
	                imageStartTagInBody(p, token);

	            else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD)
	                genericStartTagInBody(p, token);

	            break;

	        case 6:
	            if (tn === $.SCRIPT)
	                startTagInHead(p, token);

	            else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP)
	                addressStartTagInBody(p, token);

	            else if (tn === $.BUTTON)
	                buttonStartTagInBody(p, token);

	            else if (tn === $.STRIKE || tn === $.STRONG)
	                bStartTagInBody(p, token);

	            else if (tn === $.APPLET || tn === $.OBJECT)
	                appletStartTagInBody(p, token);

	            else if (tn === $.KEYGEN)
	                areaStartTagInBody(p, token);

	            else if (tn === $.SOURCE)
	                paramStartTagInBody(p, token);

	            else if (tn === $.IFRAME)
	                iframeStartTagInBody(p, token);

	            else if (tn === $.SELECT)
	                selectStartTagInBody(p, token);

	            else if (tn === $.OPTION)
	                optgroupStartTagInBody(p, token);

	            else
	                genericStartTagInBody(p, token);

	            break;

	        case 7:
	            if (tn === $.BGSOUND || tn === $.COMMAND)
	                startTagInHead(p, token);

	            else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY)
	                addressStartTagInBody(p, token);

	            else if (tn === $.LISTING)
	                preStartTagInBody(p, token);

	            else if (tn === $.MARQUEE)
	                appletStartTagInBody(p, token);

	            else if (tn === $.ISINDEX)
	                isindexStartTagInBody(p, token);

	            else if (tn === $.NOEMBED)
	                noembedStartTagInBody(p, token);

	            else if (tn !== $.CAPTION)
	                genericStartTagInBody(p, token);

	            break;

	        case 8:
	            if (tn === $.BASEFONT || tn === $.MENUITEM)
	                menuitemStartTagInBody(p, token);

	            else if (tn === $.FRAMESET)
	                framesetStartTagInBody(p, token);

	            else if (tn === $.FIELDSET)
	                addressStartTagInBody(p, token);

	            else if (tn === $.TEXTAREA)
	                textareaStartTagInBody(p, token);

	            else if (tn === $.TEMPLATE)
	                startTagInHead(p, token);

	            else if (tn === $.NOSCRIPT)
	                noembedStartTagInBody(p, token);

	            else if (tn === $.OPTGROUP)
	                optgroupStartTagInBody(p, token);

	            else if (tn !== $.COLGROUP)
	                genericStartTagInBody(p, token);

	            break;

	        case 9:
	            if (tn === $.PLAINTEXT)
	                plaintextStartTagInBody(p, token);

	            else
	                genericStartTagInBody(p, token);

	            break;

	        case 10:
	            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION)
	                addressStartTagInBody(p, token);

	            else
	                genericStartTagInBody(p, token);

	            break;

	        default:
	            genericStartTagInBody(p, token);
	    }
	}

	function bodyEndTagInBody(p, token) {
	    if (p.openElements.hasInScope($.BODY))
	        p.insertionMode = AFTER_BODY_MODE;

	    else
	        token.ignored = true;
	}

	function htmlEndTagInBody(p, token) {
	    var fakeToken = p._processFakeEndTag($.BODY);

	    if (!fakeToken.ignored)
	        p._processToken(token);
	}

	function addressEndTagInBody(p, token) {
	    var tn = token.tagName;

	    if (p.openElements.hasInScope(tn)) {
	        p.openElements.generateImpliedEndTags();
	        p.openElements.popUntilTagNamePopped(tn);
	    }
	}

	function formEndTagInBody(p, token) {
	    var inTemplate = p.openElements.tmplCount > 0,
	        formElement = p.formElement;

	    if (!inTemplate)
	        p.formElement = null;

	    if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
	        p.openElements.generateImpliedEndTags();

	        if (inTemplate)
	            p.openElements.popUntilTagNamePopped($.FORM);

	        else
	            p.openElements.remove(formElement);
	    }
	}

	function pEndTagInBody(p, token) {
	    if (p.openElements.hasInButtonScope($.P)) {
	        p.openElements.generateImpliedEndTagsWithExclusion($.P);
	        p.openElements.popUntilTagNamePopped($.P);
	    }

	    else {
	        p._processFakeStartTag($.P);
	        p._processToken(token);
	    }
	}

	function liEndTagInBody(p, token) {
	    if (p.openElements.hasInListItemScope($.LI)) {
	        p.openElements.generateImpliedEndTagsWithExclusion($.LI);
	        p.openElements.popUntilTagNamePopped($.LI);
	    }
	}

	function ddEndTagInBody(p, token) {
	    var tn = token.tagName;

	    if (p.openElements.hasInScope(tn)) {
	        p.openElements.generateImpliedEndTagsWithExclusion(tn);
	        p.openElements.popUntilTagNamePopped(tn);
	    }
	}

	function numberedHeaderEndTagInBody(p, token) {
	    if (p.openElements.hasNumberedHeaderInScope()) {
	        p.openElements.generateImpliedEndTags();
	        p.openElements.popUntilNumberedHeaderPopped();
	    }
	}

	function appletEndTagInBody(p, token) {
	    var tn = token.tagName;

	    if (p.openElements.hasInScope(tn)) {
	        p.openElements.generateImpliedEndTags();
	        p.openElements.popUntilTagNamePopped(tn);
	        p.activeFormattingElements.clearToLastMarker();
	    }
	}

	function brEndTagInBody(p, token) {
	    p._processFakeStartTag($.BR);
	}

	function genericEndTagInBody(p, token) {
	    var tn = token.tagName;

	    for (var i = p.openElements.stackTop; i > 0; i--) {
	        var element = p.openElements.items[i];

	        if (p.treeAdapter.getTagName(element) === tn) {
	            p.openElements.generateImpliedEndTagsWithExclusion(tn);
	            p.openElements.popUntilElementPopped(element);
	            break;
	        }

	        if (p._isSpecialElement(element))
	            break;
	    }
	}

	//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
	//It's faster than using dictionary.
	function endTagInBody(p, token) {
	    var tn = token.tagName;

	    switch (tn.length) {
	        case 1:
	            if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn == $.U)
	                callAdoptionAgency(p, token);

	            else if (tn === $.P)
	                pEndTagInBody(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 2:
	            if (tn == $.DL || tn === $.UL || tn === $.OL)
	                addressEndTagInBody(p, token);

	            else if (tn === $.LI)
	                liEndTagInBody(p, token);

	            else if (tn === $.DD || tn === $.DT)
	                ddEndTagInBody(p, token);

	            else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
	                numberedHeaderEndTagInBody(p, token);

	            else if (tn === $.BR)
	                brEndTagInBody(p, token);

	            else if (tn === $.EM || tn === $.TT)
	                callAdoptionAgency(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 3:
	            if (tn === $.BIG)
	                callAdoptionAgency(p, token);

	            else if (tn === $.DIR || tn === $.DIV || tn === $.NAV)
	                addressEndTagInBody(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 4:
	            if (tn === $.BODY)
	                bodyEndTagInBody(p, token);

	            else if (tn === $.HTML)
	                htmlEndTagInBody(p, token);

	            else if (tn === $.FORM)
	                formEndTagInBody(p, token);

	            else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR)
	                callAdoptionAgency(p, token);

	            else if (tn === $.MAIN || tn === $.MENU)
	                addressEndTagInBody(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 5:
	            if (tn === $.ASIDE)
	                addressEndTagInBody(p, token);

	            else if (tn === $.SMALL)
	                callAdoptionAgency(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 6:
	            if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP)
	                addressEndTagInBody(p, token);

	            else if (tn === $.APPLET || tn === $.OBJECT)
	                appletEndTagInBody(p, token);

	            else if (tn == $.STRIKE || tn === $.STRONG)
	                callAdoptionAgency(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 7:
	            if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY)
	                addressEndTagInBody(p, token);

	            else if (tn === $.MARQUEE)
	                appletEndTagInBody(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 8:
	            if (tn === $.FIELDSET)
	                addressEndTagInBody(p, token);

	            else if (tn === $.TEMPLATE)
	                endTagInHead(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        case 10:
	            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION)
	                addressEndTagInBody(p, token);

	            else
	                genericEndTagInBody(p, token);

	            break;

	        default :
	            genericEndTagInBody(p, token);
	    }
	}

	function eofInBody(p, token) {
	    if (p.tmplInsertionModeStackTop > -1)
	        eofInTemplate(p, token);

	    else
	        p.stopped = true;
	}

	//12.2.5.4.8 The "text" insertion mode
	//------------------------------------------------------------------
	function endTagInText(p, token) {
	    if (!p.fragmentContext && p.scriptHandler && token.tagName === $.SCRIPT)
	        p.scriptHandler(p.document, p.openElements.current);

	    p.openElements.pop();
	    p.insertionMode = p.originalInsertionMode;
	}


	function eofInText(p, token) {
	    p.openElements.pop();
	    p.insertionMode = p.originalInsertionMode;
	    p._processToken(token);
	}


	//12.2.5.4.9 The "in table" insertion mode
	//------------------------------------------------------------------
	function characterInTable(p, token) {
	    var curTn = p.openElements.currentTagName;

	    if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
	        p.pendingCharacterTokens = [];
	        p.hasNonWhitespacePendingCharacterToken = false;
	        p.originalInsertionMode = p.insertionMode;
	        p.insertionMode = IN_TABLE_TEXT_MODE;
	        p._processToken(token);
	    }

	    else
	        tokenInTable(p, token);
	}

	function captionStartTagInTable(p, token) {
	    p.openElements.clearBackToTableContext();
	    p.activeFormattingElements.insertMarker();
	    p._insertElement(token, NS.HTML);
	    p.insertionMode = IN_CAPTION_MODE;
	}

	function colgroupStartTagInTable(p, token) {
	    p.openElements.clearBackToTableContext();
	    p._insertElement(token, NS.HTML);
	    p.insertionMode = IN_COLUMN_GROUP_MODE;
	}

	function colStartTagInTable(p, token) {
	    p._processFakeStartTag($.COLGROUP);
	    p._processToken(token);
	}

	function tbodyStartTagInTable(p, token) {
	    p.openElements.clearBackToTableContext();
	    p._insertElement(token, NS.HTML);
	    p.insertionMode = IN_TABLE_BODY_MODE;
	}

	function tdStartTagInTable(p, token) {
	    p._processFakeStartTag($.TBODY);
	    p._processToken(token);
	}

	function tableStartTagInTable(p, token) {
	    var fakeToken = p._processFakeEndTag($.TABLE);

	    //NOTE: The fake end tag token here can only be ignored in the fragment case.
	    if (!fakeToken.ignored)
	        p._processToken(token);
	}

	function inputStartTagInTable(p, token) {
	    var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

	    if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE)
	        p._appendElement(token, NS.HTML);

	    else
	        tokenInTable(p, token);
	}

	function formStartTagInTable(p, token) {
	    if (!p.formElement && p.openElements.tmplCount === 0) {
	        p._insertElement(token, NS.HTML);
	        p.formElement = p.openElements.current;
	        p.openElements.pop();
	    }
	}

	function startTagInTable(p, token) {
	    var tn = token.tagName;

	    switch (tn.length) {
	        case 2:
	            if (tn === $.TD || tn === $.TH || tn === $.TR)
	                tdStartTagInTable(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        case 3:
	            if (tn === $.COL)
	                colStartTagInTable(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        case 4:
	            if (tn === $.FORM)
	                formStartTagInTable(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        case 5:
	            if (tn === $.TABLE)
	                tableStartTagInTable(p, token);

	            else if (tn === $.STYLE)
	                startTagInHead(p, token);

	            else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD)
	                tbodyStartTagInTable(p, token);

	            else if (tn === $.INPUT)
	                inputStartTagInTable(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        case 6:
	            if (tn === $.SCRIPT)
	                startTagInHead(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        case 7:
	            if (tn === $.CAPTION)
	                captionStartTagInTable(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        case 8:
	            if (tn === $.COLGROUP)
	                colgroupStartTagInTable(p, token);

	            else if (tn === $.TEMPLATE)
	                startTagInHead(p, token);

	            else
	                tokenInTable(p, token);

	            break;

	        default:
	            tokenInTable(p, token);
	    }

	}

	function endTagInTable(p, token) {
	    var tn = token.tagName;

	    if (tn === $.TABLE) {
	        if (p.openElements.hasInTableScope($.TABLE)) {
	            p.openElements.popUntilTagNamePopped($.TABLE);
	            p._resetInsertionMode();
	        }

	        else
	            token.ignored = true;
	    }

	    else if (tn === $.TEMPLATE)
	        endTagInHead(p, token);

	    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML &&
	             tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
	        tokenInTable(p, token);
	    }
	}

	function tokenInTable(p, token) {
	    var savedFosterParentingState = p.fosterParentingEnabled;

	    p.fosterParentingEnabled = true;
	    p._processTokenInBodyMode(token);
	    p.fosterParentingEnabled = savedFosterParentingState;
	}


	//12.2.5.4.10 The "in table text" insertion mode
	//------------------------------------------------------------------
	function whitespaceCharacterInTableText(p, token) {
	    p.pendingCharacterTokens.push(token);
	}

	function characterInTableText(p, token) {
	    p.pendingCharacterTokens.push(token);
	    p.hasNonWhitespacePendingCharacterToken = true;
	}

	function tokenInTableText(p, token) {
	    if (p.hasNonWhitespacePendingCharacterToken) {
	        for (var i = 0; i < p.pendingCharacterTokens.length; i++)
	            tokenInTable(p, p.pendingCharacterTokens[i]);
	    }

	    else {
	        for (var i = 0; i < p.pendingCharacterTokens.length; i++)
	            p._insertCharacters(p.pendingCharacterTokens[i]);
	    }

	    p.insertionMode = p.originalInsertionMode;
	    p._processToken(token);
	}


	//12.2.5.4.11 The "in caption" insertion mode
	//------------------------------------------------------------------
	function startTagInCaption(p, token) {
	    var tn = token.tagName;

	    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
	        tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
	        var fakeToken = p._processFakeEndTag($.CAPTION);

	        //NOTE: The fake end tag token here can only be ignored in the fragment case.
	        if (!fakeToken.ignored)
	            p._processToken(token);
	    }

	    else
	        startTagInBody(p, token);
	}

	function endTagInCaption(p, token) {
	    var tn = token.tagName;

	    if (tn === $.CAPTION) {
	        if (p.openElements.hasInTableScope($.CAPTION)) {
	            p.openElements.generateImpliedEndTags();
	            p.openElements.popUntilTagNamePopped($.CAPTION);
	            p.activeFormattingElements.clearToLastMarker();
	            p.insertionMode = IN_TABLE_MODE;
	        }

	        else
	            token.ignored = true;
	    }

	    else if (tn === $.TABLE) {
	        var fakeToken = p._processFakeEndTag($.CAPTION);

	        //NOTE: The fake end tag token here can only be ignored in the fragment case.
	        if (!fakeToken.ignored)
	            p._processToken(token);
	    }

	    else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY &&
	             tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
	        endTagInBody(p, token);
	    }
	}


	//12.2.5.4.12 The "in column group" insertion mode
	//------------------------------------------------------------------
	function startTagInColumnGroup(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.COL)
	        p._appendElement(token, NS.HTML);

	    else if (tn === $.TEMPLATE)
	        startTagInHead(p, token);

	    else
	        tokenInColumnGroup(p, token);
	}

	function endTagInColumnGroup(p, token) {
	    var tn = token.tagName;

	    if (tn === $.COLGROUP) {
	        if (p.openElements.currentTagName !== $.COLGROUP)
	            token.ignored = true;

	        else {
	            p.openElements.pop();
	            p.insertionMode = IN_TABLE_MODE;
	        }
	    }

	    else if (tn === $.TEMPLATE)
	        endTagInHead(p, token);

	    else if (tn !== $.COL)
	        tokenInColumnGroup(p, token);
	}

	function tokenInColumnGroup(p, token) {
	    var fakeToken = p._processFakeEndTag($.COLGROUP);

	    //NOTE: The fake end tag token here can only be ignored in the fragment case.
	    if (!fakeToken.ignored)
	        p._processToken(token);
	}

	//12.2.5.4.13 The "in table body" insertion mode
	//------------------------------------------------------------------
	function startTagInTableBody(p, token) {
	    var tn = token.tagName;

	    if (tn === $.TR) {
	        p.openElements.clearBackToTableBodyContext();
	        p._insertElement(token, NS.HTML);
	        p.insertionMode = IN_ROW_MODE;
	    }

	    else if (tn === $.TH || tn === $.TD) {
	        p._processFakeStartTag($.TR);
	        p._processToken(token);
	    }

	    else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP ||
	             tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {

	        if (p.openElements.hasTableBodyContextInTableScope()) {
	            p.openElements.clearBackToTableBodyContext();
	            p._processFakeEndTag(p.openElements.currentTagName);
	            p._processToken(token);
	        }
	    }

	    else
	        startTagInTable(p, token);
	}

	function endTagInTableBody(p, token) {
	    var tn = token.tagName;

	    if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
	        if (p.openElements.hasInTableScope(tn)) {
	            p.openElements.clearBackToTableBodyContext();
	            p.openElements.pop();
	            p.insertionMode = IN_TABLE_MODE;
	        }
	    }

	    else if (tn === $.TABLE) {
	        if (p.openElements.hasTableBodyContextInTableScope()) {
	            p.openElements.clearBackToTableBodyContext();
	            p._processFakeEndTag(p.openElements.currentTagName);
	            p._processToken(token);
	        }
	    }

	    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP ||
	             tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR) {
	        endTagInTable(p, token);
	    }
	}

	//12.2.5.4.14 The "in row" insertion mode
	//------------------------------------------------------------------
	function startTagInRow(p, token) {
	    var tn = token.tagName;

	    if (tn === $.TH || tn === $.TD) {
	        p.openElements.clearBackToTableRowContext();
	        p._insertElement(token, NS.HTML);
	        p.insertionMode = IN_CELL_MODE;
	        p.activeFormattingElements.insertMarker();
	    }

	    else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
	             tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
	        var fakeToken = p._processFakeEndTag($.TR);

	        //NOTE: The fake end tag token here can only be ignored in the fragment case.
	        if (!fakeToken.ignored)
	            p._processToken(token);
	    }

	    else
	        startTagInTable(p, token);
	}

	function endTagInRow(p, token) {
	    var tn = token.tagName;

	    if (tn === $.TR) {
	        if (p.openElements.hasInTableScope($.TR)) {
	            p.openElements.clearBackToTableRowContext();
	            p.openElements.pop();
	            p.insertionMode = IN_TABLE_BODY_MODE;
	        }

	        else
	            token.ignored = true;
	    }

	    else if (tn === $.TABLE) {
	        var fakeToken = p._processFakeEndTag($.TR);

	        //NOTE: The fake end tag token here can only be ignored in the fragment case.
	        if (!fakeToken.ignored)
	            p._processToken(token);
	    }

	    else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
	        if (p.openElements.hasInTableScope(tn)) {
	            p._processFakeEndTag($.TR);
	            p._processToken(token);
	        }
	    }

	    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP ||
	             tn !== $.HTML && tn !== $.TD && tn !== $.TH) {
	        endTagInTable(p, token);
	    }
	}


	//12.2.5.4.15 The "in cell" insertion mode
	//------------------------------------------------------------------
	function startTagInCell(p, token) {
	    var tn = token.tagName;

	    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
	        tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {

	        if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
	            p._closeTableCell();
	            p._processToken(token);
	        }
	    }

	    else
	        startTagInBody(p, token);
	}

	function endTagInCell(p, token) {
	    var tn = token.tagName;

	    if (tn === $.TD || tn === $.TH) {
	        if (p.openElements.hasInTableScope(tn)) {
	            p.openElements.generateImpliedEndTags();
	            p.openElements.popUntilTagNamePopped(tn);
	            p.activeFormattingElements.clearToLastMarker();
	            p.insertionMode = IN_ROW_MODE;
	        }
	    }

	    else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
	        if (p.openElements.hasInTableScope(tn)) {
	            p._closeTableCell();
	            p._processToken(token);
	        }
	    }

	    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML)
	        endTagInBody(p, token);
	}

	//12.2.5.4.16 The "in select" insertion mode
	//------------------------------------------------------------------
	function startTagInSelect(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.OPTION) {
	        if (p.openElements.currentTagName === $.OPTION)
	            p._processFakeEndTag($.OPTION);

	        p._insertElement(token, NS.HTML);
	    }

	    else if (tn === $.OPTGROUP) {
	        if (p.openElements.currentTagName === $.OPTION)
	            p._processFakeEndTag($.OPTION);

	        if (p.openElements.currentTagName === $.OPTGROUP)
	            p._processFakeEndTag($.OPTGROUP);

	        p._insertElement(token, NS.HTML);
	    }

	    else if (tn === $.SELECT)
	        p._processFakeEndTag($.SELECT);

	    else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA) {
	        if (p.openElements.hasInSelectScope($.SELECT)) {
	            p._processFakeEndTag($.SELECT);
	            p._processToken(token);
	        }
	    }

	    else if (tn === $.SCRIPT || tn === $.TEMPLATE)
	        startTagInHead(p, token);
	}

	function endTagInSelect(p, token) {
	    var tn = token.tagName;

	    if (tn === $.OPTGROUP) {
	        var prevOpenElement = p.openElements.items[p.openElements.stackTop - 1],
	            prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);

	        if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP)
	            p._processFakeEndTag($.OPTION);

	        if (p.openElements.currentTagName === $.OPTGROUP)
	            p.openElements.pop();
	    }

	    else if (tn === $.OPTION) {
	        if (p.openElements.currentTagName === $.OPTION)
	            p.openElements.pop();
	    }

	    else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
	        p.openElements.popUntilTagNamePopped($.SELECT);
	        p._resetInsertionMode();
	    }

	    else if (tn === $.TEMPLATE)
	        endTagInHead(p, token);
	}

	//12.2.5.4.17 The "in select in table" insertion mode
	//------------------------------------------------------------------
	function startTagInSelectInTable(p, token) {
	    var tn = token.tagName;

	    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT ||
	        tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
	        p._processFakeEndTag($.SELECT);
	        p._processToken(token);
	    }

	    else
	        startTagInSelect(p, token);
	}

	function endTagInSelectInTable(p, token) {
	    var tn = token.tagName;

	    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT ||
	        tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
	        if (p.openElements.hasInTableScope(tn)) {
	            p._processFakeEndTag($.SELECT);
	            p._processToken(token);
	        }
	    }

	    else
	        endTagInSelect(p, token);
	}

	//12.2.5.4.18 The "in template" insertion mode
	//------------------------------------------------------------------
	function startTagInTemplate(p, token) {
	    var tn = token.tagName;

	    if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META ||
	        tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
	        startTagInHead(p, token);
	    }

	    else {
	        var newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;

	        p._popTmplInsertionMode();
	        p._pushTmplInsertionMode(newInsertionMode);
	        p.insertionMode = newInsertionMode;
	        p._processToken(token);
	    }
	}

	function endTagInTemplate(p, token) {
	    if (token.tagName === $.TEMPLATE)
	        endTagInHead(p, token);
	}

	function eofInTemplate(p, token) {
	    if (p.openElements.tmplCount > 0) {
	        p.openElements.popUntilTemplatePopped();
	        p.activeFormattingElements.clearToLastMarker();
	        p._popTmplInsertionMode();
	        p._resetInsertionMode();
	        p._processToken(token);
	    }

	    else
	        p.stopped = true;
	}


	//12.2.5.4.19 The "after body" insertion mode
	//------------------------------------------------------------------
	function startTagAfterBody(p, token) {
	    if (token.tagName === $.HTML)
	        startTagInBody(p, token);

	    else
	        tokenAfterBody(p, token);
	}

	function endTagAfterBody(p, token) {
	    if (token.tagName === $.HTML) {
	        if (!p.fragmentContext)
	            p.insertionMode = AFTER_AFTER_BODY_MODE;
	    }

	    else
	        tokenAfterBody(p, token);
	}

	function tokenAfterBody(p, token) {
	    p.insertionMode = IN_BODY_MODE;
	    p._processToken(token);
	}

	//12.2.5.4.20 The "in frameset" insertion mode
	//------------------------------------------------------------------
	function startTagInFrameset(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.FRAMESET)
	        p._insertElement(token, NS.HTML);

	    else if (tn === $.FRAME)
	        p._appendElement(token, NS.HTML);

	    else if (tn === $.NOFRAMES)
	        startTagInHead(p, token);
	}

	function endTagInFrameset(p, token) {
	    if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
	        p.openElements.pop();

	        if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET)
	            p.insertionMode = AFTER_FRAMESET_MODE;
	    }
	}

	//12.2.5.4.21 The "after frameset" insertion mode
	//------------------------------------------------------------------
	function startTagAfterFrameset(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.NOFRAMES)
	        startTagInHead(p, token);
	}

	function endTagAfterFrameset(p, token) {
	    if (token.tagName === $.HTML)
	        p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
	}

	//12.2.5.4.22 The "after after body" insertion mode
	//------------------------------------------------------------------
	function startTagAfterAfterBody(p, token) {
	    if (token.tagName === $.HTML)
	        startTagInBody(p, token);

	    else
	        tokenAfterAfterBody(p, token);
	}

	function tokenAfterAfterBody(p, token) {
	    p.insertionMode = IN_BODY_MODE;
	    p._processToken(token);
	}

	//12.2.5.4.23 The "after after frameset" insertion mode
	//------------------------------------------------------------------
	function startTagAfterAfterFrameset(p, token) {
	    var tn = token.tagName;

	    if (tn === $.HTML)
	        startTagInBody(p, token);

	    else if (tn === $.NOFRAMES)
	        startTagInHead(p, token);
	}


	//12.2.5.5 The rules for parsing tokens in foreign content
	//------------------------------------------------------------------
	function nullCharacterInForeignContent(p, token) {
	    token.chars = UNICODE.REPLACEMENT_CHARACTER;
	    p._insertCharacters(token);
	}

	function characterInForeignContent(p, token) {
	    p._insertCharacters(token);
	    p.framesetOk = false;
	}

	function startTagInForeignContent(p, token) {
	    if (ForeignContent.causesExit(token) && !p.fragmentContext) {
	        while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML &&
	               (!p._isMathMLTextIntegrationPoint(p.openElements.current)) &&
	               (!p._isHtmlIntegrationPoint(p.openElements.current))) {
	            p.openElements.pop();
	        }

	        p._processToken(token);
	    }

	    else {
	        var current = p._getAdjustedCurrentElement(),
	            currentNs = p.treeAdapter.getNamespaceURI(current);

	        if (currentNs === NS.MATHML)
	            ForeignContent.adjustTokenMathMLAttrs(token);

	        else if (currentNs === NS.SVG) {
	            ForeignContent.adjustTokenSVGTagName(token);
	            ForeignContent.adjustTokenSVGAttrs(token);
	        }

	        ForeignContent.adjustTokenXMLAttrs(token);

	        if (token.selfClosing)
	            p._appendElement(token, currentNs);
	        else
	            p._insertElement(token, currentNs);
	    }
	}

	function endTagInForeignContent(p, token) {
	    for (var i = p.openElements.stackTop; i > 0; i--) {
	        var element = p.openElements.items[i];

	        if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
	            p._processToken(token);
	            break;
	        }

	        if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
	            p.openElements.popUntilElementPopped(element);
	            break;
	        }
	    }
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Preprocessor = __webpack_require__(28),
	    LocationInfoMixin = __webpack_require__(30),
	    UNICODE = __webpack_require__(29),
	    NAMED_ENTITY_TRIE = __webpack_require__(31);

	//Aliases
	var $ = UNICODE.CODE_POINTS,
	    $$ = UNICODE.CODE_POINT_SEQUENCES;

	//Replacement code points for numeric entities
	var NUMERIC_ENTITY_REPLACEMENTS = {
	    0x00: 0xFFFD, 0x0D: 0x000D, 0x80: 0x20AC, 0x81: 0x0081, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E,
	    0x85: 0x2026, 0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0160, 0x8B: 0x2039,
	    0x8C: 0x0152, 0x8D: 0x008D, 0x8E: 0x017D, 0x8F: 0x008F, 0x90: 0x0090, 0x91: 0x2018, 0x92: 0x2019,
	    0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014, 0x98: 0x02DC, 0x99: 0x2122,
	    0x9A: 0x0161, 0x9B: 0x203A, 0x9C: 0x0153, 0x9D: 0x009D, 0x9E: 0x017E, 0x9F: 0x0178
	};

	//States
	var DATA_STATE = 'DATA_STATE',
	    CHARACTER_REFERENCE_IN_DATA_STATE = 'CHARACTER_REFERENCE_IN_DATA_STATE',
	    RCDATA_STATE = 'RCDATA_STATE',
	    CHARACTER_REFERENCE_IN_RCDATA_STATE = 'CHARACTER_REFERENCE_IN_RCDATA_STATE',
	    RAWTEXT_STATE = 'RAWTEXT_STATE',
	    SCRIPT_DATA_STATE = 'SCRIPT_DATA_STATE',
	    PLAINTEXT_STATE = 'PLAINTEXT_STATE',
	    TAG_OPEN_STATE = 'TAG_OPEN_STATE',
	    END_TAG_OPEN_STATE = 'END_TAG_OPEN_STATE',
	    TAG_NAME_STATE = 'TAG_NAME_STATE',
	    RCDATA_LESS_THAN_SIGN_STATE = 'RCDATA_LESS_THAN_SIGN_STATE',
	    RCDATA_END_TAG_OPEN_STATE = 'RCDATA_END_TAG_OPEN_STATE',
	    RCDATA_END_TAG_NAME_STATE = 'RCDATA_END_TAG_NAME_STATE',
	    RAWTEXT_LESS_THAN_SIGN_STATE = 'RAWTEXT_LESS_THAN_SIGN_STATE',
	    RAWTEXT_END_TAG_OPEN_STATE = 'RAWTEXT_END_TAG_OPEN_STATE',
	    RAWTEXT_END_TAG_NAME_STATE = 'RAWTEXT_END_TAG_NAME_STATE',
	    SCRIPT_DATA_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE',
	    SCRIPT_DATA_END_TAG_OPEN_STATE = 'SCRIPT_DATA_END_TAG_OPEN_STATE',
	    SCRIPT_DATA_END_TAG_NAME_STATE = 'SCRIPT_DATA_END_TAG_NAME_STATE',
	    SCRIPT_DATA_ESCAPE_START_STATE = 'SCRIPT_DATA_ESCAPE_START_STATE',
	    SCRIPT_DATA_ESCAPE_START_DASH_STATE = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE',
	    SCRIPT_DATA_ESCAPED_STATE = 'SCRIPT_DATA_ESCAPED_STATE',
	    SCRIPT_DATA_ESCAPED_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_STATE',
	    SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE',
	    SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE',
	    SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE',
	    SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE',
	    SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE',
	    SCRIPT_DATA_DOUBLE_ESCAPED_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE',
	    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE',
	    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE',
	    SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE',
	    SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE',
	    BEFORE_ATTRIBUTE_NAME_STATE = 'BEFORE_ATTRIBUTE_NAME_STATE',
	    ATTRIBUTE_NAME_STATE = 'ATTRIBUTE_NAME_STATE',
	    AFTER_ATTRIBUTE_NAME_STATE = 'AFTER_ATTRIBUTE_NAME_STATE',
	    BEFORE_ATTRIBUTE_VALUE_STATE = 'BEFORE_ATTRIBUTE_VALUE_STATE',
	    ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE',
	    ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE',
	    ATTRIBUTE_VALUE_UNQUOTED_STATE = 'ATTRIBUTE_VALUE_UNQUOTED_STATE',
	    CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE = 'CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE',
	    AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE',
	    SELF_CLOSING_START_TAG_STATE = 'SELF_CLOSING_START_TAG_STATE',
	    BOGUS_COMMENT_STATE = 'BOGUS_COMMENT_STATE',
	    MARKUP_DECLARATION_OPEN_STATE = 'MARKUP_DECLARATION_OPEN_STATE',
	    COMMENT_START_STATE = 'COMMENT_START_STATE',
	    COMMENT_START_DASH_STATE = 'COMMENT_START_DASH_STATE',
	    COMMENT_STATE = 'COMMENT_STATE',
	    COMMENT_END_DASH_STATE = 'COMMENT_END_DASH_STATE',
	    COMMENT_END_STATE = 'COMMENT_END_STATE',
	    COMMENT_END_BANG_STATE = 'COMMENT_END_BANG_STATE',
	    DOCTYPE_STATE = 'DOCTYPE_STATE',
	    BEFORE_DOCTYPE_NAME_STATE = 'BEFORE_DOCTYPE_NAME_STATE',
	    DOCTYPE_NAME_STATE = 'DOCTYPE_NAME_STATE',
	    AFTER_DOCTYPE_NAME_STATE = 'AFTER_DOCTYPE_NAME_STATE',
	    AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = 'AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE',
	    BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE',
	    DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE',
	    DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE',
	    AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE',
	    BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE',
	    AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = 'AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE',
	    BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
	    DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE',
	    DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE',
	    AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
	    BOGUS_DOCTYPE_STATE = 'BOGUS_DOCTYPE_STATE',
	    CDATA_SECTION_STATE = 'CDATA_SECTION_STATE';

	//Utils

	//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
	//this functions if they will be situated in another module due to context switch.
	//Always perform inlining check before modifying this functions ('node --trace-inlining').
	function isWhitespace(cp) {
	    return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
	}

	function isAsciiDigit(cp) {
	    return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
	}

	function isAsciiUpper(cp) {
	    return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
	}

	function isAsciiLower(cp) {
	    return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
	}

	function isAsciiAlphaNumeric(cp) {
	    return isAsciiDigit(cp) || isAsciiUpper(cp) || isAsciiLower(cp);
	}

	function isDigit(cp, isHex) {
	    return isAsciiDigit(cp) || (isHex && ((cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F) ||
	                                          (cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F)));
	}

	function isReservedCodePoint(cp) {
	    return cp >= 0xD800 && cp <= 0xDFFF || cp > 0x10FFFF;
	}

	function toAsciiLowerCodePoint(cp) {
	    return cp + 0x0020;
	}

	//NOTE: String.fromCharCode() function can handle only characters from BMP subset.
	//So, we need to workaround this manually.
	//(see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode#Getting_it_to_work_with_higher_values)
	function toChar(cp) {
	    if (cp <= 0xFFFF)
	        return String.fromCharCode(cp);

	    cp -= 0x10000;
	    return String.fromCharCode(cp >>> 10 & 0x3FF | 0xD800) + String.fromCharCode(0xDC00 | cp & 0x3FF);
	}

	function toAsciiLowerChar(cp) {
	    return String.fromCharCode(toAsciiLowerCodePoint(cp));
	}

	//Tokenizer
	var Tokenizer = module.exports = function (html, options) {
	    this.disableEntitiesDecoding = false;

	    this.preprocessor = new Preprocessor(html);

	    this.tokenQueue = [];

	    this.allowCDATA = false;

	    this.state = DATA_STATE;
	    this.returnState = '';

	    this.consumptionPos = 0;

	    this.tempBuff = [];
	    this.additionalAllowedCp = void 0;
	    this.lastStartTagName = '';

	    this.currentCharacterToken = null;
	    this.currentToken = null;
	    this.currentAttr = null;

	    if (options) {
	        this.disableEntitiesDecoding = !options.decodeHtmlEntities;

	        if (options.locationInfo)
	            LocationInfoMixin.assign(this);
	    }
	};

	//Token types
	Tokenizer.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
	Tokenizer.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
	Tokenizer.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
	Tokenizer.START_TAG_TOKEN = 'START_TAG_TOKEN';
	Tokenizer.END_TAG_TOKEN = 'END_TAG_TOKEN';
	Tokenizer.COMMENT_TOKEN = 'COMMENT_TOKEN';
	Tokenizer.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
	Tokenizer.EOF_TOKEN = 'EOF_TOKEN';

	//Tokenizer initial states for different modes
	Tokenizer.MODE = Tokenizer.prototype.MODE = {
	    DATA: DATA_STATE,
	    RCDATA: RCDATA_STATE,
	    RAWTEXT: RAWTEXT_STATE,
	    SCRIPT_DATA: SCRIPT_DATA_STATE,
	    PLAINTEXT: PLAINTEXT_STATE
	};

	//Static
	Tokenizer.getTokenAttr = function (token, attrName) {
	    for (var i = token.attrs.length - 1; i >= 0; i--) {
	        if (token.attrs[i].name === attrName)
	            return token.attrs[i].value;
	    }

	    return null;
	};

	//Get token
	Tokenizer.prototype.getNextToken = function () {
	    while (!this.tokenQueue.length)
	        this[this.state](this._consume());

	    return this.tokenQueue.shift();
	};

	//Consumption
	Tokenizer.prototype._consume = function () {
	    this.consumptionPos++;
	    return this.preprocessor.advanceAndPeekCodePoint();
	};

	Tokenizer.prototype._unconsume = function () {
	    this.consumptionPos--;
	    this.preprocessor.retreat();
	};

	Tokenizer.prototype._unconsumeSeveral = function (count) {
	    while (count--)
	        this._unconsume();
	};

	Tokenizer.prototype._reconsumeInState = function (state) {
	    this.state = state;
	    this._unconsume();
	};

	Tokenizer.prototype._consumeSubsequentIfMatch = function (pattern, startCp, caseSensitive) {
	    var rollbackPos = this.consumptionPos,
	        isMatch = true,
	        patternLength = pattern.length,
	        patternPos = 0,
	        cp = startCp,
	        patternCp = void 0;

	    for (; patternPos < patternLength; patternPos++) {
	        if (patternPos > 0)
	            cp = this._consume();

	        if (cp === $.EOF) {
	            isMatch = false;
	            break;
	        }

	        patternCp = pattern[patternPos];

	        if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
	            isMatch = false;
	            break;
	        }
	    }

	    if (!isMatch)
	        this._unconsumeSeveral(this.consumptionPos - rollbackPos);

	    return isMatch;
	};

	//Lookahead
	Tokenizer.prototype._lookahead = function () {
	    var cp = this.preprocessor.advanceAndPeekCodePoint();
	    this.preprocessor.retreat();

	    return cp;
	};

	//Temp buffer
	Tokenizer.prototype.isTempBufferEqualToScriptString = function () {
	    if (this.tempBuff.length !== $$.SCRIPT_STRING.length)
	        return false;

	    for (var i = 0; i < this.tempBuff.length; i++) {
	        if (this.tempBuff[i] !== $$.SCRIPT_STRING[i])
	            return false;
	    }

	    return true;
	};

	//Token creation
	Tokenizer.prototype.buildStartTagToken = function (tagName) {
	    return {
	        type: Tokenizer.START_TAG_TOKEN,
	        tagName: tagName,
	        selfClosing: false,
	        attrs: []
	    };
	};

	Tokenizer.prototype.buildEndTagToken = function (tagName) {
	    return {
	        type: Tokenizer.END_TAG_TOKEN,
	        tagName: tagName,
	        ignored: false,
	        attrs: []
	    };
	};

	Tokenizer.prototype._createStartTagToken = function (tagNameFirstCh) {
	    this.currentToken = this.buildStartTagToken(tagNameFirstCh);
	};

	Tokenizer.prototype._createEndTagToken = function (tagNameFirstCh) {
	    this.currentToken = this.buildEndTagToken(tagNameFirstCh);
	};

	Tokenizer.prototype._createCommentToken = function () {
	    this.currentToken = {
	        type: Tokenizer.COMMENT_TOKEN,
	        data: ''
	    };
	};

	Tokenizer.prototype._createDoctypeToken = function (doctypeNameFirstCh) {
	    this.currentToken = {
	        type: Tokenizer.DOCTYPE_TOKEN,
	        name: doctypeNameFirstCh || '',
	        forceQuirks: false,
	        publicId: null,
	        systemId: null
	    };
	};

	Tokenizer.prototype._createCharacterToken = function (type, ch) {
	    this.currentCharacterToken = {
	        type: type,
	        chars: ch
	    };
	};

	//Tag attributes
	Tokenizer.prototype._createAttr = function (attrNameFirstCh) {
	    this.currentAttr = {
	        name: attrNameFirstCh,
	        value: ''
	    };
	};

	Tokenizer.prototype._isDuplicateAttr = function () {
	    return Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) !== null;
	};

	Tokenizer.prototype._leaveAttrName = function (toState) {
	    this.state = toState;

	    if (!this._isDuplicateAttr())
	        this.currentToken.attrs.push(this.currentAttr);
	};

	//Appropriate end tag token
	//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#appropriate-end-tag-token)
	Tokenizer.prototype._isAppropriateEndTagToken = function () {
	    return this.lastStartTagName === this.currentToken.tagName;
	};

	//Token emission
	Tokenizer.prototype._emitCurrentToken = function () {
	    this._emitCurrentCharacterToken();

	    //NOTE: store emited start tag's tagName to determine is the following end tag token is appropriate.
	    if (this.currentToken.type === Tokenizer.START_TAG_TOKEN)
	        this.lastStartTagName = this.currentToken.tagName;

	    this.tokenQueue.push(this.currentToken);
	    this.currentToken = null;
	};

	Tokenizer.prototype._emitCurrentCharacterToken = function () {
	    if (this.currentCharacterToken) {
	        this.tokenQueue.push(this.currentCharacterToken);
	        this.currentCharacterToken = null;
	    }
	};

	Tokenizer.prototype._emitEOFToken = function () {
	    this._emitCurrentCharacterToken();
	    this.tokenQueue.push({type: Tokenizer.EOF_TOKEN});
	};

	//Characters emission

	//OPTIMIZATION: specification uses only one type of character tokens (one token per character).
	//This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
	//If we have a sequence of characters that belong to the same group, parser can process it
	//as a single solid character token.
	//So, there are 3 types of character tokens in parse5:
	//1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
	//2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
	//3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
	Tokenizer.prototype._appendCharToCurrentCharacterToken = function (type, ch) {
	    if (this.currentCharacterToken && this.currentCharacterToken.type !== type)
	        this._emitCurrentCharacterToken();

	    if (this.currentCharacterToken)
	        this.currentCharacterToken.chars += ch;

	    else
	        this._createCharacterToken(type, ch);
	};

	Tokenizer.prototype._emitCodePoint = function (cp) {
	    var type = Tokenizer.CHARACTER_TOKEN;

	    if (isWhitespace(cp))
	        type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;

	    else if (cp === $.NULL)
	        type = Tokenizer.NULL_CHARACTER_TOKEN;

	    this._appendCharToCurrentCharacterToken(type, toChar(cp));
	};

	Tokenizer.prototype._emitSeveralCodePoints = function (codePoints) {
	    for (var i = 0; i < codePoints.length; i++)
	        this._emitCodePoint(codePoints[i]);
	};

	//NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
	//So we can avoid additional checks here.
	Tokenizer.prototype._emitChar = function (ch) {
	    this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
	};

	//Character reference tokenization
	Tokenizer.prototype._consumeNumericEntity = function (isHex) {
	    var digits = '',
	        nextCp = void 0;

	    do {
	        digits += toChar(this._consume());
	        nextCp = this._lookahead();
	    } while (nextCp !== $.EOF && isDigit(nextCp, isHex));

	    if (this._lookahead() === $.SEMICOLON)
	        this._consume();

	    var referencedCp = parseInt(digits, isHex ? 16 : 10),
	        replacement = NUMERIC_ENTITY_REPLACEMENTS[referencedCp];

	    if (replacement)
	        return replacement;

	    if (isReservedCodePoint(referencedCp))
	        return $.REPLACEMENT_CHARACTER;

	    return referencedCp;
	};

	Tokenizer.prototype._consumeNamedEntity = function (startCp, inAttr) {
	    var referencedCodePoints = null,
	        entityCodePointsCount = 0,
	        cp = startCp,
	        leaf = NAMED_ENTITY_TRIE[cp],
	        consumedCount = 1,
	        semicolonTerminated = false;

	    for (; leaf && cp !== $.EOF; cp = this._consume(), consumedCount++, leaf = leaf.l && leaf.l[cp]) {
	        if (leaf.c) {
	            //NOTE: we have at least one named reference match. But we don't stop lookup at this point,
	            //because longer matches still can be found (e.g. '&not' and '&notin;') except the case
	            //then found match is terminated by semicolon.
	            referencedCodePoints = leaf.c;
	            entityCodePointsCount = consumedCount;

	            if (cp === $.SEMICOLON) {
	                semicolonTerminated = true;
	                break;
	            }
	        }
	    }

	    if (referencedCodePoints) {
	        if (!semicolonTerminated) {
	            //NOTE: unconsume excess (e.g. 'it' in '&notit')
	            this._unconsumeSeveral(consumedCount - entityCodePointsCount);

	            //NOTE: If the character reference is being consumed as part of an attribute and the next character
	            //is either a U+003D EQUALS SIGN character (=) or an alphanumeric ASCII character, then, for historical
	            //reasons, all the characters that were matched after the U+0026 AMPERSAND character (&) must be
	            //unconsumed, and nothing is returned.
	            //However, if this next character is in fact a U+003D EQUALS SIGN character (=), then this is a
	            //parse error, because some legacy user agents will misinterpret the markup in those cases.
	            //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#tokenizing-character-references)
	            if (inAttr) {
	                var nextCp = this._lookahead();

	                if (nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp)) {
	                    this._unconsumeSeveral(entityCodePointsCount);
	                    return null;
	                }
	            }
	        }

	        return referencedCodePoints;
	    }

	    this._unconsumeSeveral(consumedCount);

	    return null;
	};

	Tokenizer.prototype._consumeCharacterReference = function (startCp, inAttr) {
	    if (this.disableEntitiesDecoding || isWhitespace(startCp) || startCp === $.GREATER_THAN_SIGN ||
	        startCp === $.AMPERSAND || startCp === this.additionalAllowedCp || startCp === $.EOF) {
	        //NOTE: not a character reference. No characters are consumed, and nothing is returned.
	        this._unconsume();
	        return null;
	    }

	    else if (startCp === $.NUMBER_SIGN) {
	        //NOTE: we have a numeric entity candidate, now we should determine if it's hex or decimal
	        var isHex = false,
	            nextCp = this._lookahead();

	        if (nextCp === $.LATIN_SMALL_X || nextCp === $.LATIN_CAPITAL_X) {
	            this._consume();
	            isHex = true;
	        }

	        nextCp = this._lookahead();

	        //NOTE: if we have at least one digit this is a numeric entity for sure, so we consume it
	        if (nextCp !== $.EOF && isDigit(nextCp, isHex))
	            return [this._consumeNumericEntity(isHex)];

	        else {
	            //NOTE: otherwise this is a bogus number entity and a parse error. Unconsume the number sign
	            //and the 'x'-character if appropriate.
	            this._unconsumeSeveral(isHex ? 2 : 1);
	            return null;
	        }
	    }

	    else
	        return this._consumeNamedEntity(startCp, inAttr);
	};

	//State machine
	var _ = Tokenizer.prototype;

	//12.2.4.1 Data state
	//------------------------------------------------------------------
	_[DATA_STATE] = function dataState(cp) {
	    if (cp === $.AMPERSAND)
	        this.state = CHARACTER_REFERENCE_IN_DATA_STATE;

	    else if (cp === $.LESS_THAN_SIGN)
	        this.state = TAG_OPEN_STATE;

	    else if (cp === $.NULL)
	        this._emitCodePoint(cp);

	    else if (cp === $.EOF)
	        this._emitEOFToken();

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.2 Character reference in data state
	//------------------------------------------------------------------
	_[CHARACTER_REFERENCE_IN_DATA_STATE] = function characterReferenceInDataState(cp) {
	    this.state = DATA_STATE;
	    this.additionalAllowedCp = void 0;

	    var referencedCodePoints = this._consumeCharacterReference(cp, false);

	    if (referencedCodePoints)
	        this._emitSeveralCodePoints(referencedCodePoints);
	    else
	        this._emitChar('&');
	};


	//12.2.4.3 RCDATA state
	//------------------------------------------------------------------
	_[RCDATA_STATE] = function rcdataState(cp) {
	    if (cp === $.AMPERSAND)
	        this.state = CHARACTER_REFERENCE_IN_RCDATA_STATE;

	    else if (cp === $.LESS_THAN_SIGN)
	        this.state = RCDATA_LESS_THAN_SIGN_STATE;

	    else if (cp === $.NULL)
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

	    else if (cp === $.EOF)
	        this._emitEOFToken();

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.4 Character reference in RCDATA state
	//------------------------------------------------------------------
	_[CHARACTER_REFERENCE_IN_RCDATA_STATE] = function characterReferenceInRcdataState(cp) {
	    this.state = RCDATA_STATE;
	    this.additionalAllowedCp = void 0;

	    var referencedCodePoints = this._consumeCharacterReference(cp, false);

	    if (referencedCodePoints)
	        this._emitSeveralCodePoints(referencedCodePoints);
	    else
	        this._emitChar('&');
	};


	//12.2.4.5 RAWTEXT state
	//------------------------------------------------------------------
	_[RAWTEXT_STATE] = function rawtextState(cp) {
	    if (cp === $.LESS_THAN_SIGN)
	        this.state = RAWTEXT_LESS_THAN_SIGN_STATE;

	    else if (cp === $.NULL)
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

	    else if (cp === $.EOF)
	        this._emitEOFToken();

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.6 Script data state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_STATE] = function scriptDataState(cp) {
	    if (cp === $.LESS_THAN_SIGN)
	        this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;

	    else if (cp === $.NULL)
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

	    else if (cp === $.EOF)
	        this._emitEOFToken();

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.7 PLAINTEXT state
	//------------------------------------------------------------------
	_[PLAINTEXT_STATE] = function plaintextState(cp) {
	    if (cp === $.NULL)
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

	    else if (cp === $.EOF)
	        this._emitEOFToken();

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.8 Tag open state
	//------------------------------------------------------------------
	_[TAG_OPEN_STATE] = function tagOpenState(cp) {
	    if (cp === $.EXCLAMATION_MARK)
	        this.state = MARKUP_DECLARATION_OPEN_STATE;

	    else if (cp === $.SOLIDUS)
	        this.state = END_TAG_OPEN_STATE;

	    else if (isAsciiUpper(cp)) {
	        this._createStartTagToken(toAsciiLowerChar(cp));
	        this.state = TAG_NAME_STATE;
	    }

	    else if (isAsciiLower(cp)) {
	        this._createStartTagToken(toChar(cp));
	        this.state = TAG_NAME_STATE;
	    }

	    else if (cp === $.QUESTION_MARK) {
	        //NOTE: call bogus comment state directly with current consumed character to avoid unnecessary reconsumption.
	        this[BOGUS_COMMENT_STATE](cp);
	    }

	    else {
	        this._emitChar('<');
	        this._reconsumeInState(DATA_STATE);
	    }
	};


	//12.2.4.9 End tag open state
	//------------------------------------------------------------------
	_[END_TAG_OPEN_STATE] = function endTagOpenState(cp) {
	    if (isAsciiUpper(cp)) {
	        this._createEndTagToken(toAsciiLowerChar(cp));
	        this.state = TAG_NAME_STATE;
	    }

	    else if (isAsciiLower(cp)) {
	        this._createEndTagToken(toChar(cp));
	        this.state = TAG_NAME_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN)
	        this.state = DATA_STATE;

	    else if (cp === $.EOF) {
	        this._reconsumeInState(DATA_STATE);
	        this._emitChar('<');
	        this._emitChar('/');
	    }

	    else {
	        //NOTE: call bogus comment state directly with current consumed character to avoid unnecessary reconsumption.
	        this[BOGUS_COMMENT_STATE](cp);
	    }
	};


	//12.2.4.10 Tag name state
	//------------------------------------------------------------------
	_[TAG_NAME_STATE] = function tagNameState(cp) {
	    if (isWhitespace(cp))
	        this.state = BEFORE_ATTRIBUTE_NAME_STATE;

	    else if (cp === $.SOLIDUS)
	        this.state = SELF_CLOSING_START_TAG_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (isAsciiUpper(cp))
	        this.currentToken.tagName += toAsciiLowerChar(cp);

	    else if (cp === $.NULL)
	        this.currentToken.tagName += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this.currentToken.tagName += toChar(cp);
	};


	//12.2.4.11 RCDATA less-than sign state
	//------------------------------------------------------------------
	_[RCDATA_LESS_THAN_SIGN_STATE] = function rcdataLessThanSignState(cp) {
	    if (cp === $.SOLIDUS) {
	        this.tempBuff = [];
	        this.state = RCDATA_END_TAG_OPEN_STATE;
	    }

	    else {
	        this._emitChar('<');
	        this._reconsumeInState(RCDATA_STATE);
	    }
	};


	//12.2.4.12 RCDATA end tag open state
	//------------------------------------------------------------------
	_[RCDATA_END_TAG_OPEN_STATE] = function rcdataEndTagOpenState(cp) {
	    if (isAsciiUpper(cp)) {
	        this._createEndTagToken(toAsciiLowerChar(cp));
	        this.tempBuff.push(cp);
	        this.state = RCDATA_END_TAG_NAME_STATE;
	    }

	    else if (isAsciiLower(cp)) {
	        this._createEndTagToken(toChar(cp));
	        this.tempBuff.push(cp);
	        this.state = RCDATA_END_TAG_NAME_STATE;
	    }

	    else {
	        this._emitChar('<');
	        this._emitChar('/');
	        this._reconsumeInState(RCDATA_STATE);
	    }
	};


	//12.2.4.13 RCDATA end tag name state
	//------------------------------------------------------------------
	_[RCDATA_END_TAG_NAME_STATE] = function rcdataEndTagNameState(cp) {
	    if (isAsciiUpper(cp)) {
	        this.currentToken.tagName += toAsciiLowerChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.currentToken.tagName += toChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else {
	        if (this._isAppropriateEndTagToken()) {
	            if (isWhitespace(cp)) {
	                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
	                return;
	            }

	            if (cp === $.SOLIDUS) {
	                this.state = SELF_CLOSING_START_TAG_STATE;
	                return;
	            }

	            if (cp === $.GREATER_THAN_SIGN) {
	                this.state = DATA_STATE;
	                this._emitCurrentToken();
	                return;
	            }
	        }

	        this._emitChar('<');
	        this._emitChar('/');
	        this._emitSeveralCodePoints(this.tempBuff);
	        this._reconsumeInState(RCDATA_STATE);
	    }
	};


	//12.2.4.14 RAWTEXT less-than sign state
	//------------------------------------------------------------------
	_[RAWTEXT_LESS_THAN_SIGN_STATE] = function rawtextLessThanSignState(cp) {
	    if (cp === $.SOLIDUS) {
	        this.tempBuff = [];
	        this.state = RAWTEXT_END_TAG_OPEN_STATE;
	    }

	    else {
	        this._emitChar('<');
	        this._reconsumeInState(RAWTEXT_STATE);
	    }
	};


	//12.2.4.15 RAWTEXT end tag open state
	//------------------------------------------------------------------
	_[RAWTEXT_END_TAG_OPEN_STATE] = function rawtextEndTagOpenState(cp) {
	    if (isAsciiUpper(cp)) {
	        this._createEndTagToken(toAsciiLowerChar(cp));
	        this.tempBuff.push(cp);
	        this.state = RAWTEXT_END_TAG_NAME_STATE;
	    }

	    else if (isAsciiLower(cp)) {
	        this._createEndTagToken(toChar(cp));
	        this.tempBuff.push(cp);
	        this.state = RAWTEXT_END_TAG_NAME_STATE;
	    }

	    else {
	        this._emitChar('<');
	        this._emitChar('/');
	        this._reconsumeInState(RAWTEXT_STATE);
	    }
	};


	//12.2.4.16 RAWTEXT end tag name state
	//------------------------------------------------------------------
	_[RAWTEXT_END_TAG_NAME_STATE] = function rawtextEndTagNameState(cp) {
	    if (isAsciiUpper(cp)) {
	        this.currentToken.tagName += toAsciiLowerChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.currentToken.tagName += toChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else {
	        if (this._isAppropriateEndTagToken()) {
	            if (isWhitespace(cp)) {
	                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
	                return;
	            }

	            if (cp === $.SOLIDUS) {
	                this.state = SELF_CLOSING_START_TAG_STATE;
	                return;
	            }

	            if (cp === $.GREATER_THAN_SIGN) {
	                this._emitCurrentToken();
	                this.state = DATA_STATE;
	                return;
	            }
	        }

	        this._emitChar('<');
	        this._emitChar('/');
	        this._emitSeveralCodePoints(this.tempBuff);
	        this._reconsumeInState(RAWTEXT_STATE);
	    }
	};


	//12.2.4.17 Script data less-than sign state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_LESS_THAN_SIGN_STATE] = function scriptDataLessThanSignState(cp) {
	    if (cp === $.SOLIDUS) {
	        this.tempBuff = [];
	        this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
	    }

	    else if (cp === $.EXCLAMATION_MARK) {
	        this.state = SCRIPT_DATA_ESCAPE_START_STATE;
	        this._emitChar('<');
	        this._emitChar('!');
	    }

	    else {
	        this._emitChar('<');
	        this._reconsumeInState(SCRIPT_DATA_STATE);
	    }
	};


	//12.2.4.18 Script data end tag open state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_END_TAG_OPEN_STATE] = function scriptDataEndTagOpenState(cp) {
	    if (isAsciiUpper(cp)) {
	        this._createEndTagToken(toAsciiLowerChar(cp));
	        this.tempBuff.push(cp);
	        this.state = SCRIPT_DATA_END_TAG_NAME_STATE;
	    }

	    else if (isAsciiLower(cp)) {
	        this._createEndTagToken(toChar(cp));
	        this.tempBuff.push(cp);
	        this.state = SCRIPT_DATA_END_TAG_NAME_STATE;
	    }

	    else {
	        this._emitChar('<');
	        this._emitChar('/');
	        this._reconsumeInState(SCRIPT_DATA_STATE);
	    }
	};


	//12.2.4.19 Script data end tag name state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_END_TAG_NAME_STATE] = function scriptDataEndTagNameState(cp) {
	    if (isAsciiUpper(cp)) {
	        this.currentToken.tagName += toAsciiLowerChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.currentToken.tagName += toChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else {
	        if (this._isAppropriateEndTagToken()) {
	            if (isWhitespace(cp)) {
	                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
	                return;
	            }

	            else if (cp === $.SOLIDUS) {
	                this.state = SELF_CLOSING_START_TAG_STATE;
	                return;
	            }

	            else if (cp === $.GREATER_THAN_SIGN) {
	                this._emitCurrentToken();
	                this.state = DATA_STATE;
	                return;
	            }
	        }

	        this._emitChar('<');
	        this._emitChar('/');
	        this._emitSeveralCodePoints(this.tempBuff);
	        this._reconsumeInState(SCRIPT_DATA_STATE);
	    }
	};


	//12.2.4.20 Script data escape start state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPE_START_STATE] = function scriptDataEscapeStartState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
	        this._emitChar('-');
	    }

	    else
	        this._reconsumeInState(SCRIPT_DATA_STATE);
	};


	//12.2.4.21 Script data escape start dash state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPE_START_DASH_STATE] = function scriptDataEscapeStartDashState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
	        this._emitChar('-');
	    }

	    else
	        this._reconsumeInState(SCRIPT_DATA_STATE);
	};


	//12.2.4.22 Script data escaped state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPED_STATE] = function scriptDataEscapedState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
	        this._emitChar('-');
	    }

	    else if (cp === $.LESS_THAN_SIGN)
	        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

	    else if (cp === $.NULL)
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.23 Script data escaped dash state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPED_DASH_STATE] = function scriptDataEscapedDashState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
	        this._emitChar('-');
	    }

	    else if (cp === $.LESS_THAN_SIGN)
	        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

	    else if (cp === $.NULL) {
	        this.state = SCRIPT_DATA_ESCAPED_STATE;
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this.state = SCRIPT_DATA_ESCAPED_STATE;
	        this._emitCodePoint(cp);
	    }
	};


	//12.2.4.24 Script data escaped dash dash state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPED_DASH_DASH_STATE] = function scriptDataEscapedDashDashState(cp) {
	    if (cp === $.HYPHEN_MINUS)
	        this._emitChar('-');

	    else if (cp === $.LESS_THAN_SIGN)
	        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = SCRIPT_DATA_STATE;
	        this._emitChar('>');
	    }

	    else if (cp === $.NULL) {
	        this.state = SCRIPT_DATA_ESCAPED_STATE;
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this.state = SCRIPT_DATA_ESCAPED_STATE;
	        this._emitCodePoint(cp);
	    }
	};


	//12.2.4.25 Script data escaped less-than sign state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataEscapedLessThanSignState(cp) {
	    if (cp === $.SOLIDUS) {
	        this.tempBuff = [];
	        this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
	    }

	    else if (isAsciiUpper(cp)) {
	        this.tempBuff = [];
	        this.tempBuff.push(toAsciiLowerCodePoint(cp));
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE;
	        this._emitChar('<');
	        this._emitCodePoint(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.tempBuff = [];
	        this.tempBuff.push(cp);
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE;
	        this._emitChar('<');
	        this._emitCodePoint(cp);
	    }

	    else {
	        this._emitChar('<');
	        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
	    }
	};


	//12.2.4.26 Script data escaped end tag open state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE] = function scriptDataEscapedEndTagOpenState(cp) {
	    if (isAsciiUpper(cp)) {
	        this._createEndTagToken(toAsciiLowerChar(cp));
	        this.tempBuff.push(cp);
	        this.state = SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE;
	    }

	    else if (isAsciiLower(cp)) {
	        this._createEndTagToken(toChar(cp));
	        this.tempBuff.push(cp);
	        this.state = SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE;
	    }

	    else {
	        this._emitChar('<');
	        this._emitChar('/');
	        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
	    }
	};


	//12.2.4.27 Script data escaped end tag name state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE] = function scriptDataEscapedEndTagNameState(cp) {
	    if (isAsciiUpper(cp)) {
	        this.currentToken.tagName += toAsciiLowerChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.currentToken.tagName += toChar(cp);
	        this.tempBuff.push(cp);
	    }

	    else {
	        if (this._isAppropriateEndTagToken()) {
	            if (isWhitespace(cp)) {
	                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
	                return;
	            }

	            if (cp === $.SOLIDUS) {
	                this.state = SELF_CLOSING_START_TAG_STATE;
	                return;
	            }

	            if (cp === $.GREATER_THAN_SIGN) {
	                this._emitCurrentToken();
	                this.state = DATA_STATE;
	                return;
	            }
	        }

	        this._emitChar('<');
	        this._emitChar('/');
	        this._emitSeveralCodePoints(this.tempBuff);
	        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
	    }
	};


	//12.2.4.28 Script data double escape start state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE] = function scriptDataDoubleEscapeStartState(cp) {
	    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
	        this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
	        this._emitCodePoint(cp);
	    }

	    else if (isAsciiUpper(cp)) {
	        this.tempBuff.push(toAsciiLowerCodePoint(cp));
	        this._emitCodePoint(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.tempBuff.push(cp);
	        this._emitCodePoint(cp);
	    }

	    else
	        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
	};


	//12.2.4.29 Script data double escaped state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_DOUBLE_ESCAPED_STATE] = function scriptDataDoubleEscapedState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
	        this._emitChar('-');
	    }

	    else if (cp === $.LESS_THAN_SIGN) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
	        this._emitChar('<');
	    }

	    else if (cp === $.NULL)
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this._emitCodePoint(cp);
	};


	//12.2.4.30 Script data double escaped dash state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE] = function scriptDataDoubleEscapedDashState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
	        this._emitChar('-');
	    }

	    else if (cp === $.LESS_THAN_SIGN) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
	        this._emitChar('<');
	    }

	    else if (cp === $.NULL) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
	        this._emitCodePoint(cp);
	    }
	};


	//12.2.4.31 Script data double escaped dash dash state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE] = function scriptDataDoubleEscapedDashDashState(cp) {
	    if (cp === $.HYPHEN_MINUS)
	        this._emitChar('-');

	    else if (cp === $.LESS_THAN_SIGN) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
	        this._emitChar('<');
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = SCRIPT_DATA_STATE;
	        this._emitChar('>');
	    }

	    else if (cp === $.NULL) {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
	        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
	        this._emitCodePoint(cp);
	    }
	};


	//12.2.4.32 Script data double escaped less-than sign state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataDoubleEscapedLessThanSignState(cp) {
	    if (cp === $.SOLIDUS) {
	        this.tempBuff = [];
	        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
	        this._emitChar('/');
	    }

	    else
	        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
	};


	//12.2.4.33 Script data double escape end state
	//------------------------------------------------------------------
	_[SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE] = function scriptDataDoubleEscapeEndState(cp) {
	    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
	        this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

	        this._emitCodePoint(cp);
	    }

	    else if (isAsciiUpper(cp)) {
	        this.tempBuff.push(toAsciiLowerCodePoint(cp));
	        this._emitCodePoint(cp);
	    }

	    else if (isAsciiLower(cp)) {
	        this.tempBuff.push(cp);
	        this._emitCodePoint(cp);
	    }

	    else
	        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
	};


	//12.2.4.34 Before attribute name state
	//------------------------------------------------------------------
	_[BEFORE_ATTRIBUTE_NAME_STATE] = function beforeAttributeNameState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.SOLIDUS)
	        this.state = SELF_CLOSING_START_TAG_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (isAsciiUpper(cp)) {
	        this._createAttr(toAsciiLowerChar(cp));
	        this.state = ATTRIBUTE_NAME_STATE;
	    }

	    else if (cp === $.NULL) {
	        this._createAttr(UNICODE.REPLACEMENT_CHARACTER);
	        this.state = ATTRIBUTE_NAME_STATE;
	    }

	    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN) {
	        this._createAttr(toChar(cp));
	        this.state = ATTRIBUTE_NAME_STATE;
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this._createAttr(toChar(cp));
	        this.state = ATTRIBUTE_NAME_STATE;
	    }
	};


	//12.2.4.35 Attribute name state
	//------------------------------------------------------------------
	_[ATTRIBUTE_NAME_STATE] = function attributeNameState(cp) {
	    if (isWhitespace(cp))
	        this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);

	    else if (cp === $.SOLIDUS)
	        this._leaveAttrName(SELF_CLOSING_START_TAG_STATE);

	    else if (cp === $.EQUALS_SIGN)
	        this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this._leaveAttrName(DATA_STATE);
	        this._emitCurrentToken();
	    }

	    else if (isAsciiUpper(cp))
	        this.currentAttr.name += toAsciiLowerChar(cp);

	    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN)
	        this.currentAttr.name += toChar(cp);

	    else if (cp === $.NULL)
	        this.currentAttr.name += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this.currentAttr.name += toChar(cp);
	};


	//12.2.4.36 After attribute name state
	//------------------------------------------------------------------
	_[AFTER_ATTRIBUTE_NAME_STATE] = function afterAttributeNameState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.SOLIDUS)
	        this.state = SELF_CLOSING_START_TAG_STATE;

	    else if (cp === $.EQUALS_SIGN)
	        this.state = BEFORE_ATTRIBUTE_VALUE_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (isAsciiUpper(cp)) {
	        this._createAttr(toAsciiLowerChar(cp));
	        this.state = ATTRIBUTE_NAME_STATE;
	    }

	    else if (cp === $.NULL) {
	        this._createAttr(UNICODE.REPLACEMENT_CHARACTER);
	        this.state = ATTRIBUTE_NAME_STATE;
	    }

	    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
	        this._createAttr(toChar(cp));
	        this.state = ATTRIBUTE_NAME_STATE;
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this._createAttr(toChar(cp));
	        this.state = ATTRIBUTE_NAME_STATE;
	    }
	};


	//12.2.4.37 Before attribute value state
	//------------------------------------------------------------------
	_[BEFORE_ATTRIBUTE_VALUE_STATE] = function beforeAttributeValueState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.QUOTATION_MARK)
	        this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;

	    else if (cp === $.AMPERSAND)
	        this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);

	    else if (cp === $.APOSTROPHE)
	        this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;

	    else if (cp === $.NULL) {
	        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;
	        this.state = ATTRIBUTE_VALUE_UNQUOTED_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
	        this.currentAttr.value += toChar(cp);
	        this.state = ATTRIBUTE_VALUE_UNQUOTED_STATE;
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else {
	        this.currentAttr.value += toChar(cp);
	        this.state = ATTRIBUTE_VALUE_UNQUOTED_STATE;
	    }
	};


	//12.2.4.38 Attribute value (double-quoted) state
	//------------------------------------------------------------------
	_[ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE] = function attributeValueDoubleQuotedState(cp) {
	    if (cp === $.QUOTATION_MARK)
	        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;

	    else if (cp === $.AMPERSAND) {
	        this.additionalAllowedCp = $.QUOTATION_MARK;
	        this.returnState = this.state;
	        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
	    }

	    else if (cp === $.NULL)
	        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this.currentAttr.value += toChar(cp);
	};


	//12.2.4.39 Attribute value (single-quoted) state
	//------------------------------------------------------------------
	_[ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE] = function attributeValueSingleQuotedState(cp) {
	    if (cp === $.APOSTROPHE)
	        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;

	    else if (cp === $.AMPERSAND) {
	        this.additionalAllowedCp = $.APOSTROPHE;
	        this.returnState = this.state;
	        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
	    }

	    else if (cp === $.NULL)
	        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this.currentAttr.value += toChar(cp);
	};


	//12.2.4.40 Attribute value (unquoted) state
	//------------------------------------------------------------------
	_[ATTRIBUTE_VALUE_UNQUOTED_STATE] = function attributeValueUnquotedState(cp) {
	    if (isWhitespace(cp))
	        this.state = BEFORE_ATTRIBUTE_NAME_STATE;

	    else if (cp === $.AMPERSAND) {
	        this.additionalAllowedCp = $.GREATER_THAN_SIGN;
	        this.returnState = this.state;
	        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.NULL)
	        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN ||
	             cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
	        this.currentAttr.value += toChar(cp);
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this.currentAttr.value += toChar(cp);
	};


	//12.2.4.41 Character reference in attribute value state
	//------------------------------------------------------------------
	_[CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE] = function characterReferenceInAttributeValueState(cp) {
	    var referencedCodePoints = this._consumeCharacterReference(cp, true);

	    if (referencedCodePoints) {
	        for (var i = 0; i < referencedCodePoints.length; i++)
	            this.currentAttr.value += toChar(referencedCodePoints[i]);
	    } else
	        this.currentAttr.value += '&';

	    this.state = this.returnState;
	};


	//12.2.4.42 After attribute value (quoted) state
	//------------------------------------------------------------------
	_[AFTER_ATTRIBUTE_VALUE_QUOTED_STATE] = function afterAttributeValueQuotedState(cp) {
	    if (isWhitespace(cp))
	        this.state = BEFORE_ATTRIBUTE_NAME_STATE;

	    else if (cp === $.SOLIDUS)
	        this.state = SELF_CLOSING_START_TAG_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
	};


	//12.2.4.43 Self-closing start tag state
	//------------------------------------------------------------------
	_[SELF_CLOSING_START_TAG_STATE] = function selfClosingStartTagState(cp) {
	    if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.selfClosing = true;
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.EOF)
	        this._reconsumeInState(DATA_STATE);

	    else
	        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
	};


	//12.2.4.44 Bogus comment state
	//------------------------------------------------------------------
	_[BOGUS_COMMENT_STATE] = function bogusCommentState(cp) {
	    this._createCommentToken();

	    while (true) {
	        if (cp === $.GREATER_THAN_SIGN) {
	            this.state = DATA_STATE;
	            break;
	        }

	        else if (cp === $.EOF) {
	            this._reconsumeInState(DATA_STATE);
	            break;
	        }

	        else {
	            this.currentToken.data += cp === $.NULL ? UNICODE.REPLACEMENT_CHARACTER : toChar(cp);
	            cp = this._consume();
	        }
	    }

	    this._emitCurrentToken();
	};


	//12.2.4.45 Markup declaration open state
	//------------------------------------------------------------------
	_[MARKUP_DECLARATION_OPEN_STATE] = function markupDeclarationOpenState(cp) {
	    if (this._consumeSubsequentIfMatch($$.DASH_DASH_STRING, cp, true)) {
	        this._createCommentToken();
	        this.state = COMMENT_START_STATE;
	    }

	    else if (this._consumeSubsequentIfMatch($$.DOCTYPE_STRING, cp, false))
	        this.state = DOCTYPE_STATE;

	    else if (this.allowCDATA && this._consumeSubsequentIfMatch($$.CDATA_START_STRING, cp, true))
	        this.state = CDATA_SECTION_STATE;

	    else {
	        //NOTE: call bogus comment state directly with current consumed character to avoid unnecessary reconsumption.
	        this[BOGUS_COMMENT_STATE](cp);
	    }
	};


	//12.2.4.46 Comment start state
	//------------------------------------------------------------------
	_[COMMENT_START_STATE] = function commentStartState(cp) {
	    if (cp === $.HYPHEN_MINUS)
	        this.state = COMMENT_START_DASH_STATE;

	    else if (cp === $.NULL) {
	        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
	        this.state = COMMENT_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.EOF) {
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.data += toChar(cp);
	        this.state = COMMENT_STATE;
	    }
	};


	//12.2.4.47 Comment start dash state
	//------------------------------------------------------------------
	_[COMMENT_START_DASH_STATE] = function commentStartDashState(cp) {
	    if (cp === $.HYPHEN_MINUS)
	        this.state = COMMENT_END_STATE;

	    else if (cp === $.NULL) {
	        this.currentToken.data += '-';
	        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
	        this.state = COMMENT_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.EOF) {
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.data += '-';
	        this.currentToken.data += toChar(cp);
	        this.state = COMMENT_STATE;
	    }
	};


	//12.2.4.48 Comment state
	//------------------------------------------------------------------
	_[COMMENT_STATE] = function commentState(cp) {
	    if (cp === $.HYPHEN_MINUS)
	        this.state = COMMENT_END_DASH_STATE;

	    else if (cp === $.NULL)
	        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF) {
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.currentToken.data += toChar(cp);
	};


	//12.2.4.49 Comment end dash state
	//------------------------------------------------------------------
	_[COMMENT_END_DASH_STATE] = function commentEndDashState(cp) {
	    if (cp === $.HYPHEN_MINUS)
	        this.state = COMMENT_END_STATE;

	    else if (cp === $.NULL) {
	        this.currentToken.data += '-';
	        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
	        this.state = COMMENT_STATE;
	    }

	    else if (cp === $.EOF) {
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.data += '-';
	        this.currentToken.data += toChar(cp);
	        this.state = COMMENT_STATE;
	    }
	};


	//12.2.4.50 Comment end state
	//------------------------------------------------------------------
	_[COMMENT_END_STATE] = function commentEndState(cp) {
	    if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.EXCLAMATION_MARK)
	        this.state = COMMENT_END_BANG_STATE;

	    else if (cp === $.HYPHEN_MINUS)
	        this.currentToken.data += '-';

	    else if (cp === $.NULL) {
	        this.currentToken.data += '--';
	        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
	        this.state = COMMENT_STATE;
	    }

	    else if (cp === $.EOF) {
	        this._reconsumeInState(DATA_STATE);
	        this._emitCurrentToken();
	    }

	    else {
	        this.currentToken.data += '--';
	        this.currentToken.data += toChar(cp);
	        this.state = COMMENT_STATE;
	    }
	};


	//12.2.4.51 Comment end bang state
	//------------------------------------------------------------------
	_[COMMENT_END_BANG_STATE] = function commentEndBangState(cp) {
	    if (cp === $.HYPHEN_MINUS) {
	        this.currentToken.data += '--!';
	        this.state = COMMENT_END_DASH_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.NULL) {
	        this.currentToken.data += '--!';
	        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
	        this.state = COMMENT_STATE;
	    }

	    else if (cp === $.EOF) {
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.data += '--!';
	        this.currentToken.data += toChar(cp);
	        this.state = COMMENT_STATE;
	    }
	};


	//12.2.4.52 DOCTYPE state
	//------------------------------------------------------------------
	_[DOCTYPE_STATE] = function doctypeState(cp) {
	    if (isWhitespace(cp))
	        this.state = BEFORE_DOCTYPE_NAME_STATE;

	    else if (cp === $.EOF) {
	        this._createDoctypeToken();
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
	};


	//12.2.4.53 Before DOCTYPE name state
	//------------------------------------------------------------------
	_[BEFORE_DOCTYPE_NAME_STATE] = function beforeDoctypeNameState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (isAsciiUpper(cp)) {
	        this._createDoctypeToken(toAsciiLowerChar(cp));
	        this.state = DOCTYPE_NAME_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this._createDoctypeToken();
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this._createDoctypeToken();
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else if (cp === $.NULL) {
	        this._createDoctypeToken(UNICODE.REPLACEMENT_CHARACTER);
	        this.state = DOCTYPE_NAME_STATE;
	    }

	    else {
	        this._createDoctypeToken(toChar(cp));
	        this.state = DOCTYPE_NAME_STATE;
	    }
	};


	//12.2.4.54 DOCTYPE name state
	//------------------------------------------------------------------
	_[DOCTYPE_NAME_STATE] = function doctypeNameState(cp) {
	    if (isWhitespace(cp))
	        this.state = AFTER_DOCTYPE_NAME_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (isAsciiUpper(cp))
	        this.currentToken.name += toAsciiLowerChar(cp);

	    else if (cp === $.NULL)
	        this.currentToken.name += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.currentToken.name += toChar(cp);
	};


	//12.2.4.55 After DOCTYPE name state
	//------------------------------------------------------------------
	_[AFTER_DOCTYPE_NAME_STATE] = function afterDoctypeNameState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.GREATER_THAN_SIGN) {
	        this.state = DATA_STATE;
	        this._emitCurrentToken();
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else if (this._consumeSubsequentIfMatch($$.PUBLIC_STRING, cp, false))
	        this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;

	    else if (this._consumeSubsequentIfMatch($$.SYSTEM_STRING, cp, false))
	        this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.56 After DOCTYPE public keyword state
	//------------------------------------------------------------------
	_[AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE] = function afterDoctypePublicKeywordState(cp) {
	    if (isWhitespace(cp))
	        this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

	    else if (cp === $.QUOTATION_MARK) {
	        this.currentToken.publicId = '';
	        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
	    }

	    else if (cp === $.APOSTROPHE) {
	        this.currentToken.publicId = '';
	        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.57 Before DOCTYPE public identifier state
	//------------------------------------------------------------------
	_[BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function beforeDoctypePublicIdentifierState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.QUOTATION_MARK) {
	        this.currentToken.publicId = '';
	        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
	    }

	    else if (cp === $.APOSTROPHE) {
	        this.currentToken.publicId = '';
	        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.58 DOCTYPE public identifier (double-quoted) state
	//------------------------------------------------------------------
	_[DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypePublicIdentifierDoubleQuotedState(cp) {
	    if (cp === $.QUOTATION_MARK)
	        this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

	    else if (cp === $.NULL)
	        this.currentToken.publicId += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.currentToken.publicId += toChar(cp);
	};


	//12.2.4.59 DOCTYPE public identifier (single-quoted) state
	//------------------------------------------------------------------
	_[DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypePublicIdentifierSingleQuotedState(cp) {
	    if (cp === $.APOSTROPHE)
	        this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

	    else if (cp === $.NULL)
	        this.currentToken.publicId += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.currentToken.publicId += toChar(cp);
	};


	//12.2.4.60 After DOCTYPE public identifier state
	//------------------------------------------------------------------
	_[AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function afterDoctypePublicIdentifierState(cp) {
	    if (isWhitespace(cp))
	        this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.QUOTATION_MARK) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
	    }

	    else if (cp === $.APOSTROPHE) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.61 Between DOCTYPE public and system identifiers state
	//------------------------------------------------------------------
	_[BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE] = function betweenDoctypePublicAndSystemIdentifiersState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.GREATER_THAN_SIGN) {
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.QUOTATION_MARK) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
	    }


	    else if (cp === $.APOSTROPHE) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.62 After DOCTYPE system keyword state
	//------------------------------------------------------------------
	_[AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE] = function afterDoctypeSystemKeywordState(cp) {
	    if (isWhitespace(cp))
	        this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

	    else if (cp === $.QUOTATION_MARK) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
	    }

	    else if (cp === $.APOSTROPHE) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.63 Before DOCTYPE system identifier state
	//------------------------------------------------------------------
	_[BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function beforeDoctypeSystemIdentifierState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.QUOTATION_MARK) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
	    }

	    else if (cp === $.APOSTROPHE) {
	        this.currentToken.systemId = '';
	        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
	    }

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else {
	        this.currentToken.forceQuirks = true;
	        this.state = BOGUS_DOCTYPE_STATE;
	    }
	};


	//12.2.4.64 DOCTYPE system identifier (double-quoted) state
	//------------------------------------------------------------------
	_[DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypeSystemIdentifierDoubleQuotedState(cp) {
	    if (cp === $.QUOTATION_MARK)
	        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.NULL)
	        this.currentToken.systemId += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.currentToken.systemId += toChar(cp);
	};


	//12.2.4.65 DOCTYPE system identifier (single-quoted) state
	//------------------------------------------------------------------
	_[DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypeSystemIdentifierSingleQuotedState(cp) {
	    if (cp === $.APOSTROPHE)
	        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

	    else if (cp === $.GREATER_THAN_SIGN) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.NULL)
	        this.currentToken.systemId += UNICODE.REPLACEMENT_CHARACTER;

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.currentToken.systemId += toChar(cp);
	};


	//12.2.4.66 After DOCTYPE system identifier state
	//------------------------------------------------------------------
	_[AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function afterDoctypeSystemIdentifierState(cp) {
	    if (isWhitespace(cp))
	        return;

	    if (cp === $.GREATER_THAN_SIGN) {
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this.currentToken.forceQuirks = true;
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }

	    else
	        this.state = BOGUS_DOCTYPE_STATE;
	};


	//12.2.4.67 Bogus DOCTYPE state
	//------------------------------------------------------------------
	_[BOGUS_DOCTYPE_STATE] = function bogusDoctypeState(cp) {
	    if (cp === $.GREATER_THAN_SIGN) {
	        this._emitCurrentToken();
	        this.state = DATA_STATE;
	    }

	    else if (cp === $.EOF) {
	        this._emitCurrentToken();
	        this._reconsumeInState(DATA_STATE);
	    }
	};


	//12.2.4.68 CDATA section state
	//------------------------------------------------------------------
	_[CDATA_SECTION_STATE] = function cdataSectionState(cp) {
	    while (true) {
	        if (cp === $.EOF) {
	            this._reconsumeInState(DATA_STATE);
	            break;
	        }

	        else if (this._consumeSubsequentIfMatch($$.CDATA_END_STRING, cp, true)) {
	            this.state = DATA_STATE;
	            break;
	        }

	        else {
	            this._emitCodePoint(cp);
	            cp = this._consume();
	        }
	    }
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var UNICODE = __webpack_require__(29);

	//Aliases
	var $ = UNICODE.CODE_POINTS;

	//Utils

	//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
	//this functions if they will be situated in another module due to context switch.
	//Always perform inlining check before modifying this functions ('node --trace-inlining').
	function isReservedCodePoint(cp) {
	    return cp >= 0xD800 && cp <= 0xDFFF || cp > 0x10FFFF;
	}

	function isSurrogatePair(cp1, cp2) {
	    return cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF;
	}

	function getSurrogatePairCodePoint(cp1, cp2) {
	    return (cp1 - 0xD800) * 0x400 + 0x2400 + cp2;
	}

	//Preprocessor
	//NOTE: HTML input preprocessing
	//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
	var Preprocessor = module.exports = function (html) {
	    this.write(html);

	    //NOTE: one leading U+FEFF BYTE ORDER MARK character must be ignored if any are present in the input stream.
	    this.pos = this.html.charCodeAt(0) === $.BOM ? 0 : -1;

	    this.gapStack = [];
	    this.lastGapPos = -1;
	    this.skipNextNewLine = false;
	};

	Preprocessor.prototype.write = function (html) {
	    if (this.html) {
	        this.html = this.html.substring(0, this.pos + 1) +
	                    html +
	                    this.html.substring(this.pos + 1, this.html.length);

	    }
	    else
	        this.html = html;


	    this.lastCharPos = this.html.length - 1;
	};

	Preprocessor.prototype.advanceAndPeekCodePoint = function () {
	    this.pos++;

	    if (this.pos > this.lastCharPos)
	        return $.EOF;

	    var cp = this.html.charCodeAt(this.pos);

	    //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
	    //must be ignored.
	    if (this.skipNextNewLine && cp === $.LINE_FEED) {
	        this.skipNextNewLine = false;
	        this._addGap();
	        return this.advanceAndPeekCodePoint();
	    }

	    //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
	    if (cp === $.CARRIAGE_RETURN) {
	        this.skipNextNewLine = true;
	        return $.LINE_FEED;
	    }

	    this.skipNextNewLine = false;

	    //OPTIMIZATION: first perform check if the code point in the allowed range that covers most common
	    //HTML input (e.g. ASCII codes) to avoid performance-cost operations for high-range code points.
	    return cp >= 0xD800 ? this._processHighRangeCodePoint(cp) : cp;
	};

	Preprocessor.prototype._processHighRangeCodePoint = function (cp) {
	    //NOTE: try to peek a surrogate pair
	    if (this.pos !== this.lastCharPos) {
	        var nextCp = this.html.charCodeAt(this.pos + 1);

	        if (isSurrogatePair(cp, nextCp)) {
	            //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
	            this.pos++;
	            cp = getSurrogatePairCodePoint(cp, nextCp);

	            //NOTE: add gap that should be avoided during retreat
	            this._addGap();
	        }
	    }

	    if (isReservedCodePoint(cp))
	        cp = $.REPLACEMENT_CHARACTER;

	    return cp;
	};

	Preprocessor.prototype._addGap = function () {
	    this.gapStack.push(this.lastGapPos);
	    this.lastGapPos = this.pos;
	};

	Preprocessor.prototype.retreat = function () {
	    if (this.pos === this.lastGapPos) {
	        this.lastGapPos = this.gapStack.pop();
	        this.pos--;
	    }

	    this.pos--;
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	exports.REPLACEMENT_CHARACTER = '\uFFFD';

	exports.CODE_POINTS = {
	    EOF: -1,
	    NULL: 0x00,
	    TABULATION: 0x09,
	    CARRIAGE_RETURN: 0x0D,
	    LINE_FEED: 0x0A,
	    FORM_FEED: 0x0C,
	    SPACE: 0x20,
	    EXCLAMATION_MARK: 0x21,
	    QUOTATION_MARK: 0x22,
	    NUMBER_SIGN: 0x23,
	    AMPERSAND: 0x26,
	    APOSTROPHE: 0x27,
	    HYPHEN_MINUS: 0x2D,
	    SOLIDUS: 0x2F,
	    DIGIT_0: 0x30,
	    DIGIT_9: 0x39,
	    SEMICOLON: 0x3B,
	    LESS_THAN_SIGN: 0x3C,
	    EQUALS_SIGN: 0x3D,
	    GREATER_THAN_SIGN: 0x3E,
	    QUESTION_MARK: 0x3F,
	    LATIN_CAPITAL_A: 0x41,
	    LATIN_CAPITAL_F: 0x46,
	    LATIN_CAPITAL_X: 0x58,
	    LATIN_CAPITAL_Z: 0x5A,
	    GRAVE_ACCENT: 0x60,
	    LATIN_SMALL_A: 0x61,
	    LATIN_SMALL_F: 0x66,
	    LATIN_SMALL_X: 0x78,
	    LATIN_SMALL_Z: 0x7A,
	    BOM: 0xFEFF,
	    REPLACEMENT_CHARACTER: 0xFFFD
	};

	exports.CODE_POINT_SEQUENCES = {
	    DASH_DASH_STRING: [0x2D, 0x2D], //--
	    DOCTYPE_STRING: [0x44, 0x4F, 0x43, 0x54, 0x59, 0x50, 0x45], //DOCTYPE
	    CDATA_START_STRING: [0x5B, 0x43, 0x44, 0x41, 0x54, 0x41, 0x5B], //[CDATA[
	    CDATA_END_STRING: [0x5D, 0x5D, 0x3E], //]]>
	    SCRIPT_STRING: [0x73, 0x63, 0x72, 0x69, 0x70, 0x74], //script
	    PUBLIC_STRING: [0x50, 0x55, 0x42, 0x4C, 0x49, 0x43], //PUBLIC
	    SYSTEM_STRING: [0x53, 0x59, 0x53, 0x54, 0x45, 0x4D] //SYSTEM
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	exports.assign = function (tokenizer) {
	    //NOTE: obtain Tokenizer proto this way to avoid module circular references
	    var tokenizerProto = Object.getPrototypeOf(tokenizer);

	    tokenizer.tokenStartLoc = -1;

	    //NOTE: add location info builder method
	    tokenizer._attachLocationInfo = function (token) {
	        token.location = {
	            start: this.tokenStartLoc,
	            end: -1
	        };
	    };

	    //NOTE: patch token creation methods and attach location objects
	    tokenizer._createStartTagToken = function (tagNameFirstCh) {
	        tokenizerProto._createStartTagToken.call(this, tagNameFirstCh);
	        this._attachLocationInfo(this.currentToken);
	    };

	    tokenizer._createEndTagToken = function (tagNameFirstCh) {
	        tokenizerProto._createEndTagToken.call(this, tagNameFirstCh);
	        this._attachLocationInfo(this.currentToken);
	    };

	    tokenizer._createCommentToken = function () {
	        tokenizerProto._createCommentToken.call(this);
	        this._attachLocationInfo(this.currentToken);
	    };

	    tokenizer._createDoctypeToken = function (doctypeNameFirstCh) {
	        tokenizerProto._createDoctypeToken.call(this, doctypeNameFirstCh);
	        this._attachLocationInfo(this.currentToken);
	    };

	    tokenizer._createCharacterToken = function (type, ch) {
	        tokenizerProto._createCharacterToken.call(this, type, ch);
	        this._attachLocationInfo(this.currentCharacterToken);
	    };

	    //NOTE: patch token emission methods to determine end location
	    tokenizer._emitCurrentToken = function () {
	        //NOTE: if we have pending character token make it's end location equal to the
	        //current token's start location.
	        if (this.currentCharacterToken)
	            this.currentCharacterToken.location.end = this.currentToken.location.start;

	        this.currentToken.location.end = this.preprocessor.pos + 1;
	        tokenizerProto._emitCurrentToken.call(this);
	    };

	    tokenizer._emitCurrentCharacterToken = function () {
	        //NOTE: if we have character token and it's location wasn't set in the _emitCurrentToken(),
	        //then set it's location at the current preprocessor position
	        if (this.currentCharacterToken && this.currentCharacterToken.location.end === -1) {
	            //NOTE: we don't need to increment preprocessor position, since character token
	            //emission is always forced by the start of the next character token here.
	            //So, we already have advanced position.
	            this.currentCharacterToken.location.end = this.preprocessor.pos;
	        }

	        tokenizerProto._emitCurrentCharacterToken.call(this);
	    };

	    //NOTE: patch initial states for each mode to obtain token start position
	    Object.keys(tokenizerProto.MODE)

	        .map(function (modeName) {
	            return tokenizerProto.MODE[modeName];
	        })

	        .forEach(function (state) {
	            tokenizer[state] = function (cp) {
	                this.tokenStartLoc = this.preprocessor.pos;
	                tokenizerProto[state].call(this, cp);
	            };
	        });
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	//NOTE: this file contains auto generated trie structure that is used for named entity references consumption
	//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#tokenizing-character-references and
	//http://www.whatwg.org/specs/web-apps/current-work/multipage/named-character-references.html#named-character-references)
	module.exports = {65:{l:{69:{l:{108:{l:{105:{l:{103:{l:{59:{c:[198]}},c:[198]}}}}}}},77:{l:{80:{l:{59:{c:[38]}},c:[38]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[193]}},c:[193]}}}}}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[258]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[194]}},c:[194]}}}}},121:{l:{59:{c:[1040]}}}}},102:{l:{114:{l:{59:{c:[120068]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[192]}},c:[192]}}}}}}}}},108:{l:{112:{l:{104:{l:{97:{l:{59:{c:[913]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[256]}}}}}}}}},110:{l:{100:{l:{59:{c:[10835]}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[260]}}}}}}},112:{l:{102:{l:{59:{c:[120120]}}}}}}},112:{l:{112:{l:{108:{l:{121:{l:{70:{l:{117:{l:{110:{l:{99:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8289]}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{110:{l:{103:{l:{59:{c:[197]}},c:[197]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119964]}}}}},115:{l:{105:{l:{103:{l:{110:{l:{59:{c:[8788]}}}}}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[195]}},c:[195]}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[196]}},c:[196]}}}}}}},66:{l:{97:{l:{99:{l:{107:{l:{115:{l:{108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8726]}}}}}}}}}}}}}}},114:{l:{118:{l:{59:{c:[10983]}}},119:{l:{101:{l:{100:{l:{59:{c:[8966]}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1041]}}}}},101:{l:{99:{l:{97:{l:{117:{l:{115:{l:{101:{l:{59:{c:[8757]}}}}}}}}}}},114:{l:{110:{l:{111:{l:{117:{l:{108:{l:{108:{l:{105:{l:{115:{l:{59:{c:[8492]}}}}}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[914]}}}}}}},102:{l:{114:{l:{59:{c:[120069]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120121]}}}}}}},114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[728]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8492]}}}}}}},117:{l:{109:{l:{112:{l:{101:{l:{113:{l:{59:{c:[8782]}}}}}}}}}}}}},67:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1063]}}}}}}},79:{l:{80:{l:{89:{l:{59:{c:[169]}},c:[169]}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[262]}}}}}}}}},112:{l:{59:{c:[8914]},105:{l:{116:{l:{97:{l:{108:{l:{68:{l:{105:{l:{102:{l:{102:{l:{101:{l:{114:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{68:{l:{59:{c:[8517]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},121:{l:{108:{l:{101:{l:{121:{l:{115:{l:{59:{c:[8493]}}}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[268]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[199]}},c:[199]}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[264]}}}}}}},111:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[8752]}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[266]}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{108:{l:{97:{l:{59:{c:[184]}}}}}}}}}}},110:{l:{116:{l:{101:{l:{114:{l:{68:{l:{111:{l:{116:{l:{59:{c:[183]}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[8493]}}}}},104:{l:{105:{l:{59:{c:[935]}}}}},105:{l:{114:{l:{99:{l:{108:{l:{101:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8857]}}}}}}},77:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8854]}}}}}}}}}}},80:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8853]}}}}}}}}},84:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8855]}}}}}}}}}}}}}}}}}}}}},108:{l:{111:{l:{99:{l:{107:{l:{119:{l:{105:{l:{115:{l:{101:{l:{67:{l:{111:{l:{110:{l:{116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8754]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{101:{l:{67:{l:{117:{l:{114:{l:{108:{l:{121:{l:{68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8221]}}}}}}}}}}}}}}}}}}}}}}},81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8217]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[8759]},101:{l:{59:{c:[10868]}}}}}}}}},110:{l:{103:{l:{114:{l:{117:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8801]}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8751]}}}}}}},116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8750]}}}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[8450]}}},114:{l:{111:{l:{100:{l:{117:{l:{99:{l:{116:{l:{59:{c:[8720]}}}}}}}}}}}}}}},117:{l:{110:{l:{116:{l:{101:{l:{114:{l:{67:{l:{108:{l:{111:{l:{99:{l:{107:{l:{119:{l:{105:{l:{115:{l:{101:{l:{67:{l:{111:{l:{110:{l:{116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8755]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{111:{l:{115:{l:{115:{l:{59:{c:[10799]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119966]}}}}}}},117:{l:{112:{l:{59:{c:[8915]},67:{l:{97:{l:{112:{l:{59:{c:[8781]}}}}}}}}}}}}},68:{l:{68:{l:{59:{c:[8517]},111:{l:{116:{l:{114:{l:{97:{l:{104:{l:{100:{l:{59:{c:[10513]}}}}}}}}}}}}}}},74:{l:{99:{l:{121:{l:{59:{c:[1026]}}}}}}},83:{l:{99:{l:{121:{l:{59:{c:[1029]}}}}}}},90:{l:{99:{l:{121:{l:{59:{c:[1039]}}}}}}},97:{l:{103:{l:{103:{l:{101:{l:{114:{l:{59:{c:[8225]}}}}}}}}},114:{l:{114:{l:{59:{c:[8609]}}}}},115:{l:{104:{l:{118:{l:{59:{c:[10980]}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[270]}}}}}}}}},121:{l:{59:{c:[1044]}}}}},101:{l:{108:{l:{59:{c:[8711]},116:{l:{97:{l:{59:{c:[916]}}}}}}}}},102:{l:{114:{l:{59:{c:[120071]}}}}},105:{l:{97:{l:{99:{l:{114:{l:{105:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{65:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[180]}}}}}}}}}}},68:{l:{111:{l:{116:{l:{59:{c:[729]}}},117:{l:{98:{l:{108:{l:{101:{l:{65:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[733]}}}}}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[96]}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[732]}}}}}}}}}}}}}}}}}}}}}}}}}}},109:{l:{111:{l:{110:{l:{100:{l:{59:{c:[8900]}}}}}}}}}}},102:{l:{102:{l:{101:{l:{114:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{68:{l:{59:{c:[8518]}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120123]}}}}},116:{l:{59:{c:[168]},68:{l:{111:{l:{116:{l:{59:{c:[8412]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8784]}}}}}}}}}}}}},117:{l:{98:{l:{108:{l:{101:{l:{67:{l:{111:{l:{110:{l:{116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8751]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},68:{l:{111:{l:{116:{l:{59:{c:[168]}}},119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8659]}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8656]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8660]}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[10980]}}}}}}}}}}}}},111:{l:{110:{l:{103:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10232]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10234]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10233]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8658]}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8872]}}}}}}}}}}}}}}}}},85:{l:{112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8657]}}}}}}}}}}},68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8661]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8741]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8595]},66:{l:{97:{l:{114:{l:{59:{c:[10515]}}}}}}},85:{l:{112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8693]}}}}}}}}}}}}}}}}}}}}}}}}},66:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[785]}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10576]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10590]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8637]},66:{l:{97:{l:{114:{l:{59:{c:[10582]}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10591]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8641]},66:{l:{97:{l:{114:{l:{59:{c:[10583]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8868]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8615]}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8659]}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119967]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[272]}}}}}}}}}}}}},69:{l:{78:{l:{71:{l:{59:{c:[330]}}}}},84:{l:{72:{l:{59:{c:[208]}},c:[208]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[201]}},c:[201]}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[282]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[202]}},c:[202]}}}}},121:{l:{59:{c:[1069]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[278]}}}}}}},102:{l:{114:{l:{59:{c:[120072]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[200]}},c:[200]}}}}}}}}},108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8712]}}}}}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[274]}}}}}}},112:{l:{116:{l:{121:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9723]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{121:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9643]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[280]}}}}}}},112:{l:{102:{l:{59:{c:[120124]}}}}}}},112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[917]}}}}}}}}}}}}},113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10869]},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8770]}}}}}}}}}}}}}}},105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[8652]}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8496]}}}}},105:{l:{109:{l:{59:{c:[10867]}}}}}}},116:{l:{97:{l:{59:{c:[919]}}}}},117:{l:{109:{l:{108:{l:{59:{c:[203]}},c:[203]}}}}},120:{l:{105:{l:{115:{l:{116:{l:{115:{l:{59:{c:[8707]}}}}}}}}},112:{l:{111:{l:{110:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{69:{l:{59:{c:[8519]}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{99:{l:{121:{l:{59:{c:[1060]}}}}},102:{l:{114:{l:{59:{c:[120073]}}}}},105:{l:{108:{l:{108:{l:{101:{l:{100:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9724]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{121:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9642]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120125]}}}}},114:{l:{65:{l:{108:{l:{108:{l:{59:{c:[8704]}}}}}}}}},117:{l:{114:{l:{105:{l:{101:{l:{114:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8497]}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8497]}}}}}}}}},71:{l:{74:{l:{99:{l:{121:{l:{59:{c:[1027]}}}}}}},84:{l:{59:{c:[62]}},c:[62]},97:{l:{109:{l:{109:{l:{97:{l:{59:{c:[915]},100:{l:{59:{c:[988]}}}}}}}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[286]}}}}}}}}}}},99:{l:{101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[290]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[284]}}}}}}},121:{l:{59:{c:[1043]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[288]}}}}}}},102:{l:{114:{l:{59:{c:[120074]}}}}},103:{l:{59:{c:[8921]}}},111:{l:{112:{l:{102:{l:{59:{c:[120126]}}}}}}},114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8805]},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8923]}}}}}}}}}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8807]}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[10914]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8823]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10878]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8819]}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119970]}}}}}}},116:{l:{59:{c:[8811]}}}}},72:{l:{65:{l:{82:{l:{68:{l:{99:{l:{121:{l:{59:{c:[1066]}}}}}}}}}}},97:{l:{99:{l:{101:{l:{107:{l:{59:{c:[711]}}}}}}},116:{l:{59:{c:[94]}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[292]}}}}}}}}},102:{l:{114:{l:{59:{c:[8460]}}}}},105:{l:{108:{l:{98:{l:{101:{l:{114:{l:{116:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8459]}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8461]}}}}},114:{l:{105:{l:{122:{l:{111:{l:{110:{l:{116:{l:{97:{l:{108:{l:{76:{l:{105:{l:{110:{l:{101:{l:{59:{c:[9472]}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8459]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[294]}}}}}}}}}}},117:{l:{109:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{72:{l:{117:{l:{109:{l:{112:{l:{59:{c:[8782]}}}}}}}}}}}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8783]}}}}}}}}}}}}}}}}}}},73:{l:{69:{l:{99:{l:{121:{l:{59:{c:[1045]}}}}}}},74:{l:{108:{l:{105:{l:{103:{l:{59:{c:[306]}}}}}}}}},79:{l:{99:{l:{121:{l:{59:{c:[1025]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[205]}},c:[205]}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[206]}},c:[206]}}}}},121:{l:{59:{c:[1048]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[304]}}}}}}},102:{l:{114:{l:{59:{c:[8465]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[204]}},c:[204]}}}}}}}}},109:{l:{59:{c:[8465]},97:{l:{99:{l:{114:{l:{59:{c:[298]}}}}},103:{l:{105:{l:{110:{l:{97:{l:{114:{l:{121:{l:{73:{l:{59:{c:[8520]}}}}}}}}}}}}}}}}},112:{l:{108:{l:{105:{l:{101:{l:{115:{l:{59:{c:[8658]}}}}}}}}}}}}},110:{l:{116:{l:{59:{c:[8748]},101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8747]}}}}}}}}},114:{l:{115:{l:{101:{l:{99:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8898]}}}}}}}}}}}}}}}}}}}}},118:{l:{105:{l:{115:{l:{105:{l:{98:{l:{108:{l:{101:{l:{67:{l:{111:{l:{109:{l:{109:{l:{97:{l:{59:{c:[8291]}}}}}}}}}}},84:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8290]}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[302]}}}}}}},112:{l:{102:{l:{59:{c:[120128]}}}}},116:{l:{97:{l:{59:{c:[921]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8464]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[296]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1030]}}}}}}},109:{l:{108:{l:{59:{c:[207]}},c:[207]}}}}}}},74:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[308]}}}}}}},121:{l:{59:{c:[1049]}}}}},102:{l:{114:{l:{59:{c:[120077]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120129]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119973]}}}}},101:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1032]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1028]}}}}}}}}}}},75:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1061]}}}}}}},74:{l:{99:{l:{121:{l:{59:{c:[1036]}}}}}}},97:{l:{112:{l:{112:{l:{97:{l:{59:{c:[922]}}}}}}}}},99:{l:{101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[310]}}}}}}}}},121:{l:{59:{c:[1050]}}}}},102:{l:{114:{l:{59:{c:[120078]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120130]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119974]}}}}}}}}},76:{l:{74:{l:{99:{l:{121:{l:{59:{c:[1033]}}}}}}},84:{l:{59:{c:[60]}},c:[60]},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[313]}}}}}}}}},109:{l:{98:{l:{100:{l:{97:{l:{59:{c:[923]}}}}}}}}},110:{l:{103:{l:{59:{c:[10218]}}}}},112:{l:{108:{l:{97:{l:{99:{l:{101:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8466]}}}}}}}}}}}}}}}}},114:{l:{114:{l:{59:{c:[8606]}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[317]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[315]}}}}}}}}},121:{l:{59:{c:[1051]}}}}},101:{l:{102:{l:{116:{l:{65:{l:{110:{l:{103:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10216]}}}}}}}}}}}}}}}}}}}}}}},114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8592]},66:{l:{97:{l:{114:{l:{59:{c:[8676]}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8646]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},67:{l:{101:{l:{105:{l:{108:{l:{105:{l:{110:{l:{103:{l:{59:{c:[8968]}}}}}}}}}}}}}}},68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10214]}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10593]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8643]},66:{l:{97:{l:{114:{l:{59:{c:[10585]}}}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8970]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8596]}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10574]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8867]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8612]}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10586]}}}}}}}}}}}}}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8882]},66:{l:{97:{l:{114:{l:{59:{c:[10703]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8884]}}}}}}}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10577]}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10592]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8639]},66:{l:{97:{l:{114:{l:{59:{c:[10584]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8636]},66:{l:{97:{l:{114:{l:{59:{c:[10578]}}}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8656]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8660]}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{115:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8922]}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8806]}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8822]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10913]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10877]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8818]}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120079]}}}}},108:{l:{59:{c:[8920]},101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8666]}}}}}}}}}}}}}}}}}}},109:{l:{105:{l:{100:{l:{111:{l:{116:{l:{59:{c:[319]}}}}}}}}}}},111:{l:{110:{l:{103:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10229]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10231]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10230]}}}}}}}}}}}}}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10232]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10234]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10233]}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[120131]}}}}},119:{l:{101:{l:{114:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8601]}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8600]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8466]}}}}},104:{l:{59:{c:[8624]}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[321]}}}}}}}}}}},116:{l:{59:{c:[8810]}}}}},77:{l:{97:{l:{112:{l:{59:{c:[10501]}}}}},99:{l:{121:{l:{59:{c:[1052]}}}}},101:{l:{100:{l:{105:{l:{117:{l:{109:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8287]}}}}}}}}}}}}}}}}}}},108:{l:{108:{l:{105:{l:{110:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8499]}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120080]}}}}},105:{l:{110:{l:{117:{l:{115:{l:{80:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8723]}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120132]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8499]}}}}}}},117:{l:{59:{c:[924]}}}}},78:{l:{74:{l:{99:{l:{121:{l:{59:{c:[1034]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[323]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[327]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[325]}}}}}}}}},121:{l:{59:{c:[1053]}}}}},101:{l:{103:{l:{97:{l:{116:{l:{105:{l:{118:{l:{101:{l:{77:{l:{101:{l:{100:{l:{105:{l:{117:{l:{109:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{104:{l:{105:{l:{99:{l:{107:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}},110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{121:{l:{84:{l:{104:{l:{105:{l:{110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{116:{l:{101:{l:{100:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8811]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8810]}}}}}}}}}}}}}}}}}}}}}}}}},119:{l:{76:{l:{105:{l:{110:{l:{101:{l:{59:{c:[10]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120081]}}}}},111:{l:{66:{l:{114:{l:{101:{l:{97:{l:{107:{l:{59:{c:[8288]}}}}}}}}}}},110:{l:{66:{l:{114:{l:{101:{l:{97:{l:{107:{l:{105:{l:{110:{l:{103:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[160]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[8469]}}}}},116:{l:{59:{c:[10988]},67:{l:{111:{l:{110:{l:{103:{l:{114:{l:{117:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8802]}}}}}}}}}}}}}}}}},117:{l:{112:{l:{67:{l:{97:{l:{112:{l:{59:{c:[8813]}}}}}}}}}}}}},68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{86:{l:{101:{l:{114:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8742]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},69:{l:{108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8713]}}}}}}}}}}}}},113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8800]},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8770,824]}}}}}}}}}}}}}}}}}}},120:{l:{105:{l:{115:{l:{116:{l:{115:{l:{59:{c:[8708]}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8815]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8817]}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8807,824]}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8811,824]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8825]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10878,824]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8821]}}}}}}}}}}}}}}}}}}}}}}}}},72:{l:{117:{l:{109:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{72:{l:{117:{l:{109:{l:{112:{l:{59:{c:[8782,824]}}}}}}}}}}}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8783,824]}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{84:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8938]},66:{l:{97:{l:{114:{l:{59:{c:[10703,824]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8940]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{115:{l:{59:{c:[8814]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8816]}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8824]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8810,824]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10877,824]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8820]}}}}}}}}}}}}}}}}}}},78:{l:{101:{l:{115:{l:{116:{l:{101:{l:{100:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[10914,824]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10913,824]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},80:{l:{114:{l:{101:{l:{99:{l:{101:{l:{100:{l:{101:{l:{115:{l:{59:{c:[8832]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10927,824]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8928]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{101:{l:{118:{l:{101:{l:{114:{l:{115:{l:{101:{l:{69:{l:{108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8716]}}}}}}}}}}}}}}}}}}}}}}}}}}},105:{l:{103:{l:{104:{l:{116:{l:{84:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8939]},66:{l:{97:{l:{114:{l:{59:{c:[10704,824]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8941]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{83:{l:{117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8847,824]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8930]}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8848,824]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8931]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8834,8402]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8840]}}}}}}}}}}}}}}}}}}},99:{l:{99:{l:{101:{l:{101:{l:{100:{l:{115:{l:{59:{c:[8833]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10928,824]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8929]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8831,824]}}}}}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8835,8402]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8841]}}}}}}}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8769]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8772]}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8775]}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8777]}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8740]}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119977]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[209]}},c:[209]}}}}}}}}},117:{l:{59:{c:[925]}}}}},79:{l:{69:{l:{108:{l:{105:{l:{103:{l:{59:{c:[338]}}}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[211]}},c:[211]}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[212]}},c:[212]}}}}},121:{l:{59:{c:[1054]}}}}},100:{l:{98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[336]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120082]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[210]}},c:[210]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[332]}}}}}}},101:{l:{103:{l:{97:{l:{59:{c:[937]}}}}}}},105:{l:{99:{l:{114:{l:{111:{l:{110:{l:{59:{c:[927]}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120134]}}}}}}},112:{l:{101:{l:{110:{l:{67:{l:{117:{l:{114:{l:{108:{l:{121:{l:{68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8220]}}}}}}}}}}}}}}}}}}}}}}},81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8216]}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{59:{c:[10836]}}},115:{l:{99:{l:{114:{l:{59:{c:[119978]}}}}},108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[216]}},c:[216]}}}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[213]}},c:[213]}}}}},109:{l:{101:{l:{115:{l:{59:{c:[10807]}}}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[214]}},c:[214]}}}}},118:{l:{101:{l:{114:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8254]}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[9182]}}},107:{l:{101:{l:{116:{l:{59:{c:[9140]}}}}}}}}}}}}}}},80:{l:{97:{l:{114:{l:{101:{l:{110:{l:{116:{l:{104:{l:{101:{l:{115:{l:{105:{l:{115:{l:{59:{c:[9180]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},80:{l:{97:{l:{114:{l:{116:{l:{105:{l:{97:{l:{108:{l:{68:{l:{59:{c:[8706]}}}}}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1055]}}}}},102:{l:{114:{l:{59:{c:[120083]}}}}},104:{l:{105:{l:{59:{c:[934]}}}}},105:{l:{59:{c:[928]}}},108:{l:{117:{l:{115:{l:{77:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[177]}}}}}}}}}}}}}}}}},111:{l:{105:{l:{110:{l:{99:{l:{97:{l:{114:{l:{101:{l:{112:{l:{108:{l:{97:{l:{110:{l:{101:{l:{59:{c:[8460]}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[8473]}}}}}}},114:{l:{59:{c:[10939]},101:{l:{99:{l:{101:{l:{100:{l:{101:{l:{115:{l:{59:{c:[8826]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10927]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8828]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8830]}}}}}}}}}}}}}}}}}}}}}}},105:{l:{109:{l:{101:{l:{59:{c:[8243]}}}}}}},111:{l:{100:{l:{117:{l:{99:{l:{116:{l:{59:{c:[8719]}}}}}}}}},112:{l:{111:{l:{114:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8759]},97:{l:{108:{l:{59:{c:[8733]}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119979]}}}}},105:{l:{59:{c:[936]}}}}}}},81:{l:{85:{l:{79:{l:{84:{l:{59:{c:[34]}},c:[34]}}}}},102:{l:{114:{l:{59:{c:[120084]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8474]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119980]}}}}}}}}},82:{l:{66:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10512]}}}}}}}}},69:{l:{71:{l:{59:{c:[174]}},c:[174]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[340]}}}}}}}}},110:{l:{103:{l:{59:{c:[10219]}}}}},114:{l:{114:{l:{59:{c:[8608]},116:{l:{108:{l:{59:{c:[10518]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[344]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[342]}}}}}}}}},121:{l:{59:{c:[1056]}}}}},101:{l:{59:{c:[8476]},118:{l:{101:{l:{114:{l:{115:{l:{101:{l:{69:{l:{108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8715]}}}}}}}}}}}}},113:{l:{117:{l:{105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[8651]}}}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{69:{l:{113:{l:{117:{l:{105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[10607]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[8476]}}}}},104:{l:{111:{l:{59:{c:[929]}}}}},105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{110:{l:{103:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10217]}}}}}}}}}}}}}}}}}}}}}}},114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8594]},66:{l:{97:{l:{114:{l:{59:{c:[8677]}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8644]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},67:{l:{101:{l:{105:{l:{108:{l:{105:{l:{110:{l:{103:{l:{59:{c:[8969]}}}}}}}}}}}}}}},68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10215]}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10589]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8642]},66:{l:{97:{l:{114:{l:{59:{c:[10581]}}}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8971]}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8866]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8614]}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10587]}}}}}}}}}}}}}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8883]},66:{l:{97:{l:{114:{l:{59:{c:[10704]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8885]}}}}}}}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10575]}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10588]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8638]},66:{l:{97:{l:{114:{l:{59:{c:[10580]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8640]},66:{l:{97:{l:{114:{l:{59:{c:[10579]}}}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8658]}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8477]}}}}},117:{l:{110:{l:{100:{l:{73:{l:{109:{l:{112:{l:{108:{l:{105:{l:{101:{l:{115:{l:{59:{c:[10608]}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8667]}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8475]}}}}},104:{l:{59:{c:[8625]}}}}},117:{l:{108:{l:{101:{l:{68:{l:{101:{l:{108:{l:{97:{l:{121:{l:{101:{l:{100:{l:{59:{c:[10740]}}}}}}}}}}}}}}}}}}}}}}},83:{l:{72:{l:{67:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1065]}}}}}}}}},99:{l:{121:{l:{59:{c:[1064]}}}}}}},79:{l:{70:{l:{84:{l:{99:{l:{121:{l:{59:{c:[1068]}}}}}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[346]}}}}}}}}}}},99:{l:{59:{c:[10940]},97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[352]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[350]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[348]}}}}}}},121:{l:{59:{c:[1057]}}}}},102:{l:{114:{l:{59:{c:[120086]}}}}},104:{l:{111:{l:{114:{l:{116:{l:{68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8595]}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8592]}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8594]}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8593]}}}}}}}}}}}}}}}}}}}}}}},105:{l:{103:{l:{109:{l:{97:{l:{59:{c:[931]}}}}}}}}},109:{l:{97:{l:{108:{l:{108:{l:{67:{l:{105:{l:{114:{l:{99:{l:{108:{l:{101:{l:{59:{c:[8728]}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120138]}}}}}}},113:{l:{114:{l:{116:{l:{59:{c:[8730]}}}}},117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9633]},73:{l:{110:{l:{116:{l:{101:{l:{114:{l:{115:{l:{101:{l:{99:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8851]}}}}}}}}}}}}}}}}}}}}}}}}},83:{l:{117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8847]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8849]}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8848]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8850]}}}}}}}}}}}}}}}}}}}}}}}}}}},85:{l:{110:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8852]}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119982]}}}}}}},116:{l:{97:{l:{114:{l:{59:{c:[8902]}}}}}}},117:{l:{98:{l:{59:{c:[8912]},115:{l:{101:{l:{116:{l:{59:{c:[8912]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8838]}}}}}}}}}}}}}}}}}}},99:{l:{99:{l:{101:{l:{101:{l:{100:{l:{115:{l:{59:{c:[8827]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10928]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8829]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8831]}}}}}}}}}}}}}}}}}}}}},104:{l:{84:{l:{104:{l:{97:{l:{116:{l:{59:{c:[8715]}}}}}}}}}}}}},109:{l:{59:{c:[8721]}}},112:{l:{59:{c:[8913]},101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8835]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8839]}}}}}}}}}}}}}}}}}}}}},115:{l:{101:{l:{116:{l:{59:{c:[8913]}}}}}}}}}}}}},84:{l:{72:{l:{79:{l:{82:{l:{78:{l:{59:{c:[222]}},c:[222]}}}}}}},82:{l:{65:{l:{68:{l:{69:{l:{59:{c:[8482]}}}}}}}}},83:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1035]}}}}}}},99:{l:{121:{l:{59:{c:[1062]}}}}}}},97:{l:{98:{l:{59:{c:[9]}}},117:{l:{59:{c:[932]}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[356]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[354]}}}}}}}}},121:{l:{59:{c:[1058]}}}}},102:{l:{114:{l:{59:{c:[120087]}}}}},104:{l:{101:{l:{114:{l:{101:{l:{102:{l:{111:{l:{114:{l:{101:{l:{59:{c:[8756]}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[920]}}}}}}},105:{l:{99:{l:{107:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8287,8202]}}}}}}}}}}}}}}},110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8201]}}}}}}}}}}}}}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8764]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8771]}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8773]}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8776]}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120139]}}}}}}},114:{l:{105:{l:{112:{l:{108:{l:{101:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8411]}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119983]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[358]}}}}}}}}}}}}},85:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[218]}},c:[218]}}}}}}},114:{l:{114:{l:{59:{c:[8607]},111:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10569]}}}}}}}}}}}}}}},98:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1038]}}}}},101:{l:{118:{l:{101:{l:{59:{c:[364]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[219]}},c:[219]}}}}},121:{l:{59:{c:[1059]}}}}},100:{l:{98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[368]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120088]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[217]}},c:[217]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[362]}}}}}}}}},110:{l:{100:{l:{101:{l:{114:{l:{66:{l:{97:{l:{114:{l:{59:{c:[95]}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[9183]}}},107:{l:{101:{l:{116:{l:{59:{c:[9141]}}}}}}}}}}}}}}},80:{l:{97:{l:{114:{l:{101:{l:{110:{l:{116:{l:{104:{l:{101:{l:{115:{l:{105:{l:{115:{l:{59:{c:[9181]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},105:{l:{111:{l:{110:{l:{59:{c:[8899]},80:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8846]}}}}}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[370]}}}}}}},112:{l:{102:{l:{59:{c:[120140]}}}}}}},112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8593]},66:{l:{97:{l:{114:{l:{59:{c:[10514]}}}}}}},68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8645]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8597]}}}}}}}}}}}}}}}}}}},69:{l:{113:{l:{117:{l:{105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[10606]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8869]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8613]}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8657]}}}}}}}}}}},100:{l:{111:{l:{119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8661]}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8598]}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8599]}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{105:{l:{59:{c:[978]},108:{l:{111:{l:{110:{l:{59:{c:[933]}}}}}}}}}}}}},114:{l:{105:{l:{110:{l:{103:{l:{59:{c:[366]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119984]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[360]}}}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[220]}},c:[220]}}}}}}},86:{l:{68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8875]}}}}}}}}},98:{l:{97:{l:{114:{l:{59:{c:[10987]}}}}}}},99:{l:{121:{l:{59:{c:[1042]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8873]},108:{l:{59:{c:[10982]}}}}}}}}}}},101:{l:{101:{l:{59:{c:[8897]}}},114:{l:{98:{l:{97:{l:{114:{l:{59:{c:[8214]}}}}}}},116:{l:{59:{c:[8214]},105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8739]}}}}}}},76:{l:{105:{l:{110:{l:{101:{l:{59:{c:[124]}}}}}}}}},83:{l:{101:{l:{112:{l:{97:{l:{114:{l:{97:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10072]}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8768]}}}}}}}}}}}}}}}}}}}}},121:{l:{84:{l:{104:{l:{105:{l:{110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8202]}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120089]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120141]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119985]}}}}}}},118:{l:{100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8874]}}}}}}}}}}}}},87:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[372]}}}}}}}}},101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8896]}}}}}}}}},102:{l:{114:{l:{59:{c:[120090]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120142]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119986]}}}}}}}}},88:{l:{102:{l:{114:{l:{59:{c:[120091]}}}}},105:{l:{59:{c:[926]}}},111:{l:{112:{l:{102:{l:{59:{c:[120143]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119987]}}}}}}}}},89:{l:{65:{l:{99:{l:{121:{l:{59:{c:[1071]}}}}}}},73:{l:{99:{l:{121:{l:{59:{c:[1031]}}}}}}},85:{l:{99:{l:{121:{l:{59:{c:[1070]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[221]}},c:[221]}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[374]}}}}}}},121:{l:{59:{c:[1067]}}}}},102:{l:{114:{l:{59:{c:[120092]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120144]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119988]}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[376]}}}}}}}}},90:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1046]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[377]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[381]}}}}}}}}},121:{l:{59:{c:[1047]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[379]}}}}}}},101:{l:{114:{l:{111:{l:{87:{l:{105:{l:{100:{l:{116:{l:{104:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[918]}}}}}}},102:{l:{114:{l:{59:{c:[8488]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8484]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119989]}}}}}}}}},97:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[225]}},c:[225]}}}}}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[259]}}}}}}}}}}},99:{l:{59:{c:[8766]},69:{l:{59:{c:[8766,819]}}},100:{l:{59:{c:[8767]}}},105:{l:{114:{l:{99:{l:{59:{c:[226]}},c:[226]}}}}},117:{l:{116:{l:{101:{l:{59:{c:[180]}},c:[180]}}}}},121:{l:{59:{c:[1072]}}}}},101:{l:{108:{l:{105:{l:{103:{l:{59:{c:[230]}},c:[230]}}}}}}},102:{l:{59:{c:[8289]},114:{l:{59:{c:[120094]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[224]}},c:[224]}}}}}}}}},108:{l:{101:{l:{102:{l:{115:{l:{121:{l:{109:{l:{59:{c:[8501]}}}}}}}}},112:{l:{104:{l:{59:{c:[8501]}}}}}}},112:{l:{104:{l:{97:{l:{59:{c:[945]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[257]}}}}},108:{l:{103:{l:{59:{c:[10815]}}}}}}},112:{l:{59:{c:[38]}},c:[38]}}},110:{l:{100:{l:{59:{c:[8743]},97:{l:{110:{l:{100:{l:{59:{c:[10837]}}}}}}},100:{l:{59:{c:[10844]}}},115:{l:{108:{l:{111:{l:{112:{l:{101:{l:{59:{c:[10840]}}}}}}}}}}},118:{l:{59:{c:[10842]}}}}},103:{l:{59:{c:[8736]},101:{l:{59:{c:[10660]}}},108:{l:{101:{l:{59:{c:[8736]}}}}},109:{l:{115:{l:{100:{l:{59:{c:[8737]},97:{l:{97:{l:{59:{c:[10664]}}},98:{l:{59:{c:[10665]}}},99:{l:{59:{c:[10666]}}},100:{l:{59:{c:[10667]}}},101:{l:{59:{c:[10668]}}},102:{l:{59:{c:[10669]}}},103:{l:{59:{c:[10670]}}},104:{l:{59:{c:[10671]}}}}}}}}}}},114:{l:{116:{l:{59:{c:[8735]},118:{l:{98:{l:{59:{c:[8894]},100:{l:{59:{c:[10653]}}}}}}}}}}},115:{l:{112:{l:{104:{l:{59:{c:[8738]}}}}},116:{l:{59:{c:[197]}}}}},122:{l:{97:{l:{114:{l:{114:{l:{59:{c:[9084]}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[261]}}}}}}},112:{l:{102:{l:{59:{c:[120146]}}}}}}},112:{l:{59:{c:[8776]},69:{l:{59:{c:[10864]}}},97:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10863]}}}}}}}}},101:{l:{59:{c:[8778]}}},105:{l:{100:{l:{59:{c:[8779]}}}}},111:{l:{115:{l:{59:{c:[39]}}}}},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[8776]},101:{l:{113:{l:{59:{c:[8778]}}}}}}}}}}}}}}},114:{l:{105:{l:{110:{l:{103:{l:{59:{c:[229]}},c:[229]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119990]}}}}},116:{l:{59:{c:[42]}}},121:{l:{109:{l:{112:{l:{59:{c:[8776]},101:{l:{113:{l:{59:{c:[8781]}}}}}}}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[227]}},c:[227]}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[228]}},c:[228]}}}}},119:{l:{99:{l:{111:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[8755]}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[10769]}}}}}}}}}}},98:{l:{78:{l:{111:{l:{116:{l:{59:{c:[10989]}}}}}}},97:{l:{99:{l:{107:{l:{99:{l:{111:{l:{110:{l:{103:{l:{59:{c:[8780]}}}}}}}}},101:{l:{112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[1014]}}}}}}}}}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8245]}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8765]},101:{l:{113:{l:{59:{c:[8909]}}}}}}}}}}}}}}},114:{l:{118:{l:{101:{l:{101:{l:{59:{c:[8893]}}}}}}},119:{l:{101:{l:{100:{l:{59:{c:[8965]},103:{l:{101:{l:{59:{c:[8965]}}}}}}}}}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[9141]},116:{l:{98:{l:{114:{l:{107:{l:{59:{c:[9142]}}}}}}}}}}}}}}},99:{l:{111:{l:{110:{l:{103:{l:{59:{c:[8780]}}}}}}},121:{l:{59:{c:[1073]}}}}},100:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8222]}}}}}}}}},101:{l:{99:{l:{97:{l:{117:{l:{115:{l:{59:{c:[8757]},101:{l:{59:{c:[8757]}}}}}}}}}}},109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10672]}}}}}}}}}}},112:{l:{115:{l:{105:{l:{59:{c:[1014]}}}}}}},114:{l:{110:{l:{111:{l:{117:{l:{59:{c:[8492]}}}}}}}}},116:{l:{97:{l:{59:{c:[946]}}},104:{l:{59:{c:[8502]}}},119:{l:{101:{l:{101:{l:{110:{l:{59:{c:[8812]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120095]}}}}},105:{l:{103:{l:{99:{l:{97:{l:{112:{l:{59:{c:[8898]}}}}},105:{l:{114:{l:{99:{l:{59:{c:[9711]}}}}}}},117:{l:{112:{l:{59:{c:[8899]}}}}}}},111:{l:{100:{l:{111:{l:{116:{l:{59:{c:[10752]}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10753]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[10754]}}}}}}}}}}}}},115:{l:{113:{l:{99:{l:{117:{l:{112:{l:{59:{c:[10758]}}}}}}}}},116:{l:{97:{l:{114:{l:{59:{c:[9733]}}}}}}}}},116:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[9661]}}}}}}}}},117:{l:{112:{l:{59:{c:[9651]}}}}}}}}}}}}}}}}}}}}},117:{l:{112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10756]}}}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8897]}}}}}}},119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8896]}}}}}}}}}}}}}}},107:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10509]}}}}}}}}}}},108:{l:{97:{l:{99:{l:{107:{l:{108:{l:{111:{l:{122:{l:{101:{l:{110:{l:{103:{l:{101:{l:{59:{c:[10731]}}}}}}}}}}}}}}},115:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9642]}}}}}}}}}}}}},116:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[9652]},100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[9662]}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[9666]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[9656]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},110:{l:{107:{l:{59:{c:[9251]}}}}}}},107:{l:{49:{l:{50:{l:{59:{c:[9618]}}},52:{l:{59:{c:[9617]}}}}},51:{l:{52:{l:{59:{c:[9619]}}}}}}},111:{l:{99:{l:{107:{l:{59:{c:[9608]}}}}}}}}},110:{l:{101:{l:{59:{c:[61,8421]},113:{l:{117:{l:{105:{l:{118:{l:{59:{c:[8801,8421]}}}}}}}}}}},111:{l:{116:{l:{59:{c:[8976]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120147]}}}}},116:{l:{59:{c:[8869]},116:{l:{111:{l:{109:{l:{59:{c:[8869]}}}}}}}}},119:{l:{116:{l:{105:{l:{101:{l:{59:{c:[8904]}}}}}}}}},120:{l:{68:{l:{76:{l:{59:{c:[9559]}}},82:{l:{59:{c:[9556]}}},108:{l:{59:{c:[9558]}}},114:{l:{59:{c:[9555]}}}}},72:{l:{59:{c:[9552]},68:{l:{59:{c:[9574]}}},85:{l:{59:{c:[9577]}}},100:{l:{59:{c:[9572]}}},117:{l:{59:{c:[9575]}}}}},85:{l:{76:{l:{59:{c:[9565]}}},82:{l:{59:{c:[9562]}}},108:{l:{59:{c:[9564]}}},114:{l:{59:{c:[9561]}}}}},86:{l:{59:{c:[9553]},72:{l:{59:{c:[9580]}}},76:{l:{59:{c:[9571]}}},82:{l:{59:{c:[9568]}}},104:{l:{59:{c:[9579]}}},108:{l:{59:{c:[9570]}}},114:{l:{59:{c:[9567]}}}}},98:{l:{111:{l:{120:{l:{59:{c:[10697]}}}}}}},100:{l:{76:{l:{59:{c:[9557]}}},82:{l:{59:{c:[9554]}}},108:{l:{59:{c:[9488]}}},114:{l:{59:{c:[9484]}}}}},104:{l:{59:{c:[9472]},68:{l:{59:{c:[9573]}}},85:{l:{59:{c:[9576]}}},100:{l:{59:{c:[9516]}}},117:{l:{59:{c:[9524]}}}}},109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8863]}}}}}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8862]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8864]}}}}}}}}}}},117:{l:{76:{l:{59:{c:[9563]}}},82:{l:{59:{c:[9560]}}},108:{l:{59:{c:[9496]}}},114:{l:{59:{c:[9492]}}}}},118:{l:{59:{c:[9474]},72:{l:{59:{c:[9578]}}},76:{l:{59:{c:[9569]}}},82:{l:{59:{c:[9566]}}},104:{l:{59:{c:[9532]}}},108:{l:{59:{c:[9508]}}},114:{l:{59:{c:[9500]}}}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8245]}}}}}}}}}}},114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[728]}}}}}}},118:{l:{98:{l:{97:{l:{114:{l:{59:{c:[166]}},c:[166]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119991]}}}}},101:{l:{109:{l:{105:{l:{59:{c:[8271]}}}}}}},105:{l:{109:{l:{59:{c:[8765]},101:{l:{59:{c:[8909]}}}}}}},111:{l:{108:{l:{59:{c:[92]},98:{l:{59:{c:[10693]}}},104:{l:{115:{l:{117:{l:{98:{l:{59:{c:[10184]}}}}}}}}}}}}}}},117:{l:{108:{l:{108:{l:{59:{c:[8226]},101:{l:{116:{l:{59:{c:[8226]}}}}}}}}},109:{l:{112:{l:{59:{c:[8782]},69:{l:{59:{c:[10926]}}},101:{l:{59:{c:[8783]},113:{l:{59:{c:[8783]}}}}}}}}}}}}},99:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[263]}}}}}}}}},112:{l:{59:{c:[8745]},97:{l:{110:{l:{100:{l:{59:{c:[10820]}}}}}}},98:{l:{114:{l:{99:{l:{117:{l:{112:{l:{59:{c:[10825]}}}}}}}}}}},99:{l:{97:{l:{112:{l:{59:{c:[10827]}}}}},117:{l:{112:{l:{59:{c:[10823]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[10816]}}}}}}},115:{l:{59:{c:[8745,65024]}}}}},114:{l:{101:{l:{116:{l:{59:{c:[8257]}}}}},111:{l:{110:{l:{59:{c:[711]}}}}}}}}},99:{l:{97:{l:{112:{l:{115:{l:{59:{c:[10829]}}}}},114:{l:{111:{l:{110:{l:{59:{c:[269]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[231]}},c:[231]}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[265]}}}}}}},117:{l:{112:{l:{115:{l:{59:{c:[10828]},115:{l:{109:{l:{59:{c:[10832]}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[267]}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[184]}},c:[184]}}}}},109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10674]}}}}}}}}}}},110:{l:{116:{l:{59:{c:[162]},101:{l:{114:{l:{100:{l:{111:{l:{116:{l:{59:{c:[183]}}}}}}}}}}}},c:[162]}}}}},102:{l:{114:{l:{59:{c:[120096]}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1095]}}}}},101:{l:{99:{l:{107:{l:{59:{c:[10003]},109:{l:{97:{l:{114:{l:{107:{l:{59:{c:[10003]}}}}}}}}}}}}}}},105:{l:{59:{c:[967]}}}}},105:{l:{114:{l:{59:{c:[9675]},69:{l:{59:{c:[10691]}}},99:{l:{59:{c:[710]},101:{l:{113:{l:{59:{c:[8791]}}}}},108:{l:{101:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8634]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8635]}}}}}}}}}}}}}}}}}}}}},100:{l:{82:{l:{59:{c:[174]}}},83:{l:{59:{c:[9416]}}},97:{l:{115:{l:{116:{l:{59:{c:[8859]}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[8858]}}}}}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8861]}}}}}}}}}}}}}}}}},101:{l:{59:{c:[8791]}}},102:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10768]}}}}}}}}}}},109:{l:{105:{l:{100:{l:{59:{c:[10991]}}}}}}},115:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10690]}}}}}}}}}}}}},108:{l:{117:{l:{98:{l:{115:{l:{59:{c:[9827]},117:{l:{105:{l:{116:{l:{59:{c:[9827]}}}}}}}}}}}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[58]},101:{l:{59:{c:[8788]},113:{l:{59:{c:[8788]}}}}}}}}}}},109:{l:{109:{l:{97:{l:{59:{c:[44]},116:{l:{59:{c:[64]}}}}}}},112:{l:{59:{c:[8705]},102:{l:{110:{l:{59:{c:[8728]}}}}},108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8705]}}}}}}}}},120:{l:{101:{l:{115:{l:{59:{c:[8450]}}}}}}}}}}}}}}},110:{l:{103:{l:{59:{c:[8773]},100:{l:{111:{l:{116:{l:{59:{c:[10861]}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8750]}}}}}}}}},112:{l:{102:{l:{59:{c:[120148]}}},114:{l:{111:{l:{100:{l:{59:{c:[8720]}}}}}}},121:{l:{59:{c:[169]},115:{l:{114:{l:{59:{c:[8471]}}}}}},c:[169]}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8629]}}}}}}},111:{l:{115:{l:{115:{l:{59:{c:[10007]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119992]}}}}},117:{l:{98:{l:{59:{c:[10959]},101:{l:{59:{c:[10961]}}}}},112:{l:{59:{c:[10960]},101:{l:{59:{c:[10962]}}}}}}}}},116:{l:{100:{l:{111:{l:{116:{l:{59:{c:[8943]}}}}}}}}},117:{l:{100:{l:{97:{l:{114:{l:{114:{l:{108:{l:{59:{c:[10552]}}},114:{l:{59:{c:[10549]}}}}}}}}}}},101:{l:{112:{l:{114:{l:{59:{c:[8926]}}}}},115:{l:{99:{l:{59:{c:[8927]}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8630]},112:{l:{59:{c:[10557]}}}}}}}}}}},112:{l:{59:{c:[8746]},98:{l:{114:{l:{99:{l:{97:{l:{112:{l:{59:{c:[10824]}}}}}}}}}}},99:{l:{97:{l:{112:{l:{59:{c:[10822]}}}}},117:{l:{112:{l:{59:{c:[10826]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8845]}}}}}}},111:{l:{114:{l:{59:{c:[10821]}}}}},115:{l:{59:{c:[8746,65024]}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8631]},109:{l:{59:{c:[10556]}}}}}}}}},108:{l:{121:{l:{101:{l:{113:{l:{112:{l:{114:{l:{101:{l:{99:{l:{59:{c:[8926]}}}}}}}}},115:{l:{117:{l:{99:{l:{99:{l:{59:{c:[8927]}}}}}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8910]}}}}}}},119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8911]}}}}}}}}}}}}}}},114:{l:{101:{l:{110:{l:{59:{c:[164]}},c:[164]}}}}},118:{l:{101:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8630]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8631]}}}}}}}}}}}}}}}}}}}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8910]}}}}}}},119:{l:{101:{l:{100:{l:{59:{c:[8911]}}}}}}}}},119:{l:{99:{l:{111:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[8754]}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8753]}}}}}}}}},121:{l:{108:{l:{99:{l:{116:{l:{121:{l:{59:{c:[9005]}}}}}}}}}}}}},100:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8659]}}}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10597]}}}}}}},97:{l:{103:{l:{103:{l:{101:{l:{114:{l:{59:{c:[8224]}}}}}}}}},108:{l:{101:{l:{116:{l:{104:{l:{59:{c:[8504]}}}}}}}}},114:{l:{114:{l:{59:{c:[8595]}}}}},115:{l:{104:{l:{59:{c:[8208]},118:{l:{59:{c:[8867]}}}}}}}}},98:{l:{107:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10511]}}}}}}}}}}},108:{l:{97:{l:{99:{l:{59:{c:[733]}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[271]}}}}}}}}},121:{l:{59:{c:[1076]}}}}},100:{l:{59:{c:[8518]},97:{l:{103:{l:{103:{l:{101:{l:{114:{l:{59:{c:[8225]}}}}}}}}},114:{l:{114:{l:{59:{c:[8650]}}}}}}},111:{l:{116:{l:{115:{l:{101:{l:{113:{l:{59:{c:[10871]}}}}}}}}}}}}},101:{l:{103:{l:{59:{c:[176]}},c:[176]},108:{l:{116:{l:{97:{l:{59:{c:[948]}}}}}}},109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10673]}}}}}}}}}}}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10623]}}}}}}}}},114:{l:{59:{c:[120097]}}}}},104:{l:{97:{l:{114:{l:{108:{l:{59:{c:[8643]}}},114:{l:{59:{c:[8642]}}}}}}}}},105:{l:{97:{l:{109:{l:{59:{c:[8900]},111:{l:{110:{l:{100:{l:{59:{c:[8900]},115:{l:{117:{l:{105:{l:{116:{l:{59:{c:[9830]}}}}}}}}}}}}}}},115:{l:{59:{c:[9830]}}}}}}},101:{l:{59:{c:[168]}}},103:{l:{97:{l:{109:{l:{109:{l:{97:{l:{59:{c:[989]}}}}}}}}}}},115:{l:{105:{l:{110:{l:{59:{c:[8946]}}}}}}},118:{l:{59:{c:[247]},105:{l:{100:{l:{101:{l:{59:{c:[247]},111:{l:{110:{l:{116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8903]}}}}}}}}}}}}}}}},c:[247]}}}}},111:{l:{110:{l:{120:{l:{59:{c:[8903]}}}}}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1106]}}}}}}},108:{l:{99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8990]}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8973]}}}}}}}}}}},111:{l:{108:{l:{108:{l:{97:{l:{114:{l:{59:{c:[36]}}}}}}}}},112:{l:{102:{l:{59:{c:[120149]}}}}},116:{l:{59:{c:[729]},101:{l:{113:{l:{59:{c:[8784]},100:{l:{111:{l:{116:{l:{59:{c:[8785]}}}}}}}}}}},109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8760]}}}}}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8724]}}}}}}}}},115:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[8865]}}}}}}}}}}}}}}},117:{l:{98:{l:{108:{l:{101:{l:{98:{l:{97:{l:{114:{l:{119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8966]}}}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8595]}}}}}}}}}}},100:{l:{111:{l:{119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8650]}}}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8643]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8642]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{98:{l:{107:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10512]}}}}}}}}}}}}},99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8991]}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8972]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119993]}}},121:{l:{59:{c:[1109]}}}}},111:{l:{108:{l:{59:{c:[10742]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[273]}}}}}}}}}}},116:{l:{100:{l:{111:{l:{116:{l:{59:{c:[8945]}}}}}}},114:{l:{105:{l:{59:{c:[9663]},102:{l:{59:{c:[9662]}}}}}}}}},117:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8693]}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[10607]}}}}}}}}},119:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[10662]}}}}}}}}}}}}},122:{l:{99:{l:{121:{l:{59:{c:[1119]}}}}},105:{l:{103:{l:{114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10239]}}}}}}}}}}}}}}}}},101:{l:{68:{l:{68:{l:{111:{l:{116:{l:{59:{c:[10871]}}}}}}},111:{l:{116:{l:{59:{c:[8785]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[233]}},c:[233]}}}}}}},115:{l:{116:{l:{101:{l:{114:{l:{59:{c:[10862]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[283]}}}}}}}}},105:{l:{114:{l:{59:{c:[8790]},99:{l:{59:{c:[234]}},c:[234]}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[8789]}}}}}}}}},121:{l:{59:{c:[1101]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[279]}}}}}}},101:{l:{59:{c:[8519]}}},102:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8786]}}}}}}},114:{l:{59:{c:[120098]}}}}},103:{l:{59:{c:[10906]},114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[232]}},c:[232]}}}}}}},115:{l:{59:{c:[10902]},100:{l:{111:{l:{116:{l:{59:{c:[10904]}}}}}}}}}}},108:{l:{59:{c:[10905]},105:{l:{110:{l:{116:{l:{101:{l:{114:{l:{115:{l:{59:{c:[9191]}}}}}}}}}}}}},108:{l:{59:{c:[8467]}}},115:{l:{59:{c:[10901]},100:{l:{111:{l:{116:{l:{59:{c:[10903]}}}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[275]}}}}}}},112:{l:{116:{l:{121:{l:{59:{c:[8709]},115:{l:{101:{l:{116:{l:{59:{c:[8709]}}}}}}},118:{l:{59:{c:[8709]}}}}}}}}},115:{l:{112:{l:{49:{l:{51:{l:{59:{c:[8196]}}},52:{l:{59:{c:[8197]}}}}},59:{c:[8195]}}}}}}},110:{l:{103:{l:{59:{c:[331]}}},115:{l:{112:{l:{59:{c:[8194]}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[281]}}}}}}},112:{l:{102:{l:{59:{c:[120150]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[8917]},115:{l:{108:{l:{59:{c:[10723]}}}}}}}}},108:{l:{117:{l:{115:{l:{59:{c:[10865]}}}}}}},115:{l:{105:{l:{59:{c:[949]},108:{l:{111:{l:{110:{l:{59:{c:[949]}}}}}}},118:{l:{59:{c:[1013]}}}}}}}}},113:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[8790]}}}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[8789]}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8770]}}}}},108:{l:{97:{l:{110:{l:{116:{l:{103:{l:{116:{l:{114:{l:{59:{c:[10902]}}}}}}},108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10901]}}}}}}}}}}}}}}}}}}},117:{l:{97:{l:{108:{l:{115:{l:{59:{c:[61]}}}}}}},101:{l:{115:{l:{116:{l:{59:{c:[8799]}}}}}}},105:{l:{118:{l:{59:{c:[8801]},68:{l:{68:{l:{59:{c:[10872]}}}}}}}}}}},118:{l:{112:{l:{97:{l:{114:{l:{115:{l:{108:{l:{59:{c:[10725]}}}}}}}}}}}}}}},114:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8787]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10609]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8495]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8784]}}}}}}},105:{l:{109:{l:{59:{c:[8770]}}}}}}},116:{l:{97:{l:{59:{c:[951]}}},104:{l:{59:{c:[240]}},c:[240]}}},117:{l:{109:{l:{108:{l:{59:{c:[235]}},c:[235]}}},114:{l:{111:{l:{59:{c:[8364]}}}}}}},120:{l:{99:{l:{108:{l:{59:{c:[33]}}}}},105:{l:{115:{l:{116:{l:{59:{c:[8707]}}}}}}},112:{l:{101:{l:{99:{l:{116:{l:{97:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8496]}}}}}}}}}}}}}}}}},111:{l:{110:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{101:{l:{59:{c:[8519]}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{97:{l:{108:{l:{108:{l:{105:{l:{110:{l:{103:{l:{100:{l:{111:{l:{116:{l:{115:{l:{101:{l:{113:{l:{59:{c:[8786]}}}}}}}}}}}}}}}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1092]}}}}},101:{l:{109:{l:{97:{l:{108:{l:{101:{l:{59:{c:[9792]}}}}}}}}}}},102:{l:{105:{l:{108:{l:{105:{l:{103:{l:{59:{c:[64259]}}}}}}}}},108:{l:{105:{l:{103:{l:{59:{c:[64256]}}}}},108:{l:{105:{l:{103:{l:{59:{c:[64260]}}}}}}}}},114:{l:{59:{c:[120099]}}}}},105:{l:{108:{l:{105:{l:{103:{l:{59:{c:[64257]}}}}}}}}},106:{l:{108:{l:{105:{l:{103:{l:{59:{c:[102,106]}}}}}}}}},108:{l:{97:{l:{116:{l:{59:{c:[9837]}}}}},108:{l:{105:{l:{103:{l:{59:{c:[64258]}}}}}}},116:{l:{110:{l:{115:{l:{59:{c:[9649]}}}}}}}}},110:{l:{111:{l:{102:{l:{59:{c:[402]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120151]}}}}},114:{l:{97:{l:{108:{l:{108:{l:{59:{c:[8704]}}}}}}},107:{l:{59:{c:[8916]},118:{l:{59:{c:[10969]}}}}}}}}},112:{l:{97:{l:{114:{l:{116:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10765]}}}}}}}}}}}}}}},114:{l:{97:{l:{99:{l:{49:{l:{50:{l:{59:{c:[189]}},c:[189]},51:{l:{59:{c:[8531]}}},52:{l:{59:{c:[188]}},c:[188]},53:{l:{59:{c:[8533]}}},54:{l:{59:{c:[8537]}}},56:{l:{59:{c:[8539]}}}}},50:{l:{51:{l:{59:{c:[8532]}}},53:{l:{59:{c:[8534]}}}}},51:{l:{52:{l:{59:{c:[190]}},c:[190]},53:{l:{59:{c:[8535]}}},56:{l:{59:{c:[8540]}}}}},52:{l:{53:{l:{59:{c:[8536]}}}}},53:{l:{54:{l:{59:{c:[8538]}}},56:{l:{59:{c:[8541]}}}}},55:{l:{56:{l:{59:{c:[8542]}}}}}}},115:{l:{108:{l:{59:{c:[8260]}}}}}}},111:{l:{119:{l:{110:{l:{59:{c:[8994]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119995]}}}}}}}}},103:{l:{69:{l:{59:{c:[8807]},108:{l:{59:{c:[10892]}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[501]}}}}}}}}},109:{l:{109:{l:{97:{l:{59:{c:[947]},100:{l:{59:{c:[989]}}}}}}}}},112:{l:{59:{c:[10886]}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[287]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[285]}}}}}}},121:{l:{59:{c:[1075]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[289]}}}}}}},101:{l:{59:{c:[8805]},108:{l:{59:{c:[8923]}}},113:{l:{59:{c:[8805]},113:{l:{59:{c:[8807]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10878]}}}}}}}}}}}}},115:{l:{59:{c:[10878]},99:{l:{99:{l:{59:{c:[10921]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[10880]},111:{l:{59:{c:[10882]},108:{l:{59:{c:[10884]}}}}}}}}}}},108:{l:{59:{c:[8923,65024]},101:{l:{115:{l:{59:{c:[10900]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120100]}}}}},103:{l:{59:{c:[8811]},103:{l:{59:{c:[8921]}}}}},105:{l:{109:{l:{101:{l:{108:{l:{59:{c:[8503]}}}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1107]}}}}}}},108:{l:{59:{c:[8823]},69:{l:{59:{c:[10898]}}},97:{l:{59:{c:[10917]}}},106:{l:{59:{c:[10916]}}}}},110:{l:{69:{l:{59:{c:[8809]}}},97:{l:{112:{l:{59:{c:[10890]},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10890]}}}}}}}}}}}}},101:{l:{59:{c:[10888]},113:{l:{59:{c:[10888]},113:{l:{59:{c:[8809]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8935]}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120152]}}}}}}},114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[96]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8458]}}}}},105:{l:{109:{l:{59:{c:[8819]},101:{l:{59:{c:[10894]}}},108:{l:{59:{c:[10896]}}}}}}}}},116:{l:{59:{c:[62]},99:{l:{99:{l:{59:{c:[10919]}}},105:{l:{114:{l:{59:{c:[10874]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8919]}}}}}}},108:{l:{80:{l:{97:{l:{114:{l:{59:{c:[10645]}}}}}}}}},113:{l:{117:{l:{101:{l:{115:{l:{116:{l:{59:{c:[10876]}}}}}}}}}}},114:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10886]}}}}}}}}}}},114:{l:{114:{l:{59:{c:[10616]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8919]}}}}}}},101:{l:{113:{l:{108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8923]}}}}}}}}},113:{l:{108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10892]}}}}}}}}}}}}}}},108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8823]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8819]}}}}}}}}}},c:[62]},118:{l:{101:{l:{114:{l:{116:{l:{110:{l:{101:{l:{113:{l:{113:{l:{59:{c:[8809,65024]}}}}}}}}}}}}}}},110:{l:{69:{l:{59:{c:[8809,65024]}}}}}}}}},104:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8660]}}}}}}},97:{l:{105:{l:{114:{l:{115:{l:{112:{l:{59:{c:[8202]}}}}}}}}},108:{l:{102:{l:{59:{c:[189]}}}}},109:{l:{105:{l:{108:{l:{116:{l:{59:{c:[8459]}}}}}}}}},114:{l:{100:{l:{99:{l:{121:{l:{59:{c:[1098]}}}}}}},114:{l:{59:{c:[8596]},99:{l:{105:{l:{114:{l:{59:{c:[10568]}}}}}}},119:{l:{59:{c:[8621]}}}}}}}}},98:{l:{97:{l:{114:{l:{59:{c:[8463]}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[293]}}}}}}}}},101:{l:{97:{l:{114:{l:{116:{l:{115:{l:{59:{c:[9829]},117:{l:{105:{l:{116:{l:{59:{c:[9829]}}}}}}}}}}}}}}},108:{l:{108:{l:{105:{l:{112:{l:{59:{c:[8230]}}}}}}}}},114:{l:{99:{l:{111:{l:{110:{l:{59:{c:[8889]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120101]}}}}},107:{l:{115:{l:{101:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10533]}}}}}}}}}}},119:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10534]}}}}}}}}}}}}}}},111:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8703]}}}}}}},109:{l:{116:{l:{104:{l:{116:{l:{59:{c:[8763]}}}}}}}}},111:{l:{107:{l:{108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8617]}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8618]}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[120153]}}}}},114:{l:{98:{l:{97:{l:{114:{l:{59:{c:[8213]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119997]}}}}},108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8463]}}}}}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[295]}}}}}}}}}}},121:{l:{98:{l:{117:{l:{108:{l:{108:{l:{59:{c:[8259]}}}}}}}}},112:{l:{104:{l:{101:{l:{110:{l:{59:{c:[8208]}}}}}}}}}}}}},105:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[237]}},c:[237]}}}}}}}}},99:{l:{59:{c:[8291]},105:{l:{114:{l:{99:{l:{59:{c:[238]}},c:[238]}}}}},121:{l:{59:{c:[1080]}}}}},101:{l:{99:{l:{121:{l:{59:{c:[1077]}}}}},120:{l:{99:{l:{108:{l:{59:{c:[161]}},c:[161]}}}}}}},102:{l:{102:{l:{59:{c:[8660]}}},114:{l:{59:{c:[120102]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[236]}},c:[236]}}}}}}}}},105:{l:{59:{c:[8520]},105:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10764]}}}}}}},110:{l:{116:{l:{59:{c:[8749]}}}}}}},110:{l:{102:{l:{105:{l:{110:{l:{59:{c:[10716]}}}}}}}}},111:{l:{116:{l:{97:{l:{59:{c:[8489]}}}}}}}}},106:{l:{108:{l:{105:{l:{103:{l:{59:{c:[307]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[299]}}}}},103:{l:{101:{l:{59:{c:[8465]}}},108:{l:{105:{l:{110:{l:{101:{l:{59:{c:[8464]}}}}}}}}},112:{l:{97:{l:{114:{l:{116:{l:{59:{c:[8465]}}}}}}}}}}},116:{l:{104:{l:{59:{c:[305]}}}}}}},111:{l:{102:{l:{59:{c:[8887]}}}}},112:{l:{101:{l:{100:{l:{59:{c:[437]}}}}}}}}},110:{l:{59:{c:[8712]},99:{l:{97:{l:{114:{l:{101:{l:{59:{c:[8453]}}}}}}}}},102:{l:{105:{l:{110:{l:{59:{c:[8734]},116:{l:{105:{l:{101:{l:{59:{c:[10717]}}}}}}}}}}}}},111:{l:{100:{l:{111:{l:{116:{l:{59:{c:[305]}}}}}}}}},116:{l:{59:{c:[8747]},99:{l:{97:{l:{108:{l:{59:{c:[8890]}}}}}}},101:{l:{103:{l:{101:{l:{114:{l:{115:{l:{59:{c:[8484]}}}}}}}}},114:{l:{99:{l:{97:{l:{108:{l:{59:{c:[8890]}}}}}}}}}}},108:{l:{97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10775]}}}}}}}}}}},112:{l:{114:{l:{111:{l:{100:{l:{59:{c:[10812]}}}}}}}}}}}}},111:{l:{99:{l:{121:{l:{59:{c:[1105]}}}}},103:{l:{111:{l:{110:{l:{59:{c:[303]}}}}}}},112:{l:{102:{l:{59:{c:[120154]}}}}},116:{l:{97:{l:{59:{c:[953]}}}}}}},112:{l:{114:{l:{111:{l:{100:{l:{59:{c:[10812]}}}}}}}}},113:{l:{117:{l:{101:{l:{115:{l:{116:{l:{59:{c:[191]}},c:[191]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119998]}}}}},105:{l:{110:{l:{59:{c:[8712]},69:{l:{59:{c:[8953]}}},100:{l:{111:{l:{116:{l:{59:{c:[8949]}}}}}}},115:{l:{59:{c:[8948]},118:{l:{59:{c:[8947]}}}}},118:{l:{59:{c:[8712]}}}}}}}}},116:{l:{59:{c:[8290]},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[297]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1110]}}}}}}},109:{l:{108:{l:{59:{c:[239]}},c:[239]}}}}}}},106:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[309]}}}}}}},121:{l:{59:{c:[1081]}}}}},102:{l:{114:{l:{59:{c:[120103]}}}}},109:{l:{97:{l:{116:{l:{104:{l:{59:{c:[567]}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120155]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119999]}}}}},101:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1112]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1108]}}}}}}}}}}},107:{l:{97:{l:{112:{l:{112:{l:{97:{l:{59:{c:[954]},118:{l:{59:{c:[1008]}}}}}}}}}}},99:{l:{101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[311]}}}}}}}}},121:{l:{59:{c:[1082]}}}}},102:{l:{114:{l:{59:{c:[120104]}}}}},103:{l:{114:{l:{101:{l:{101:{l:{110:{l:{59:{c:[312]}}}}}}}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1093]}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1116]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120156]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120000]}}}}}}}}},108:{l:{65:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8666]}}}}}}},114:{l:{114:{l:{59:{c:[8656]}}}}},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[10523]}}}}}}}}}}},66:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10510]}}}}}}}}},69:{l:{59:{c:[8806]},103:{l:{59:{c:[10891]}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10594]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[314]}}}}}}}}},101:{l:{109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10676]}}}}}}}}}}}}},103:{l:{114:{l:{97:{l:{110:{l:{59:{c:[8466]}}}}}}}}},109:{l:{98:{l:{100:{l:{97:{l:{59:{c:[955]}}}}}}}}},110:{l:{103:{l:{59:{c:[10216]},100:{l:{59:{c:[10641]}}},108:{l:{101:{l:{59:{c:[10216]}}}}}}}}},112:{l:{59:{c:[10885]}}},113:{l:{117:{l:{111:{l:{59:{c:[171]}},c:[171]}}}}},114:{l:{114:{l:{59:{c:[8592]},98:{l:{59:{c:[8676]},102:{l:{115:{l:{59:{c:[10527]}}}}}}},102:{l:{115:{l:{59:{c:[10525]}}}}},104:{l:{107:{l:{59:{c:[8617]}}}}},108:{l:{112:{l:{59:{c:[8619]}}}}},112:{l:{108:{l:{59:{c:[10553]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[10611]}}}}}}},116:{l:{108:{l:{59:{c:[8610]}}}}}}}}},116:{l:{59:{c:[10923]},97:{l:{105:{l:{108:{l:{59:{c:[10521]}}}}}}},101:{l:{59:{c:[10925]},115:{l:{59:{c:[10925,65024]}}}}}}}}},98:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10508]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10098]}}}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[123]}}},107:{l:{59:{c:[91]}}}}}}},107:{l:{101:{l:{59:{c:[10635]}}},115:{l:{108:{l:{100:{l:{59:{c:[10639]}}},117:{l:{59:{c:[10637]}}}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[318]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[316]}}}}}}},105:{l:{108:{l:{59:{c:[8968]}}}}}}},117:{l:{98:{l:{59:{c:[123]}}}}},121:{l:{59:{c:[1083]}}}}},100:{l:{99:{l:{97:{l:{59:{c:[10550]}}}}},113:{l:{117:{l:{111:{l:{59:{c:[8220]},114:{l:{59:{c:[8222]}}}}}}}}},114:{l:{100:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10599]}}}}}}}}},117:{l:{115:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10571]}}}}}}}}}}}}},115:{l:{104:{l:{59:{c:[8626]}}}}}}},101:{l:{59:{c:[8804]},102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8592]},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[8610]}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[8637]}}}}}}}}},117:{l:{112:{l:{59:{c:[8636]}}}}}}}}}}}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8647]}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8596]},115:{l:{59:{c:[8646]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{115:{l:{59:{c:[8651]}}}}}}}}}}}}}}}}},115:{l:{113:{l:{117:{l:{105:{l:{103:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8621]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},116:{l:{104:{l:{114:{l:{101:{l:{101:{l:{116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8907]}}}}}}}}}}}}}}}}}}}}}}}}},103:{l:{59:{c:[8922]}}},113:{l:{59:{c:[8804]},113:{l:{59:{c:[8806]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10877]}}}}}}}}}}}}},115:{l:{59:{c:[10877]},99:{l:{99:{l:{59:{c:[10920]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[10879]},111:{l:{59:{c:[10881]},114:{l:{59:{c:[10883]}}}}}}}}}}},103:{l:{59:{c:[8922,65024]},101:{l:{115:{l:{59:{c:[10899]}}}}}}},115:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10885]}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8918]}}}}}}},101:{l:{113:{l:{103:{l:{116:{l:{114:{l:{59:{c:[8922]}}}}}}},113:{l:{103:{l:{116:{l:{114:{l:{59:{c:[10891]}}}}}}}}}}}}},103:{l:{116:{l:{114:{l:{59:{c:[8822]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8818]}}}}}}}}}}}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10620]}}}}}}}}},108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8970]}}}}}}}}},114:{l:{59:{c:[120105]}}}}},103:{l:{59:{c:[8822]},69:{l:{59:{c:[10897]}}}}},104:{l:{97:{l:{114:{l:{100:{l:{59:{c:[8637]}}},117:{l:{59:{c:[8636]},108:{l:{59:{c:[10602]}}}}}}}}},98:{l:{108:{l:{107:{l:{59:{c:[9604]}}}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1113]}}}}}}},108:{l:{59:{c:[8810]},97:{l:{114:{l:{114:{l:{59:{c:[8647]}}}}}}},99:{l:{111:{l:{114:{l:{110:{l:{101:{l:{114:{l:{59:{c:[8990]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{100:{l:{59:{c:[10603]}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9722]}}}}}}}}},109:{l:{105:{l:{100:{l:{111:{l:{116:{l:{59:{c:[320]}}}}}}}}},111:{l:{117:{l:{115:{l:{116:{l:{59:{c:[9136]},97:{l:{99:{l:{104:{l:{101:{l:{59:{c:[9136]}}}}}}}}}}}}}}}}}}},110:{l:{69:{l:{59:{c:[8808]}}},97:{l:{112:{l:{59:{c:[10889]},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10889]}}}}}}}}}}}}},101:{l:{59:{c:[10887]},113:{l:{59:{c:[10887]},113:{l:{59:{c:[8808]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8934]}}}}}}}}},111:{l:{97:{l:{110:{l:{103:{l:{59:{c:[10220]}}}}},114:{l:{114:{l:{59:{c:[8701]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10214]}}}}}}},110:{l:{103:{l:{108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10229]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10231]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},109:{l:{97:{l:{112:{l:{115:{l:{116:{l:{111:{l:{59:{c:[10236]}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10230]}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8619]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8620]}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10629]}}}}},102:{l:{59:{c:[120157]}}},108:{l:{117:{l:{115:{l:{59:{c:[10797]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[10804]}}}}}}}}}}},119:{l:{97:{l:{115:{l:{116:{l:{59:{c:[8727]}}}}}}},98:{l:{97:{l:{114:{l:{59:{c:[95]}}}}}}}}},122:{l:{59:{c:[9674]},101:{l:{110:{l:{103:{l:{101:{l:{59:{c:[9674]}}}}}}}}},102:{l:{59:{c:[10731]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[40]},108:{l:{116:{l:{59:{c:[10643]}}}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8646]}}}}}}},99:{l:{111:{l:{114:{l:{110:{l:{101:{l:{114:{l:{59:{c:[8991]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[8651]},100:{l:{59:{c:[10605]}}}}}}}}},109:{l:{59:{c:[8206]}}},116:{l:{114:{l:{105:{l:{59:{c:[8895]}}}}}}}}},115:{l:{97:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8249]}}}}}}}}},99:{l:{114:{l:{59:{c:[120001]}}}}},104:{l:{59:{c:[8624]}}},105:{l:{109:{l:{59:{c:[8818]},101:{l:{59:{c:[10893]}}},103:{l:{59:{c:[10895]}}}}}}},113:{l:{98:{l:{59:{c:[91]}}},117:{l:{111:{l:{59:{c:[8216]},114:{l:{59:{c:[8218]}}}}}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[322]}}}}}}}}}}},116:{l:{59:{c:[60]},99:{l:{99:{l:{59:{c:[10918]}}},105:{l:{114:{l:{59:{c:[10873]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8918]}}}}}}},104:{l:{114:{l:{101:{l:{101:{l:{59:{c:[8907]}}}}}}}}},105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8905]}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10614]}}}}}}}}},113:{l:{117:{l:{101:{l:{115:{l:{116:{l:{59:{c:[10875]}}}}}}}}}}},114:{l:{80:{l:{97:{l:{114:{l:{59:{c:[10646]}}}}}}},105:{l:{59:{c:[9667]},101:{l:{59:{c:[8884]}}},102:{l:{59:{c:[9666]}}}}}}}},c:[60]},117:{l:{114:{l:{100:{l:{115:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10570]}}}}}}}}}}},117:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10598]}}}}}}}}}}}}},118:{l:{101:{l:{114:{l:{116:{l:{110:{l:{101:{l:{113:{l:{113:{l:{59:{c:[8808,65024]}}}}}}}}}}}}}}},110:{l:{69:{l:{59:{c:[8808,65024]}}}}}}}}},109:{l:{68:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8762]}}}}}}}}},97:{l:{99:{l:{114:{l:{59:{c:[175]}},c:[175]}}},108:{l:{101:{l:{59:{c:[9794]}}},116:{l:{59:{c:[10016]},101:{l:{115:{l:{101:{l:{59:{c:[10016]}}}}}}}}}}},112:{l:{59:{c:[8614]},115:{l:{116:{l:{111:{l:{59:{c:[8614]},100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[8615]}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8612]}}}}}}}}},117:{l:{112:{l:{59:{c:[8613]}}}}}}}}}}}}},114:{l:{107:{l:{101:{l:{114:{l:{59:{c:[9646]}}}}}}}}}}},99:{l:{111:{l:{109:{l:{109:{l:{97:{l:{59:{c:[10793]}}}}}}}}},121:{l:{59:{c:[1084]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8212]}}}}}}}}},101:{l:{97:{l:{115:{l:{117:{l:{114:{l:{101:{l:{100:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8737]}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120106]}}}}},104:{l:{111:{l:{59:{c:[8487]}}}}},105:{l:{99:{l:{114:{l:{111:{l:{59:{c:[181]}},c:[181]}}}}},100:{l:{59:{c:[8739]},97:{l:{115:{l:{116:{l:{59:{c:[42]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[10992]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[183]}},c:[183]}}}}}}},110:{l:{117:{l:{115:{l:{59:{c:[8722]},98:{l:{59:{c:[8863]}}},100:{l:{59:{c:[8760]},117:{l:{59:{c:[10794]}}}}}}}}}}}}},108:{l:{99:{l:{112:{l:{59:{c:[10971]}}}}},100:{l:{114:{l:{59:{c:[8230]}}}}}}},110:{l:{112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8723]}}}}}}}}}}},111:{l:{100:{l:{101:{l:{108:{l:{115:{l:{59:{c:[8871]}}}}}}}}},112:{l:{102:{l:{59:{c:[120158]}}}}}}},112:{l:{59:{c:[8723]}}},115:{l:{99:{l:{114:{l:{59:{c:[120002]}}}}},116:{l:{112:{l:{111:{l:{115:{l:{59:{c:[8766]}}}}}}}}}}},117:{l:{59:{c:[956]},108:{l:{116:{l:{105:{l:{109:{l:{97:{l:{112:{l:{59:{c:[8888]}}}}}}}}}}}}},109:{l:{97:{l:{112:{l:{59:{c:[8888]}}}}}}}}}}},110:{l:{71:{l:{103:{l:{59:{c:[8921,824]}}},116:{l:{59:{c:[8811,8402]},118:{l:{59:{c:[8811,824]}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8653]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8654]}}}}}}}}}}}}}}}}}}}}}}}}}}},108:{l:{59:{c:[8920,824]}}},116:{l:{59:{c:[8810,8402]},118:{l:{59:{c:[8810,824]}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8655]}}}}}}}}}}}}}}}}}}}}},86:{l:{68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8879]}}}}}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8878]}}}}}}}}}}},97:{l:{98:{l:{108:{l:{97:{l:{59:{c:[8711]}}}}}}},99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[324]}}}}}}}}},110:{l:{103:{l:{59:{c:[8736,8402]}}}}},112:{l:{59:{c:[8777]},69:{l:{59:{c:[10864,824]}}},105:{l:{100:{l:{59:{c:[8779,824]}}}}},111:{l:{115:{l:{59:{c:[329]}}}}},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[8777]}}}}}}}}}}},116:{l:{117:{l:{114:{l:{59:{c:[9838]},97:{l:{108:{l:{59:{c:[9838]},115:{l:{59:{c:[8469]}}}}}}}}}}}}}}},98:{l:{115:{l:{112:{l:{59:{c:[160]}},c:[160]}}},117:{l:{109:{l:{112:{l:{59:{c:[8782,824]},101:{l:{59:{c:[8783,824]}}}}}}}}}}},99:{l:{97:{l:{112:{l:{59:{c:[10819]}}},114:{l:{111:{l:{110:{l:{59:{c:[328]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[326]}}}}}}}}},111:{l:{110:{l:{103:{l:{59:{c:[8775]},100:{l:{111:{l:{116:{l:{59:{c:[10861,824]}}}}}}}}}}}}},117:{l:{112:{l:{59:{c:[10818]}}}}},121:{l:{59:{c:[1085]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8211]}}}}}}}}},101:{l:{59:{c:[8800]},65:{l:{114:{l:{114:{l:{59:{c:[8663]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10532]}}}}},114:{l:{59:{c:[8599]},111:{l:{119:{l:{59:{c:[8599]}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8784,824]}}}}}}},113:{l:{117:{l:{105:{l:{118:{l:{59:{c:[8802]}}}}}}}}},115:{l:{101:{l:{97:{l:{114:{l:{59:{c:[10536]}}}}}}},105:{l:{109:{l:{59:{c:[8770,824]}}}}}}},120:{l:{105:{l:{115:{l:{116:{l:{59:{c:[8708]},115:{l:{59:{c:[8708]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120107]}}}}},103:{l:{69:{l:{59:{c:[8807,824]}}},101:{l:{59:{c:[8817]},113:{l:{59:{c:[8817]},113:{l:{59:{c:[8807,824]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10878,824]}}}}}}}}}}}}},115:{l:{59:{c:[10878,824]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8821]}}}}}}},116:{l:{59:{c:[8815]},114:{l:{59:{c:[8815]}}}}}}},104:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8654]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[8622]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10994]}}}}}}}}},105:{l:{59:{c:[8715]},115:{l:{59:{c:[8956]},100:{l:{59:{c:[8954]}}}}},118:{l:{59:{c:[8715]}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1114]}}}}}}},108:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8653]}}}}}}},69:{l:{59:{c:[8806,824]}}},97:{l:{114:{l:{114:{l:{59:{c:[8602]}}}}}}},100:{l:{114:{l:{59:{c:[8229]}}}}},101:{l:{59:{c:[8816]},102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8602]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8622]}}}}}}}}}}}}}}}}}}}}}}}}},113:{l:{59:{c:[8816]},113:{l:{59:{c:[8806,824]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10877,824]}}}}}}}}}}}}},115:{l:{59:{c:[10877,824]},115:{l:{59:{c:[8814]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8820]}}}}}}},116:{l:{59:{c:[8814]},114:{l:{105:{l:{59:{c:[8938]},101:{l:{59:{c:[8940]}}}}}}}}}}},109:{l:{105:{l:{100:{l:{59:{c:[8740]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120159]}}}}},116:{l:{59:{c:[172]},105:{l:{110:{l:{59:{c:[8713]},69:{l:{59:{c:[8953,824]}}},100:{l:{111:{l:{116:{l:{59:{c:[8949,824]}}}}}}},118:{l:{97:{l:{59:{c:[8713]}}},98:{l:{59:{c:[8951]}}},99:{l:{59:{c:[8950]}}}}}}}}},110:{l:{105:{l:{59:{c:[8716]},118:{l:{97:{l:{59:{c:[8716]}}},98:{l:{59:{c:[8958]}}},99:{l:{59:{c:[8957]}}}}}}}}}},c:[172]}}},112:{l:{97:{l:{114:{l:{59:{c:[8742]},97:{l:{108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8742]}}}}}}}}}}},115:{l:{108:{l:{59:{c:[11005,8421]}}}}},116:{l:{59:{c:[8706,824]}}}}}}},111:{l:{108:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10772]}}}}}}}}}}},114:{l:{59:{c:[8832]},99:{l:{117:{l:{101:{l:{59:{c:[8928]}}}}}}},101:{l:{59:{c:[10927,824]},99:{l:{59:{c:[8832]},101:{l:{113:{l:{59:{c:[10927,824]}}}}}}}}}}}}},114:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8655]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[8603]},99:{l:{59:{c:[10547,824]}}},119:{l:{59:{c:[8605,824]}}}}}}}}},105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8603]}}}}}}}}}}}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[8939]},101:{l:{59:{c:[8941]}}}}}}}}}}},115:{l:{99:{l:{59:{c:[8833]},99:{l:{117:{l:{101:{l:{59:{c:[8929]}}}}}}},101:{l:{59:{c:[10928,824]}}},114:{l:{59:{c:[120003]}}}}},104:{l:{111:{l:{114:{l:{116:{l:{109:{l:{105:{l:{100:{l:{59:{c:[8740]}}}}}}},112:{l:{97:{l:{114:{l:{97:{l:{108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8742]}}}}}}}}}}}}}}}}}}}}}}}}},105:{l:{109:{l:{59:{c:[8769]},101:{l:{59:{c:[8772]},113:{l:{59:{c:[8772]}}}}}}}}},109:{l:{105:{l:{100:{l:{59:{c:[8740]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[8742]}}}}}}},113:{l:{115:{l:{117:{l:{98:{l:{101:{l:{59:{c:[8930]}}}}},112:{l:{101:{l:{59:{c:[8931]}}}}}}}}}}},117:{l:{98:{l:{59:{c:[8836]},69:{l:{59:{c:[10949,824]}}},101:{l:{59:{c:[8840]}}},115:{l:{101:{l:{116:{l:{59:{c:[8834,8402]},101:{l:{113:{l:{59:{c:[8840]},113:{l:{59:{c:[10949,824]}}}}}}}}}}}}}}},99:{l:{99:{l:{59:{c:[8833]},101:{l:{113:{l:{59:{c:[10928,824]}}}}}}}}},112:{l:{59:{c:[8837]},69:{l:{59:{c:[10950,824]}}},101:{l:{59:{c:[8841]}}},115:{l:{101:{l:{116:{l:{59:{c:[8835,8402]},101:{l:{113:{l:{59:{c:[8841]},113:{l:{59:{c:[10950,824]}}}}}}}}}}}}}}}}}}},116:{l:{103:{l:{108:{l:{59:{c:[8825]}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[241]}},c:[241]}}}}}}},108:{l:{103:{l:{59:{c:[8824]}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8938]},101:{l:{113:{l:{59:{c:[8940]}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8939]},101:{l:{113:{l:{59:{c:[8941]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},117:{l:{59:{c:[957]},109:{l:{59:{c:[35]},101:{l:{114:{l:{111:{l:{59:{c:[8470]}}}}}}},115:{l:{112:{l:{59:{c:[8199]}}}}}}}}},118:{l:{68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8877]}}}}}}}}},72:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10500]}}}}}}}}},97:{l:{112:{l:{59:{c:[8781,8402]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8876]}}}}}}}}},103:{l:{101:{l:{59:{c:[8805,8402]}}},116:{l:{59:{c:[62,8402]}}}}},105:{l:{110:{l:{102:{l:{105:{l:{110:{l:{59:{c:[10718]}}}}}}}}}}},108:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10498]}}}}}}},101:{l:{59:{c:[8804,8402]}}},116:{l:{59:{c:[60,8402]},114:{l:{105:{l:{101:{l:{59:{c:[8884,8402]}}}}}}}}}}},114:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10499]}}}}}}},116:{l:{114:{l:{105:{l:{101:{l:{59:{c:[8885,8402]}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8764,8402]}}}}}}}}},119:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8662]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10531]}}}}},114:{l:{59:{c:[8598]},111:{l:{119:{l:{59:{c:[8598]}}}}}}}}}}},110:{l:{101:{l:{97:{l:{114:{l:{59:{c:[10535]}}}}}}}}}}}}},111:{l:{83:{l:{59:{c:[9416]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[243]}},c:[243]}}}}}}},115:{l:{116:{l:{59:{c:[8859]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[8858]},99:{l:{59:{c:[244]}},c:[244]}}}}},121:{l:{59:{c:[1086]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8861]}}}}}}},98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[337]}}}}}}}}},105:{l:{118:{l:{59:{c:[10808]}}}}},111:{l:{116:{l:{59:{c:[8857]}}}}},115:{l:{111:{l:{108:{l:{100:{l:{59:{c:[10684]}}}}}}}}}}},101:{l:{108:{l:{105:{l:{103:{l:{59:{c:[339]}}}}}}}}},102:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10687]}}}}}}},114:{l:{59:{c:[120108]}}}}},103:{l:{111:{l:{110:{l:{59:{c:[731]}}}}},114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[242]}},c:[242]}}}}}}},116:{l:{59:{c:[10689]}}}}},104:{l:{98:{l:{97:{l:{114:{l:{59:{c:[10677]}}}}}}},109:{l:{59:{c:[937]}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8750]}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8634]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[10686]}}}}},114:{l:{111:{l:{115:{l:{115:{l:{59:{c:[10683]}}}}}}}}}}},105:{l:{110:{l:{101:{l:{59:{c:[8254]}}}}}}},116:{l:{59:{c:[10688]}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[333]}}}}}}},101:{l:{103:{l:{97:{l:{59:{c:[969]}}}}}}},105:{l:{99:{l:{114:{l:{111:{l:{110:{l:{59:{c:[959]}}}}}}}}},100:{l:{59:{c:[10678]}}},110:{l:{117:{l:{115:{l:{59:{c:[8854]}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120160]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10679]}}}}},101:{l:{114:{l:{112:{l:{59:{c:[10681]}}}}}}},108:{l:{117:{l:{115:{l:{59:{c:[8853]}}}}}}}}},114:{l:{59:{c:[8744]},97:{l:{114:{l:{114:{l:{59:{c:[8635]}}}}}}},100:{l:{59:{c:[10845]},101:{l:{114:{l:{59:{c:[8500]},111:{l:{102:{l:{59:{c:[8500]}}}}}}}}},102:{l:{59:{c:[170]}},c:[170]},109:{l:{59:{c:[186]}},c:[186]}}},105:{l:{103:{l:{111:{l:{102:{l:{59:{c:[8886]}}}}}}}}},111:{l:{114:{l:{59:{c:[10838]}}}}},115:{l:{108:{l:{111:{l:{112:{l:{101:{l:{59:{c:[10839]}}}}}}}}}}},118:{l:{59:{c:[10843]}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8500]}}}}},108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[248]}},c:[248]}}}}}}},111:{l:{108:{l:{59:{c:[8856]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[245]}},c:[245]}}}}},109:{l:{101:{l:{115:{l:{59:{c:[8855]},97:{l:{115:{l:{59:{c:[10806]}}}}}}}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[246]}},c:[246]}}}}},118:{l:{98:{l:{97:{l:{114:{l:{59:{c:[9021]}}}}}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[8741]},97:{l:{59:{c:[182]},108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8741]}}}}}}}}}},c:[182]},115:{l:{105:{l:{109:{l:{59:{c:[10995]}}}}},108:{l:{59:{c:[11005]}}}}},116:{l:{59:{c:[8706]}}}}}}},99:{l:{121:{l:{59:{c:[1087]}}}}},101:{l:{114:{l:{99:{l:{110:{l:{116:{l:{59:{c:[37]}}}}}}},105:{l:{111:{l:{100:{l:{59:{c:[46]}}}}}}},109:{l:{105:{l:{108:{l:{59:{c:[8240]}}}}}}},112:{l:{59:{c:[8869]}}},116:{l:{101:{l:{110:{l:{107:{l:{59:{c:[8241]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120109]}}}}},104:{l:{105:{l:{59:{c:[966]},118:{l:{59:{c:[981]}}}}},109:{l:{109:{l:{97:{l:{116:{l:{59:{c:[8499]}}}}}}}}},111:{l:{110:{l:{101:{l:{59:{c:[9742]}}}}}}}}},105:{l:{59:{c:[960]},116:{l:{99:{l:{104:{l:{102:{l:{111:{l:{114:{l:{107:{l:{59:{c:[8916]}}}}}}}}}}}}}}},118:{l:{59:{c:[982]}}}}},108:{l:{97:{l:{110:{l:{99:{l:{107:{l:{59:{c:[8463]},104:{l:{59:{c:[8462]}}}}}}},107:{l:{118:{l:{59:{c:[8463]}}}}}}}}},117:{l:{115:{l:{59:{c:[43]},97:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10787]}}}}}}}}},98:{l:{59:{c:[8862]}}},99:{l:{105:{l:{114:{l:{59:{c:[10786]}}}}}}},100:{l:{111:{l:{59:{c:[8724]}}},117:{l:{59:{c:[10789]}}}}},101:{l:{59:{c:[10866]}}},109:{l:{110:{l:{59:{c:[177]}},c:[177]}}},115:{l:{105:{l:{109:{l:{59:{c:[10790]}}}}}}},116:{l:{119:{l:{111:{l:{59:{c:[10791]}}}}}}}}}}}}},109:{l:{59:{c:[177]}}},111:{l:{105:{l:{110:{l:{116:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10773]}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[120161]}}}}},117:{l:{110:{l:{100:{l:{59:{c:[163]}},c:[163]}}}}}}},114:{l:{59:{c:[8826]},69:{l:{59:{c:[10931]}}},97:{l:{112:{l:{59:{c:[10935]}}}}},99:{l:{117:{l:{101:{l:{59:{c:[8828]}}}}}}},101:{l:{59:{c:[10927]},99:{l:{59:{c:[8826]},97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10935]}}}}}}}}}}}}},99:{l:{117:{l:{114:{l:{108:{l:{121:{l:{101:{l:{113:{l:{59:{c:[8828]}}}}}}}}}}}}}}},101:{l:{113:{l:{59:{c:[10927]}}}}},110:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10937]}}}}}}}}}}}}},101:{l:{113:{l:{113:{l:{59:{c:[10933]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8936]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8830]}}}}}}}}}}},105:{l:{109:{l:{101:{l:{59:{c:[8242]},115:{l:{59:{c:[8473]}}}}}}}}},110:{l:{69:{l:{59:{c:[10933]}}},97:{l:{112:{l:{59:{c:[10937]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8936]}}}}}}}}},111:{l:{100:{l:{59:{c:[8719]}}},102:{l:{97:{l:{108:{l:{97:{l:{114:{l:{59:{c:[9006]}}}}}}}}},108:{l:{105:{l:{110:{l:{101:{l:{59:{c:[8978]}}}}}}}}},115:{l:{117:{l:{114:{l:{102:{l:{59:{c:[8979]}}}}}}}}}}},112:{l:{59:{c:[8733]},116:{l:{111:{l:{59:{c:[8733]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8830]}}}}}}},117:{l:{114:{l:{101:{l:{108:{l:{59:{c:[8880]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120005]}}}}},105:{l:{59:{c:[968]}}}}},117:{l:{110:{l:{99:{l:{115:{l:{112:{l:{59:{c:[8200]}}}}}}}}}}}}},113:{l:{102:{l:{114:{l:{59:{c:[120110]}}}}},105:{l:{110:{l:{116:{l:{59:{c:[10764]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120162]}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8279]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120006]}}}}}}},117:{l:{97:{l:{116:{l:{101:{l:{114:{l:{110:{l:{105:{l:{111:{l:{110:{l:{115:{l:{59:{c:[8461]}}}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[10774]}}}}}}}}}}},101:{l:{115:{l:{116:{l:{59:{c:[63]},101:{l:{113:{l:{59:{c:[8799]}}}}}}}}}}},111:{l:{116:{l:{59:{c:[34]}},c:[34]}}}}}}},114:{l:{65:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8667]}}}}}}},114:{l:{114:{l:{59:{c:[8658]}}}}},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[10524]}}}}}}}}}}},66:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10511]}}}}}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10596]}}}}}}},97:{l:{99:{l:{101:{l:{59:{c:[8765,817]}}},117:{l:{116:{l:{101:{l:{59:{c:[341]}}}}}}}}},100:{l:{105:{l:{99:{l:{59:{c:[8730]}}}}}}},101:{l:{109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10675]}}}}}}}}}}}}},110:{l:{103:{l:{59:{c:[10217]},100:{l:{59:{c:[10642]}}},101:{l:{59:{c:[10661]}}},108:{l:{101:{l:{59:{c:[10217]}}}}}}}}},113:{l:{117:{l:{111:{l:{59:{c:[187]}},c:[187]}}}}},114:{l:{114:{l:{59:{c:[8594]},97:{l:{112:{l:{59:{c:[10613]}}}}},98:{l:{59:{c:[8677]},102:{l:{115:{l:{59:{c:[10528]}}}}}}},99:{l:{59:{c:[10547]}}},102:{l:{115:{l:{59:{c:[10526]}}}}},104:{l:{107:{l:{59:{c:[8618]}}}}},108:{l:{112:{l:{59:{c:[8620]}}}}},112:{l:{108:{l:{59:{c:[10565]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[10612]}}}}}}},116:{l:{108:{l:{59:{c:[8611]}}}}},119:{l:{59:{c:[8605]}}}}}}},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[10522]}}}}}}},105:{l:{111:{l:{59:{c:[8758]},110:{l:{97:{l:{108:{l:{115:{l:{59:{c:[8474]}}}}}}}}}}}}}}}}},98:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10509]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10099]}}}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[125]}}},107:{l:{59:{c:[93]}}}}}}},107:{l:{101:{l:{59:{c:[10636]}}},115:{l:{108:{l:{100:{l:{59:{c:[10638]}}},117:{l:{59:{c:[10640]}}}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[345]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[343]}}}}}}},105:{l:{108:{l:{59:{c:[8969]}}}}}}},117:{l:{98:{l:{59:{c:[125]}}}}},121:{l:{59:{c:[1088]}}}}},100:{l:{99:{l:{97:{l:{59:{c:[10551]}}}}},108:{l:{100:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10601]}}}}}}}}}}},113:{l:{117:{l:{111:{l:{59:{c:[8221]},114:{l:{59:{c:[8221]}}}}}}}}},115:{l:{104:{l:{59:{c:[8627]}}}}}}},101:{l:{97:{l:{108:{l:{59:{c:[8476]},105:{l:{110:{l:{101:{l:{59:{c:[8475]}}}}}}},112:{l:{97:{l:{114:{l:{116:{l:{59:{c:[8476]}}}}}}}}},115:{l:{59:{c:[8477]}}}}}}},99:{l:{116:{l:{59:{c:[9645]}}}}},103:{l:{59:{c:[174]}},c:[174]}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10621]}}}}}}}}},108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8971]}}}}}}}}},114:{l:{59:{c:[120111]}}}}},104:{l:{97:{l:{114:{l:{100:{l:{59:{c:[8641]}}},117:{l:{59:{c:[8640]},108:{l:{59:{c:[10604]}}}}}}}}},111:{l:{59:{c:[961]},118:{l:{59:{c:[1009]}}}}}}},105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8594]},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[8611]}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[8641]}}}}}}}}},117:{l:{112:{l:{59:{c:[8640]}}}}}}}}}}}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8644]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{115:{l:{59:{c:[8652]}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8649]}}}}}}}}}}}}}}}}}}}}}}},115:{l:{113:{l:{117:{l:{105:{l:{103:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8605]}}}}}}}}}}}}}}}}}}}}},116:{l:{104:{l:{114:{l:{101:{l:{101:{l:{116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8908]}}}}}}}}}}}}}}}}}}}}}}}}}}},110:{l:{103:{l:{59:{c:[730]}}}}},115:{l:{105:{l:{110:{l:{103:{l:{100:{l:{111:{l:{116:{l:{115:{l:{101:{l:{113:{l:{59:{c:[8787]}}}}}}}}}}}}}}}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8644]}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[8652]}}}}}}},109:{l:{59:{c:[8207]}}}}},109:{l:{111:{l:{117:{l:{115:{l:{116:{l:{59:{c:[9137]},97:{l:{99:{l:{104:{l:{101:{l:{59:{c:[9137]}}}}}}}}}}}}}}}}}}},110:{l:{109:{l:{105:{l:{100:{l:{59:{c:[10990]}}}}}}}}},111:{l:{97:{l:{110:{l:{103:{l:{59:{c:[10221]}}}}},114:{l:{114:{l:{59:{c:[8702]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10215]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10630]}}}}},102:{l:{59:{c:[120163]}}},108:{l:{117:{l:{115:{l:{59:{c:[10798]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[10805]}}}}}}}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[41]},103:{l:{116:{l:{59:{c:[10644]}}}}}}}}},112:{l:{111:{l:{108:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10770]}}}}}}}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8649]}}}}}}}}},115:{l:{97:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8250]}}}}}}}}},99:{l:{114:{l:{59:{c:[120007]}}}}},104:{l:{59:{c:[8625]}}},113:{l:{98:{l:{59:{c:[93]}}},117:{l:{111:{l:{59:{c:[8217]},114:{l:{59:{c:[8217]}}}}}}}}}}},116:{l:{104:{l:{114:{l:{101:{l:{101:{l:{59:{c:[8908]}}}}}}}}},105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8906]}}}}}}}}},114:{l:{105:{l:{59:{c:[9657]},101:{l:{59:{c:[8885]}}},102:{l:{59:{c:[9656]}}},108:{l:{116:{l:{114:{l:{105:{l:{59:{c:[10702]}}}}}}}}}}}}}}},117:{l:{108:{l:{117:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10600]}}}}}}}}}}}}},120:{l:{59:{c:[8478]}}}}},115:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[347]}}}}}}}}}}},98:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8218]}}}}}}}}},99:{l:{59:{c:[8827]},69:{l:{59:{c:[10932]}}},97:{l:{112:{l:{59:{c:[10936]}}},114:{l:{111:{l:{110:{l:{59:{c:[353]}}}}}}}}},99:{l:{117:{l:{101:{l:{59:{c:[8829]}}}}}}},101:{l:{59:{c:[10928]},100:{l:{105:{l:{108:{l:{59:{c:[351]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[349]}}}}}}},110:{l:{69:{l:{59:{c:[10934]}}},97:{l:{112:{l:{59:{c:[10938]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8937]}}}}}}}}},112:{l:{111:{l:{108:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10771]}}}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8831]}}}}}}},121:{l:{59:{c:[1089]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8901]},98:{l:{59:{c:[8865]}}},101:{l:{59:{c:[10854]}}}}}}}}},101:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8664]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10533]}}}}},114:{l:{59:{c:[8600]},111:{l:{119:{l:{59:{c:[8600]}}}}}}}}}}},99:{l:{116:{l:{59:{c:[167]}},c:[167]}}},109:{l:{105:{l:{59:{c:[59]}}}}},115:{l:{119:{l:{97:{l:{114:{l:{59:{c:[10537]}}}}}}}}},116:{l:{109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8726]}}}}}}}}},110:{l:{59:{c:[8726]}}}}}}},120:{l:{116:{l:{59:{c:[10038]}}}}}}},102:{l:{114:{l:{59:{c:[120112]},111:{l:{119:{l:{110:{l:{59:{c:[8994]}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{59:{c:[9839]}}}}}}},99:{l:{104:{l:{99:{l:{121:{l:{59:{c:[1097]}}}}}}},121:{l:{59:{c:[1096]}}}}},111:{l:{114:{l:{116:{l:{109:{l:{105:{l:{100:{l:{59:{c:[8739]}}}}}}},112:{l:{97:{l:{114:{l:{97:{l:{108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8741]}}}}}}}}}}}}}}}}}}}}}}},121:{l:{59:{c:[173]}},c:[173]}}},105:{l:{103:{l:{109:{l:{97:{l:{59:{c:[963]},102:{l:{59:{c:[962]}}},118:{l:{59:{c:[962]}}}}}}}}},109:{l:{59:{c:[8764]},100:{l:{111:{l:{116:{l:{59:{c:[10858]}}}}}}},101:{l:{59:{c:[8771]},113:{l:{59:{c:[8771]}}}}},103:{l:{59:{c:[10910]},69:{l:{59:{c:[10912]}}}}},108:{l:{59:{c:[10909]},69:{l:{59:{c:[10911]}}}}},110:{l:{101:{l:{59:{c:[8774]}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10788]}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10610]}}}}}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8592]}}}}}}}}},109:{l:{97:{l:{108:{l:{108:{l:{115:{l:{101:{l:{116:{l:{109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8726]}}}}}}}}}}}}}}}}}}}}},115:{l:{104:{l:{112:{l:{59:{c:[10803]}}}}}}}}},101:{l:{112:{l:{97:{l:{114:{l:{115:{l:{108:{l:{59:{c:[10724]}}}}}}}}}}}}},105:{l:{100:{l:{59:{c:[8739]}}},108:{l:{101:{l:{59:{c:[8995]}}}}}}},116:{l:{59:{c:[10922]},101:{l:{59:{c:[10924]},115:{l:{59:{c:[10924,65024]}}}}}}}}},111:{l:{102:{l:{116:{l:{99:{l:{121:{l:{59:{c:[1100]}}}}}}}}},108:{l:{59:{c:[47]},98:{l:{59:{c:[10692]},97:{l:{114:{l:{59:{c:[9023]}}}}}}}}},112:{l:{102:{l:{59:{c:[120164]}}}}}}},112:{l:{97:{l:{100:{l:{101:{l:{115:{l:{59:{c:[9824]},117:{l:{105:{l:{116:{l:{59:{c:[9824]}}}}}}}}}}}}},114:{l:{59:{c:[8741]}}}}}}},113:{l:{99:{l:{97:{l:{112:{l:{59:{c:[8851]},115:{l:{59:{c:[8851,65024]}}}}}}},117:{l:{112:{l:{59:{c:[8852]},115:{l:{59:{c:[8852,65024]}}}}}}}}},115:{l:{117:{l:{98:{l:{59:{c:[8847]},101:{l:{59:{c:[8849]}}},115:{l:{101:{l:{116:{l:{59:{c:[8847]},101:{l:{113:{l:{59:{c:[8849]}}}}}}}}}}}}},112:{l:{59:{c:[8848]},101:{l:{59:{c:[8850]}}},115:{l:{101:{l:{116:{l:{59:{c:[8848]},101:{l:{113:{l:{59:{c:[8850]}}}}}}}}}}}}}}}}},117:{l:{59:{c:[9633]},97:{l:{114:{l:{101:{l:{59:{c:[9633]}}},102:{l:{59:{c:[9642]}}}}}}},102:{l:{59:{c:[9642]}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8594]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120008]}}}}},101:{l:{116:{l:{109:{l:{110:{l:{59:{c:[8726]}}}}}}}}},109:{l:{105:{l:{108:{l:{101:{l:{59:{c:[8995]}}}}}}}}},116:{l:{97:{l:{114:{l:{102:{l:{59:{c:[8902]}}}}}}}}}}},116:{l:{97:{l:{114:{l:{59:{c:[9734]},102:{l:{59:{c:[9733]}}}}}}},114:{l:{97:{l:{105:{l:{103:{l:{104:{l:{116:{l:{101:{l:{112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[1013]}}}}}}}}}}}}}}},112:{l:{104:{l:{105:{l:{59:{c:[981]}}}}}}}}}}}}}}}}},110:{l:{115:{l:{59:{c:[175]}}}}}}}}},117:{l:{98:{l:{59:{c:[8834]},69:{l:{59:{c:[10949]}}},100:{l:{111:{l:{116:{l:{59:{c:[10941]}}}}}}},101:{l:{59:{c:[8838]},100:{l:{111:{l:{116:{l:{59:{c:[10947]}}}}}}}}},109:{l:{117:{l:{108:{l:{116:{l:{59:{c:[10945]}}}}}}}}},110:{l:{69:{l:{59:{c:[10955]}}},101:{l:{59:{c:[8842]}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10943]}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10617]}}}}}}}}},115:{l:{101:{l:{116:{l:{59:{c:[8834]},101:{l:{113:{l:{59:{c:[8838]},113:{l:{59:{c:[10949]}}}}}}},110:{l:{101:{l:{113:{l:{59:{c:[8842]},113:{l:{59:{c:[10955]}}}}}}}}}}}}},105:{l:{109:{l:{59:{c:[10951]}}}}},117:{l:{98:{l:{59:{c:[10965]}}},112:{l:{59:{c:[10963]}}}}}}}}},99:{l:{99:{l:{59:{c:[8827]},97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10936]}}}}}}}}}}}}},99:{l:{117:{l:{114:{l:{108:{l:{121:{l:{101:{l:{113:{l:{59:{c:[8829]}}}}}}}}}}}}}}},101:{l:{113:{l:{59:{c:[10928]}}}}},110:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10938]}}}}}}}}}}}}},101:{l:{113:{l:{113:{l:{59:{c:[10934]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8937]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8831]}}}}}}}}}}},109:{l:{59:{c:[8721]}}},110:{l:{103:{l:{59:{c:[9834]}}}}},112:{l:{49:{l:{59:{c:[185]}},c:[185]},50:{l:{59:{c:[178]}},c:[178]},51:{l:{59:{c:[179]}},c:[179]},59:{c:[8835]},69:{l:{59:{c:[10950]}}},100:{l:{111:{l:{116:{l:{59:{c:[10942]}}}}},115:{l:{117:{l:{98:{l:{59:{c:[10968]}}}}}}}}},101:{l:{59:{c:[8839]},100:{l:{111:{l:{116:{l:{59:{c:[10948]}}}}}}}}},104:{l:{115:{l:{111:{l:{108:{l:{59:{c:[10185]}}}}},117:{l:{98:{l:{59:{c:[10967]}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10619]}}}}}}}}},109:{l:{117:{l:{108:{l:{116:{l:{59:{c:[10946]}}}}}}}}},110:{l:{69:{l:{59:{c:[10956]}}},101:{l:{59:{c:[8843]}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10944]}}}}}}}}},115:{l:{101:{l:{116:{l:{59:{c:[8835]},101:{l:{113:{l:{59:{c:[8839]},113:{l:{59:{c:[10950]}}}}}}},110:{l:{101:{l:{113:{l:{59:{c:[8843]},113:{l:{59:{c:[10956]}}}}}}}}}}}}},105:{l:{109:{l:{59:{c:[10952]}}}}},117:{l:{98:{l:{59:{c:[10964]}}},112:{l:{59:{c:[10966]}}}}}}}}}}},119:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8665]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10534]}}}}},114:{l:{59:{c:[8601]},111:{l:{119:{l:{59:{c:[8601]}}}}}}}}}}},110:{l:{119:{l:{97:{l:{114:{l:{59:{c:[10538]}}}}}}}}}}},122:{l:{108:{l:{105:{l:{103:{l:{59:{c:[223]}},c:[223]}}}}}}}}},116:{l:{97:{l:{114:{l:{103:{l:{101:{l:{116:{l:{59:{c:[8982]}}}}}}}}},117:{l:{59:{c:[964]}}}}},98:{l:{114:{l:{107:{l:{59:{c:[9140]}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[357]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[355]}}}}}}}}},121:{l:{59:{c:[1090]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8411]}}}}}}},101:{l:{108:{l:{114:{l:{101:{l:{99:{l:{59:{c:[8981]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120113]}}}}},104:{l:{101:{l:{114:{l:{101:{l:{52:{l:{59:{c:[8756]}}},102:{l:{111:{l:{114:{l:{101:{l:{59:{c:[8756]}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[952]},115:{l:{121:{l:{109:{l:{59:{c:[977]}}}}}}},118:{l:{59:{c:[977]}}}}}}}}},105:{l:{99:{l:{107:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[8776]}}}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8764]}}}}}}}}}}},110:{l:{115:{l:{112:{l:{59:{c:[8201]}}}}}}}}},107:{l:{97:{l:{112:{l:{59:{c:[8776]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8764]}}}}}}}}},111:{l:{114:{l:{110:{l:{59:{c:[254]}},c:[254]}}}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[732]}}}}}}},109:{l:{101:{l:{115:{l:{59:{c:[215]},98:{l:{59:{c:[8864]},97:{l:{114:{l:{59:{c:[10801]}}}}}}},100:{l:{59:{c:[10800]}}}},c:[215]}}}}},110:{l:{116:{l:{59:{c:[8749]}}}}}}},111:{l:{101:{l:{97:{l:{59:{c:[10536]}}}}},112:{l:{59:{c:[8868]},98:{l:{111:{l:{116:{l:{59:{c:[9014]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[10993]}}}}}}},102:{l:{59:{c:[120165]},111:{l:{114:{l:{107:{l:{59:{c:[10970]}}}}}}}}}}},115:{l:{97:{l:{59:{c:[10537]}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8244]}}}}}}}}}}},114:{l:{97:{l:{100:{l:{101:{l:{59:{c:[8482]}}}}}}},105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[9653]},100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[9663]}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[9667]},101:{l:{113:{l:{59:{c:[8884]}}}}}}}}}}}}},113:{l:{59:{c:[8796]}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[9657]},101:{l:{113:{l:{59:{c:[8885]}}}}}}}}}}}}}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[9708]}}}}}}},101:{l:{59:{c:[8796]}}},109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[10810]}}}}}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10809]}}}}}}}}},115:{l:{98:{l:{59:{c:[10701]}}}}},116:{l:{105:{l:{109:{l:{101:{l:{59:{c:[10811]}}}}}}}}}}},112:{l:{101:{l:{122:{l:{105:{l:{117:{l:{109:{l:{59:{c:[9186]}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120009]}}},121:{l:{59:{c:[1094]}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1115]}}}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[359]}}}}}}}}}}},119:{l:{105:{l:{120:{l:{116:{l:{59:{c:[8812]}}}}}}},111:{l:{104:{l:{101:{l:{97:{l:{100:{l:{108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8606]}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8608]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},117:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8657]}}}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10595]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[250]}},c:[250]}}}}}}},114:{l:{114:{l:{59:{c:[8593]}}}}}}},98:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1118]}}}}},101:{l:{118:{l:{101:{l:{59:{c:[365]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[251]}},c:[251]}}}}},121:{l:{59:{c:[1091]}}}}},100:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8645]}}}}}}},98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[369]}}}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[10606]}}}}}}}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10622]}}}}}}}}},114:{l:{59:{c:[120114]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[249]}},c:[249]}}}}}}}}},104:{l:{97:{l:{114:{l:{108:{l:{59:{c:[8639]}}},114:{l:{59:{c:[8638]}}}}}}},98:{l:{108:{l:{107:{l:{59:{c:[9600]}}}}}}}}},108:{l:{99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8988]},101:{l:{114:{l:{59:{c:[8988]}}}}}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8975]}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9720]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[363]}}}}}}},108:{l:{59:{c:[168]}},c:[168]}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[371]}}}}}}},112:{l:{102:{l:{59:{c:[120166]}}}}}}},112:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8593]}}}}}}}}}}},100:{l:{111:{l:{119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8597]}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8639]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8638]}}}}}}}}}}}}}}}}}}}}}}}}},108:{l:{117:{l:{115:{l:{59:{c:[8846]}}}}}}},115:{l:{105:{l:{59:{c:[965]},104:{l:{59:{c:[978]}}},108:{l:{111:{l:{110:{l:{59:{c:[965]}}}}}}}}}}},117:{l:{112:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8648]}}}}}}}}}}}}}}}}}}},114:{l:{99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8989]},101:{l:{114:{l:{59:{c:[8989]}}}}}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8974]}}}}}}}}},105:{l:{110:{l:{103:{l:{59:{c:[367]}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9721]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120010]}}}}}}},116:{l:{100:{l:{111:{l:{116:{l:{59:{c:[8944]}}}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[361]}}}}}}}}},114:{l:{105:{l:{59:{c:[9653]},102:{l:{59:{c:[9652]}}}}}}}}},117:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8648]}}}}}}},109:{l:{108:{l:{59:{c:[252]}},c:[252]}}}}},119:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[10663]}}}}}}}}}}}}}}},118:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8661]}}}}}}},66:{l:{97:{l:{114:{l:{59:{c:[10984]},118:{l:{59:{c:[10985]}}}}}}}}},68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8872]}}}}}}}}},97:{l:{110:{l:{103:{l:{114:{l:{116:{l:{59:{c:[10652]}}}}}}}}},114:{l:{101:{l:{112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[1013]}}}}}}}}}}}}}}},107:{l:{97:{l:{112:{l:{112:{l:{97:{l:{59:{c:[1008]}}}}}}}}}}},110:{l:{111:{l:{116:{l:{104:{l:{105:{l:{110:{l:{103:{l:{59:{c:[8709]}}}}}}}}}}}}}}},112:{l:{104:{l:{105:{l:{59:{c:[981]}}}}},105:{l:{59:{c:[982]}}},114:{l:{111:{l:{112:{l:{116:{l:{111:{l:{59:{c:[8733]}}}}}}}}}}}}},114:{l:{59:{c:[8597]},104:{l:{111:{l:{59:{c:[1009]}}}}}}},115:{l:{105:{l:{103:{l:{109:{l:{97:{l:{59:{c:[962]}}}}}}}}},117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{110:{l:{101:{l:{113:{l:{59:{c:[8842,65024]},113:{l:{59:{c:[10955,65024]}}}}}}}}}}}}}}}}},112:{l:{115:{l:{101:{l:{116:{l:{110:{l:{101:{l:{113:{l:{59:{c:[8843,65024]},113:{l:{59:{c:[10956,65024]}}}}}}}}}}}}}}}}}}}}},116:{l:{104:{l:{101:{l:{116:{l:{97:{l:{59:{c:[977]}}}}}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8882]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8883]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1074]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8866]}}}}}}}}},101:{l:{101:{l:{59:{c:[8744]},98:{l:{97:{l:{114:{l:{59:{c:[8891]}}}}}}},101:{l:{113:{l:{59:{c:[8794]}}}}}}},108:{l:{108:{l:{105:{l:{112:{l:{59:{c:[8942]}}}}}}}}},114:{l:{98:{l:{97:{l:{114:{l:{59:{c:[124]}}}}}}},116:{l:{59:{c:[124]}}}}}}},102:{l:{114:{l:{59:{c:[120115]}}}}},108:{l:{116:{l:{114:{l:{105:{l:{59:{c:[8882]}}}}}}}}},110:{l:{115:{l:{117:{l:{98:{l:{59:{c:[8834,8402]}}},112:{l:{59:{c:[8835,8402]}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120167]}}}}}}},112:{l:{114:{l:{111:{l:{112:{l:{59:{c:[8733]}}}}}}}}},114:{l:{116:{l:{114:{l:{105:{l:{59:{c:[8883]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120011]}}}}},117:{l:{98:{l:{110:{l:{69:{l:{59:{c:[10955,65024]}}},101:{l:{59:{c:[8842,65024]}}}}}}},112:{l:{110:{l:{69:{l:{59:{c:[10956,65024]}}},101:{l:{59:{c:[8843,65024]}}}}}}}}}}},122:{l:{105:{l:{103:{l:{122:{l:{97:{l:{103:{l:{59:{c:[10650]}}}}}}}}}}}}}}},119:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[373]}}}}}}}}},101:{l:{100:{l:{98:{l:{97:{l:{114:{l:{59:{c:[10847]}}}}}}},103:{l:{101:{l:{59:{c:[8743]},113:{l:{59:{c:[8793]}}}}}}}}},105:{l:{101:{l:{114:{l:{112:{l:{59:{c:[8472]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120116]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120168]}}}}}}},112:{l:{59:{c:[8472]}}},114:{l:{59:{c:[8768]},101:{l:{97:{l:{116:{l:{104:{l:{59:{c:[8768]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120012]}}}}}}}}},120:{l:{99:{l:{97:{l:{112:{l:{59:{c:[8898]}}}}},105:{l:{114:{l:{99:{l:{59:{c:[9711]}}}}}}},117:{l:{112:{l:{59:{c:[8899]}}}}}}},100:{l:{116:{l:{114:{l:{105:{l:{59:{c:[9661]}}}}}}}}},102:{l:{114:{l:{59:{c:[120117]}}}}},104:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10234]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10231]}}}}}}}}},105:{l:{59:{c:[958]}}},108:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10232]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10229]}}}}}}}}},109:{l:{97:{l:{112:{l:{59:{c:[10236]}}}}}}},110:{l:{105:{l:{115:{l:{59:{c:[8955]}}}}}}},111:{l:{100:{l:{111:{l:{116:{l:{59:{c:[10752]}}}}}}},112:{l:{102:{l:{59:{c:[120169]}}},108:{l:{117:{l:{115:{l:{59:{c:[10753]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{59:{c:[10754]}}}}}}}}}}},114:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10233]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10230]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120013]}}}}},113:{l:{99:{l:{117:{l:{112:{l:{59:{c:[10758]}}}}}}}}}}},117:{l:{112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10756]}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9651]}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8897]}}}}}}},119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8896]}}}}}}}}}}}}},121:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[253]}},c:[253]}}}}},121:{l:{59:{c:[1103]}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[375]}}}}}}},121:{l:{59:{c:[1099]}}}}},101:{l:{110:{l:{59:{c:[165]}},c:[165]}}},102:{l:{114:{l:{59:{c:[120118]}}}}},105:{l:{99:{l:{121:{l:{59:{c:[1111]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120170]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120014]}}}}}}},117:{l:{99:{l:{121:{l:{59:{c:[1102]}}}}},109:{l:{108:{l:{59:{c:[255]}},c:[255]}}}}}}},122:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[378]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[382]}}}}}}}}},121:{l:{59:{c:[1079]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[380]}}}}}}},101:{l:{101:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8488]}}}}}}}}},116:{l:{97:{l:{59:{c:[950]}}}}}}},102:{l:{114:{l:{59:{c:[120119]}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1078]}}}}}}},105:{l:{103:{l:{114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8669]}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120171]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120015]}}}}}}},119:{l:{106:{l:{59:{c:[8205]}}},110:{l:{106:{l:{59:{c:[8204]}}}}}}}}}};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var HTML = __webpack_require__(33);

	//Aliases
	var $ = HTML.TAG_NAMES,
	    NS = HTML.NAMESPACES;

	//Element utils

	//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
	//It's faster than using dictionary.
	function isImpliedEndTagRequired(tn) {
	    switch (tn.length) {
	        case 1:
	            return tn === $.P;

	        case 2:
	            return tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;

	        case 6:
	            return tn === $.OPTION;

	        case 8:
	            return tn === $.OPTGROUP;
	    }

	    return false;
	}

	function isScopingElement(tn, ns) {
	    switch (tn.length) {
	        case 2:
	            if (tn === $.TD || tn === $.TH)
	                return ns === NS.HTML;

	            else if (tn === $.MI || tn === $.MO || tn == $.MN || tn === $.MS)
	                return ns === NS.MATHML;

	            break;

	        case 4:
	            if (tn === $.HTML)
	                return ns === NS.HTML;

	            else if (tn === $.DESC)
	                return ns === NS.SVG;

	            break;

	        case 5:
	            if (tn === $.TABLE)
	                return ns === NS.HTML;

	            else if (tn === $.MTEXT)
	                return ns === NS.MATHML;

	            else if (tn === $.TITLE)
	                return ns === NS.SVG;

	            break;

	        case 6:
	            return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;

	        case 7:
	            return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;

	        case 8:
	            return tn === $.TEMPLATE && ns === NS.HTML;

	        case 13:
	            return tn === $.FOREIGN_OBJECT && ns === NS.SVG;

	        case 14:
	            return tn === $.ANNOTATION_XML && ns === NS.MATHML;
	    }

	    return false;
	}

	//Stack of open elements
	var OpenElementStack = module.exports = function (document, treeAdapter) {
	    this.stackTop = -1;
	    this.items = [];
	    this.current = document;
	    this.currentTagName = null;
	    this.currentTmplContent = null;
	    this.tmplCount = 0;
	    this.treeAdapter = treeAdapter;
	};

	//Index of element
	OpenElementStack.prototype._indexOf = function (element) {
	    var idx = -1;

	    for (var i = this.stackTop; i >= 0; i--) {
	        if (this.items[i] === element) {
	            idx = i;
	            break;
	        }
	    }
	    return idx;
	};

	//Update current element
	OpenElementStack.prototype._isInTemplate = function () {
	    if (this.currentTagName !== $.TEMPLATE)
	        return false;

	    return this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
	};

	OpenElementStack.prototype._updateCurrentElement = function () {
	    this.current = this.items[this.stackTop];
	    this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);

	    this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getChildNodes(this.current)[0] : null;
	};

	//Mutations
	OpenElementStack.prototype.push = function (element) {
	    this.items[++this.stackTop] = element;
	    this._updateCurrentElement();

	    if (this._isInTemplate())
	        this.tmplCount++;

	};

	OpenElementStack.prototype.pop = function () {
	    this.stackTop--;

	    if (this.tmplCount > 0 && this._isInTemplate())
	        this.tmplCount--;

	    this._updateCurrentElement();
	};

	OpenElementStack.prototype.replace = function (oldElement, newElement) {
	    var idx = this._indexOf(oldElement);
	    this.items[idx] = newElement;

	    if (idx === this.stackTop)
	        this._updateCurrentElement();
	};

	OpenElementStack.prototype.insertAfter = function (referenceElement, newElement) {
	    var insertionIdx = this._indexOf(referenceElement) + 1;

	    this.items.splice(insertionIdx, 0, newElement);

	    if (insertionIdx == ++this.stackTop)
	        this._updateCurrentElement();
	};

	OpenElementStack.prototype.popUntilTagNamePopped = function (tagName) {
	    while (this.stackTop > -1) {
	        var tn = this.currentTagName;

	        this.pop();

	        if (tn === tagName)
	            break;
	    }
	};

	OpenElementStack.prototype.popUntilTemplatePopped = function () {
	    while (this.stackTop > -1) {
	        var tn = this.currentTagName,
	            ns = this.treeAdapter.getNamespaceURI(this.current);

	        this.pop();

	        if (tn === $.TEMPLATE && ns === NS.HTML)
	            break;
	    }
	};

	OpenElementStack.prototype.popUntilElementPopped = function (element) {
	    while (this.stackTop > -1) {
	        var poppedElement = this.current;

	        this.pop();

	        if (poppedElement === element)
	            break;
	    }
	};

	OpenElementStack.prototype.popUntilNumberedHeaderPopped = function () {
	    while (this.stackTop > -1) {
	        var tn = this.currentTagName;

	        this.pop();

	        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
	            break;
	    }
	};

	OpenElementStack.prototype.popAllUpToHtmlElement = function () {
	    //NOTE: here we assume that root <html> element is always first in the open element stack, so
	    //we perform this fast stack clean up.
	    this.stackTop = 0;
	    this._updateCurrentElement();
	};

	OpenElementStack.prototype.clearBackToTableContext = function () {
	    while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML)
	        this.pop();
	};

	OpenElementStack.prototype.clearBackToTableBodyContext = function () {
	    while (this.currentTagName !== $.TBODY && this.currentTagName !== $.TFOOT &&
	           this.currentTagName !== $.THEAD && this.currentTagName !== $.TEMPLATE &&
	           this.currentTagName !== $.HTML) {
	        this.pop();
	    }
	};

	OpenElementStack.prototype.clearBackToTableRowContext = function () {
	    while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML)
	        this.pop();
	};

	OpenElementStack.prototype.remove = function (element) {
	    for (var i = this.stackTop; i >= 0; i--) {
	        if (this.items[i] === element) {
	            this.items.splice(i, 1);
	            this.stackTop--;
	            this._updateCurrentElement();
	            break;
	        }
	    }
	};

	//Search
	OpenElementStack.prototype.tryPeekProperlyNestedBodyElement = function () {
	    //Properly nested <body> element (should be second element in stack).
	    var element = this.items[1];
	    return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
	};

	OpenElementStack.prototype.contains = function (element) {
	    return this._indexOf(element) > -1;
	};

	OpenElementStack.prototype.getCommonAncestor = function (element) {
	    var elementIdx = this._indexOf(element);

	    return --elementIdx >= 0 ? this.items[elementIdx] : null;
	};

	OpenElementStack.prototype.isRootHtmlElementCurrent = function () {
	    return this.stackTop === 0 && this.currentTagName === $.HTML;
	};

	//Element in scope
	OpenElementStack.prototype.hasInScope = function (tagName) {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === tagName)
	            return true;

	        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

	        if (isScopingElement(tn, ns))
	            return false;
	    }

	    return true;
	};

	OpenElementStack.prototype.hasNumberedHeaderInScope = function () {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
	            return true;

	        if (isScopingElement(tn, this.treeAdapter.getNamespaceURI(this.items[i])))
	            return false;
	    }

	    return true;
	};

	OpenElementStack.prototype.hasInListItemScope = function (tagName) {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === tagName)
	            return true;

	        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

	        if (((tn === $.UL || tn === $.OL) && ns === NS.HTML) || isScopingElement(tn, ns))
	            return false;
	    }

	    return true;
	};

	OpenElementStack.prototype.hasInButtonScope = function (tagName) {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === tagName)
	            return true;

	        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

	        if ((tn === $.BUTTON && ns === NS.HTML) || isScopingElement(tn, ns))
	            return false;
	    }

	    return true;
	};

	OpenElementStack.prototype.hasInTableScope = function (tagName) {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === tagName)
	            return true;

	        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

	        if ((tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) && ns === NS.HTML)
	            return false;
	    }

	    return true;
	};

	OpenElementStack.prototype.hasTableBodyContextInTableScope = function () {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT)
	            return true;

	        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

	        if ((tn === $.TABLE || tn === $.HTML) && ns === NS.HTML)
	            return false;
	    }

	    return true;
	};

	OpenElementStack.prototype.hasInSelectScope = function (tagName) {
	    for (var i = this.stackTop; i >= 0; i--) {
	        var tn = this.treeAdapter.getTagName(this.items[i]);

	        if (tn === tagName)
	            return true;

	        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

	        if (tn !== $.OPTION && tn !== $.OPTGROUP && ns === NS.HTML)
	            return false;
	    }

	    return true;
	};

	//Implied end tags
	OpenElementStack.prototype.generateImpliedEndTags = function () {
	    while (isImpliedEndTagRequired(this.currentTagName))
	        this.pop();
	};

	OpenElementStack.prototype.generateImpliedEndTagsWithExclusion = function (exclusionTagName) {
	    while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName)
	        this.pop();
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	var NS = exports.NAMESPACES = {
	    HTML: 'http://www.w3.org/1999/xhtml',
	    MATHML: 'http://www.w3.org/1998/Math/MathML',
	    SVG: 'http://www.w3.org/2000/svg',
	    XLINK: 'http://www.w3.org/1999/xlink',
	    XML: 'http://www.w3.org/XML/1998/namespace',
	    XMLNS: 'http://www.w3.org/2000/xmlns/'
	};

	exports.ATTRS = {
	    TYPE: 'type',
	    ACTION: 'action',
	    ENCODING: 'encoding',
	    PROMPT: 'prompt',
	    NAME: 'name',
	    COLOR: 'color',
	    FACE: 'face',
	    SIZE: 'size'
	};

	var $ = exports.TAG_NAMES = {
	    A: 'a',
	    ADDRESS: 'address',
	    ANNOTATION_XML: 'annotation-xml',
	    APPLET: 'applet',
	    AREA: 'area',
	    ARTICLE: 'article',
	    ASIDE: 'aside',

	    B: 'b',
	    BASE: 'base',
	    BASEFONT: 'basefont',
	    BGSOUND: 'bgsound',
	    BIG: 'big',
	    BLOCKQUOTE: 'blockquote',
	    BODY: 'body',
	    BR: 'br',
	    BUTTON: 'button',

	    CAPTION: 'caption',
	    CENTER: 'center',
	    CODE: 'code',
	    COL: 'col',
	    COLGROUP: 'colgroup',
	    COMMAND: 'command',

	    DD: 'dd',
	    DESC: 'desc',
	    DETAILS: 'details',
	    DIALOG: 'dialog',
	    DIR: 'dir',
	    DIV: 'div',
	    DL: 'dl',
	    DT: 'dt',

	    EM: 'em',
	    EMBED: 'embed',

	    FIELDSET: 'fieldset',
	    FIGCAPTION: 'figcaption',
	    FIGURE: 'figure',
	    FONT: 'font',
	    FOOTER: 'footer',
	    FOREIGN_OBJECT: 'foreignObject',
	    FORM: 'form',
	    FRAME: 'frame',
	    FRAMESET: 'frameset',

	    H1: 'h1',
	    H2: 'h2',
	    H3: 'h3',
	    H4: 'h4',
	    H5: 'h5',
	    H6: 'h6',
	    HEAD: 'head',
	    HEADER: 'header',
	    HGROUP: 'hgroup',
	    HR: 'hr',
	    HTML: 'html',

	    I: 'i',
	    IMG: 'img',
	    IMAGE: 'image',
	    INPUT: 'input',
	    IFRAME: 'iframe',
	    ISINDEX: 'isindex',

	    KEYGEN: 'keygen',

	    LABEL: 'label',
	    LI: 'li',
	    LINK: 'link',
	    LISTING: 'listing',

	    MAIN: 'main',
	    MALIGNMARK: 'malignmark',
	    MARQUEE: 'marquee',
	    MATH: 'math',
	    MENU: 'menu',
	    MENUITEM: 'menuitem',
	    META: 'meta',
	    MGLYPH: 'mglyph',
	    MI: 'mi',
	    MO: 'mo',
	    MN: 'mn',
	    MS: 'ms',
	    MTEXT: 'mtext',

	    NAV: 'nav',
	    NOBR: 'nobr',
	    NOFRAMES: 'noframes',
	    NOEMBED: 'noembed',
	    NOSCRIPT: 'noscript',

	    OBJECT: 'object',
	    OL: 'ol',
	    OPTGROUP: 'optgroup',
	    OPTION: 'option',

	    P: 'p',
	    PARAM: 'param',
	    PLAINTEXT: 'plaintext',
	    PRE: 'pre',

	    RP: 'rp',
	    RT: 'rt',
	    RUBY: 'ruby',

	    S: 's',
	    SCRIPT: 'script',
	    SECTION: 'section',
	    SELECT: 'select',
	    SOURCE: 'source',
	    SMALL: 'small',
	    SPAN: 'span',
	    STRIKE: 'strike',
	    STRONG: 'strong',
	    STYLE: 'style',
	    SUB: 'sub',
	    SUMMARY: 'summary',
	    SUP: 'sup',

	    TABLE: 'table',
	    TBODY: 'tbody',
	    TEMPLATE: 'template',
	    TEXTAREA: 'textarea',
	    TFOOT: 'tfoot',
	    TD: 'td',
	    TH: 'th',
	    THEAD: 'thead',
	    TITLE: 'title',
	    TR: 'tr',
	    TRACK: 'track',
	    TT: 'tt',

	    U: 'u',
	    UL: 'ul',

	    SVG: 'svg',

	    VAR: 'var',

	    WBR: 'wbr',

	    XMP: 'xmp'
	};

	var SPECIAL_ELEMENTS = exports.SPECIAL_ELEMENTS = {};

	SPECIAL_ELEMENTS[NS.HTML] = {};
	SPECIAL_ELEMENTS[NS.HTML][$.ADDRESS] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.APPLET] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.AREA] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.ARTICLE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.ASIDE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BASE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BASEFONT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BGSOUND] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BLOCKQUOTE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BODY] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BR] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.BUTTON] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.CAPTION] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.CENTER] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.COL] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.COLGROUP] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.DD] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.DETAILS] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.DIR] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.DIV] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.DL] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.DT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.EMBED] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FIELDSET] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FIGCAPTION] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FIGURE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FOOTER] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FORM] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FRAME] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.FRAMESET] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.H1] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.H2] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.H3] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.H4] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.H5] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.H6] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.HEAD] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.HEADER] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.HGROUP] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.HR] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.HTML] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.IFRAME] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.IMG] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.INPUT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.ISINDEX] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.LI] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.LINK] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.LISTING] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.MAIN] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.MARQUEE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.MENU] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.MENUITEM] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.META] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.NAV] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.NOEMBED] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.NOFRAMES] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.NOSCRIPT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.OBJECT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.OL] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.P] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.PARAM] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.PLAINTEXT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.PRE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.SCRIPT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.SECTION] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.SELECT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.SOURCE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.STYLE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.SUMMARY] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TABLE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TBODY] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TD] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TEMPLATE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TEXTAREA] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TFOOT] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TH] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.THEAD] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TITLE] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TR] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.TRACK] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.UL] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.WBR] = true;
	SPECIAL_ELEMENTS[NS.HTML][$.XMP] = true;

	SPECIAL_ELEMENTS[NS.MATHML] = {};
	SPECIAL_ELEMENTS[NS.MATHML][$.MI] = true;
	SPECIAL_ELEMENTS[NS.MATHML][$.MO] = true;
	SPECIAL_ELEMENTS[NS.MATHML][$.MN] = true;
	SPECIAL_ELEMENTS[NS.MATHML][$.MS] = true;
	SPECIAL_ELEMENTS[NS.MATHML][$.MTEXT] = true;
	SPECIAL_ELEMENTS[NS.MATHML][$.ANNOTATION_XML] = true;

	SPECIAL_ELEMENTS[NS.SVG] = {};
	SPECIAL_ELEMENTS[NS.SVG][$.TITLE] = true;
	SPECIAL_ELEMENTS[NS.SVG][$.FOREIGN_OBJECT] = true;
	SPECIAL_ELEMENTS[NS.SVG][$.DESC] = true;


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	//Const
	var NOAH_ARK_CAPACITY = 3;

	//List of formatting elements
	var FormattingElementList = module.exports = function (treeAdapter) {
	    this.length = 0;
	    this.entries = [];
	    this.treeAdapter = treeAdapter;
	    this.bookmark = null;
	};

	//Entry types
	FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
	FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY';

	//Noah Ark's condition
	//OPTIMIZATION: at first we try to find possible candidates for exclusion using
	//lightweight heuristics without thorough attributes check.
	FormattingElementList.prototype._getNoahArkConditionCandidates = function (newElement) {
	    var candidates = [];

	    if (this.length >= NOAH_ARK_CAPACITY) {
	        var neAttrsLength = this.treeAdapter.getAttrList(newElement).length,
	            neTagName = this.treeAdapter.getTagName(newElement),
	            neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);

	        for (var i = this.length - 1; i >= 0; i--) {
	            var entry = this.entries[i];

	            if (entry.type === FormattingElementList.MARKER_ENTRY)
	                break;

	            var element = entry.element,
	                elementAttrs = this.treeAdapter.getAttrList(element);

	            if (this.treeAdapter.getTagName(element) === neTagName &&
	                this.treeAdapter.getNamespaceURI(element) === neNamespaceURI &&
	                elementAttrs.length === neAttrsLength) {
	                candidates.push({idx: i, attrs: elementAttrs});
	            }
	        }
	    }

	    return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
	};

	FormattingElementList.prototype._ensureNoahArkCondition = function (newElement) {
	    var candidates = this._getNoahArkConditionCandidates(newElement),
	        cLength = candidates.length;

	    if (cLength) {
	        var neAttrs = this.treeAdapter.getAttrList(newElement),
	            neAttrsLength = neAttrs.length,
	            neAttrsMap = {};

	        //NOTE: build attrs map for the new element so we can perform fast lookups
	        for (var i = 0; i < neAttrsLength; i++) {
	            var neAttr = neAttrs[i];

	            neAttrsMap[neAttr.name] = neAttr.value;
	        }

	        for (var i = 0; i < neAttrsLength; i++) {
	            for (var j = 0; j < cLength; j++) {
	                var cAttr = candidates[j].attrs[i];

	                if (neAttrsMap[cAttr.name] !== cAttr.value) {
	                    candidates.splice(j, 1);
	                    cLength--;
	                }

	                if (candidates.length < NOAH_ARK_CAPACITY)
	                    return;
	            }
	        }

	        //NOTE: remove bottommost candidates until Noah's Ark condition will not be met
	        for (var i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
	            this.entries.splice(candidates[i].idx, 1);
	            this.length--;
	        }
	    }
	};

	//Mutations
	FormattingElementList.prototype.insertMarker = function () {
	    this.entries.push({type: FormattingElementList.MARKER_ENTRY});
	    this.length++;
	};

	FormattingElementList.prototype.pushElement = function (element, token) {
	    this._ensureNoahArkCondition(element);

	    this.entries.push({
	        type: FormattingElementList.ELEMENT_ENTRY,
	        element: element,
	        token: token
	    });

	    this.length++;
	};

	FormattingElementList.prototype.insertElementAfterBookmark = function (element, token) {
	    var bookmarkIdx = this.length - 1;

	    for (; bookmarkIdx >= 0; bookmarkIdx--) {
	        if (this.entries[bookmarkIdx] === this.bookmark)
	            break;
	    }

	    this.entries.splice(bookmarkIdx + 1, 0, {
	        type: FormattingElementList.ELEMENT_ENTRY,
	        element: element,
	        token: token
	    });

	    this.length++;
	};

	FormattingElementList.prototype.removeEntry = function (entry) {
	    for (var i = this.length - 1; i >= 0; i--) {
	        if (this.entries[i] === entry) {
	            this.entries.splice(i, 1);
	            this.length--;
	            break;
	        }
	    }
	};

	FormattingElementList.prototype.clearToLastMarker = function () {
	    while (this.length) {
	        var entry = this.entries.pop();

	        this.length--;

	        if (entry.type === FormattingElementList.MARKER_ENTRY)
	            break;
	    }
	};

	//Search
	FormattingElementList.prototype.getElementEntryInScopeWithTagName = function (tagName) {
	    for (var i = this.length - 1; i >= 0; i--) {
	        var entry = this.entries[i];

	        if (entry.type === FormattingElementList.MARKER_ENTRY)
	            return null;

	        if (this.treeAdapter.getTagName(entry.element) === tagName)
	            return entry;
	    }

	    return null;
	};

	FormattingElementList.prototype.getElementEntry = function (element) {
	    for (var i = this.length - 1; i >= 0; i--) {
	        var entry = this.entries[i];

	        if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element == element)
	            return entry;
	    }

	    return null;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OpenElementStack = __webpack_require__(32),
	    Tokenizer = __webpack_require__(27),
	    HTML = __webpack_require__(33);


	//Aliases
	var $ = HTML.TAG_NAMES;


	function setEndLocation(element, closingToken, treeAdapter) {
	    var loc = element.__location;

	    if (!loc)
	        return;

	    if (!loc.startTag) {
	        loc.startTag = {
	            start: loc.start,
	            end: loc.end
	        };
	    }

	    if (closingToken.location) {
	        var tn = treeAdapter.getTagName(element),
	            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing tag and
	            // for cases like <td> <p> </td> - 'p' closes without a closing tag
	            isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN &&
	                              tn === closingToken.tagName;

	        if (isClosingEndTag) {
	            loc.endTag = {
	                start: closingToken.location.start,
	                end: closingToken.location.end
	            };
	        }

	        loc.end = closingToken.location.end;
	    }
	}

	//NOTE: patch open elements stack, so we can assign end location for the elements
	function patchOpenElementsStack(stack, parser) {
	    var treeAdapter = parser.treeAdapter;

	    stack.pop = function () {
	        setEndLocation(this.current, parser.currentToken, treeAdapter);
	        OpenElementStack.prototype.pop.call(this);
	    };

	    stack.popAllUpToHtmlElement = function () {
	        for (var i = this.stackTop; i > 0; i--)
	            setEndLocation(this.items[i], parser.currentToken, treeAdapter);

	        OpenElementStack.prototype.popAllUpToHtmlElement.call(this);
	    };

	    stack.remove = function (element) {
	        setEndLocation(element, parser.currentToken, treeAdapter);
	        OpenElementStack.prototype.remove.call(this, element);
	    };
	}

	exports.assign = function (parser) {
	    //NOTE: obtain Parser proto this way to avoid module circular references
	    var parserProto = Object.getPrototypeOf(parser),
	        treeAdapter = parser.treeAdapter;


	    //NOTE: patch _reset method
	    parser._reset = function (html, document, fragmentContext) {
	        parserProto._reset.call(this, html, document, fragmentContext);

	        this.attachableElementLocation = null;
	        this.lastFosterParentingLocation = null;
	        this.currentToken = null;

	        patchOpenElementsStack(this.openElements, parser);
	    };

	    parser._processTokenInForeignContent = function (token) {
	        this.currentToken = token;
	        parserProto._processTokenInForeignContent.call(this, token);
	    };

	    parser._processToken = function (token) {
	        this.currentToken = token;
	        parserProto._processToken.call(this, token);

	        //NOTE: <body> and <html> are never popped from the stack, so we need to updated
	        //their end location explicitly.
	        if (token.type === Tokenizer.END_TAG_TOKEN &&
	            (token.tagName === $.HTML ||
	            (token.tagName === $.BODY && this.openElements.hasInScope($.BODY)))) {
	            for (var i = this.openElements.stackTop; i >= 0; i--) {
	                var element = this.openElements.items[i];

	                if (this.treeAdapter.getTagName(element) === token.tagName) {
	                    setEndLocation(element, token, treeAdapter);
	                    break;
	                }
	            }
	        }
	    };

	    //Doctype
	    parser._setDocumentType = function (token) {
	        parserProto._setDocumentType.call(this, token);

	        var documentChildren = this.treeAdapter.getChildNodes(this.document),
	            cnLength = documentChildren.length;

	        for (var i = 0; i < cnLength; i++) {
	            var node = documentChildren[i];

	            if (this.treeAdapter.isDocumentTypeNode(node)) {
	                node.__location = token.location;
	                break;
	            }
	        }
	    };

	    //Elements
	    parser._attachElementToTree = function (element) {
	        //NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
	        //So we will use token location stored in this methods for the element.
	        element.__location = this.attachableElementLocation || null;
	        this.attachableElementLocation = null;
	        parserProto._attachElementToTree.call(this, element);
	    };

	    parser._appendElement = function (token, namespaceURI) {
	        this.attachableElementLocation = token.location;
	        parserProto._appendElement.call(this, token, namespaceURI);
	    };

	    parser._insertElement = function (token, namespaceURI) {
	        this.attachableElementLocation = token.location;
	        parserProto._insertElement.call(this, token, namespaceURI);
	    };

	    parser._insertTemplate = function (token) {
	        this.attachableElementLocation = token.location;
	        parserProto._insertTemplate.call(this, token);

	        var tmplContent = this.treeAdapter.getChildNodes(this.openElements.current)[0];

	        tmplContent.__location = null;
	    };

	    parser._insertFakeRootElement = function () {
	        parserProto._insertFakeRootElement.call(this);
	        this.openElements.current.__location = null;
	    };

	    //Comments
	    parser._appendCommentNode = function (token, parent) {
	        parserProto._appendCommentNode.call(this, token, parent);

	        var children = this.treeAdapter.getChildNodes(parent),
	            commentNode = children[children.length - 1];

	        commentNode.__location = token.location;
	    };

	    //Text
	    parser._findFosterParentingLocation = function () {
	        //NOTE: store last foster parenting location, so we will be able to find inserted text
	        //in case of foster parenting
	        this.lastFosterParentingLocation = parserProto._findFosterParentingLocation.call(this);
	        return this.lastFosterParentingLocation;
	    };

	    parser._insertCharacters = function (token) {
	        parserProto._insertCharacters.call(this, token);

	        var hasFosterParent = this._shouldFosterParentOnInsertion(),
	            parentingLocation = this.lastFosterParentingLocation,
	            parent = (hasFosterParent && parentingLocation.parent) ||
	                     this.openElements.currentTmplContent ||
	                     this.openElements.current,
	            siblings = this.treeAdapter.getChildNodes(parent),
	            textNodeIdx = hasFosterParent && parentingLocation.beforeElement ?
	                          siblings.indexOf(parentingLocation.beforeElement) - 1 :
	                          siblings.length - 1,
	            textNode = siblings[textNodeIdx];

	        //NOTE: if we have location assigned by another token, then just update end position
	        if (textNode.__location)
	            textNode.__location.end = token.location.end;

	        else
	            textNode.__location = token.location;
	    };
	};



/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	//Node construction
	exports.createDocument = function () {
	    return {
	        nodeName: '#document',
	        quirksMode: false,
	        childNodes: []
	    };
	};

	exports.createDocumentFragment = function () {
	    return {
	        nodeName: '#document-fragment',
	        quirksMode: false,
	        childNodes: []
	    };
	};

	exports.createElement = function (tagName, namespaceURI, attrs) {
	    return {
	        nodeName: tagName,
	        tagName: tagName,
	        attrs: attrs,
	        namespaceURI: namespaceURI,
	        childNodes: [],
	        parentNode: null
	    };
	};

	exports.createCommentNode = function (data) {
	    return {
	        nodeName: '#comment',
	        data: data,
	        parentNode: null
	    };
	};

	var createTextNode = function (value) {
	    return {
	        nodeName: '#text',
	        value: value,
	        parentNode: null
	    }
	};


	//Tree mutation
	exports.setDocumentType = function (document, name, publicId, systemId) {
	    var doctypeNode = null;

	    for (var i = 0; i < document.childNodes.length; i++) {
	        if (document.childNodes[i].nodeName === '#documentType') {
	            doctypeNode = document.childNodes[i];
	            break;
	        }
	    }

	    if (doctypeNode) {
	        doctypeNode.name = name;
	        doctypeNode.publicId = publicId;
	        doctypeNode.systemId = systemId;
	    }

	    else {
	        appendChild(document, {
	            nodeName: '#documentType',
	            name: name,
	            publicId: publicId,
	            systemId: systemId
	        });
	    }
	};

	exports.setQuirksMode = function (document) {
	    document.quirksMode = true;
	};

	exports.isQuirksMode = function (document) {
	    return document.quirksMode;
	};

	var appendChild = exports.appendChild = function (parentNode, newNode) {
	    parentNode.childNodes.push(newNode);
	    newNode.parentNode = parentNode;
	};

	var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
	    var insertionIdx = parentNode.childNodes.indexOf(referenceNode);

	    parentNode.childNodes.splice(insertionIdx, 0, newNode);
	    newNode.parentNode = parentNode;
	};

	exports.detachNode = function (node) {
	    if (node.parentNode) {
	        var idx = node.parentNode.childNodes.indexOf(node);

	        node.parentNode.childNodes.splice(idx, 1);
	        node.parentNode = null;
	    }
	};

	exports.insertText = function (parentNode, text) {
	    if (parentNode.childNodes.length) {
	        var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];

	        if (prevNode.nodeName === '#text') {
	            prevNode.value += text;
	            return;
	        }
	    }

	    appendChild(parentNode, createTextNode(text));
	};

	exports.insertTextBefore = function (parentNode, text, referenceNode) {
	    var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];

	    if (prevNode && prevNode.nodeName === '#text')
	        prevNode.value += text;
	    else
	        insertBefore(parentNode, createTextNode(text), referenceNode);
	};

	exports.adoptAttributes = function (recipientNode, attrs) {
	    var recipientAttrsMap = [];

	    for (var i = 0; i < recipientNode.attrs.length; i++)
	        recipientAttrsMap.push(recipientNode.attrs[i].name);

	    for (var j = 0; j < attrs.length; j++) {
	        if (recipientAttrsMap.indexOf(attrs[j].name) === -1)
	            recipientNode.attrs.push(attrs[j]);
	    }
	};


	//Tree traversing
	exports.getFirstChild = function (node) {
	    return node.childNodes[0];
	};

	exports.getChildNodes = function (node) {
	    return node.childNodes;
	};

	exports.getParentNode = function (node) {
	    return node.parentNode;
	};

	exports.getAttrList = function (node) {
	    return node.attrs;
	};

	//Node data
	exports.getTagName = function (element) {
	    return element.tagName;
	};

	exports.getNamespaceURI = function (element) {
	    return element.namespaceURI;
	};

	exports.getTextNodeContent = function (textNode) {
	    return textNode.value;
	};

	exports.getCommentNodeContent = function (commentNode) {
	    return commentNode.data;
	};

	exports.getDocumentTypeNodeName = function (doctypeNode) {
	    return doctypeNode.name;
	};

	exports.getDocumentTypeNodePublicId = function (doctypeNode) {
	    return doctypeNode.publicId;
	};

	exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
	    return doctypeNode.systemId;
	};

	//Node types
	exports.isTextNode = function (node) {
	    return node.nodeName === '#text';
	};

	exports.isCommentNode = function (node) {
	    return node.nodeName === '#comment';
	};

	exports.isDocumentTypeNode = function (node) {
	    return node.nodeName === '#documentType';
	};

	exports.isElementNode = function (node) {
	    return !!node.tagName;
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	//Const
	var VALID_DOCTYPE_NAME = 'html',
	    QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd',
	    QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
	        "+//silmaril//dtd html pro v0r11 19970101//en",
	        "-//advasoft ltd//dtd html 3.0 aswedit + extensions//en",
	        "-//as//dtd html 3.0 aswedit + extensions//en",
	        "-//ietf//dtd html 2.0 level 1//en",
	        "-//ietf//dtd html 2.0 level 2//en",
	        "-//ietf//dtd html 2.0 strict level 1//en",
	        "-//ietf//dtd html 2.0 strict level 2//en",
	        "-//ietf//dtd html 2.0 strict//en",
	        "-//ietf//dtd html 2.0//en",
	        "-//ietf//dtd html 2.1e//en",
	        "-//ietf//dtd html 3.0//en",
	        "-//ietf//dtd html 3.0//en//",
	        "-//ietf//dtd html 3.2 final//en",
	        "-//ietf//dtd html 3.2//en",
	        "-//ietf//dtd html 3//en",
	        "-//ietf//dtd html level 0//en",
	        "-//ietf//dtd html level 0//en//2.0",
	        "-//ietf//dtd html level 1//en",
	        "-//ietf//dtd html level 1//en//2.0",
	        "-//ietf//dtd html level 2//en",
	        "-//ietf//dtd html level 2//en//2.0",
	        "-//ietf//dtd html level 3//en",
	        "-//ietf//dtd html level 3//en//3.0",
	        "-//ietf//dtd html strict level 0//en",
	        "-//ietf//dtd html strict level 0//en//2.0",
	        "-//ietf//dtd html strict level 1//en",
	        "-//ietf//dtd html strict level 1//en//2.0",
	        "-//ietf//dtd html strict level 2//en",
	        "-//ietf//dtd html strict level 2//en//2.0",
	        "-//ietf//dtd html strict level 3//en",
	        "-//ietf//dtd html strict level 3//en//3.0",
	        "-//ietf//dtd html strict//en",
	        "-//ietf//dtd html strict//en//2.0",
	        "-//ietf//dtd html strict//en//3.0",
	        "-//ietf//dtd html//en",
	        "-//ietf//dtd html//en//2.0",
	        "-//ietf//dtd html//en//3.0",
	        "-//metrius//dtd metrius presentational//en",
	        "-//microsoft//dtd internet explorer 2.0 html strict//en",
	        "-//microsoft//dtd internet explorer 2.0 html//en",
	        "-//microsoft//dtd internet explorer 2.0 tables//en",
	        "-//microsoft//dtd internet explorer 3.0 html strict//en",
	        "-//microsoft//dtd internet explorer 3.0 html//en",
	        "-//microsoft//dtd internet explorer 3.0 tables//en",
	        "-//netscape comm. corp.//dtd html//en",
	        "-//netscape comm. corp.//dtd strict html//en",
	        "-//o'reilly and associates//dtd html 2.0//en",
	        "-//o'reilly and associates//dtd html extended 1.0//en",
	        "-//spyglass//dtd html 2.0 extended//en",
	        "-//sq//dtd html 2.0 hotmetal + extensions//en",
	        "-//sun microsystems corp.//dtd hotjava html//en",
	        "-//sun microsystems corp.//dtd hotjava strict html//en",
	        "-//w3c//dtd html 3 1995-03-24//en",
	        "-//w3c//dtd html 3.2 draft//en",
	        "-//w3c//dtd html 3.2 final//en",
	        "-//w3c//dtd html 3.2//en",
	        "-//w3c//dtd html 3.2s draft//en",
	        "-//w3c//dtd html 4.0 frameset//en",
	        "-//w3c//dtd html 4.0 transitional//en",
	        "-//w3c//dtd html experimental 19960712//en",
	        "-//w3c//dtd html experimental 970421//en",
	        "-//w3c//dtd w3 html//en",
	        "-//w3o//dtd w3 html 3.0//en",
	        "-//w3o//dtd w3 html 3.0//en//",
	        "-//webtechs//dtd mozilla html 2.0//en",
	        "-//webtechs//dtd mozilla html//en"
	    ],
	    QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	        '-//w3c//dtd html 4.01 frameset//',
	        '-//w3c//dtd html 4.01 transitional//'
	    ],
	    QUIRKS_MODE_PUBLIC_IDS = [
	        '-//w3o//dtd w3 html strict 3.0//en//',
	        '-/w3c/dtd html 4.0 transitional/en',
	        'html'
	    ];


	//Utils
	function enquoteDoctypeId(id) {
	    var quote = id.indexOf('"') !== -1 ? '\'' : '"';

	    return quote + id + quote;
	}


	//API
	exports.isQuirks = function (name, publicId, systemId) {
	    if (name !== VALID_DOCTYPE_NAME)
	        return true;

	    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID)
	        return true;

	    if (publicId !== null) {
	        publicId = publicId.toLowerCase();

	        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1)
	            return true;

	        var prefixes = QUIRKS_MODE_PUBLIC_ID_PREFIXES;

	        if (systemId === null)
	            prefixes = prefixes.concat(QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES);

	        for (var i = 0; i < prefixes.length; i++) {
	            if (publicId.indexOf(prefixes[i]) === 0)
	                return true;
	        }
	    }

	    return false;
	};

	exports.serializeContent = function (name, publicId, systemId) {
	    var str = '!DOCTYPE ' + name;

	    if (publicId !== null)
	        str += ' PUBLIC ' + enquoteDoctypeId(publicId);

	    else if (systemId !== null)
	        str += ' SYSTEM';

	    if (systemId !== null)
	        str += ' ' + enquoteDoctypeId(systemId);

	    return str;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tokenizer = __webpack_require__(27),
	    HTML = __webpack_require__(33);

	//Aliases
	var $ = HTML.TAG_NAMES,
	    NS = HTML.NAMESPACES,
	    ATTRS = HTML.ATTRS;


	//MIME types
	var MIME_TYPES = {
	    TEXT_HTML: 'text/html',
	    APPLICATION_XML: 'application/xhtml+xml'
	};

	//Attributes
	var DEFINITION_URL_ATTR = 'definitionurl',
	    ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL',
	    SVG_ATTRS_ADJUSTMENT_MAP = {
	        'attributename': 'attributeName',
	        'attributetype': 'attributeType',
	        'basefrequency': 'baseFrequency',
	        'baseprofile': 'baseProfile',
	        'calcmode': 'calcMode',
	        'clippathunits': 'clipPathUnits',
	        'contentscripttype': 'contentScriptType',
	        'contentstyletype': 'contentStyleType',
	        'diffuseconstant': 'diffuseConstant',
	        'edgemode': 'edgeMode',
	        'externalresourcesrequired': 'externalResourcesRequired',
	        'filterres': 'filterRes',
	        'filterunits': 'filterUnits',
	        'glyphref': 'glyphRef',
	        'gradienttransform': 'gradientTransform',
	        'gradientunits': 'gradientUnits',
	        'kernelmatrix': 'kernelMatrix',
	        'kernelunitlength': 'kernelUnitLength',
	        'keypoints': 'keyPoints',
	        'keysplines': 'keySplines',
	        'keytimes': 'keyTimes',
	        'lengthadjust': 'lengthAdjust',
	        'limitingconeangle': 'limitingConeAngle',
	        'markerheight': 'markerHeight',
	        'markerunits': 'markerUnits',
	        'markerwidth': 'markerWidth',
	        'maskcontentunits': 'maskContentUnits',
	        'maskunits': 'maskUnits',
	        'numoctaves': 'numOctaves',
	        'pathlength': 'pathLength',
	        'patterncontentunits': 'patternContentUnits',
	        'patterntransform': 'patternTransform',
	        'patternunits': 'patternUnits',
	        'pointsatx': 'pointsAtX',
	        'pointsaty': 'pointsAtY',
	        'pointsatz': 'pointsAtZ',
	        'preservealpha': 'preserveAlpha',
	        'preserveaspectratio': 'preserveAspectRatio',
	        'primitiveunits': 'primitiveUnits',
	        'refx': 'refX',
	        'refy': 'refY',
	        'repeatcount': 'repeatCount',
	        'repeatdur': 'repeatDur',
	        'requiredextensions': 'requiredExtensions',
	        'requiredfeatures': 'requiredFeatures',
	        'specularconstant': 'specularConstant',
	        'specularexponent': 'specularExponent',
	        'spreadmethod': 'spreadMethod',
	        'startoffset': 'startOffset',
	        'stddeviation': 'stdDeviation',
	        'stitchtiles': 'stitchTiles',
	        'surfacescale': 'surfaceScale',
	        'systemlanguage': 'systemLanguage',
	        'tablevalues': 'tableValues',
	        'targetx': 'targetX',
	        'targety': 'targetY',
	        'textlength': 'textLength',
	        'viewbox': 'viewBox',
	        'viewtarget': 'viewTarget',
	        'xchannelselector': 'xChannelSelector',
	        'ychannelselector': 'yChannelSelector',
	        'zoomandpan': 'zoomAndPan'
	    },
	    XML_ATTRS_ADJUSTMENT_MAP = {
	        'xlink:actuate': {prefix: 'xlink', name: 'actuate', namespace: NS.XLINK},
	        'xlink:arcrole': {prefix: 'xlink', name: 'arcrole', namespace: NS.XLINK},
	        'xlink:href': {prefix: 'xlink', name: 'href', namespace: NS.XLINK},
	        'xlink:role': {prefix: 'xlink', name: 'role', namespace: NS.XLINK},
	        'xlink:show': {prefix: 'xlink', name: 'show', namespace: NS.XLINK},
	        'xlink:title': {prefix: 'xlink', name: 'title', namespace: NS.XLINK},
	        'xlink:type': {prefix: 'xlink', name: 'type', namespace: NS.XLINK},
	        'xml:base': {prefix: 'xml', name: 'base', namespace: NS.XML},
	        'xml:lang': {prefix: 'xml', name: 'lang', namespace: NS.XML},
	        'xml:space': {prefix: 'xml', name: 'space', namespace: NS.XML},
	        'xmlns': {prefix: '', name: 'xmlns', namespace: NS.XMLNS},
	        'xmlns:xlink': {prefix: 'xmlns', name: 'xlink', namespace: NS.XMLNS}

	    };

	//SVG tag names adjustment map
	var SVG_TAG_NAMES_ADJUSTMENT_MAP = {
	    'altglyph': 'altGlyph',
	    'altglyphdef': 'altGlyphDef',
	    'altglyphitem': 'altGlyphItem',
	    'animatecolor': 'animateColor',
	    'animatemotion': 'animateMotion',
	    'animatetransform': 'animateTransform',
	    'clippath': 'clipPath',
	    'feblend': 'feBlend',
	    'fecolormatrix': 'feColorMatrix',
	    'fecomponenttransfer': 'feComponentTransfer',
	    'fecomposite': 'feComposite',
	    'feconvolvematrix': 'feConvolveMatrix',
	    'fediffuselighting': 'feDiffuseLighting',
	    'fedisplacementmap': 'feDisplacementMap',
	    'fedistantlight': 'feDistantLight',
	    'feflood': 'feFlood',
	    'fefunca': 'feFuncA',
	    'fefuncb': 'feFuncB',
	    'fefuncg': 'feFuncG',
	    'fefuncr': 'feFuncR',
	    'fegaussianblur': 'feGaussianBlur',
	    'feimage': 'feImage',
	    'femerge': 'feMerge',
	    'femergenode': 'feMergeNode',
	    'femorphology': 'feMorphology',
	    'feoffset': 'feOffset',
	    'fepointlight': 'fePointLight',
	    'fespecularlighting': 'feSpecularLighting',
	    'fespotlight': 'feSpotLight',
	    'fetile': 'feTile',
	    'feturbulence': 'feTurbulence',
	    'foreignobject': 'foreignObject',
	    'glyphref': 'glyphRef',
	    'lineargradient': 'linearGradient',
	    'radialgradient': 'radialGradient',
	    'textpath': 'textPath'
	};

	//Tags that causes exit from foreign content
	var EXITS_FOREIGN_CONTENT = {};

	EXITS_FOREIGN_CONTENT[$.B] = true;
	EXITS_FOREIGN_CONTENT[$.BIG] = true;
	EXITS_FOREIGN_CONTENT[$.BLOCKQUOTE] = true;
	EXITS_FOREIGN_CONTENT[$.BODY] = true;
	EXITS_FOREIGN_CONTENT[$.BR] = true;
	EXITS_FOREIGN_CONTENT[$.CENTER] = true;
	EXITS_FOREIGN_CONTENT[$.CODE] = true;
	EXITS_FOREIGN_CONTENT[$.DD] = true;
	EXITS_FOREIGN_CONTENT[$.DIV] = true;
	EXITS_FOREIGN_CONTENT[$.DL] = true;
	EXITS_FOREIGN_CONTENT[$.DT] = true;
	EXITS_FOREIGN_CONTENT[$.EM] = true;
	EXITS_FOREIGN_CONTENT[$.EMBED] = true;
	EXITS_FOREIGN_CONTENT[$.H1] = true;
	EXITS_FOREIGN_CONTENT[$.H2] = true;
	EXITS_FOREIGN_CONTENT[$.H3] = true;
	EXITS_FOREIGN_CONTENT[$.H4] = true;
	EXITS_FOREIGN_CONTENT[$.H5] = true;
	EXITS_FOREIGN_CONTENT[$.H6] = true;
	EXITS_FOREIGN_CONTENT[$.HEAD] = true;
	EXITS_FOREIGN_CONTENT[$.HR] = true;
	EXITS_FOREIGN_CONTENT[$.I] = true;
	EXITS_FOREIGN_CONTENT[$.IMG] = true;
	EXITS_FOREIGN_CONTENT[$.LI] = true;
	EXITS_FOREIGN_CONTENT[$.LISTING] = true;
	EXITS_FOREIGN_CONTENT[$.MENU] = true;
	EXITS_FOREIGN_CONTENT[$.META] = true;
	EXITS_FOREIGN_CONTENT[$.NOBR] = true;
	EXITS_FOREIGN_CONTENT[$.OL] = true;
	EXITS_FOREIGN_CONTENT[$.P] = true;
	EXITS_FOREIGN_CONTENT[$.PRE] = true;
	EXITS_FOREIGN_CONTENT[$.RUBY] = true;
	EXITS_FOREIGN_CONTENT[$.S] = true;
	EXITS_FOREIGN_CONTENT[$.SMALL] = true;
	EXITS_FOREIGN_CONTENT[$.SPAN] = true;
	EXITS_FOREIGN_CONTENT[$.STRONG] = true;
	EXITS_FOREIGN_CONTENT[$.STRIKE] = true;
	EXITS_FOREIGN_CONTENT[$.SUB] = true;
	EXITS_FOREIGN_CONTENT[$.SUP] = true;
	EXITS_FOREIGN_CONTENT[$.TABLE] = true;
	EXITS_FOREIGN_CONTENT[$.TT] = true;
	EXITS_FOREIGN_CONTENT[$.U] = true;
	EXITS_FOREIGN_CONTENT[$.UL] = true;
	EXITS_FOREIGN_CONTENT[$.VAR] = true;

	//Check exit from foreign content
	exports.causesExit = function (startTagToken) {
	    var tn = startTagToken.tagName;

	    if (tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null ||
	        Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null ||
	        Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null)) {
	        return true;
	    }

	    return EXITS_FOREIGN_CONTENT[tn];
	};

	//Token adjustments
	exports.adjustTokenMathMLAttrs = function (token) {
	    for (var i = 0; i < token.attrs.length; i++) {
	        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
	            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
	            break;
	        }
	    }
	};

	exports.adjustTokenSVGAttrs = function (token) {
	    for (var i = 0; i < token.attrs.length; i++) {
	        var adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

	        if (adjustedAttrName)
	            token.attrs[i].name = adjustedAttrName;
	    }
	};

	exports.adjustTokenXMLAttrs = function (token) {
	    for (var i = 0; i < token.attrs.length; i++) {
	        var adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

	        if (adjustedAttrEntry) {
	            token.attrs[i].prefix = adjustedAttrEntry.prefix;
	            token.attrs[i].name = adjustedAttrEntry.name;
	            token.attrs[i].namespace = adjustedAttrEntry.namespace;
	        }
	    }
	};

	exports.adjustTokenSVGTagName = function (token) {
	    var adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];

	    if (adjustedTagName)
	        token.tagName = adjustedTagName;
	};

	//Integration points
	exports.isMathMLTextIntegrationPoint = function (tn, ns) {
	    return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
	};

	exports.isHtmlIntegrationPoint = function (tn, ns, attrs) {
	    if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
	        for (var i = 0; i < attrs.length; i++) {
	            if (attrs[i].name === ATTRS.ENCODING) {
	                var value = attrs[i].value.toLowerCase();

	                return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
	            }
	        }
	    }

	    return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	exports.mergeOptions = function (defaults, options) {
	    options = options || {};

	    return [defaults, options].reduce(function (merged, optObj) {
	        Object.keys(optObj).forEach(function (key) {
	            merged[key] = optObj[key];
	        });

	        return merged;
	    }, {});
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tokenizer = __webpack_require__(27),
	    TokenizerProxy = __webpack_require__(41),
	    Utils = __webpack_require__(39);

	//Default options
	var DEFAULT_OPTIONS = {
	    decodeHtmlEntities: true,
	    locationInfo: false
	};

	//Skipping handler
	function skip() {
	    //NOTE: do nothing =)
	}

	//SimpleApiParser
	var SimpleApiParser = module.exports = function (handlers, options) {
	    this.options = Utils.mergeOptions(DEFAULT_OPTIONS, options);
	    this.handlers = {
	        doctype: this._wrapHandler(handlers.doctype),
	        startTag: this._wrapHandler(handlers.startTag),
	        endTag: this._wrapHandler(handlers.endTag),
	        text: this._wrapHandler(handlers.text),
	        comment: this._wrapHandler(handlers.comment)
	    };
	};

	SimpleApiParser.prototype._wrapHandler = function (handler) {
	    var parser = this;

	    handler = handler || skip;

	    if (this.options.locationInfo) {
	        return function () {
	            var args = Array.prototype.slice.call(arguments);
	            args.push(parser.currentTokenLocation);
	            handler.apply(handler, args);
	        };
	    }

	    return handler;
	};

	//API
	SimpleApiParser.prototype.parse = function (html) {
	    var token = null;

	    this._reset(html);

	    do {
	        token = this.tokenizerProxy.getNextToken();

	        if (token.type === Tokenizer.CHARACTER_TOKEN ||
	            token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN ||
	            token.type === Tokenizer.NULL_CHARACTER_TOKEN) {

	            if (this.options.locationInfo) {
	                if (this.pendingText === null)
	                    this.currentTokenLocation = token.location;

	                else
	                    this.currentTokenLocation.end = token.location.end;
	            }

	            this.pendingText = (this.pendingText || '') + token.chars;
	        }

	        else {
	            this._emitPendingText();
	            this._handleToken(token);
	        }
	    } while (token.type !== Tokenizer.EOF_TOKEN);
	};

	//Internals
	SimpleApiParser.prototype._handleToken = function (token) {
	    if (this.options.locationInfo)
	        this.currentTokenLocation = token.location;

	    if (token.type === Tokenizer.START_TAG_TOKEN)
	        this.handlers.startTag(token.tagName, token.attrs, token.selfClosing);

	    else if (token.type === Tokenizer.END_TAG_TOKEN)
	        this.handlers.endTag(token.tagName);

	    else if (token.type === Tokenizer.COMMENT_TOKEN)
	        this.handlers.comment(token.data);

	    else if (token.type === Tokenizer.DOCTYPE_TOKEN)
	        this.handlers.doctype(token.name, token.publicId, token.systemId);

	};

	SimpleApiParser.prototype._reset = function (html) {
	    this.tokenizerProxy = new TokenizerProxy(html, this.options);
	    this.pendingText = null;
	    this.currentTokenLocation = null;
	};

	SimpleApiParser.prototype._emitPendingText = function () {
	    if (this.pendingText !== null) {
	        this.handlers.text(this.pendingText);
	        this.pendingText = null;
	    }
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tokenizer = __webpack_require__(27),
	    ForeignContent = __webpack_require__(38),
	    UNICODE = __webpack_require__(29),
	    HTML = __webpack_require__(33);

	//Aliases
	var $ = HTML.TAG_NAMES,
	    NS = HTML.NAMESPACES;


	//Tokenizer proxy
	//NOTE: this proxy simulates adjustment of the Tokenizer which performed by standard parser during tree construction.
	var TokenizerProxy = module.exports = function (html, options) {
	    this.tokenizer = new Tokenizer(html, options);

	    this.namespaceStack = [];
	    this.namespaceStackTop = -1;
	    this.currentNamespace = null;
	    this.inForeignContent = false;
	};

	//API
	TokenizerProxy.prototype.getNextToken = function () {
	    var token = this.tokenizer.getNextToken();

	    if (token.type === Tokenizer.START_TAG_TOKEN)
	        this._handleStartTagToken(token);

	    else if (token.type === Tokenizer.END_TAG_TOKEN)
	        this._handleEndTagToken(token);

	    else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN && this.inForeignContent) {
	        token.type = Tokenizer.CHARACTER_TOKEN;
	        token.chars = UNICODE.REPLACEMENT_CHARACTER;
	    }

	    return token;
	};

	//Namespace stack mutations
	TokenizerProxy.prototype._enterNamespace = function (namespace) {
	    this.namespaceStackTop++;
	    this.namespaceStack.push(namespace);

	    this.inForeignContent = namespace !== NS.HTML;
	    this.currentNamespace = namespace;
	    this.tokenizer.allowCDATA = this.inForeignContent;
	};

	TokenizerProxy.prototype._leaveCurrentNamespace = function () {
	    this.namespaceStackTop--;
	    this.namespaceStack.pop();

	    this.currentNamespace = this.namespaceStack[this.namespaceStackTop];
	    this.inForeignContent = this.currentNamespace !== NS.HTML;
	    this.tokenizer.allowCDATA = this.inForeignContent;
	};

	//Token handlers
	TokenizerProxy.prototype._ensureTokenizerMode = function (tn) {
	    if (tn === $.TEXTAREA || tn === $.TITLE)
	        this.tokenizer.state = Tokenizer.MODE.RCDATA;

	    else if (tn === $.PLAINTEXT)
	        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;

	    else if (tn === $.SCRIPT)
	        this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;

	    else if (tn === $.STYLE || tn === $.IFRAME || tn === $.XMP ||
	             tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) {
	        this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
	    }
	};

	TokenizerProxy.prototype._handleStartTagToken = function (token) {
	    var tn = token.tagName;

	    if (tn === $.SVG)
	        this._enterNamespace(NS.SVG);

	    else if (tn === $.MATH)
	        this._enterNamespace(NS.MATHML);

	    else {
	        if (this.inForeignContent) {
	            if (ForeignContent.causesExit(token))
	                this._leaveCurrentNamespace();

	            else if (ForeignContent.isMathMLTextIntegrationPoint(tn, this.currentNamespace) ||
	                     ForeignContent.isHtmlIntegrationPoint(tn, this.currentNamespace, token.attrs)) {
	                this._enterNamespace(NS.HTML);
	            }
	        }

	        else
	            this._ensureTokenizerMode(tn);
	    }
	};

	TokenizerProxy.prototype._handleEndTagToken = function (token) {
	    var tn = token.tagName;

	    if (!this.inForeignContent) {
	        var previousNs = this.namespaceStack[this.namespaceStackTop - 1];

	        //NOTE: check for exit from integration point
	        if (ForeignContent.isMathMLTextIntegrationPoint(tn, previousNs) ||
	            ForeignContent.isHtmlIntegrationPoint(tn, previousNs, token.attrs)) {
	            this._leaveCurrentNamespace();
	        }

	        else if (tn === $.SCRIPT)
	            this.tokenizer.state = Tokenizer.MODE.DATA;
	    }

	    else if ((tn === $.SVG && this.currentNamespace === NS.SVG) ||
	             (tn === $.MATH && this.currentNamespace === NS.MATHML))
	        this._leaveCurrentNamespace();
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DefaultTreeAdapter = __webpack_require__(36),
	    Doctype = __webpack_require__(37),
	    Utils = __webpack_require__(39),
	    HTML = __webpack_require__(33);

	//Aliases
	var $ = HTML.TAG_NAMES,
	    NS = HTML.NAMESPACES;

	//Default serializer options
	var DEFAULT_OPTIONS = {
	    encodeHtmlEntities: true
	};

	//Escaping regexes
	var AMP_REGEX = /&/g,
	    NBSP_REGEX = /\u00a0/g,
	    DOUBLE_QUOTE_REGEX = /"/g,
	    LT_REGEX = /</g,
	    GT_REGEX = />/g;

	//Escape string
	function escapeString(str, attrMode) {
	    str = str
	        .replace(AMP_REGEX, '&amp;')
	        .replace(NBSP_REGEX, '&nbsp;');

	    if (attrMode)
	        str = str.replace(DOUBLE_QUOTE_REGEX, '&quot;');

	    else {
	        str = str
	            .replace(LT_REGEX, '&lt;')
	            .replace(GT_REGEX, '&gt;');
	    }

	    return str;
	}


	//Enquote doctype ID



	//Serializer
	var Serializer = module.exports = function (treeAdapter, options) {
	    this.treeAdapter = treeAdapter || DefaultTreeAdapter;
	    this.options = Utils.mergeOptions(DEFAULT_OPTIONS, options);
	};


	//API
	Serializer.prototype.serialize = function (node) {
	    this.html = '';
	    this._serializeChildNodes(node);

	    return this.html;
	};


	//Internals
	Serializer.prototype._serializeChildNodes = function (parentNode) {
	    var childNodes = this.treeAdapter.getChildNodes(parentNode);

	    if (childNodes) {
	        for (var i = 0, cnLength = childNodes.length; i < cnLength; i++) {
	            var currentNode = childNodes[i];

	            if (this.treeAdapter.isElementNode(currentNode))
	                this._serializeElement(currentNode);

	            else if (this.treeAdapter.isTextNode(currentNode))
	                this._serializeTextNode(currentNode);

	            else if (this.treeAdapter.isCommentNode(currentNode))
	                this._serializeCommentNode(currentNode);

	            else if (this.treeAdapter.isDocumentTypeNode(currentNode))
	                this._serializeDocumentTypeNode(currentNode);
	        }
	    }
	};

	Serializer.prototype._serializeElement = function (node) {
	    var tn = this.treeAdapter.getTagName(node),
	        ns = this.treeAdapter.getNamespaceURI(node);

	    this.html += '<' + tn;
	    this._serializeAttributes(node);
	    this.html += '>';

	    if (tn !== $.AREA && tn !== $.BASE && tn !== $.BASEFONT && tn !== $.BGSOUND && tn !== $.BR && tn !== $.BR &&
	        tn !== $.COL && tn !== $.EMBED && tn !== $.FRAME && tn !== $.HR && tn !== $.IMG && tn !== $.INPUT &&
	        tn !== $.KEYGEN && tn !== $.LINK && tn !== $.MENUITEM && tn !== $.META && tn !== $.PARAM && tn !== $.SOURCE &&
	        tn !== $.TRACK && tn !== $.WBR) {

	        if (tn === $.PRE || tn === $.TEXTAREA || tn === $.LISTING) {
	            var firstChild = this.treeAdapter.getFirstChild(node);

	            if (firstChild && this.treeAdapter.isTextNode(firstChild)) {
	                var content = this.treeAdapter.getTextNodeContent(firstChild);

	                if (content[0] === '\n')
	                    this.html += '\n';
	            }
	        }

	        var childNodesHolder = tn === $.TEMPLATE && ns === NS.HTML ?
	                               this.treeAdapter.getChildNodes(node)[0] :
	                               node;

	        this._serializeChildNodes(childNodesHolder);
	        this.html += '</' + tn + '>';
	    }
	};

	Serializer.prototype._serializeAttributes = function (node) {
	    var attrs = this.treeAdapter.getAttrList(node);

	    for (var i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
	        var attr = attrs[i],
	            value = this.options.encodeHtmlEntities ? escapeString(attr.value, true) : attr.value;

	        this.html += ' ';

	        if (!attr.namespace)
	            this.html += attr.name;

	        else if (attr.namespace === NS.XML)
	            this.html += 'xml:' + attr.name;

	        else if (attr.namespace === NS.XMLNS) {
	            if (attr.name !== 'xmlns')
	                this.html += 'xmlns:';

	            this.html += attr.name;
	        }

	        else if (attr.namespace === NS.XLINK)
	            this.html += 'xlink:' + attr.name;

	        else
	            this.html += attr.namespace + ':' + attr.name;

	        this.html += '="' + value + '"';
	    }
	};

	Serializer.prototype._serializeTextNode = function (node) {
	    var content = this.treeAdapter.getTextNodeContent(node),
	        parent = this.treeAdapter.getParentNode(node),
	        parentTn = void 0;

	    if (parent && this.treeAdapter.isElementNode(parent))
	        parentTn = this.treeAdapter.getTagName(parent);

	    if (parentTn === $.STYLE || parentTn === $.SCRIPT || parentTn === $.XMP || parentTn === $.IFRAME ||
	        parentTn === $.NOEMBED || parentTn === $.NOFRAMES || parentTn === $.PLAINTEXT || parentTn === $.NOSCRIPT) {
	        this.html += content;
	    }

	    else
	        this.html += this.options.encodeHtmlEntities ? escapeString(content, false) : content;
	};

	Serializer.prototype._serializeCommentNode = function (node) {
	    this.html += '<!--' + this.treeAdapter.getCommentNodeContent(node) + '-->';
	};

	Serializer.prototype._serializeDocumentTypeNode = function (node) {
	    var name = this.treeAdapter.getDocumentTypeNodeName(node),
	        publicId = this.treeAdapter.getDocumentTypeNodePublicId(node),
	        systemId = this.treeAdapter.getDocumentTypeNodeSystemId(node);

	    this.html += '<' + Doctype.serializeContent(name, publicId, systemId) + '>';
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var Parser = __webpack_require__(26),
	    ParsingUnit = __webpack_require__(44);

	//API
	exports.parseDocument = function (html, treeAdapter) {
	    //NOTE: this should be reentrant, so we create new parser here
	    var parser = new Parser(treeAdapter),
	        parsingUnit = new ParsingUnit(parser);

	    //NOTE: override parser loop method
	    parser._runParsingLoop = function () {
	        parsingUnit.parsingLoopLock = true;

	        while (!parsingUnit.suspended && !this.stopped)
	            this._iterateParsingLoop();

	        parsingUnit.parsingLoopLock = false;

	        if (this.stopped)
	            parsingUnit.callback(this.document);
	    };

	    //NOTE: wait while parserController will be adopted by calling code, then
	    //start parsing
	    process.nextTick(function () {
	        parser.parse(html);
	    });

	    return parsingUnit;
	};

	exports.parseInnerHtml = function (innerHtml, contextElement, treeAdapter) {
	    //NOTE: this should be reentrant, so we create new parser here
	    var parser = new Parser(treeAdapter);

	    return parser.parseFragment(innerHtml, contextElement);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	var ParsingUnit = module.exports = function (parser) {
	    this.parser = parser;
	    this.suspended = false;
	    this.parsingLoopLock = false;
	    this.callback = null;
	};

	ParsingUnit.prototype._stateGuard = function (suspend) {
	    if (this.suspended && suspend)
	        throw new Error('parse5: Parser was already suspended. Please, check your control flow logic.');

	    else if (!this.suspended && !suspend)
	        throw new Error('parse5: Parser was already resumed. Please, check your control flow logic.');

	    return suspend;
	};

	ParsingUnit.prototype.suspend = function () {
	    this.suspended = this._stateGuard(true);

	    return this;
	};

	ParsingUnit.prototype.resume = function () {
	    this.suspended = this._stateGuard(false);

	    //NOTE: don't enter parsing loop if it is locked. Without this lock _runParsingLoop() may be called
	    //while parsing loop is still running. E.g. when suspend() and resume() called synchronously.
	    if (!this.parsingLoopLock)
	        this.parser._runParsingLoop();

	    return this;
	};

	ParsingUnit.prototype.documentWrite = function (html) {
	    this.parser.tokenizer.preprocessor.write(html);

	    return this;
	};

	ParsingUnit.prototype.handleScripts = function (scriptHandler) {
	    this.parser.scriptHandler = scriptHandler;

	    return this;
	};

	ParsingUnit.prototype.done = function (callback) {
	    this.callback = callback;

	    return this;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Doctype = __webpack_require__(37);

	//Conversion tables for DOM Level1 structure emulation
	var nodeTypes = {
	    element: 1,
	    text: 3,
	    cdata: 4,
	    comment: 8
	};

	var nodePropertyShorthands = {
	    tagName: 'name',
	    childNodes: 'children',
	    parentNode: 'parent',
	    previousSibling: 'prev',
	    nextSibling: 'next',
	    nodeValue: 'data'
	};

	//Node
	var Node = function (props) {
	    for (var key in props) {
	        if (props.hasOwnProperty(key))
	            this[key] = props[key];
	    }
	};

	Node.prototype = {
	    get firstChild() {
	        var children = this.children;
	        return children && children[0] || null;
	    },

	    get lastChild() {
	        var children = this.children;
	        return children && children[children.length - 1] || null;
	    },

	    get nodeType() {
	        return nodeTypes[this.type] || nodeTypes.element;
	    }
	};

	Object.keys(nodePropertyShorthands).forEach(function (key) {
	    var shorthand = nodePropertyShorthands[key];

	    Object.defineProperty(Node.prototype, key, {
	        get: function () {
	            return this[shorthand] || null;
	        },
	        set: function (val) {
	            this[shorthand] = val;
	            return val;
	        }
	    });
	});


	//Node construction
	exports.createDocument =
	exports.createDocumentFragment = function () {
	    return new Node({
	        type: 'root',
	        name: 'root',
	        parent: null,
	        prev: null,
	        next: null,
	        children: []
	    });
	};

	exports.createElement = function (tagName, namespaceURI, attrs) {
	    var attribs = {},
	        attribsNamespace = {},
	        attribsPrefix = {};

	    for (var i = 0; i < attrs.length; i++) {
	        var attrName = attrs[i].name;

	        attribs[attrName] = attrs[i].value;
	        attribsNamespace[attrName] = attrs[i].namespace;
	        attribsPrefix[attrName] = attrs[i].prefix;
	    }

	    return new Node({
	        type: tagName === 'script' || tagName === 'style' ? tagName : 'tag',
	        name: tagName,
	        namespace: namespaceURI,
	        attribs: attribs,
	        'x-attribsNamespace': attribsNamespace,
	        'x-attribsPrefix': attribsPrefix,
	        children: [],
	        parent: null,
	        prev: null,
	        next: null
	    });
	};

	exports.createCommentNode = function (data) {
	    return new Node({
	        type: 'comment',
	        data: data,
	        parent: null,
	        prev: null,
	        next: null
	    });
	};

	var createTextNode = function (value) {
	    return new Node({
	        type: 'text',
	        data: value,
	        parent: null,
	        prev: null,
	        next: null
	    });
	};


	//Tree mutation
	exports.setDocumentType = function (document, name, publicId, systemId) {
	    var data = Doctype.serializeContent(name, publicId, systemId),
	        doctypeNode = null;

	    for (var i = 0; i < document.children.length; i++) {
	        if (document.children[i].type === 'directive' && document.children[i].name === '!doctype') {
	            doctypeNode = document.children[i];
	            break;
	        }
	    }

	    if (doctypeNode) {
	        doctypeNode.data = data;
	        doctypeNode['x-name'] = name;
	        doctypeNode['x-publicId'] = publicId;
	        doctypeNode['x-systemId'] = systemId;
	    }

	    else {
	        appendChild(document, new Node({
	            type: 'directive',
	            name: '!doctype',
	            data: data,
	            'x-name': name,
	            'x-publicId': publicId,
	            'x-systemId': systemId
	        }));
	    }

	};

	exports.setQuirksMode = function (document) {
	    document.quirksMode = true;
	};

	exports.isQuirksMode = function (document) {
	    return document.quirksMode;
	};

	var appendChild = exports.appendChild = function (parentNode, newNode) {
	    var prev = parentNode.children[parentNode.children.length - 1];

	    if (prev) {
	        prev.next = newNode;
	        newNode.prev = prev;
	    }

	    parentNode.children.push(newNode);
	    newNode.parent = parentNode;
	};

	var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
	    var insertionIdx = parentNode.children.indexOf(referenceNode),
	        prev = referenceNode.prev;

	    if (prev) {
	        prev.next = newNode;
	        newNode.prev = prev;
	    }

	    referenceNode.prev = newNode;
	    newNode.next = referenceNode;

	    parentNode.children.splice(insertionIdx, 0, newNode);
	    newNode.parent = parentNode;
	};

	exports.detachNode = function (node) {
	    if (node.parent) {
	        var idx = node.parent.children.indexOf(node),
	            prev = node.prev,
	            next = node.next;

	        node.prev = null;
	        node.next = null;

	        if (prev)
	            prev.next = next;

	        if (next)
	            next.prev = prev;

	        node.parent.children.splice(idx, 1);
	        node.parent = null;
	    }
	};

	exports.insertText = function (parentNode, text) {
	    var lastChild = parentNode.children[parentNode.children.length - 1];

	    if (lastChild && lastChild.type === 'text')
	        lastChild.data += text;
	    else
	        appendChild(parentNode, createTextNode(text));
	};

	exports.insertTextBefore = function (parentNode, text, referenceNode) {
	    var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];

	    if (prevNode && prevNode.type === 'text')
	        prevNode.data += text;
	    else
	        insertBefore(parentNode, createTextNode(text), referenceNode);
	};

	exports.adoptAttributes = function (recipientNode, attrs) {
	    for (var i = 0; i < attrs.length; i++) {
	        var attrName = attrs[i].name;

	        if (typeof recipientNode.attribs[attrName] === 'undefined') {
	            recipientNode.attribs[attrName] = attrs[i].value;
	            recipientNode['x-attribsNamespace'][attrName] = attrs[i].namespace;
	            recipientNode['x-attribsPrefix'][attrName] = attrs[i].prefix;
	        }
	    }
	};


	//Tree traversing
	exports.getFirstChild = function (node) {
	    return node.children[0];
	};

	exports.getChildNodes = function (node) {
	    return node.children;
	};

	exports.getParentNode = function (node) {
	    return node.parent;
	};

	exports.getAttrList = function (node) {
	    var attrList = [];

	    for (var name in node.attribs) {
	        if (node.attribs.hasOwnProperty(name)) {
	            attrList.push({
	                name: name,
	                value: node.attribs[name],
	                namespace: node['x-attribsNamespace'][name],
	                prefix: node['x-attribsPrefix'][name]
	            });
	        }
	    }

	    return attrList;
	};


	//Node data
	exports.getTagName = function (element) {
	    return element.name;
	};

	exports.getNamespaceURI = function (element) {
	    return element.namespace;
	};

	exports.getTextNodeContent = function (textNode) {
	    return textNode.data;
	};

	exports.getCommentNodeContent = function (commentNode) {
	    return commentNode.data;
	};

	exports.getDocumentTypeNodeName = function (doctypeNode) {
	    return doctypeNode['x-name'];
	};

	exports.getDocumentTypeNodePublicId = function (doctypeNode) {
	    return doctypeNode['x-publicId'];
	};

	exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
	    return doctypeNode['x-systemId'];
	};


	//Node types
	exports.isTextNode = function (node) {
	    return node.type === 'text';
	};

	exports.isCommentNode = function (node) {
	    return node.type === 'comment';
	};

	exports.isDocumentTypeNode = function (node) {
	    return node.type === 'directive' && node.name === '!doctype';
	};

	exports.isElementNode = function (node) {
	    return !!node.attribs;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	/**
	 * @license
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	'use strict';

	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/** */
	exports.notifications = {
	  /**
	   * Called after patch has compleated with any Nodes that have been created
	   * and added to the DOM.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesCreated: null,

	  /**
	   * Called after patch has compleated with any Nodes that have been removed
	   * from the DOM.
	   * Note it's an applications responsibility to handle any childNodes.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesDeleted: null
	};

	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * Similar to the built-in Treewalker class, but simplified and allows direct
	 * access to modify the currentNode property.
	 * @param {!Element|!DocumentFragment} node The root Node of the subtree the
	 *     walker should start traversing.
	 * @constructor
	 */
	function TreeWalker(node) {
	  /**
	   * Keeps track of the current parent node. This is necessary as the traversal
	   * methods may traverse past the last child and we still need a way to get
	   * back to the parent.
	   * @const @private {!Array<!Node>}
	   */
	  this.stack_ = [];

	  /**
	   * @const {!Element|!DocumentFragment}
	   */
	  this.root = node;

	  /**
	   * @type {?Node}
	   */
	  this.currentNode = node;
	}

	/**
	 * @return {!Node} The current parent of the current location in the subtree.
	 */
	TreeWalker.prototype.getCurrentParent = function () {
	  return this.stack_[this.stack_.length - 1];
	};

	/**
	 * Changes the current location the firstChild of the current location.
	 */
	TreeWalker.prototype.firstChild = function () {
	  this.stack_.push(this.currentNode);
	  this.currentNode = this.currentNode.firstChild;
	};

	/**
	 * Changes the current location the nextSibling of the current location.
	 */
	TreeWalker.prototype.nextSibling = function () {
	  this.currentNode = this.currentNode.nextSibling;
	};

	/**
	 * Changes the current location the parentNode of the current location.
	 */
	TreeWalker.prototype.parentNode = function () {
	  this.currentNode = this.stack_.pop();
	};

	/**
	 * Keeps track of the state of a patch.
	 * @param {!Element|!DocumentFragment} node The root Node of the subtree the
	 *     is for.
	 * @param {?Context} prevContext The previous context.
	 * @constructor
	 */
	function Context(node, prevContext) {
	  /**
	   * @const {TreeWalker}
	   */
	  this.walker = new TreeWalker(node);

	  /**
	   * @const {Document}
	   */
	  this.doc = node.ownerDocument;

	  /**
	   * Keeps track of what namespace to create new Elements in.
	   * @private
	   * @const {!Array<(string|undefined)>}
	   */
	  this.nsStack_ = [undefined];

	  /**
	   * @const {?Context}
	   */
	  this.prevContext = prevContext;

	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.created = exports.notifications.nodesCreated && [];

	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.deleted = exports.notifications.nodesDeleted && [];
	}

	/**
	 * @return {(string|undefined)} The current namespace to create Elements in.
	 */
	Context.prototype.getCurrentNamespace = function () {
	  return this.nsStack_[this.nsStack_.length - 1];
	};

	/**
	 * @param {string=} namespace The namespace to enter.
	 */
	Context.prototype.enterNamespace = function (namespace) {
	  this.nsStack_.push(namespace);
	};

	/**
	 * Exits the current namespace
	 */
	Context.prototype.exitNamespace = function () {
	  this.nsStack_.pop();
	};

	/**
	 * @param {!Node} node
	 */
	Context.prototype.markCreated = function (node) {
	  if (this.created) {
	    this.created.push(node);
	  }
	};

	/**
	 * @param {!Node} node
	 */
	Context.prototype.markDeleted = function (node) {
	  if (this.deleted) {
	    this.deleted.push(node);
	  }
	};

	/**
	 * Notifies about nodes that were created during the patch opearation.
	 */
	Context.prototype.notifyChanges = function () {
	  if (this.created && this.created.length > 0) {
	    exports.notifications.nodesCreated(this.created);
	  }

	  if (this.deleted && this.deleted.length > 0) {
	    exports.notifications.nodesDeleted(this.deleted);
	  }
	};

	/**
	 * The current context.
	 * @type {?Context}
	 */
	var context;

	/**
	 * Enters a new patch context.
	 * @param {!Element|!DocumentFragment} node
	 */
	var enterContext = function (node) {
	  context = new Context(node, context);
	};

	/**
	 * Restores the previous patch context.
	 */
	var restoreContext = function () {
	  context = context.prevContext;
	};

	/**
	 * Gets the current patch context.
	 * @return {?Context}
	 */
	var getContext = function () {
	  return context;
	};

	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * A cached reference to the hasOwnProperty function.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * A cached reference to the create function.
	 */
	var create = Object.create;

	/**
	 * Used to prevent property collisions between our "map" and its prototype.
	 * @param {!Object<string, *>} map The map to check.
	 * @param {string} property The property to check.
	 * @return {boolean} Whether map has property.
	 */
	var has = function (map, property) {
	  return hasOwnProperty.call(map, property);
	};

	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function () {
	  return create(null);
	};

	/**
	 * Keeps track of information needed to perform diffs for a given DOM node.
	 * @param {!string} nodeName
	 * @param {?string=} key
	 * @constructor
	 */
	function NodeData(nodeName, key) {
	  /**
	   * The attributes and their values.
	   * @const
	   */
	  this.attrs = createMap();

	  /**
	   * An array of attribute name/value pairs, used for quickly diffing the
	   * incomming attributes to see if the DOM node's attributes need to be
	   * updated.
	   * @const {Array<*>}
	   */
	  this.attrsArr = [];

	  /**
	   * The incoming attributes for this Node, before they are updated.
	   * @const {!Object<string, *>}
	   */
	  this.newAttrs = createMap();

	  /**
	   * The key used to identify this node, used to preserve DOM nodes when they
	   * move within their parent.
	   * @const
	   */
	  this.key = key;

	  /**
	   * Keeps track of children within this node by their key.
	   * {?Object<string, !Element>}
	   */
	  this.keyMap = null;

	  /**
	   * Whether or not the keyMap is currently valid.
	   * {boolean}
	   */
	  this.keyMapValid = true;

	  /**
	   * The last child to have been visited within the current pass.
	   * @type {?Node}
	   */
	  this.lastVisitedChild = null;

	  /**
	   * The node name for this node.
	   * @const {string}
	   */
	  this.nodeName = nodeName;

	  /**
	   * @type {?string}
	   */
	  this.text = null;
	}

	/**
	 * Initializes a NodeData object for a Node.
	 *
	 * @param {Node} node The node to initialize data for.
	 * @param {string} nodeName The node name of node.
	 * @param {?string=} key The key that identifies the node.
	 * @return {!NodeData} The newly initialized data object
	 */
	var initData = function (node, nodeName, key) {
	  var data = new NodeData(nodeName, key);
	  node['__incrementalDOMData'] = data;
	  return data;
	};

	/**
	 * Retrieves the NodeData object for a Node, creating it if necessary.
	 *
	 * @param {Node} node The node to retrieve the data for.
	 * @return {!NodeData} The NodeData for this Node.
	 */
	var getData = function (node) {
	  var data = node['__incrementalDOMData'];

	  if (!data) {
	    var nodeName = node.nodeName.toLowerCase();
	    var key = null;

	    if (node instanceof Element) {
	      key = node.getAttribute('key');
	    }

	    data = initData(node, nodeName, key);
	  }

	  return data;
	};

	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	exports.symbols = {
	  default: '__default',

	  placeholder: '__placeholder'
	};

	/**
	 * Applies an attribute or property to a given Element. If the value is null
	 * or undefined, it is removed from the Element. Otherwise, the value is set
	 * as an attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {?(boolean|number|string)=} value The attribute's value.
	 */
	exports.applyAttr = function (el, name, value) {
	  if (value == null) {
	    el.removeAttribute(name);
	  } else {
	    el.setAttribute(name, value);
	  }
	};

	/**
	 * Applies a property to a given Element.
	 * @param {!Element} el
	 * @param {string} name The property's name.
	 * @param {*} value The property's value.
	 */
	exports.applyProp = function (el, name, value) {
	  el[name] = value;
	};

	/**
	 * Applies a style to an Element. No vendor prefix expansion is done for
	 * property names/values.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {string|Object<string,string>} style The style to set. Either a
	 *     string of css or an object containing property-value pairs.
	 */
	var applyStyle = function (el, name, style) {
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	  } else {
	    el.style.cssText = '';
	    var elStyle = el.style;

	    for (var prop in style) {
	      if (has(style, prop)) {
	        elStyle[prop] = style[prop];
	      }
	    }
	  }
	};

	/**
	 * Updates a single attribute on an Element.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value. If the value is an object or
	 *     function it is set on the Element, otherwise, it is set as an HTML
	 *     attribute.
	 */
	var applyAttributeTyped = function (el, name, value) {
	  var type = typeof value;

	  if (type === 'object' || type === 'function') {
	    exports.applyProp(el, name, value);
	  } else {
	    exports.applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
	  }
	};

	/**
	 * Calls the appropriate attribute mutator for this attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value.
	 */
	var updateAttribute = function (el, name, value) {
	  var data = getData(el);
	  var attrs = data.attrs;

	  if (attrs[name] === value) {
	    return;
	  }

	  var mutator = exports.attributes[name] || exports.attributes[exports.symbols.default];
	  mutator(el, name, value);

	  attrs[name] = value;
	};

	/**
	 * A publicly mutable object to provide custom mutators for attributes.
	 * @const {!Object<string, function(!Element, string, *)>}
	 */
	exports.attributes = createMap();

	// Special generic mutator that's called for any attribute that does not
	// have a specific mutator.
	exports.attributes[exports.symbols.default] = applyAttributeTyped;

	exports.attributes[exports.symbols.placeholder] = function () {};

	exports.attributes['style'] = applyStyle;

	var SVG_NS = 'http://www.w3.org/2000/svg';

	/**
	 * Enters a tag, checking to see if it is a namespace boundary, and if so,
	 * updates the current namespace.
	 * @param {string} tag The tag to enter.
	 */
	var enterTag = function (tag) {
	  if (tag === 'svg') {
	    getContext().enterNamespace(SVG_NS);
	  } else if (tag === 'foreignObject') {
	    getContext().enterNamespace(undefined);
	  }
	};

	/**
	 * Exits a tag, checking to see if it is a namespace boundary, and if so,
	 * updates the current namespace.
	 * @param {string} tag The tag to enter.
	 */
	var exitTag = function (tag) {
	  if (tag === 'svg' || tag === 'foreignObject') {
	    getContext().exitNamespace();
	  }
	};

	/**
	 * Gets the namespace to create an element (of a given tag) in.
	 * @param {string} tag The tag to get the namespace for.
	 * @return {(string|undefined)} The namespace to create the tag in.
	 */
	var getNamespaceForTag = function (tag) {
	  if (tag === 'svg') {
	    return SVG_NS;
	  }

	  return getContext().getCurrentNamespace();
	};

	/**
	 * Creates an Element.
	 * @param {Document} doc The document with which to create the Element.
	 * @param {string} tag The tag for the Element.
	 * @param {?string=} key A key to identify the Element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of
	 *     the static attributes for the Element.
	 * @return {!Element}
	 */
	var createElement = function (doc, tag, key, statics) {
	  var namespace = getNamespaceForTag(tag);
	  var el;

	  if (namespace) {
	    el = doc.createElementNS(namespace, tag);
	  } else {
	    el = doc.createElement(tag);
	  }

	  initData(el, tag, key);

	  if (statics) {
	    for (var i = 0; i < statics.length; i += 2) {
	      updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
	    }
	  }

	  return el;
	};

	/**
	 * Creates a Node, either a Text or an Element depending on the node name
	 * provided.
	 * @param {Document} doc The document with which to create the Node.
	 * @param {string} nodeName The tag if creating an element or #text to create
	 *     a Text.
	 * @param {?string=} key A key to identify the Element.
	 * @param {?Array<*>=} statics The static data to initialize the Node
	 *     with. For an Element, an array of attribute name/value pairs of
	 *     the static attributes for the Element.
	 * @return {!Node}
	 */
	var createNode = function (doc, nodeName, key, statics) {
	  if (nodeName === '#text') {
	    return doc.createTextNode('');
	  }

	  return createElement(doc, nodeName, key, statics);
	};

	/**
	 * Creates a mapping that can be used to look up children using a key.
	 * @param {!Node} el
	 * @return {!Object<string, !Element>} A mapping of keys to the children of the
	 *     Element.
	 */
	var createKeyMap = function (el) {
	  var map = createMap();
	  var children = el.children;
	  var count = children.length;

	  for (var i = 0; i < count; i += 1) {
	    var child = children[i];
	    var key = getData(child).key;

	    if (key) {
	      map[key] = child;
	    }
	  }

	  return map;
	};

	/**
	 * Retrieves the mapping of key to child node for a given Element, creating it
	 * if necessary.
	 * @param {!Node} el
	 * @return {!Object<string, !Node>} A mapping of keys to child Elements
	 */
	var getKeyMap = function (el) {
	  var data = getData(el);

	  if (!data.keyMap) {
	    data.keyMap = createKeyMap(el);
	  }

	  return data.keyMap;
	};

	/**
	 * Retrieves a child from the parent with the given key.
	 * @param {!Node} parent
	 * @param {?string=} key
	 * @return {?Element} The child corresponding to the key.
	 */
	var getChild = function (parent, key) {
	  return (/** @type {?Element} */key && getKeyMap(parent)[key]
	  );
	};

	/**
	 * Registers an element as being a child. The parent will keep track of the
	 * child using the key. The child can be retrieved using the same key using
	 * getKeyMap. The provided key should be unique within the parent Element.
	 * @param {!Node} parent The parent of child.
	 * @param {string} key A key to identify the child with.
	 * @param {!Node} child The child to register.
	 */
	var registerChild = function (parent, key, child) {
	  getKeyMap(parent)[key] = child;
	};

	if (process.env.NODE_ENV !== 'production') {
	  /**
	  * Makes sure that keyed Element matches the tag name provided.
	  * @param {!Element} node The node that is being matched.
	  * @param {string=} tag The tag name of the Element.
	  * @param {?string=} key The key of the Element.
	  */
	  var assertKeyedTagMatches = function (node, tag, key) {
	    var nodeName = getData(node).nodeName;
	    if (nodeName !== tag) {
	      throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
	    }
	  };
	}

	/**
	 * Checks whether or not a given node matches the specified nodeName and key.
	 *
	 * @param {!Node} node An HTML node, typically an HTMLElement or Text.
	 * @param {?string} nodeName The nodeName for this node.
	 * @param {?string=} key An optional key that identifies a node.
	 * @return {boolean} True if the node matches, false otherwise.
	 */
	var matches = function (node, nodeName, key) {
	  var data = getData(node);

	  // Key check is done using double equals as we want to treat a null key the
	  // same as undefined. This should be okay as the only values allowed are
	  // strings, null and undefined so the == semantics are not too weird.
	  return key == data.key && nodeName === data.nodeName;
	};

	/**
	 * Aligns the virtual Element definition with the actual DOM, moving the
	 * corresponding DOM node to the correct location or creating it if necessary.
	 * @param {string} nodeName For an Element, this should be a valid tag string.
	 *     For a Text, this should be #text.
	 * @param {?string=} key The key used to identify this element.
	 * @param {?Array<*>=} statics For an Element, this should be an array of
	 *     name-value pairs.
	 * @return {!Node} The matching node.
	 */
	var alignWithDOM = function (nodeName, key, statics) {
	  var context = getContext();
	  var walker = context.walker;
	  var currentNode = walker.currentNode;
	  var parent = walker.getCurrentParent();
	  var matchingNode;

	  // Check to see if we have a node to reuse
	  if (currentNode && matches(currentNode, nodeName, key)) {
	    matchingNode = currentNode;
	  } else {
	    var existingNode = getChild(parent, key);

	    // Check to see if the node has moved within the parent or if a new one
	    // should be created
	    if (existingNode) {
	      if (process.env.NODE_ENV !== 'production') {
	        assertKeyedTagMatches(existingNode, nodeName, key);
	      }

	      matchingNode = existingNode;
	    } else {
	      matchingNode = createNode(context.doc, nodeName, key, statics);

	      if (key) {
	        registerChild(parent, key, matchingNode);
	      }

	      context.markCreated(matchingNode);
	    }

	    // If the node has a key, remove it from the DOM to prevent a large number
	    // of re-orders in the case that it moved far or was completely removed.
	    // Since we hold on to a reference through the keyMap, we can always add it
	    // back.
	    if (currentNode && getData(currentNode).key) {
	      parent.replaceChild(matchingNode, currentNode);
	      getData(parent).keyMapValid = false;
	    } else {
	      parent.insertBefore(matchingNode, currentNode);
	    }

	    walker.currentNode = matchingNode;
	  }

	  return matchingNode;
	};

	/**
	 * Clears out any unvisited Nodes, as the corresponding virtual element
	 * functions were never called for them.
	 * @param {Node} node
	 */
	var clearUnvisitedDOM = function (node) {
	  var context = getContext();
	  var walker = context.walker;
	  var data = getData(node);
	  var keyMap = data.keyMap;
	  var keyMapValid = data.keyMapValid;
	  var lastVisitedChild = data.lastVisitedChild;
	  var child = node.lastChild;
	  var key;

	  data.lastVisitedChild = null;

	  if (child === lastVisitedChild && keyMapValid) {
	    return;
	  }

	  if (data.attrs[exports.symbols.placeholder] && walker.currentNode !== walker.root) {
	    return;
	  }

	  while (child !== lastVisitedChild) {
	    node.removeChild(child);
	    context.markDeleted( /** @type {!Node}*/child);

	    key = getData(child).key;
	    if (key) {
	      delete keyMap[key];
	    }
	    child = node.lastChild;
	  }

	  // Clean the keyMap, removing any unusued keys.
	  for (key in keyMap) {
	    child = keyMap[key];
	    if (!child.parentNode) {
	      context.markDeleted(child);
	      delete keyMap[key];
	    }
	  }

	  data.keyMapValid = true;
	};

	/**
	 * Enters an Element, setting the current namespace for nested elements.
	 * @param {Node} node
	 */
	var enterNode = function (node) {
	  var data = getData(node);
	  enterTag(data.nodeName);
	};

	/**
	 * Exits an Element, unwinding the current namespace to the previous value.
	 * @param {Node} node
	 */
	var exitNode = function (node) {
	  var data = getData(node);
	  exitTag(data.nodeName);
	};

	/**
	 * Marks node's parent as having visited node.
	 * @param {Node} node
	 */
	var markVisited = function (node) {
	  var context = getContext();
	  var walker = context.walker;
	  var parent = walker.getCurrentParent();
	  var data = getData(parent);
	  data.lastVisitedChild = node;
	};

	/**
	 * Changes to the first child of the current node.
	 */
	var firstChild = function () {
	  var context = getContext();
	  var walker = context.walker;
	  enterNode(walker.currentNode);
	  walker.firstChild();
	};

	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextSibling = function () {
	  var context = getContext();
	  var walker = context.walker;
	  markVisited(walker.currentNode);
	  walker.nextSibling();
	};

	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var parentNode = function () {
	  var context = getContext();
	  var walker = context.walker;
	  walker.parentNode();
	  exitNode(walker.currentNode);
	};

	if (process.env.NODE_ENV !== 'production') {
	  var assertNoUnclosedTags = function (root) {
	    var openElement = getContext().walker.getCurrentParent();
	    if (!openElement) {
	      return;
	    }

	    var openTags = [];
	    while (openElement && openElement !== root) {
	      openTags.push(openElement.nodeName.toLowerCase());
	      openElement = openElement.parentNode;
	    }

	    throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
	  };
	}

	/**
	 * Patches the document starting at el with the provided function. This function
	 * may be called during an existing patch operation.
	 * @param {!Element|!DocumentFragment} node The Element or Document
	 *     to patch.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	exports.patch = function (node, fn, data) {
	  enterContext(node);

	  firstChild();
	  fn(data);
	  parentNode();
	  clearUnvisitedDOM(node);

	  if (process.env.NODE_ENV !== 'production') {
	    assertNoUnclosedTags(node);
	  }

	  getContext().notifyChanges();
	  restoreContext();
	};

	/**
	 * The offset in the virtual element declaration where the attributes are
	 * specified.
	 * @const
	 */
	var ATTRIBUTES_OFFSET = 3;

	/**
	 * Builds an array of arguments for use with elementOpenStart, attr and
	 * elementOpenEnd.
	 * @const {Array<*>}
	 */
	var argsBuilder = [];

	if (process.env.NODE_ENV !== 'production') {
	  /**
	   * Keeps track whether or not we are in an attributes declaration (after
	   * elementOpenStart, but before elementOpenEnd).
	   * @type {boolean}
	   */
	  var inAttributes = false;

	  /** Makes sure that the caller is not where attributes are expected. */
	  var assertNotInAttributes = function () {
	    if (inAttributes) {
	      throw new Error('Was not expecting a call to attr or elementOpenEnd, ' + 'they must follow a call to elementOpenStart.');
	    }
	  };

	  /** Makes sure that the caller is where attributes are expected. */
	  var assertInAttributes = function () {
	    if (!inAttributes) {
	      throw new Error('Was expecting a call to attr or elementOpenEnd. ' + 'elementOpenStart must be followed by zero or more calls to attr, ' + 'then one call to elementOpenEnd.');
	    }
	  };

	  /**
	   * Makes sure that placeholders have a key specified. Otherwise, conditional
	   * placeholders and conditional elements next to placeholders will cause
	   * placeholder elements to be re-used as non-placeholders and vice versa.
	   * @param {string} key
	   */
	  var assertPlaceholderKeySpecified = function (key) {
	    if (!key) {
	      throw new Error('Placeholder elements must have a key specified.');
	    }
	  };

	  /**
	   * Makes sure that tags are correctly nested.
	   * @param {string} tag
	   */
	  var assertCloseMatchesOpenTag = function (tag) {
	    var context = getContext();
	    var walker = context.walker;
	    var closingNode = walker.getCurrentParent();
	    var data = getData(closingNode);

	    if (tag !== data.nodeName) {
	      throw new Error('Received a call to close ' + tag + ' but ' + data.nodeName + ' was open.');
	    }
	  };

	  /** Updates the state to being in an attribute declaration. */
	  var setInAttributes = function () {
	    inAttributes = true;
	  };

	  /** Updates the state to not being in an attribute declaration. */
	  var setNotInAttributes = function () {
	    inAttributes = false;
	  };
	}

	/**
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	exports.elementOpen = function (tag, key, statics, var_args) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes();
	  }

	  var node = /** @type {!Element}*/alignWithDOM(tag, key, statics);
	  var data = getData(node);

	  /*
	   * Checks to see if one or more attributes have changed for a given Element.
	   * When no attributes have changed, this is much faster than checking each
	   * individual argument. When attributes have changed, the overhead of this is
	   * minimal.
	   */
	  var attrsArr = data.attrsArr;
	  var attrsChanged = false;
	  var i = ATTRIBUTES_OFFSET;
	  var j = 0;

	  for (; i < arguments.length; i += 1, j += 1) {
	    if (attrsArr[j] !== arguments[i]) {
	      attrsChanged = true;
	      break;
	    }
	  }

	  for (; i < arguments.length; i += 1, j += 1) {
	    attrsArr[j] = arguments[i];
	  }

	  if (j < attrsArr.length) {
	    attrsChanged = true;
	    attrsArr.length = j;
	  }

	  /*
	   * Actually perform the attribute update.
	   */
	  if (attrsChanged) {
	    var attr,
	        newAttrs = data.newAttrs;

	    for (attr in newAttrs) {
	      newAttrs[attr] = undefined;
	    }

	    for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
	      newAttrs[arguments[i]] = arguments[i + 1];
	    }

	    for (attr in newAttrs) {
	      updateAttribute(node, attr, newAttrs[attr]);
	    }
	  }

	  firstChild();
	  return node;
	};

	/**
	 * Declares a virtual Element at the current location in the document. This
	 * corresponds to an opening tag and a elementClose tag is required. This is
	 * like elementOpen, but the attributes are defined using the attr function
	 * rather than being passed as arguments. Must be folllowed by 0 or more calls
	 * to attr, then a call to elementOpenEnd.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 */
	exports.elementOpenStart = function (tag, key, statics) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes();
	    setInAttributes();
	  }

	  argsBuilder[0] = tag;
	  argsBuilder[1] = key;
	  argsBuilder[2] = statics;
	};

	/***
	 * Defines a virtual attribute at this point of the DOM. This is only valid
	 * when called between elementOpenStart and elementOpenEnd.
	 *
	 * @param {string} name
	 * @param {*} value
	 */
	exports.attr = function (name, value) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertInAttributes();
	  }

	  argsBuilder.push(name, value);
	};

	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	exports.elementOpenEnd = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    assertInAttributes();
	    setNotInAttributes();
	  }

	  var node = exports.elementOpen.apply(null, argsBuilder);
	  argsBuilder.length = 0;
	  return node;
	};

	/**
	 * Closes an open virtual Element.
	 *
	 * @param {string} tag The element's tag.
	 * @return {!Element} The corresponding Element.
	 */
	exports.elementClose = function (tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes();
	    assertCloseMatchesOpenTag(tag);
	  }

	  parentNode();

	  var node = /** @type {!Element} */getContext().walker.currentNode;

	  clearUnvisitedDOM(node);

	  nextSibling();
	  return node;
	};

	/**
	 * Declares a virtual Element at the current location in the document that has
	 * no children.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	exports.elementVoid = function (tag, key, statics, var_args) {
	  var node = exports.elementOpen.apply(null, arguments);
	  exports.elementClose.apply(null, arguments);
	  return node;
	};

	/**
	 * Declares a virtual Element at the current location in the document that is a
	 * placeholder element. Children of this Element can be manually managed and
	 * will not be cleared by the library.
	 *
	 * A key must be specified to make sure that this node is correctly preserved
	 * across all conditionals.
	 *
	 * @param {string} tag The element's tag.
	 * @param {string} key The key used to identify this element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	exports.elementPlaceholder = function (tag, key, statics, var_args) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertPlaceholderKeySpecified(key);
	  }

	  var node = exports.elementOpen.apply(null, arguments);
	  updateAttribute(node, exports.symbols.placeholder, true);
	  exports.elementClose.apply(null, arguments);
	  return node;
	};

	/**
	 * Declares a virtual Text at this point in the document.
	 *
	 * @param {string|number|boolean} value The value of the Text.
	 * @param {...(function((string|number|boolean)):string)} var_args
	 *     Functions to format the value which are called only when the value has
	 *     changed.
	 * @return {!Text} The corresponding text node.
	 */
	exports.text = function (value, var_args) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes();
	  }

	  var node = /** @type {!Text}*/alignWithDOM('#text', null);
	  var data = getData(node);

	  if (data.text !== value) {
	    data.text = /** @type {string} */value;

	    var formatted = value;
	    for (var i = 1; i < arguments.length; i += 1) {
	      formatted = arguments[i](formatted);
	    }

	    node.data = formatted;
	  }

	  nextSibling();
	  return node;
	};
	//# sourceMappingURL=incremental-dom-cjs.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	  Copyright (c) jQuery Foundation, Inc. and Contributors, All Rights Reserved.

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (root, factory) {
	    'use strict';

	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
	    // Rhino, and plain browser loading.

	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        factory(exports);
	    } else {
	        factory((root.esprima = {}));
	    }
	}(this, function (exports) {
	    'use strict';

	    var Token,
	        TokenName,
	        FnExprTokens,
	        Syntax,
	        PlaceHolders,
	        Messages,
	        Regex,
	        source,
	        strict,
	        index,
	        lineNumber,
	        lineStart,
	        hasLineTerminator,
	        lastIndex,
	        lastLineNumber,
	        lastLineStart,
	        startIndex,
	        startLineNumber,
	        startLineStart,
	        scanning,
	        length,
	        lookahead,
	        state,
	        extra,
	        isBindingElement,
	        isAssignmentTarget,
	        firstCoverInitializedNameError;

	    Token = {
	        BooleanLiteral: 1,
	        EOF: 2,
	        Identifier: 3,
	        Keyword: 4,
	        NullLiteral: 5,
	        NumericLiteral: 6,
	        Punctuator: 7,
	        StringLiteral: 8,
	        RegularExpression: 9,
	        Template: 10
	    };

	    TokenName = {};
	    TokenName[Token.BooleanLiteral] = 'Boolean';
	    TokenName[Token.EOF] = '<end>';
	    TokenName[Token.Identifier] = 'Identifier';
	    TokenName[Token.Keyword] = 'Keyword';
	    TokenName[Token.NullLiteral] = 'Null';
	    TokenName[Token.NumericLiteral] = 'Numeric';
	    TokenName[Token.Punctuator] = 'Punctuator';
	    TokenName[Token.StringLiteral] = 'String';
	    TokenName[Token.RegularExpression] = 'RegularExpression';
	    TokenName[Token.Template] = 'Template';

	    // A function following one of those tokens is an expression.
	    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
	                    'return', 'case', 'delete', 'throw', 'void',
	                    // assignment operators
	                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
	                    '&=', '|=', '^=', ',',
	                    // binary/unary operators
	                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
	                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
	                    '<=', '<', '>', '!=', '!=='];

	    Syntax = {
	        AssignmentExpression: 'AssignmentExpression',
	        AssignmentPattern: 'AssignmentPattern',
	        ArrayExpression: 'ArrayExpression',
	        ArrayPattern: 'ArrayPattern',
	        ArrowFunctionExpression: 'ArrowFunctionExpression',
	        BlockStatement: 'BlockStatement',
	        BinaryExpression: 'BinaryExpression',
	        BreakStatement: 'BreakStatement',
	        CallExpression: 'CallExpression',
	        CatchClause: 'CatchClause',
	        ClassBody: 'ClassBody',
	        ClassDeclaration: 'ClassDeclaration',
	        ClassExpression: 'ClassExpression',
	        ConditionalExpression: 'ConditionalExpression',
	        ContinueStatement: 'ContinueStatement',
	        DoWhileStatement: 'DoWhileStatement',
	        DebuggerStatement: 'DebuggerStatement',
	        EmptyStatement: 'EmptyStatement',
	        ExportAllDeclaration: 'ExportAllDeclaration',
	        ExportDefaultDeclaration: 'ExportDefaultDeclaration',
	        ExportNamedDeclaration: 'ExportNamedDeclaration',
	        ExportSpecifier: 'ExportSpecifier',
	        ExpressionStatement: 'ExpressionStatement',
	        ForStatement: 'ForStatement',
	        ForOfStatement: 'ForOfStatement',
	        ForInStatement: 'ForInStatement',
	        FunctionDeclaration: 'FunctionDeclaration',
	        FunctionExpression: 'FunctionExpression',
	        Identifier: 'Identifier',
	        IfStatement: 'IfStatement',
	        ImportDeclaration: 'ImportDeclaration',
	        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
	        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
	        ImportSpecifier: 'ImportSpecifier',
	        Literal: 'Literal',
	        LabeledStatement: 'LabeledStatement',
	        LogicalExpression: 'LogicalExpression',
	        MemberExpression: 'MemberExpression',
	        MetaProperty: 'MetaProperty',
	        MethodDefinition: 'MethodDefinition',
	        NewExpression: 'NewExpression',
	        ObjectExpression: 'ObjectExpression',
	        ObjectPattern: 'ObjectPattern',
	        Program: 'Program',
	        Property: 'Property',
	        RestElement: 'RestElement',
	        ReturnStatement: 'ReturnStatement',
	        SequenceExpression: 'SequenceExpression',
	        SpreadElement: 'SpreadElement',
	        Super: 'Super',
	        SwitchCase: 'SwitchCase',
	        SwitchStatement: 'SwitchStatement',
	        TaggedTemplateExpression: 'TaggedTemplateExpression',
	        TemplateElement: 'TemplateElement',
	        TemplateLiteral: 'TemplateLiteral',
	        ThisExpression: 'ThisExpression',
	        ThrowStatement: 'ThrowStatement',
	        TryStatement: 'TryStatement',
	        UnaryExpression: 'UnaryExpression',
	        UpdateExpression: 'UpdateExpression',
	        VariableDeclaration: 'VariableDeclaration',
	        VariableDeclarator: 'VariableDeclarator',
	        WhileStatement: 'WhileStatement',
	        WithStatement: 'WithStatement',
	        YieldExpression: 'YieldExpression'
	    };

	    PlaceHolders = {
	        ArrowParameterPlaceHolder: 'ArrowParameterPlaceHolder'
	    };

	    // Error messages should be identical to V8.
	    Messages = {
	        UnexpectedToken: 'Unexpected token %0',
	        UnexpectedNumber: 'Unexpected number',
	        UnexpectedString: 'Unexpected string',
	        UnexpectedIdentifier: 'Unexpected identifier',
	        UnexpectedReserved: 'Unexpected reserved word',
	        UnexpectedTemplate: 'Unexpected quasi %0',
	        UnexpectedEOS: 'Unexpected end of input',
	        NewlineAfterThrow: 'Illegal newline after throw',
	        InvalidRegExp: 'Invalid regular expression',
	        UnterminatedRegExp: 'Invalid regular expression: missing /',
	        InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
	        InvalidLHSInForIn: 'Invalid left-hand side in for-in',
	        InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
	        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
	        NoCatchOrFinally: 'Missing catch or finally after try',
	        UnknownLabel: 'Undefined label \'%0\'',
	        Redeclaration: '%0 \'%1\' has already been declared',
	        IllegalContinue: 'Illegal continue statement',
	        IllegalBreak: 'Illegal break statement',
	        IllegalReturn: 'Illegal return statement',
	        StrictModeWith: 'Strict mode code may not include a with statement',
	        StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
	        StrictVarName: 'Variable name may not be eval or arguments in strict mode',
	        StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
	        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
	        StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
	        StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
	        StrictDelete: 'Delete of an unqualified identifier in strict mode.',
	        StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
	        StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
	        StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
	        StrictReservedWord: 'Use of future reserved word in strict mode',
	        TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
	        ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
	        DefaultRestParameter: 'Unexpected token =',
	        ObjectPatternAsRestParameter: 'Unexpected token {',
	        DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
	        ConstructorSpecialMethod: 'Class constructor may not be an accessor',
	        DuplicateConstructor: 'A class may only have one constructor',
	        StaticPrototype: 'Classes may not have static property named prototype',
	        MissingFromClause: 'Unexpected token',
	        NoAsAfterImportNamespace: 'Unexpected token',
	        InvalidModuleSpecifier: 'Unexpected token',
	        IllegalImportDeclaration: 'Unexpected token',
	        IllegalExportDeclaration: 'Unexpected token',
	        DuplicateBinding: 'Duplicate binding %0'
	    };

	    // See also tools/generate-unicode-regex.js.
	    Regex = {
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,

	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	    };

	    // Ensure the condition is true, otherwise throw an error.
	    // This is only to have a better contract semantic, i.e. another safety net
	    // to catch a logic error. The condition shall be fulfilled in normal case.
	    // Do NOT use this to enforce a certain condition on any user input.

	    function assert(condition, message) {
	        /* istanbul ignore if */
	        if (!condition) {
	            throw new Error('ASSERT: ' + message);
	        }
	    }

	    function isDecimalDigit(ch) {
	        return (ch >= 0x30 && ch <= 0x39);   // 0..9
	    }

	    function isHexDigit(ch) {
	        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
	    }

	    function isOctalDigit(ch) {
	        return '01234567'.indexOf(ch) >= 0;
	    }

	    function octalToDecimal(ch) {
	        // \0 is not octal escape sequence
	        var octal = (ch !== '0'), code = '01234567'.indexOf(ch);

	        if (index < length && isOctalDigit(source[index])) {
	            octal = true;
	            code = code * 8 + '01234567'.indexOf(source[index++]);

	            // 3 digits are only allowed when string starts
	            // with 0, 1, 2, 3
	            if ('0123'.indexOf(ch) >= 0 &&
	                    index < length &&
	                    isOctalDigit(source[index])) {
	                code = code * 8 + '01234567'.indexOf(source[index++]);
	            }
	        }

	        return {
	            code: code,
	            octal: octal
	        };
	    }

	    // ECMA-262 11.2 White Space

	    function isWhiteSpace(ch) {
	        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
	            (ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
	    }

	    // ECMA-262 11.3 Line Terminators

	    function isLineTerminator(ch) {
	        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
	    }

	    // ECMA-262 11.6 Identifier Names and Identifiers

	    function fromCodePoint(cp) {
	        return (cp < 0x10000) ? String.fromCharCode(cp) :
	            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
	            String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
	    }

	    function isIdentifierStart(ch) {
	        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
	            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
	            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
	            (ch === 0x5C) ||                      // \ (backslash)
	            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch)));
	    }

	    function isIdentifierPart(ch) {
	        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
	            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
	            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
	            (ch >= 0x30 && ch <= 0x39) ||         // 0..9
	            (ch === 0x5C) ||                      // \ (backslash)
	            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch)));
	    }

	    // ECMA-262 11.6.2.2 Future Reserved Words

	    function isFutureReservedWord(id) {
	        switch (id) {
	        case 'enum':
	        case 'export':
	        case 'import':
	        case 'super':
	            return true;
	        default:
	            return false;
	        }
	    }

	    function isStrictModeReservedWord(id) {
	        switch (id) {
	        case 'implements':
	        case 'interface':
	        case 'package':
	        case 'private':
	        case 'protected':
	        case 'public':
	        case 'static':
	        case 'yield':
	        case 'let':
	            return true;
	        default:
	            return false;
	        }
	    }

	    function isRestrictedWord(id) {
	        return id === 'eval' || id === 'arguments';
	    }

	    // ECMA-262 11.6.2.1 Keywords

	    function isKeyword(id) {
	        switch (id.length) {
	        case 2:
	            return (id === 'if') || (id === 'in') || (id === 'do');
	        case 3:
	            return (id === 'var') || (id === 'for') || (id === 'new') ||
	                (id === 'try') || (id === 'let');
	        case 4:
	            return (id === 'this') || (id === 'else') || (id === 'case') ||
	                (id === 'void') || (id === 'with') || (id === 'enum');
	        case 5:
	            return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                (id === 'class') || (id === 'super');
	        case 6:
	            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                (id === 'switch') || (id === 'export') || (id === 'import');
	        case 7:
	            return (id === 'default') || (id === 'finally') || (id === 'extends');
	        case 8:
	            return (id === 'function') || (id === 'continue') || (id === 'debugger');
	        case 10:
	            return (id === 'instanceof');
	        default:
	            return false;
	        }
	    }

	    // ECMA-262 11.4 Comments

	    function addComment(type, value, start, end, loc) {
	        var comment;

	        assert(typeof start === 'number', 'Comment must have valid position');

	        state.lastCommentStart = start;

	        comment = {
	            type: type,
	            value: value
	        };
	        if (extra.range) {
	            comment.range = [start, end];
	        }
	        if (extra.loc) {
	            comment.loc = loc;
	        }
	        extra.comments.push(comment);
	        if (extra.attachComment) {
	            extra.leadingComments.push(comment);
	            extra.trailingComments.push(comment);
	        }
	        if (extra.tokenize) {
	            comment.type = comment.type + 'Comment';
	            if (extra.delegate) {
	                comment = extra.delegate(comment);
	            }
	            extra.tokens.push(comment);
	        }
	    }

	    function skipSingleLineComment(offset) {
	        var start, loc, ch, comment;

	        start = index - offset;
	        loc = {
	            start: {
	                line: lineNumber,
	                column: index - lineStart - offset
	            }
	        };

	        while (index < length) {
	            ch = source.charCodeAt(index);
	            ++index;
	            if (isLineTerminator(ch)) {
	                hasLineTerminator = true;
	                if (extra.comments) {
	                    comment = source.slice(start + offset, index - 1);
	                    loc.end = {
	                        line: lineNumber,
	                        column: index - lineStart - 1
	                    };
	                    addComment('Line', comment, start, index - 1, loc);
	                }
	                if (ch === 13 && source.charCodeAt(index) === 10) {
	                    ++index;
	                }
	                ++lineNumber;
	                lineStart = index;
	                return;
	            }
	        }

	        if (extra.comments) {
	            comment = source.slice(start + offset, index);
	            loc.end = {
	                line: lineNumber,
	                column: index - lineStart
	            };
	            addComment('Line', comment, start, index, loc);
	        }
	    }

	    function skipMultiLineComment() {
	        var start, loc, ch, comment;

	        if (extra.comments) {
	            start = index - 2;
	            loc = {
	                start: {
	                    line: lineNumber,
	                    column: index - lineStart - 2
	                }
	            };
	        }

	        while (index < length) {
	            ch = source.charCodeAt(index);
	            if (isLineTerminator(ch)) {
	                if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
	                    ++index;
	                }
	                hasLineTerminator = true;
	                ++lineNumber;
	                ++index;
	                lineStart = index;
	            } else if (ch === 0x2A) {
	                // Block comment ends with '*/'.
	                if (source.charCodeAt(index + 1) === 0x2F) {
	                    ++index;
	                    ++index;
	                    if (extra.comments) {
	                        comment = source.slice(start + 2, index - 2);
	                        loc.end = {
	                            line: lineNumber,
	                            column: index - lineStart
	                        };
	                        addComment('Block', comment, start, index, loc);
	                    }
	                    return;
	                }
	                ++index;
	            } else {
	                ++index;
	            }
	        }

	        // Ran off the end of the file - the whole thing is a comment
	        if (extra.comments) {
	            loc.end = {
	                line: lineNumber,
	                column: index - lineStart
	            };
	            comment = source.slice(start + 2, index);
	            addComment('Block', comment, start, index, loc);
	        }
	        tolerateUnexpectedToken();
	    }

	    function skipComment() {
	        var ch, start;
	        hasLineTerminator = false;

	        start = (index === 0);
	        while (index < length) {
	            ch = source.charCodeAt(index);

	            if (isWhiteSpace(ch)) {
	                ++index;
	            } else if (isLineTerminator(ch)) {
	                hasLineTerminator = true;
	                ++index;
	                if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
	                    ++index;
	                }
	                ++lineNumber;
	                lineStart = index;
	                start = true;
	            } else if (ch === 0x2F) { // U+002F is '/'
	                ch = source.charCodeAt(index + 1);
	                if (ch === 0x2F) {
	                    ++index;
	                    ++index;
	                    skipSingleLineComment(2);
	                    start = true;
	                } else if (ch === 0x2A) {  // U+002A is '*'
	                    ++index;
	                    ++index;
	                    skipMultiLineComment();
	                } else {
	                    break;
	                }
	            } else if (start && ch === 0x2D) { // U+002D is '-'
	                // U+003E is '>'
	                if ((source.charCodeAt(index + 1) === 0x2D) && (source.charCodeAt(index + 2) === 0x3E)) {
	                    // '-->' is a single-line comment
	                    index += 3;
	                    skipSingleLineComment(3);
	                } else {
	                    break;
	                }
	            } else if (ch === 0x3C) { // U+003C is '<'
	                if (source.slice(index + 1, index + 4) === '!--') {
	                    ++index; // `<`
	                    ++index; // `!`
	                    ++index; // `-`
	                    ++index; // `-`
	                    skipSingleLineComment(4);
	                } else {
	                    break;
	                }
	            } else {
	                break;
	            }
	        }
	    }

	    function scanHexEscape(prefix) {
	        var i, len, ch, code = 0;

	        len = (prefix === 'u') ? 4 : 2;
	        for (i = 0; i < len; ++i) {
	            if (index < length && isHexDigit(source[index])) {
	                ch = source[index++];
	                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
	            } else {
	                return '';
	            }
	        }
	        return String.fromCharCode(code);
	    }

	    function scanUnicodeCodePointEscape() {
	        var ch, code;

	        ch = source[index];
	        code = 0;

	        // At least, one hex digit is required.
	        if (ch === '}') {
	            throwUnexpectedToken();
	        }

	        while (index < length) {
	            ch = source[index++];
	            if (!isHexDigit(ch)) {
	                break;
	            }
	            code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
	        }

	        if (code > 0x10FFFF || ch !== '}') {
	            throwUnexpectedToken();
	        }

	        return fromCodePoint(code);
	    }

	    function codePointAt(i) {
	        var cp, first, second;

	        cp = source.charCodeAt(i);
	        if (cp >= 0xD800 && cp <= 0xDBFF) {
	            second = source.charCodeAt(i + 1);
	            if (second >= 0xDC00 && second <= 0xDFFF) {
	                first = cp;
	                cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	            }
	        }

	        return cp;
	    }

	    function getComplexIdentifier() {
	        var cp, ch, id;

	        cp = codePointAt(index);
	        id = fromCodePoint(cp);
	        index += id.length;

	        // '\u' (U+005C, U+0075) denotes an escaped character.
	        if (cp === 0x5C) {
	            if (source.charCodeAt(index) !== 0x75) {
	                throwUnexpectedToken();
	            }
	            ++index;
	            if (source[index] === '{') {
	                ++index;
	                ch = scanUnicodeCodePointEscape();
	            } else {
	                ch = scanHexEscape('u');
	                cp = ch.charCodeAt(0);
	                if (!ch || ch === '\\' || !isIdentifierStart(cp)) {
	                    throwUnexpectedToken();
	                }
	            }
	            id = ch;
	        }

	        while (index < length) {
	            cp = codePointAt(index);
	            if (!isIdentifierPart(cp)) {
	                break;
	            }
	            ch = fromCodePoint(cp);
	            id += ch;
	            index += ch.length;

	            // '\u' (U+005C, U+0075) denotes an escaped character.
	            if (cp === 0x5C) {
	                id = id.substr(0, id.length - 1);
	                if (source.charCodeAt(index) !== 0x75) {
	                    throwUnexpectedToken();
	                }
	                ++index;
	                if (source[index] === '{') {
	                    ++index;
	                    ch = scanUnicodeCodePointEscape();
	                } else {
	                    ch = scanHexEscape('u');
	                    cp = ch.charCodeAt(0);
	                    if (!ch || ch === '\\' || !isIdentifierPart(cp)) {
	                        throwUnexpectedToken();
	                    }
	                }
	                id += ch;
	            }
	        }

	        return id;
	    }

	    function getIdentifier() {
	        var start, ch;

	        start = index++;
	        while (index < length) {
	            ch = source.charCodeAt(index);
	            if (ch === 0x5C) {
	                // Blackslash (U+005C) marks Unicode escape sequence.
	                index = start;
	                return getComplexIdentifier();
	            } else if (ch >= 0xD800 && ch < 0xDFFF) {
	                // Need to handle surrogate pairs.
	                index = start;
	                return getComplexIdentifier();
	            }
	            if (isIdentifierPart(ch)) {
	                ++index;
	            } else {
	                break;
	            }
	        }

	        return source.slice(start, index);
	    }

	    function scanIdentifier() {
	        var start, id, type;

	        start = index;

	        // Backslash (U+005C) starts an escaped character.
	        id = (source.charCodeAt(index) === 0x5C) ? getComplexIdentifier() : getIdentifier();

	        // There is no keyword or literal with only one character.
	        // Thus, it must be an identifier.
	        if (id.length === 1) {
	            type = Token.Identifier;
	        } else if (isKeyword(id)) {
	            type = Token.Keyword;
	        } else if (id === 'null') {
	            type = Token.NullLiteral;
	        } else if (id === 'true' || id === 'false') {
	            type = Token.BooleanLiteral;
	        } else {
	            type = Token.Identifier;
	        }

	        return {
	            type: type,
	            value: id,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: start,
	            end: index
	        };
	    }


	    // ECMA-262 11.7 Punctuators

	    function scanPunctuator() {
	        var token, str;

	        token = {
	            type: Token.Punctuator,
	            value: '',
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: index,
	            end: index
	        };

	        // Check for most common single-character punctuators.
	        str = source[index];
	        switch (str) {

	        case '(':
	            if (extra.tokenize) {
	                extra.openParenToken = extra.tokenValues.length;
	            }
	            ++index;
	            break;

	        case '{':
	            if (extra.tokenize) {
	                extra.openCurlyToken = extra.tokenValues.length;
	            }
	            state.curlyStack.push('{');
	            ++index;
	            break;

	        case '.':
	            ++index;
	            if (source[index] === '.' && source[index + 1] === '.') {
	                // Spread operator: ...
	                index += 2;
	                str = '...';
	            }
	            break;

	        case '}':
	            ++index;
	            state.curlyStack.pop();
	            break;
	        case ')':
	        case ';':
	        case ',':
	        case '[':
	        case ']':
	        case ':':
	        case '?':
	        case '~':
	            ++index;
	            break;

	        default:
	            // 4-character punctuator.
	            str = source.substr(index, 4);
	            if (str === '>>>=') {
	                index += 4;
	            } else {

	                // 3-character punctuators.
	                str = str.substr(0, 3);
	                if (str === '===' || str === '!==' || str === '>>>' ||
	                    str === '<<=' || str === '>>=') {
	                    index += 3;
	                } else {

	                    // 2-character punctuators.
	                    str = str.substr(0, 2);
	                    if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
	                        str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
	                        str === '++' || str === '--' || str === '<<' || str === '>>' ||
	                        str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
	                        str === '<=' || str === '>=' || str === '=>') {
	                        index += 2;
	                    } else {

	                        // 1-character punctuators.
	                        str = source[index];
	                        if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
	                            ++index;
	                        }
	                    }
	                }
	            }
	        }

	        if (index === token.start) {
	            throwUnexpectedToken();
	        }

	        token.end = index;
	        token.value = str;
	        return token;
	    }

	    // ECMA-262 11.8.3 Numeric Literals

	    function scanHexLiteral(start) {
	        var number = '';

	        while (index < length) {
	            if (!isHexDigit(source[index])) {
	                break;
	            }
	            number += source[index++];
	        }

	        if (number.length === 0) {
	            throwUnexpectedToken();
	        }

	        if (isIdentifierStart(source.charCodeAt(index))) {
	            throwUnexpectedToken();
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseInt('0x' + number, 16),
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: start,
	            end: index
	        };
	    }

	    function scanBinaryLiteral(start) {
	        var ch, number;

	        number = '';

	        while (index < length) {
	            ch = source[index];
	            if (ch !== '0' && ch !== '1') {
	                break;
	            }
	            number += source[index++];
	        }

	        if (number.length === 0) {
	            // only 0b or 0B
	            throwUnexpectedToken();
	        }

	        if (index < length) {
	            ch = source.charCodeAt(index);
	            /* istanbul ignore else */
	            if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
	                throwUnexpectedToken();
	            }
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseInt(number, 2),
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: start,
	            end: index
	        };
	    }

	    function scanOctalLiteral(prefix, start) {
	        var number, octal;

	        if (isOctalDigit(prefix)) {
	            octal = true;
	            number = '0' + source[index++];
	        } else {
	            octal = false;
	            ++index;
	            number = '';
	        }

	        while (index < length) {
	            if (!isOctalDigit(source[index])) {
	                break;
	            }
	            number += source[index++];
	        }

	        if (!octal && number.length === 0) {
	            // only 0o or 0O
	            throwUnexpectedToken();
	        }

	        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
	            throwUnexpectedToken();
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseInt(number, 8),
	            octal: octal,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: start,
	            end: index
	        };
	    }

	    function isImplicitOctalLiteral() {
	        var i, ch;

	        // Implicit octal, unless there is a non-octal digit.
	        // (Annex B.1.1 on Numeric Literals)
	        for (i = index + 1; i < length; ++i) {
	            ch = source[i];
	            if (ch === '8' || ch === '9') {
	                return false;
	            }
	            if (!isOctalDigit(ch)) {
	                return true;
	            }
	        }

	        return true;
	    }

	    function scanNumericLiteral() {
	        var number, start, ch;

	        ch = source[index];
	        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
	            'Numeric literal must start with a decimal digit or a decimal point');

	        start = index;
	        number = '';
	        if (ch !== '.') {
	            number = source[index++];
	            ch = source[index];

	            // Hex number starts with '0x'.
	            // Octal number starts with '0'.
	            // Octal number in ES6 starts with '0o'.
	            // Binary number in ES6 starts with '0b'.
	            if (number === '0') {
	                if (ch === 'x' || ch === 'X') {
	                    ++index;
	                    return scanHexLiteral(start);
	                }
	                if (ch === 'b' || ch === 'B') {
	                    ++index;
	                    return scanBinaryLiteral(start);
	                }
	                if (ch === 'o' || ch === 'O') {
	                    return scanOctalLiteral(ch, start);
	                }

	                if (isOctalDigit(ch)) {
	                    if (isImplicitOctalLiteral()) {
	                        return scanOctalLiteral(ch, start);
	                    }
	                }
	            }

	            while (isDecimalDigit(source.charCodeAt(index))) {
	                number += source[index++];
	            }
	            ch = source[index];
	        }

	        if (ch === '.') {
	            number += source[index++];
	            while (isDecimalDigit(source.charCodeAt(index))) {
	                number += source[index++];
	            }
	            ch = source[index];
	        }

	        if (ch === 'e' || ch === 'E') {
	            number += source[index++];

	            ch = source[index];
	            if (ch === '+' || ch === '-') {
	                number += source[index++];
	            }
	            if (isDecimalDigit(source.charCodeAt(index))) {
	                while (isDecimalDigit(source.charCodeAt(index))) {
	                    number += source[index++];
	                }
	            } else {
	                throwUnexpectedToken();
	            }
	        }

	        if (isIdentifierStart(source.charCodeAt(index))) {
	            throwUnexpectedToken();
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseFloat(number),
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: start,
	            end: index
	        };
	    }

	    // ECMA-262 11.8.4 String Literals

	    function scanStringLiteral() {
	        var str = '', quote, start, ch, unescaped, octToDec, octal = false;

	        quote = source[index];
	        assert((quote === '\'' || quote === '"'),
	            'String literal must starts with a quote');

	        start = index;
	        ++index;

	        while (index < length) {
	            ch = source[index++];

	            if (ch === quote) {
	                quote = '';
	                break;
	            } else if (ch === '\\') {
	                ch = source[index++];
	                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                    case 'u':
	                    case 'x':
	                        if (source[index] === '{') {
	                            ++index;
	                            str += scanUnicodeCodePointEscape();
	                        } else {
	                            unescaped = scanHexEscape(ch);
	                            if (!unescaped) {
	                                throw throwUnexpectedToken();
	                            }
	                            str += unescaped;
	                        }
	                        break;
	                    case 'n':
	                        str += '\n';
	                        break;
	                    case 'r':
	                        str += '\r';
	                        break;
	                    case 't':
	                        str += '\t';
	                        break;
	                    case 'b':
	                        str += '\b';
	                        break;
	                    case 'f':
	                        str += '\f';
	                        break;
	                    case 'v':
	                        str += '\x0B';
	                        break;
	                    case '8':
	                    case '9':
	                        str += ch;
	                        tolerateUnexpectedToken();
	                        break;

	                    default:
	                        if (isOctalDigit(ch)) {
	                            octToDec = octalToDecimal(ch);

	                            octal = octToDec.octal || octal;
	                            str += String.fromCharCode(octToDec.code);
	                        } else {
	                            str += ch;
	                        }
	                        break;
	                    }
	                } else {
	                    ++lineNumber;
	                    if (ch === '\r' && source[index] === '\n') {
	                        ++index;
	                    }
	                    lineStart = index;
	                }
	            } else if (isLineTerminator(ch.charCodeAt(0))) {
	                break;
	            } else {
	                str += ch;
	            }
	        }

	        if (quote !== '') {
	            throwUnexpectedToken();
	        }

	        return {
	            type: Token.StringLiteral,
	            value: str,
	            octal: octal,
	            lineNumber: startLineNumber,
	            lineStart: startLineStart,
	            start: start,
	            end: index
	        };
	    }

	    // ECMA-262 11.8.6 Template Literal Lexical Components

	    function scanTemplate() {
	        var cooked = '', ch, start, rawOffset, terminated, head, tail, restore, unescaped;

	        terminated = false;
	        tail = false;
	        start = index;
	        head = (source[index] === '`');
	        rawOffset = 2;

	        ++index;

	        while (index < length) {
	            ch = source[index++];
	            if (ch === '`') {
	                rawOffset = 1;
	                tail = true;
	                terminated = true;
	                break;
	            } else if (ch === '$') {
	                if (source[index] === '{') {
	                    state.curlyStack.push('${');
	                    ++index;
	                    terminated = true;
	                    break;
	                }
	                cooked += ch;
	            } else if (ch === '\\') {
	                ch = source[index++];
	                if (!isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                    case 'n':
	                        cooked += '\n';
	                        break;
	                    case 'r':
	                        cooked += '\r';
	                        break;
	                    case 't':
	                        cooked += '\t';
	                        break;
	                    case 'u':
	                    case 'x':
	                        if (source[index] === '{') {
	                            ++index;
	                            cooked += scanUnicodeCodePointEscape();
	                        } else {
	                            restore = index;
	                            unescaped = scanHexEscape(ch);
	                            if (unescaped) {
	                                cooked += unescaped;
	                            } else {
	                                index = restore;
	                                cooked += ch;
	                            }
	                        }
	                        break;
	                    case 'b':
	                        cooked += '\b';
	                        break;
	                    case 'f':
	                        cooked += '\f';
	                        break;
	                    case 'v':
	                        cooked += '\v';
	                        break;

	                    default:
	                        if (ch === '0') {
	                            if (isDecimalDigit(source.charCodeAt(index))) {
	                                // Illegal: \01 \02 and so on
	                                throwError(Messages.TemplateOctalLiteral);
	                            }
	                            cooked += '\0';
	                        } else if (isOctalDigit(ch)) {
	                            // Illegal: \1 \2
	                            throwError(Messages.TemplateOctalLiteral);
	                        } else {
	                            cooked += ch;
	                        }
	                        break;
	                    }
	                } else {
	                    ++lineNumber;
	                    if (ch === '\r' && source[index] === '\n') {
	                        ++index;
	                    }
	                    lineStart = index;
	                }
	            } else if (isLineTerminator(ch.charCodeAt(0))) {
	                ++lineNumber;
	                if (ch === '\r' && source[index] === '\n') {
	                    ++index;
	                }
	                lineStart = index;
	                cooked += '\n';
	            } else {
	                cooked += ch;
	            }
	        }

	        if (!terminated) {
	            throwUnexpectedToken();
	        }

	        if (!head) {
	            state.curlyStack.pop();
	        }

	        return {
	            type: Token.Template,
	            value: {
	                cooked: cooked,
	                raw: source.slice(start + 1, index - rawOffset)
	            },
	            head: head,
	            tail: tail,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            start: start,
	            end: index
	        };
	    }

	    // ECMA-262 11.8.5 Regular Expression Literals

	    function testRegExp(pattern, flags) {
	        // The BMP character to use as a replacement for astral symbols when
	        // translating an ES6 "u"-flagged pattern to an ES5-compatible
	        // approximation.
	        // Note: replacing with '\uFFFF' enables false positives in unlikely
	        // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
	        // pattern that would not be detected by this substitution.
	        var astralSubstitute = '\uFFFF',
	            tmp = pattern;

	        if (flags.indexOf('u') >= 0) {
	            tmp = tmp
	                // Replace every Unicode escape sequence with the equivalent
	                // BMP character or a constant ASCII code point in the case of
	                // astral symbols. (See the above note on `astralSubstitute`
	                // for more information.)
	                .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
	                    var codePoint = parseInt($1 || $2, 16);
	                    if (codePoint > 0x10FFFF) {
	                        throwUnexpectedToken(null, Messages.InvalidRegExp);
	                    }
	                    if (codePoint <= 0xFFFF) {
	                        return String.fromCharCode(codePoint);
	                    }
	                    return astralSubstitute;
	                })
	                // Replace each paired surrogate with a single ASCII symbol to
	                // avoid throwing on regular expressions that are only valid in
	                // combination with the "u" flag.
	                .replace(
	                    /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	                    astralSubstitute
	                );
	        }

	        // First, detect invalid regular expressions.
	        try {
	            RegExp(tmp);
	        } catch (e) {
	            throwUnexpectedToken(null, Messages.InvalidRegExp);
	        }

	        // Return a regular expression object for this pattern-flag pair, or
	        // `null` in case the current environment doesn't support the flags it
	        // uses.
	        try {
	            return new RegExp(pattern, flags);
	        } catch (exception) {
	            return null;
	        }
	    }

	    function scanRegExpBody() {
	        var ch, str, classMarker, terminated, body;

	        ch = source[index];
	        assert(ch === '/', 'Regular expression literal must start with a slash');
	        str = source[index++];

	        classMarker = false;
	        terminated = false;
	        while (index < length) {
	            ch = source[index++];
	            str += ch;
	            if (ch === '\\') {
	                ch = source[index++];
	                // ECMA-262 7.8.5
	                if (isLineTerminator(ch.charCodeAt(0))) {
	                    throwUnexpectedToken(null, Messages.UnterminatedRegExp);
	                }
	                str += ch;
	            } else if (isLineTerminator(ch.charCodeAt(0))) {
	                throwUnexpectedToken(null, Messages.UnterminatedRegExp);
	            } else if (classMarker) {
	                if (ch === ']') {
	                    classMarker = false;
	                }
	            } else {
	                if (ch === '/') {
	                    terminated = true;
	                    break;
	                } else if (ch === '[') {
	                    classMarker = true;
	                }
	            }
	        }

	        if (!terminated) {
	            throwUnexpectedToken(null, Messages.UnterminatedRegExp);
	        }

	        // Exclude leading and trailing slash.
	        body = str.substr(1, str.length - 2);
	        return {
	            value: body,
	            literal: str
	        };
	    }

	    function scanRegExpFlags() {
	        var ch, str, flags, restore;

	        str = '';
	        flags = '';
	        while (index < length) {
	            ch = source[index];
	            if (!isIdentifierPart(ch.charCodeAt(0))) {
	                break;
	            }

	            ++index;
	            if (ch === '\\' && index < length) {
	                ch = source[index];
	                if (ch === 'u') {
	                    ++index;
	                    restore = index;
	                    ch = scanHexEscape('u');
	                    if (ch) {
	                        flags += ch;
	                        for (str += '\\u'; restore < index; ++restore) {
	                            str += source[restore];
	                        }
	                    } else {
	                        index = restore;
	                        flags += 'u';
	                        str += '\\u';
	                    }
	                    tolerateUnexpectedToken();
	                } else {
	                    str += '\\';
	                    tolerateUnexpectedToken();
	                }
	            } else {
	                flags += ch;
	                str += ch;
	            }
	        }

	        return {
	            value: flags,
	            literal: str
	        };
	    }

	    function scanRegExp() {
	        var start, body, flags, value;
	        scanning = true;

	        lookahead = null;
	        skipComment();
	        start = index;

	        body = scanRegExpBody();
	        flags = scanRegExpFlags();
	        value = testRegExp(body.value, flags.value);
	        scanning = false;
	        if (extra.tokenize) {
	            return {
	                type: Token.RegularExpression,
	                value: value,
	                regex: {
	                    pattern: body.value,
	                    flags: flags.value
	                },
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                start: start,
	                end: index
	            };
	        }

	        return {
	            literal: body.literal + flags.literal,
	            value: value,
	            regex: {
	                pattern: body.value,
	                flags: flags.value
	            },
	            start: start,
	            end: index
	        };
	    }

	    function collectRegex() {
	        var pos, loc, regex, token;

	        skipComment();

	        pos = index;
	        loc = {
	            start: {
	                line: lineNumber,
	                column: index - lineStart
	            }
	        };

	        regex = scanRegExp();

	        loc.end = {
	            line: lineNumber,
	            column: index - lineStart
	        };

	        /* istanbul ignore next */
	        if (!extra.tokenize) {
	            // Pop the previous token, which is likely '/' or '/='
	            if (extra.tokens.length > 0) {
	                token = extra.tokens[extra.tokens.length - 1];
	                if (token.range[0] === pos && token.type === 'Punctuator') {
	                    if (token.value === '/' || token.value === '/=') {
	                        extra.tokens.pop();
	                    }
	                }
	            }

	            extra.tokens.push({
	                type: 'RegularExpression',
	                value: regex.literal,
	                regex: regex.regex,
	                range: [pos, index],
	                loc: loc
	            });
	        }

	        return regex;
	    }

	    function isIdentifierName(token) {
	        return token.type === Token.Identifier ||
	            token.type === Token.Keyword ||
	            token.type === Token.BooleanLiteral ||
	            token.type === Token.NullLiteral;
	    }

	    // Using the following algorithm:
	    // https://github.com/mozilla/sweet.js/wiki/design

	    function advanceSlash() {
	        var regex, previous, check;

	        function testKeyword(value) {
	            return value && (value.length > 1) && (value[0] >= 'a') && (value[0] <= 'z');
	        }

	        previous = extra.tokenValues[extra.tokens.length - 1];
	        regex = (previous !== null);

	        switch (previous) {
	        case 'this':
	        case ']':
	            regex = false;
	            break;

	        case ')':
	            check = extra.tokenValues[extra.openParenToken - 1];
	            regex = (check === 'if' || check === 'while' || check === 'for' || check === 'with');
	            break;

	        case '}':
	            // Dividing a function by anything makes little sense,
	            // but we have to check for that.
	            regex = false;
	            if (testKeyword(extra.tokenValues[extra.openCurlyToken - 3])) {
	                // Anonymous function, e.g. function(){} /42
	                check = extra.tokenValues[extra.openCurlyToken - 4];
	                regex = check ? (FnExprTokens.indexOf(check) < 0) : false;
	            } else if (testKeyword(extra.tokenValues[extra.openCurlyToken - 4])) {
	                // Named function, e.g. function f(){} /42/
	                check = extra.tokenValues[extra.openCurlyToken - 5];
	                regex = check ? (FnExprTokens.indexOf(check) < 0) : true;
	            }
	        }

	        return regex ? collectRegex() : scanPunctuator();
	    }

	    function advance() {
	        var cp, token;

	        if (index >= length) {
	            return {
	                type: Token.EOF,
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                start: index,
	                end: index
	            };
	        }

	        cp = source.charCodeAt(index);

	        if (isIdentifierStart(cp)) {
	            token = scanIdentifier();
	            if (strict && isStrictModeReservedWord(token.value)) {
	                token.type = Token.Keyword;
	            }
	            return token;
	        }

	        // Very common: ( and ) and ;
	        if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
	            return scanPunctuator();
	        }

	        // String literal starts with single quote (U+0027) or double quote (U+0022).
	        if (cp === 0x27 || cp === 0x22) {
	            return scanStringLiteral();
	        }

	        // Dot (.) U+002E can also start a floating-point number, hence the need
	        // to check the next character.
	        if (cp === 0x2E) {
	            if (isDecimalDigit(source.charCodeAt(index + 1))) {
	                return scanNumericLiteral();
	            }
	            return scanPunctuator();
	        }

	        if (isDecimalDigit(cp)) {
	            return scanNumericLiteral();
	        }

	        // Slash (/) U+002F can also start a regex.
	        if (extra.tokenize && cp === 0x2F) {
	            return advanceSlash();
	        }

	        // Template literals start with ` (U+0060) for template head
	        // or } (U+007D) for template middle or template tail.
	        if (cp === 0x60 || (cp === 0x7D && state.curlyStack[state.curlyStack.length - 1] === '${')) {
	            return scanTemplate();
	        }

	        // Possible identifier start in a surrogate pair.
	        if (cp >= 0xD800 && cp < 0xDFFF) {
	            cp = codePointAt(index);
	            if (isIdentifierStart(cp)) {
	                return scanIdentifier();
	            }
	        }

	        return scanPunctuator();
	    }

	    function collectToken() {
	        var loc, token, value, entry;

	        loc = {
	            start: {
	                line: lineNumber,
	                column: index - lineStart
	            }
	        };

	        token = advance();
	        loc.end = {
	            line: lineNumber,
	            column: index - lineStart
	        };

	        if (token.type !== Token.EOF) {
	            value = source.slice(token.start, token.end);
	            entry = {
	                type: TokenName[token.type],
	                value: value,
	                range: [token.start, token.end],
	                loc: loc
	            };
	            if (token.regex) {
	                entry.regex = {
	                    pattern: token.regex.pattern,
	                    flags: token.regex.flags
	                };
	            }
	            if (extra.tokenValues) {
	                extra.tokenValues.push((entry.type === 'Punctuator' || entry.type === 'Keyword') ? entry.value : null);
	            }
	            if (extra.tokenize) {
	                if (!extra.range) {
	                    delete entry.range;
	                }
	                if (!extra.loc) {
	                    delete entry.loc;
	                }
	                if (extra.delegate) {
	                    entry = extra.delegate(entry);
	                }
	            }
	            extra.tokens.push(entry);
	        }

	        return token;
	    }

	    function lex() {
	        var token;
	        scanning = true;

	        lastIndex = index;
	        lastLineNumber = lineNumber;
	        lastLineStart = lineStart;

	        skipComment();

	        token = lookahead;

	        startIndex = index;
	        startLineNumber = lineNumber;
	        startLineStart = lineStart;

	        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
	        scanning = false;
	        return token;
	    }

	    function peek() {
	        scanning = true;

	        skipComment();

	        lastIndex = index;
	        lastLineNumber = lineNumber;
	        lastLineStart = lineStart;

	        startIndex = index;
	        startLineNumber = lineNumber;
	        startLineStart = lineStart;

	        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
	        scanning = false;
	    }

	    function Position() {
	        this.line = startLineNumber;
	        this.column = startIndex - startLineStart;
	    }

	    function SourceLocation() {
	        this.start = new Position();
	        this.end = null;
	    }

	    function WrappingSourceLocation(startToken) {
	        this.start = {
	            line: startToken.lineNumber,
	            column: startToken.start - startToken.lineStart
	        };
	        this.end = null;
	    }

	    function Node() {
	        if (extra.range) {
	            this.range = [startIndex, 0];
	        }
	        if (extra.loc) {
	            this.loc = new SourceLocation();
	        }
	    }

	    function WrappingNode(startToken) {
	        if (extra.range) {
	            this.range = [startToken.start, 0];
	        }
	        if (extra.loc) {
	            this.loc = new WrappingSourceLocation(startToken);
	        }
	    }

	    WrappingNode.prototype = Node.prototype = {

	        processComment: function () {
	            var lastChild,
	                innerComments,
	                leadingComments,
	                trailingComments,
	                bottomRight = extra.bottomRightStack,
	                i,
	                comment,
	                last = bottomRight[bottomRight.length - 1];

	            if (this.type === Syntax.Program) {
	                if (this.body.length > 0) {
	                    return;
	                }
	            }
	            /**
	             * patch innnerComments for properties empty block
	             * `function a() {/** comments **\/}`
	             */

	            if (this.type === Syntax.BlockStatement && this.body.length === 0) {
	                innerComments = [];
	                for (i = extra.leadingComments.length - 1; i >= 0; --i) {
	                    comment = extra.leadingComments[i];
	                    if (this.range[1] >= comment.range[1]) {
	                        innerComments.unshift(comment);
	                        extra.leadingComments.splice(i, 1);
	                        extra.trailingComments.splice(i, 1);
	                    }
	                }
	                if (innerComments.length) {
	                    this.innerComments = innerComments;
	                    //bottomRight.push(this);
	                    return;
	                }
	            }

	            if (extra.trailingComments.length > 0) {
	                trailingComments = [];
	                for (i = extra.trailingComments.length - 1; i >= 0; --i) {
	                    comment = extra.trailingComments[i];
	                    if (comment.range[0] >= this.range[1]) {
	                        trailingComments.unshift(comment);
	                        extra.trailingComments.splice(i, 1);
	                    }
	                }
	                extra.trailingComments = [];
	            } else {
	                if (last && last.trailingComments && last.trailingComments[0].range[0] >= this.range[1]) {
	                    trailingComments = last.trailingComments;
	                    delete last.trailingComments;
	                }
	            }

	            // Eating the stack.
	            while (last && last.range[0] >= this.range[0]) {
	                lastChild = bottomRight.pop();
	                last = bottomRight[bottomRight.length - 1];
	            }

	            if (lastChild) {
	                if (lastChild.leadingComments) {
	                    leadingComments = [];
	                    for (i = lastChild.leadingComments.length - 1; i >= 0; --i) {
	                        comment = lastChild.leadingComments[i];
	                        if (comment.range[1] <= this.range[0]) {
	                            leadingComments.unshift(comment);
	                            lastChild.leadingComments.splice(i, 1);
	                        }
	                    }

	                    if (!lastChild.leadingComments.length) {
	                        lastChild.leadingComments = undefined;
	                    }
	                }
	            } else if (extra.leadingComments.length > 0) {
	                leadingComments = [];
	                for (i = extra.leadingComments.length - 1; i >= 0; --i) {
	                    comment = extra.leadingComments[i];
	                    if (comment.range[1] <= this.range[0]) {
	                        leadingComments.unshift(comment);
	                        extra.leadingComments.splice(i, 1);
	                    }
	                }
	            }


	            if (leadingComments && leadingComments.length > 0) {
	                this.leadingComments = leadingComments;
	            }
	            if (trailingComments && trailingComments.length > 0) {
	                this.trailingComments = trailingComments;
	            }

	            bottomRight.push(this);
	        },

	        finish: function () {
	            if (extra.range) {
	                this.range[1] = lastIndex;
	            }
	            if (extra.loc) {
	                this.loc.end = {
	                    line: lastLineNumber,
	                    column: lastIndex - lastLineStart
	                };
	                if (extra.source) {
	                    this.loc.source = extra.source;
	                }
	            }

	            if (extra.attachComment) {
	                this.processComment();
	            }
	        },

	        finishArrayExpression: function (elements) {
	            this.type = Syntax.ArrayExpression;
	            this.elements = elements;
	            this.finish();
	            return this;
	        },

	        finishArrayPattern: function (elements) {
	            this.type = Syntax.ArrayPattern;
	            this.elements = elements;
	            this.finish();
	            return this;
	        },

	        finishArrowFunctionExpression: function (params, defaults, body, expression) {
	            this.type = Syntax.ArrowFunctionExpression;
	            this.id = null;
	            this.params = params;
	            this.defaults = defaults;
	            this.body = body;
	            this.generator = false;
	            this.expression = expression;
	            this.finish();
	            return this;
	        },

	        finishAssignmentExpression: function (operator, left, right) {
	            this.type = Syntax.AssignmentExpression;
	            this.operator = operator;
	            this.left = left;
	            this.right = right;
	            this.finish();
	            return this;
	        },

	        finishAssignmentPattern: function (left, right) {
	            this.type = Syntax.AssignmentPattern;
	            this.left = left;
	            this.right = right;
	            this.finish();
	            return this;
	        },

	        finishBinaryExpression: function (operator, left, right) {
	            this.type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression : Syntax.BinaryExpression;
	            this.operator = operator;
	            this.left = left;
	            this.right = right;
	            this.finish();
	            return this;
	        },

	        finishBlockStatement: function (body) {
	            this.type = Syntax.BlockStatement;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishBreakStatement: function (label) {
	            this.type = Syntax.BreakStatement;
	            this.label = label;
	            this.finish();
	            return this;
	        },

	        finishCallExpression: function (callee, args) {
	            this.type = Syntax.CallExpression;
	            this.callee = callee;
	            this.arguments = args;
	            this.finish();
	            return this;
	        },

	        finishCatchClause: function (param, body) {
	            this.type = Syntax.CatchClause;
	            this.param = param;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishClassBody: function (body) {
	            this.type = Syntax.ClassBody;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishClassDeclaration: function (id, superClass, body) {
	            this.type = Syntax.ClassDeclaration;
	            this.id = id;
	            this.superClass = superClass;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishClassExpression: function (id, superClass, body) {
	            this.type = Syntax.ClassExpression;
	            this.id = id;
	            this.superClass = superClass;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishConditionalExpression: function (test, consequent, alternate) {
	            this.type = Syntax.ConditionalExpression;
	            this.test = test;
	            this.consequent = consequent;
	            this.alternate = alternate;
	            this.finish();
	            return this;
	        },

	        finishContinueStatement: function (label) {
	            this.type = Syntax.ContinueStatement;
	            this.label = label;
	            this.finish();
	            return this;
	        },

	        finishDebuggerStatement: function () {
	            this.type = Syntax.DebuggerStatement;
	            this.finish();
	            return this;
	        },

	        finishDoWhileStatement: function (body, test) {
	            this.type = Syntax.DoWhileStatement;
	            this.body = body;
	            this.test = test;
	            this.finish();
	            return this;
	        },

	        finishEmptyStatement: function () {
	            this.type = Syntax.EmptyStatement;
	            this.finish();
	            return this;
	        },

	        finishExpressionStatement: function (expression) {
	            this.type = Syntax.ExpressionStatement;
	            this.expression = expression;
	            this.finish();
	            return this;
	        },

	        finishForStatement: function (init, test, update, body) {
	            this.type = Syntax.ForStatement;
	            this.init = init;
	            this.test = test;
	            this.update = update;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishForOfStatement: function (left, right, body) {
	            this.type = Syntax.ForOfStatement;
	            this.left = left;
	            this.right = right;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishForInStatement: function (left, right, body) {
	            this.type = Syntax.ForInStatement;
	            this.left = left;
	            this.right = right;
	            this.body = body;
	            this.each = false;
	            this.finish();
	            return this;
	        },

	        finishFunctionDeclaration: function (id, params, defaults, body, generator) {
	            this.type = Syntax.FunctionDeclaration;
	            this.id = id;
	            this.params = params;
	            this.defaults = defaults;
	            this.body = body;
	            this.generator = generator;
	            this.expression = false;
	            this.finish();
	            return this;
	        },

	        finishFunctionExpression: function (id, params, defaults, body, generator) {
	            this.type = Syntax.FunctionExpression;
	            this.id = id;
	            this.params = params;
	            this.defaults = defaults;
	            this.body = body;
	            this.generator = generator;
	            this.expression = false;
	            this.finish();
	            return this;
	        },

	        finishIdentifier: function (name) {
	            this.type = Syntax.Identifier;
	            this.name = name;
	            this.finish();
	            return this;
	        },

	        finishIfStatement: function (test, consequent, alternate) {
	            this.type = Syntax.IfStatement;
	            this.test = test;
	            this.consequent = consequent;
	            this.alternate = alternate;
	            this.finish();
	            return this;
	        },

	        finishLabeledStatement: function (label, body) {
	            this.type = Syntax.LabeledStatement;
	            this.label = label;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishLiteral: function (token) {
	            this.type = Syntax.Literal;
	            this.value = token.value;
	            this.raw = source.slice(token.start, token.end);
	            if (token.regex) {
	                this.regex = token.regex;
	            }
	            this.finish();
	            return this;
	        },

	        finishMemberExpression: function (accessor, object, property) {
	            this.type = Syntax.MemberExpression;
	            this.computed = accessor === '[';
	            this.object = object;
	            this.property = property;
	            this.finish();
	            return this;
	        },

	        finishMetaProperty: function (meta, property) {
	            this.type = Syntax.MetaProperty;
	            this.meta = meta;
	            this.property = property;
	            this.finish();
	            return this;
	        },

	        finishNewExpression: function (callee, args) {
	            this.type = Syntax.NewExpression;
	            this.callee = callee;
	            this.arguments = args;
	            this.finish();
	            return this;
	        },

	        finishObjectExpression: function (properties) {
	            this.type = Syntax.ObjectExpression;
	            this.properties = properties;
	            this.finish();
	            return this;
	        },

	        finishObjectPattern: function (properties) {
	            this.type = Syntax.ObjectPattern;
	            this.properties = properties;
	            this.finish();
	            return this;
	        },

	        finishPostfixExpression: function (operator, argument) {
	            this.type = Syntax.UpdateExpression;
	            this.operator = operator;
	            this.argument = argument;
	            this.prefix = false;
	            this.finish();
	            return this;
	        },

	        finishProgram: function (body, sourceType) {
	            this.type = Syntax.Program;
	            this.body = body;
	            this.sourceType = sourceType;
	            this.finish();
	            return this;
	        },

	        finishProperty: function (kind, key, computed, value, method, shorthand) {
	            this.type = Syntax.Property;
	            this.key = key;
	            this.computed = computed;
	            this.value = value;
	            this.kind = kind;
	            this.method = method;
	            this.shorthand = shorthand;
	            this.finish();
	            return this;
	        },

	        finishRestElement: function (argument) {
	            this.type = Syntax.RestElement;
	            this.argument = argument;
	            this.finish();
	            return this;
	        },

	        finishReturnStatement: function (argument) {
	            this.type = Syntax.ReturnStatement;
	            this.argument = argument;
	            this.finish();
	            return this;
	        },

	        finishSequenceExpression: function (expressions) {
	            this.type = Syntax.SequenceExpression;
	            this.expressions = expressions;
	            this.finish();
	            return this;
	        },

	        finishSpreadElement: function (argument) {
	            this.type = Syntax.SpreadElement;
	            this.argument = argument;
	            this.finish();
	            return this;
	        },

	        finishSwitchCase: function (test, consequent) {
	            this.type = Syntax.SwitchCase;
	            this.test = test;
	            this.consequent = consequent;
	            this.finish();
	            return this;
	        },

	        finishSuper: function () {
	            this.type = Syntax.Super;
	            this.finish();
	            return this;
	        },

	        finishSwitchStatement: function (discriminant, cases) {
	            this.type = Syntax.SwitchStatement;
	            this.discriminant = discriminant;
	            this.cases = cases;
	            this.finish();
	            return this;
	        },

	        finishTaggedTemplateExpression: function (tag, quasi) {
	            this.type = Syntax.TaggedTemplateExpression;
	            this.tag = tag;
	            this.quasi = quasi;
	            this.finish();
	            return this;
	        },

	        finishTemplateElement: function (value, tail) {
	            this.type = Syntax.TemplateElement;
	            this.value = value;
	            this.tail = tail;
	            this.finish();
	            return this;
	        },

	        finishTemplateLiteral: function (quasis, expressions) {
	            this.type = Syntax.TemplateLiteral;
	            this.quasis = quasis;
	            this.expressions = expressions;
	            this.finish();
	            return this;
	        },

	        finishThisExpression: function () {
	            this.type = Syntax.ThisExpression;
	            this.finish();
	            return this;
	        },

	        finishThrowStatement: function (argument) {
	            this.type = Syntax.ThrowStatement;
	            this.argument = argument;
	            this.finish();
	            return this;
	        },

	        finishTryStatement: function (block, handler, finalizer) {
	            this.type = Syntax.TryStatement;
	            this.block = block;
	            this.guardedHandlers = [];
	            this.handlers = handler ? [handler] : [];
	            this.handler = handler;
	            this.finalizer = finalizer;
	            this.finish();
	            return this;
	        },

	        finishUnaryExpression: function (operator, argument) {
	            this.type = (operator === '++' || operator === '--') ? Syntax.UpdateExpression : Syntax.UnaryExpression;
	            this.operator = operator;
	            this.argument = argument;
	            this.prefix = true;
	            this.finish();
	            return this;
	        },

	        finishVariableDeclaration: function (declarations) {
	            this.type = Syntax.VariableDeclaration;
	            this.declarations = declarations;
	            this.kind = 'var';
	            this.finish();
	            return this;
	        },

	        finishLexicalDeclaration: function (declarations, kind) {
	            this.type = Syntax.VariableDeclaration;
	            this.declarations = declarations;
	            this.kind = kind;
	            this.finish();
	            return this;
	        },

	        finishVariableDeclarator: function (id, init) {
	            this.type = Syntax.VariableDeclarator;
	            this.id = id;
	            this.init = init;
	            this.finish();
	            return this;
	        },

	        finishWhileStatement: function (test, body) {
	            this.type = Syntax.WhileStatement;
	            this.test = test;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishWithStatement: function (object, body) {
	            this.type = Syntax.WithStatement;
	            this.object = object;
	            this.body = body;
	            this.finish();
	            return this;
	        },

	        finishExportSpecifier: function (local, exported) {
	            this.type = Syntax.ExportSpecifier;
	            this.exported = exported || local;
	            this.local = local;
	            this.finish();
	            return this;
	        },

	        finishImportDefaultSpecifier: function (local) {
	            this.type = Syntax.ImportDefaultSpecifier;
	            this.local = local;
	            this.finish();
	            return this;
	        },

	        finishImportNamespaceSpecifier: function (local) {
	            this.type = Syntax.ImportNamespaceSpecifier;
	            this.local = local;
	            this.finish();
	            return this;
	        },

	        finishExportNamedDeclaration: function (declaration, specifiers, src) {
	            this.type = Syntax.ExportNamedDeclaration;
	            this.declaration = declaration;
	            this.specifiers = specifiers;
	            this.source = src;
	            this.finish();
	            return this;
	        },

	        finishExportDefaultDeclaration: function (declaration) {
	            this.type = Syntax.ExportDefaultDeclaration;
	            this.declaration = declaration;
	            this.finish();
	            return this;
	        },

	        finishExportAllDeclaration: function (src) {
	            this.type = Syntax.ExportAllDeclaration;
	            this.source = src;
	            this.finish();
	            return this;
	        },

	        finishImportSpecifier: function (local, imported) {
	            this.type = Syntax.ImportSpecifier;
	            this.local = local || imported;
	            this.imported = imported;
	            this.finish();
	            return this;
	        },

	        finishImportDeclaration: function (specifiers, src) {
	            this.type = Syntax.ImportDeclaration;
	            this.specifiers = specifiers;
	            this.source = src;
	            this.finish();
	            return this;
	        },

	        finishYieldExpression: function (argument, delegate) {
	            this.type = Syntax.YieldExpression;
	            this.argument = argument;
	            this.delegate = delegate;
	            this.finish();
	            return this;
	        }
	    };


	    function recordError(error) {
	        var e, existing;

	        for (e = 0; e < extra.errors.length; e++) {
	            existing = extra.errors[e];
	            // Prevent duplicated error.
	            /* istanbul ignore next */
	            if (existing.index === error.index && existing.message === error.message) {
	                return;
	            }
	        }

	        extra.errors.push(error);
	    }

	    function constructError(msg, column) {
	        var error = new Error(msg);
	        try {
	            throw error;
	        } catch (base) {
	            /* istanbul ignore else */
	            if (Object.create && Object.defineProperty) {
	                error = Object.create(base);
	                Object.defineProperty(error, 'column', { value: column });
	            }
	        } finally {
	            return error;
	        }
	    }

	    function createError(line, pos, description) {
	        var msg, column, error;

	        msg = 'Line ' + line + ': ' + description;
	        column = pos - (scanning ? lineStart : lastLineStart) + 1;
	        error = constructError(msg, column);
	        error.lineNumber = line;
	        error.description = description;
	        error.index = pos;
	        return error;
	    }

	    // Throw an exception

	    function throwError(messageFormat) {
	        var args, msg;

	        args = Array.prototype.slice.call(arguments, 1);
	        msg = messageFormat.replace(/%(\d)/g,
	            function (whole, idx) {
	                assert(idx < args.length, 'Message reference must be in range');
	                return args[idx];
	            }
	        );

	        throw createError(lastLineNumber, lastIndex, msg);
	    }

	    function tolerateError(messageFormat) {
	        var args, msg, error;

	        args = Array.prototype.slice.call(arguments, 1);
	        /* istanbul ignore next */
	        msg = messageFormat.replace(/%(\d)/g,
	            function (whole, idx) {
	                assert(idx < args.length, 'Message reference must be in range');
	                return args[idx];
	            }
	        );

	        error = createError(lineNumber, lastIndex, msg);
	        if (extra.errors) {
	            recordError(error);
	        } else {
	            throw error;
	        }
	    }

	    // Throw an exception because of the token.

	    function unexpectedTokenError(token, message) {
	        var value, msg = message || Messages.UnexpectedToken;

	        if (token) {
	            if (!message) {
	                msg = (token.type === Token.EOF) ? Messages.UnexpectedEOS :
	                    (token.type === Token.Identifier) ? Messages.UnexpectedIdentifier :
	                    (token.type === Token.NumericLiteral) ? Messages.UnexpectedNumber :
	                    (token.type === Token.StringLiteral) ? Messages.UnexpectedString :
	                    (token.type === Token.Template) ? Messages.UnexpectedTemplate :
	                    Messages.UnexpectedToken;

	                if (token.type === Token.Keyword) {
	                    if (isFutureReservedWord(token.value)) {
	                        msg = Messages.UnexpectedReserved;
	                    } else if (strict && isStrictModeReservedWord(token.value)) {
	                        msg = Messages.StrictReservedWord;
	                    }
	                }
	            }

	            value = (token.type === Token.Template) ? token.value.raw : token.value;
	        } else {
	            value = 'ILLEGAL';
	        }

	        msg = msg.replace('%0', value);

	        return (token && typeof token.lineNumber === 'number') ?
	            createError(token.lineNumber, token.start, msg) :
	            createError(scanning ? lineNumber : lastLineNumber, scanning ? index : lastIndex, msg);
	    }

	    function throwUnexpectedToken(token, message) {
	        throw unexpectedTokenError(token, message);
	    }

	    function tolerateUnexpectedToken(token, message) {
	        var error = unexpectedTokenError(token, message);
	        if (extra.errors) {
	            recordError(error);
	        } else {
	            throw error;
	        }
	    }

	    // Expect the next token to match the specified punctuator.
	    // If not, an exception will be thrown.

	    function expect(value) {
	        var token = lex();
	        if (token.type !== Token.Punctuator || token.value !== value) {
	            throwUnexpectedToken(token);
	        }
	    }

	    /**
	     * @name expectCommaSeparator
	     * @description Quietly expect a comma when in tolerant mode, otherwise delegates
	     * to <code>expect(value)</code>
	     * @since 2.0
	     */
	    function expectCommaSeparator() {
	        var token;

	        if (extra.errors) {
	            token = lookahead;
	            if (token.type === Token.Punctuator && token.value === ',') {
	                lex();
	            } else if (token.type === Token.Punctuator && token.value === ';') {
	                lex();
	                tolerateUnexpectedToken(token);
	            } else {
	                tolerateUnexpectedToken(token, Messages.UnexpectedToken);
	            }
	        } else {
	            expect(',');
	        }
	    }

	    // Expect the next token to match the specified keyword.
	    // If not, an exception will be thrown.

	    function expectKeyword(keyword) {
	        var token = lex();
	        if (token.type !== Token.Keyword || token.value !== keyword) {
	            throwUnexpectedToken(token);
	        }
	    }

	    // Return true if the next token matches the specified punctuator.

	    function match(value) {
	        return lookahead.type === Token.Punctuator && lookahead.value === value;
	    }

	    // Return true if the next token matches the specified keyword

	    function matchKeyword(keyword) {
	        return lookahead.type === Token.Keyword && lookahead.value === keyword;
	    }

	    // Return true if the next token matches the specified contextual keyword
	    // (where an identifier is sometimes a keyword depending on the context)

	    function matchContextualKeyword(keyword) {
	        return lookahead.type === Token.Identifier && lookahead.value === keyword;
	    }

	    // Return true if the next token is an assignment operator

	    function matchAssign() {
	        var op;

	        if (lookahead.type !== Token.Punctuator) {
	            return false;
	        }
	        op = lookahead.value;
	        return op === '=' ||
	            op === '*=' ||
	            op === '/=' ||
	            op === '%=' ||
	            op === '+=' ||
	            op === '-=' ||
	            op === '<<=' ||
	            op === '>>=' ||
	            op === '>>>=' ||
	            op === '&=' ||
	            op === '^=' ||
	            op === '|=';
	    }

	    function consumeSemicolon() {
	        // Catch the very common case first: immediately a semicolon (U+003B).
	        if (source.charCodeAt(startIndex) === 0x3B || match(';')) {
	            lex();
	            return;
	        }

	        if (hasLineTerminator) {
	            return;
	        }

	        // FIXME(ikarienator): this is seemingly an issue in the previous location info convention.
	        lastIndex = startIndex;
	        lastLineNumber = startLineNumber;
	        lastLineStart = startLineStart;

	        if (lookahead.type !== Token.EOF && !match('}')) {
	            throwUnexpectedToken(lookahead);
	        }
	    }

	    // Cover grammar support.
	    //
	    // When an assignment expression position starts with an left parenthesis, the determination of the type
	    // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
	    // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
	    //
	    // There are three productions that can be parsed in a parentheses pair that needs to be determined
	    // after the outermost pair is closed. They are:
	    //
	    //   1. AssignmentExpression
	    //   2. BindingElements
	    //   3. AssignmentTargets
	    //
	    // In order to avoid exponential backtracking, we use two flags to denote if the production can be
	    // binding element or assignment target.
	    //
	    // The three productions have the relationship:
	    //
	    //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
	    //
	    // with a single exception that CoverInitializedName when used directly in an Expression, generates
	    // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
	    // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
	    //
	    // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
	    // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
	    // the CoverInitializedName check is conducted.
	    //
	    // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
	    // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
	    // pattern. The CoverInitializedName check is deferred.
	    function isolateCoverGrammar(parser) {
	        var oldIsBindingElement = isBindingElement,
	            oldIsAssignmentTarget = isAssignmentTarget,
	            oldFirstCoverInitializedNameError = firstCoverInitializedNameError,
	            result;
	        isBindingElement = true;
	        isAssignmentTarget = true;
	        firstCoverInitializedNameError = null;
	        result = parser();
	        if (firstCoverInitializedNameError !== null) {
	            throwUnexpectedToken(firstCoverInitializedNameError);
	        }
	        isBindingElement = oldIsBindingElement;
	        isAssignmentTarget = oldIsAssignmentTarget;
	        firstCoverInitializedNameError = oldFirstCoverInitializedNameError;
	        return result;
	    }

	    function inheritCoverGrammar(parser) {
	        var oldIsBindingElement = isBindingElement,
	            oldIsAssignmentTarget = isAssignmentTarget,
	            oldFirstCoverInitializedNameError = firstCoverInitializedNameError,
	            result;
	        isBindingElement = true;
	        isAssignmentTarget = true;
	        firstCoverInitializedNameError = null;
	        result = parser();
	        isBindingElement = isBindingElement && oldIsBindingElement;
	        isAssignmentTarget = isAssignmentTarget && oldIsAssignmentTarget;
	        firstCoverInitializedNameError = oldFirstCoverInitializedNameError || firstCoverInitializedNameError;
	        return result;
	    }

	    // ECMA-262 13.3.3 Destructuring Binding Patterns

	    function parseArrayPattern(params, kind) {
	        var node = new Node(), elements = [], rest, restNode;
	        expect('[');

	        while (!match(']')) {
	            if (match(',')) {
	                lex();
	                elements.push(null);
	            } else {
	                if (match('...')) {
	                    restNode = new Node();
	                    lex();
	                    params.push(lookahead);
	                    rest = parseVariableIdentifier(kind);
	                    elements.push(restNode.finishRestElement(rest));
	                    break;
	                } else {
	                    elements.push(parsePatternWithDefault(params, kind));
	                }
	                if (!match(']')) {
	                    expect(',');
	                }
	            }

	        }

	        expect(']');

	        return node.finishArrayPattern(elements);
	    }

	    function parsePropertyPattern(params, kind) {
	        var node = new Node(), key, keyToken, computed = match('['), init;
	        if (lookahead.type === Token.Identifier) {
	            keyToken = lookahead;
	            key = parseVariableIdentifier();
	            if (match('=')) {
	                params.push(keyToken);
	                lex();
	                init = parseAssignmentExpression();

	                return node.finishProperty(
	                    'init', key, false,
	                    new WrappingNode(keyToken).finishAssignmentPattern(key, init), false, false);
	            } else if (!match(':')) {
	                params.push(keyToken);
	                return node.finishProperty('init', key, false, key, false, true);
	            }
	        } else {
	            key = parseObjectPropertyKey();
	        }
	        expect(':');
	        init = parsePatternWithDefault(params, kind);
	        return node.finishProperty('init', key, computed, init, false, false);
	    }

	    function parseObjectPattern(params, kind) {
	        var node = new Node(), properties = [];

	        expect('{');

	        while (!match('}')) {
	            properties.push(parsePropertyPattern(params, kind));
	            if (!match('}')) {
	                expect(',');
	            }
	        }

	        lex();

	        return node.finishObjectPattern(properties);
	    }

	    function parsePattern(params, kind) {
	        if (match('[')) {
	            return parseArrayPattern(params, kind);
	        } else if (match('{')) {
	            return parseObjectPattern(params, kind);
	        } else if (matchKeyword('let')) {
	            if (kind === 'const' || kind === 'let') {
	                tolerateUnexpectedToken(lookahead, Messages.UnexpectedToken);
	            }
	        }

	        params.push(lookahead);
	        return parseVariableIdentifier(kind);
	    }

	    function parsePatternWithDefault(params, kind) {
	        var startToken = lookahead, pattern, previousAllowYield, right;
	        pattern = parsePattern(params, kind);
	        if (match('=')) {
	            lex();
	            previousAllowYield = state.allowYield;
	            state.allowYield = true;
	            right = isolateCoverGrammar(parseAssignmentExpression);
	            state.allowYield = previousAllowYield;
	            pattern = new WrappingNode(startToken).finishAssignmentPattern(pattern, right);
	        }
	        return pattern;
	    }

	    // ECMA-262 12.2.5 Array Initializer

	    function parseArrayInitializer() {
	        var elements = [], node = new Node(), restSpread;

	        expect('[');

	        while (!match(']')) {
	            if (match(',')) {
	                lex();
	                elements.push(null);
	            } else if (match('...')) {
	                restSpread = new Node();
	                lex();
	                restSpread.finishSpreadElement(inheritCoverGrammar(parseAssignmentExpression));

	                if (!match(']')) {
	                    isAssignmentTarget = isBindingElement = false;
	                    expect(',');
	                }
	                elements.push(restSpread);
	            } else {
	                elements.push(inheritCoverGrammar(parseAssignmentExpression));

	                if (!match(']')) {
	                    expect(',');
	                }
	            }
	        }

	        lex();

	        return node.finishArrayExpression(elements);
	    }

	    // ECMA-262 12.2.6 Object Initializer

	    function parsePropertyFunction(node, paramInfo, isGenerator) {
	        var previousStrict, body;

	        isAssignmentTarget = isBindingElement = false;

	        previousStrict = strict;
	        body = isolateCoverGrammar(parseFunctionSourceElements);

	        if (strict && paramInfo.firstRestricted) {
	            tolerateUnexpectedToken(paramInfo.firstRestricted, paramInfo.message);
	        }
	        if (strict && paramInfo.stricted) {
	            tolerateUnexpectedToken(paramInfo.stricted, paramInfo.message);
	        }

	        strict = previousStrict;
	        return node.finishFunctionExpression(null, paramInfo.params, paramInfo.defaults, body, isGenerator);
	    }

	    function parsePropertyMethodFunction() {
	        var params, method, node = new Node(),
	            previousAllowYield = state.allowYield;

	        state.allowYield = false;
	        params = parseParams();
	        state.allowYield = previousAllowYield;

	        state.allowYield = false;
	        method = parsePropertyFunction(node, params, false);
	        state.allowYield = previousAllowYield;

	        return method;
	    }

	    function parseObjectPropertyKey() {
	        var token, node = new Node(), expr;

	        token = lex();

	        // Note: This function is called only from parseObjectProperty(), where
	        // EOF and Punctuator tokens are already filtered out.

	        switch (token.type) {
	        case Token.StringLiteral:
	        case Token.NumericLiteral:
	            if (strict && token.octal) {
	                tolerateUnexpectedToken(token, Messages.StrictOctalLiteral);
	            }
	            return node.finishLiteral(token);
	        case Token.Identifier:
	        case Token.BooleanLiteral:
	        case Token.NullLiteral:
	        case Token.Keyword:
	            return node.finishIdentifier(token.value);
	        case Token.Punctuator:
	            if (token.value === '[') {
	                expr = isolateCoverGrammar(parseAssignmentExpression);
	                expect(']');
	                return expr;
	            }
	            break;
	        }
	        throwUnexpectedToken(token);
	    }

	    function lookaheadPropertyName() {
	        switch (lookahead.type) {
	        case Token.Identifier:
	        case Token.StringLiteral:
	        case Token.BooleanLiteral:
	        case Token.NullLiteral:
	        case Token.NumericLiteral:
	        case Token.Keyword:
	            return true;
	        case Token.Punctuator:
	            return lookahead.value === '[';
	        }
	        return false;
	    }

	    // This function is to try to parse a MethodDefinition as defined in 14.3. But in the case of object literals,
	    // it might be called at a position where there is in fact a short hand identifier pattern or a data property.
	    // This can only be determined after we consumed up to the left parentheses.
	    //
	    // In order to avoid back tracking, it returns `null` if the position is not a MethodDefinition and the caller
	    // is responsible to visit other options.
	    function tryParseMethodDefinition(token, key, computed, node) {
	        var value, options, methodNode, params,
	            previousAllowYield = state.allowYield;

	        if (token.type === Token.Identifier) {
	            // check for `get` and `set`;

	            if (token.value === 'get' && lookaheadPropertyName()) {
	                computed = match('[');
	                key = parseObjectPropertyKey();
	                methodNode = new Node();
	                expect('(');
	                expect(')');

	                state.allowYield = false;
	                value = parsePropertyFunction(methodNode, {
	                    params: [],
	                    defaults: [],
	                    stricted: null,
	                    firstRestricted: null,
	                    message: null
	                }, false);
	                state.allowYield = previousAllowYield;

	                return node.finishProperty('get', key, computed, value, false, false);
	            } else if (token.value === 'set' && lookaheadPropertyName()) {
	                computed = match('[');
	                key = parseObjectPropertyKey();
	                methodNode = new Node();
	                expect('(');

	                options = {
	                    params: [],
	                    defaultCount: 0,
	                    defaults: [],
	                    firstRestricted: null,
	                    paramSet: {}
	                };
	                if (match(')')) {
	                    tolerateUnexpectedToken(lookahead);
	                } else {
	                    state.allowYield = false;
	                    parseParam(options);
	                    state.allowYield = previousAllowYield;
	                    if (options.defaultCount === 0) {
	                        options.defaults = [];
	                    }
	                }
	                expect(')');

	                state.allowYield = false;
	                value = parsePropertyFunction(methodNode, options, false);
	                state.allowYield = previousAllowYield;

	                return node.finishProperty('set', key, computed, value, false, false);
	            }
	        } else if (token.type === Token.Punctuator && token.value === '*' && lookaheadPropertyName()) {
	            computed = match('[');
	            key = parseObjectPropertyKey();
	            methodNode = new Node();

	            state.allowYield = true;
	            params = parseParams();
	            state.allowYield = previousAllowYield;

	            state.allowYield = false;
	            value = parsePropertyFunction(methodNode, params, true);
	            state.allowYield = previousAllowYield;

	            return node.finishProperty('init', key, computed, value, true, false);
	        }

	        if (key && match('(')) {
	            value = parsePropertyMethodFunction();
	            return node.finishProperty('init', key, computed, value, true, false);
	        }

	        // Not a MethodDefinition.
	        return null;
	    }

	    function parseObjectProperty(hasProto) {
	        var token = lookahead, node = new Node(), computed, key, maybeMethod, proto, value;

	        computed = match('[');
	        if (match('*')) {
	            lex();
	        } else {
	            key = parseObjectPropertyKey();
	        }
	        maybeMethod = tryParseMethodDefinition(token, key, computed, node);
	        if (maybeMethod) {
	            return maybeMethod;
	        }

	        if (!key) {
	            throwUnexpectedToken(lookahead);
	        }

	        // Check for duplicated __proto__
	        if (!computed) {
	            proto = (key.type === Syntax.Identifier && key.name === '__proto__') ||
	                (key.type === Syntax.Literal && key.value === '__proto__');
	            if (hasProto.value && proto) {
	                tolerateError(Messages.DuplicateProtoProperty);
	            }
	            hasProto.value |= proto;
	        }

	        if (match(':')) {
	            lex();
	            value = inheritCoverGrammar(parseAssignmentExpression);
	            return node.finishProperty('init', key, computed, value, false, false);
	        }

	        if (token.type === Token.Identifier) {
	            if (match('=')) {
	                firstCoverInitializedNameError = lookahead;
	                lex();
	                value = isolateCoverGrammar(parseAssignmentExpression);
	                return node.finishProperty('init', key, computed,
	                    new WrappingNode(token).finishAssignmentPattern(key, value), false, true);
	            }
	            return node.finishProperty('init', key, computed, key, false, true);
	        }

	        throwUnexpectedToken(lookahead);
	    }

	    function parseObjectInitializer() {
	        var properties = [], hasProto = {value: false}, node = new Node();

	        expect('{');

	        while (!match('}')) {
	            properties.push(parseObjectProperty(hasProto));

	            if (!match('}')) {
	                expectCommaSeparator();
	            }
	        }

	        expect('}');

	        return node.finishObjectExpression(properties);
	    }

	    function reinterpretExpressionAsPattern(expr) {
	        var i;
	        switch (expr.type) {
	        case Syntax.Identifier:
	        case Syntax.MemberExpression:
	        case Syntax.RestElement:
	        case Syntax.AssignmentPattern:
	            break;
	        case Syntax.SpreadElement:
	            expr.type = Syntax.RestElement;
	            reinterpretExpressionAsPattern(expr.argument);
	            break;
	        case Syntax.ArrayExpression:
	            expr.type = Syntax.ArrayPattern;
	            for (i = 0; i < expr.elements.length; i++) {
	                if (expr.elements[i] !== null) {
	                    reinterpretExpressionAsPattern(expr.elements[i]);
	                }
	            }
	            break;
	        case Syntax.ObjectExpression:
	            expr.type = Syntax.ObjectPattern;
	            for (i = 0; i < expr.properties.length; i++) {
	                reinterpretExpressionAsPattern(expr.properties[i].value);
	            }
	            break;
	        case Syntax.AssignmentExpression:
	            expr.type = Syntax.AssignmentPattern;
	            reinterpretExpressionAsPattern(expr.left);
	            break;
	        default:
	            // Allow other node type for tolerant parsing.
	            break;
	        }
	    }

	    // ECMA-262 12.2.9 Template Literals

	    function parseTemplateElement(option) {
	        var node, token;

	        if (lookahead.type !== Token.Template || (option.head && !lookahead.head)) {
	            throwUnexpectedToken();
	        }

	        node = new Node();
	        token = lex();

	        return node.finishTemplateElement({ raw: token.value.raw, cooked: token.value.cooked }, token.tail);
	    }

	    function parseTemplateLiteral() {
	        var quasi, quasis, expressions, node = new Node();

	        quasi = parseTemplateElement({ head: true });
	        quasis = [quasi];
	        expressions = [];

	        while (!quasi.tail) {
	            expressions.push(parseExpression());
	            quasi = parseTemplateElement({ head: false });
	            quasis.push(quasi);
	        }

	        return node.finishTemplateLiteral(quasis, expressions);
	    }

	    // ECMA-262 12.2.10 The Grouping Operator

	    function parseGroupExpression() {
	        var expr, expressions, startToken, i, params = [];

	        expect('(');

	        if (match(')')) {
	            lex();
	            if (!match('=>')) {
	                expect('=>');
	            }
	            return {
	                type: PlaceHolders.ArrowParameterPlaceHolder,
	                params: [],
	                rawParams: []
	            };
	        }

	        startToken = lookahead;
	        if (match('...')) {
	            expr = parseRestElement(params);
	            expect(')');
	            if (!match('=>')) {
	                expect('=>');
	            }
	            return {
	                type: PlaceHolders.ArrowParameterPlaceHolder,
	                params: [expr]
	            };
	        }

	        isBindingElement = true;
	        expr = inheritCoverGrammar(parseAssignmentExpression);

	        if (match(',')) {
	            isAssignmentTarget = false;
	            expressions = [expr];

	            while (startIndex < length) {
	                if (!match(',')) {
	                    break;
	                }
	                lex();

	                if (match('...')) {
	                    if (!isBindingElement) {
	                        throwUnexpectedToken(lookahead);
	                    }
	                    expressions.push(parseRestElement(params));
	                    expect(')');
	                    if (!match('=>')) {
	                        expect('=>');
	                    }
	                    isBindingElement = false;
	                    for (i = 0; i < expressions.length; i++) {
	                        reinterpretExpressionAsPattern(expressions[i]);
	                    }
	                    return {
	                        type: PlaceHolders.ArrowParameterPlaceHolder,
	                        params: expressions
	                    };
	                }

	                expressions.push(inheritCoverGrammar(parseAssignmentExpression));
	            }

	            expr = new WrappingNode(startToken).finishSequenceExpression(expressions);
	        }


	        expect(')');

	        if (match('=>')) {
	            if (expr.type === Syntax.Identifier && expr.name === 'yield') {
	                return {
	                    type: PlaceHolders.ArrowParameterPlaceHolder,
	                    params: [expr]
	                };
	            }

	            if (!isBindingElement) {
	                throwUnexpectedToken(lookahead);
	            }

	            if (expr.type === Syntax.SequenceExpression) {
	                for (i = 0; i < expr.expressions.length; i++) {
	                    reinterpretExpressionAsPattern(expr.expressions[i]);
	                }
	            } else {
	                reinterpretExpressionAsPattern(expr);
	            }

	            expr = {
	                type: PlaceHolders.ArrowParameterPlaceHolder,
	                params: expr.type === Syntax.SequenceExpression ? expr.expressions : [expr]
	            };
	        }
	        isBindingElement = false;
	        return expr;
	    }


	    // ECMA-262 12.2 Primary Expressions

	    function parsePrimaryExpression() {
	        var type, token, expr, node;

	        if (match('(')) {
	            isBindingElement = false;
	            return inheritCoverGrammar(parseGroupExpression);
	        }

	        if (match('[')) {
	            return inheritCoverGrammar(parseArrayInitializer);
	        }

	        if (match('{')) {
	            return inheritCoverGrammar(parseObjectInitializer);
	        }

	        type = lookahead.type;
	        node = new Node();

	        if (type === Token.Identifier) {
	            if (state.sourceType === 'module' && lookahead.value === 'await') {
	                tolerateUnexpectedToken(lookahead);
	            }
	            expr = node.finishIdentifier(lex().value);
	        } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
	            isAssignmentTarget = isBindingElement = false;
	            if (strict && lookahead.octal) {
	                tolerateUnexpectedToken(lookahead, Messages.StrictOctalLiteral);
	            }
	            expr = node.finishLiteral(lex());
	        } else if (type === Token.Keyword) {
	            if (!strict && state.allowYield && matchKeyword('yield')) {
	                return parseNonComputedProperty();
	            }
	            if (!strict && matchKeyword('let')) {
	                return node.finishIdentifier(lex().value);
	            }
	            isAssignmentTarget = isBindingElement = false;
	            if (matchKeyword('function')) {
	                return parseFunctionExpression();
	            }
	            if (matchKeyword('this')) {
	                lex();
	                return node.finishThisExpression();
	            }
	            if (matchKeyword('class')) {
	                return parseClassExpression();
	            }
	            throwUnexpectedToken(lex());
	        } else if (type === Token.BooleanLiteral) {
	            isAssignmentTarget = isBindingElement = false;
	            token = lex();
	            token.value = (token.value === 'true');
	            expr = node.finishLiteral(token);
	        } else if (type === Token.NullLiteral) {
	            isAssignmentTarget = isBindingElement = false;
	            token = lex();
	            token.value = null;
	            expr = node.finishLiteral(token);
	        } else if (match('/') || match('/=')) {
	            isAssignmentTarget = isBindingElement = false;
	            index = startIndex;

	            if (typeof extra.tokens !== 'undefined') {
	                token = collectRegex();
	            } else {
	                token = scanRegExp();
	            }
	            lex();
	            expr = node.finishLiteral(token);
	        } else if (type === Token.Template) {
	            expr = parseTemplateLiteral();
	        } else {
	            throwUnexpectedToken(lex());
	        }

	        return expr;
	    }

	    // ECMA-262 12.3 Left-Hand-Side Expressions

	    function parseArguments() {
	        var args = [], expr;

	        expect('(');

	        if (!match(')')) {
	            while (startIndex < length) {
	                if (match('...')) {
	                    expr = new Node();
	                    lex();
	                    expr.finishSpreadElement(isolateCoverGrammar(parseAssignmentExpression));
	                } else {
	                    expr = isolateCoverGrammar(parseAssignmentExpression);
	                }
	                args.push(expr);
	                if (match(')')) {
	                    break;
	                }
	                expectCommaSeparator();
	            }
	        }

	        expect(')');

	        return args;
	    }

	    function parseNonComputedProperty() {
	        var token, node = new Node();

	        token = lex();

	        if (!isIdentifierName(token)) {
	            throwUnexpectedToken(token);
	        }

	        return node.finishIdentifier(token.value);
	    }

	    function parseNonComputedMember() {
	        expect('.');

	        return parseNonComputedProperty();
	    }

	    function parseComputedMember() {
	        var expr;

	        expect('[');

	        expr = isolateCoverGrammar(parseExpression);

	        expect(']');

	        return expr;
	    }

	    // ECMA-262 12.3.3 The new Operator

	    function parseNewExpression() {
	        var callee, args, node = new Node();

	        expectKeyword('new');

	        if (match('.')) {
	            lex();
	            if (lookahead.type === Token.Identifier && lookahead.value === 'target') {
	                if (state.inFunctionBody) {
	                    lex();
	                    return node.finishMetaProperty('new', 'target');
	                }
	            }
	            throwUnexpectedToken(lookahead);
	        }

	        callee = isolateCoverGrammar(parseLeftHandSideExpression);
	        args = match('(') ? parseArguments() : [];

	        isAssignmentTarget = isBindingElement = false;

	        return node.finishNewExpression(callee, args);
	    }

	    // ECMA-262 12.3.4 Function Calls

	    function parseLeftHandSideExpressionAllowCall() {
	        var quasi, expr, args, property, startToken, previousAllowIn = state.allowIn;

	        startToken = lookahead;
	        state.allowIn = true;

	        if (matchKeyword('super') && state.inFunctionBody) {
	            expr = new Node();
	            lex();
	            expr = expr.finishSuper();
	            if (!match('(') && !match('.') && !match('[')) {
	                throwUnexpectedToken(lookahead);
	            }
	        } else {
	            expr = inheritCoverGrammar(matchKeyword('new') ? parseNewExpression : parsePrimaryExpression);
	        }

	        for (;;) {
	            if (match('.')) {
	                isBindingElement = false;
	                isAssignmentTarget = true;
	                property = parseNonComputedMember();
	                expr = new WrappingNode(startToken).finishMemberExpression('.', expr, property);
	            } else if (match('(')) {
	                isBindingElement = false;
	                isAssignmentTarget = false;
	                args = parseArguments();
	                expr = new WrappingNode(startToken).finishCallExpression(expr, args);
	            } else if (match('[')) {
	                isBindingElement = false;
	                isAssignmentTarget = true;
	                property = parseComputedMember();
	                expr = new WrappingNode(startToken).finishMemberExpression('[', expr, property);
	            } else if (lookahead.type === Token.Template && lookahead.head) {
	                quasi = parseTemplateLiteral();
	                expr = new WrappingNode(startToken).finishTaggedTemplateExpression(expr, quasi);
	            } else {
	                break;
	            }
	        }
	        state.allowIn = previousAllowIn;

	        return expr;
	    }

	    // ECMA-262 12.3 Left-Hand-Side Expressions

	    function parseLeftHandSideExpression() {
	        var quasi, expr, property, startToken;
	        assert(state.allowIn, 'callee of new expression always allow in keyword.');

	        startToken = lookahead;

	        if (matchKeyword('super') && state.inFunctionBody) {
	            expr = new Node();
	            lex();
	            expr = expr.finishSuper();
	            if (!match('[') && !match('.')) {
	                throwUnexpectedToken(lookahead);
	            }
	        } else {
	            expr = inheritCoverGrammar(matchKeyword('new') ? parseNewExpression : parsePrimaryExpression);
	        }

	        for (;;) {
	            if (match('[')) {
	                isBindingElement = false;
	                isAssignmentTarget = true;
	                property = parseComputedMember();
	                expr = new WrappingNode(startToken).finishMemberExpression('[', expr, property);
	            } else if (match('.')) {
	                isBindingElement = false;
	                isAssignmentTarget = true;
	                property = parseNonComputedMember();
	                expr = new WrappingNode(startToken).finishMemberExpression('.', expr, property);
	            } else if (lookahead.type === Token.Template && lookahead.head) {
	                quasi = parseTemplateLiteral();
	                expr = new WrappingNode(startToken).finishTaggedTemplateExpression(expr, quasi);
	            } else {
	                break;
	            }
	        }
	        return expr;
	    }

	    // ECMA-262 12.4 Postfix Expressions

	    function parsePostfixExpression() {
	        var expr, token, startToken = lookahead;

	        expr = inheritCoverGrammar(parseLeftHandSideExpressionAllowCall);

	        if (!hasLineTerminator && lookahead.type === Token.Punctuator) {
	            if (match('++') || match('--')) {
	                // ECMA-262 11.3.1, 11.3.2
	                if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
	                    tolerateError(Messages.StrictLHSPostfix);
	                }

	                if (!isAssignmentTarget) {
	                    tolerateError(Messages.InvalidLHSInAssignment);
	                }

	                isAssignmentTarget = isBindingElement = false;

	                token = lex();
	                expr = new WrappingNode(startToken).finishPostfixExpression(token.value, expr);
	            }
	        }

	        return expr;
	    }

	    // ECMA-262 12.5 Unary Operators

	    function parseUnaryExpression() {
	        var token, expr, startToken;

	        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
	            expr = parsePostfixExpression();
	        } else if (match('++') || match('--')) {
	            startToken = lookahead;
	            token = lex();
	            expr = inheritCoverGrammar(parseUnaryExpression);
	            // ECMA-262 11.4.4, 11.4.5
	            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
	                tolerateError(Messages.StrictLHSPrefix);
	            }

	            if (!isAssignmentTarget) {
	                tolerateError(Messages.InvalidLHSInAssignment);
	            }
	            expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
	            isAssignmentTarget = isBindingElement = false;
	        } else if (match('+') || match('-') || match('~') || match('!')) {
	            startToken = lookahead;
	            token = lex();
	            expr = inheritCoverGrammar(parseUnaryExpression);
	            expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
	            isAssignmentTarget = isBindingElement = false;
	        } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
	            startToken = lookahead;
	            token = lex();
	            expr = inheritCoverGrammar(parseUnaryExpression);
	            expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
	            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
	                tolerateError(Messages.StrictDelete);
	            }
	            isAssignmentTarget = isBindingElement = false;
	        } else {
	            expr = parsePostfixExpression();
	        }

	        return expr;
	    }

	    function binaryPrecedence(token, allowIn) {
	        var prec = 0;

	        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
	            return 0;
	        }

	        switch (token.value) {
	        case '||':
	            prec = 1;
	            break;

	        case '&&':
	            prec = 2;
	            break;

	        case '|':
	            prec = 3;
	            break;

	        case '^':
	            prec = 4;
	            break;

	        case '&':
	            prec = 5;
	            break;

	        case '==':
	        case '!=':
	        case '===':
	        case '!==':
	            prec = 6;
	            break;

	        case '<':
	        case '>':
	        case '<=':
	        case '>=':
	        case 'instanceof':
	            prec = 7;
	            break;

	        case 'in':
	            prec = allowIn ? 7 : 0;
	            break;

	        case '<<':
	        case '>>':
	        case '>>>':
	            prec = 8;
	            break;

	        case '+':
	        case '-':
	            prec = 9;
	            break;

	        case '*':
	        case '/':
	        case '%':
	            prec = 11;
	            break;

	        default:
	            break;
	        }

	        return prec;
	    }

	    // ECMA-262 12.6 Multiplicative Operators
	    // ECMA-262 12.7 Additive Operators
	    // ECMA-262 12.8 Bitwise Shift Operators
	    // ECMA-262 12.9 Relational Operators
	    // ECMA-262 12.10 Equality Operators
	    // ECMA-262 12.11 Binary Bitwise Operators
	    // ECMA-262 12.12 Binary Logical Operators

	    function parseBinaryExpression() {
	        var marker, markers, expr, token, prec, stack, right, operator, left, i;

	        marker = lookahead;
	        left = inheritCoverGrammar(parseUnaryExpression);

	        token = lookahead;
	        prec = binaryPrecedence(token, state.allowIn);
	        if (prec === 0) {
	            return left;
	        }
	        isAssignmentTarget = isBindingElement = false;
	        token.prec = prec;
	        lex();

	        markers = [marker, lookahead];
	        right = isolateCoverGrammar(parseUnaryExpression);

	        stack = [left, token, right];

	        while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {

	            // Reduce: make a binary expression from the three topmost entries.
	            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
	                right = stack.pop();
	                operator = stack.pop().value;
	                left = stack.pop();
	                markers.pop();
	                expr = new WrappingNode(markers[markers.length - 1]).finishBinaryExpression(operator, left, right);
	                stack.push(expr);
	            }

	            // Shift.
	            token = lex();
	            token.prec = prec;
	            stack.push(token);
	            markers.push(lookahead);
	            expr = isolateCoverGrammar(parseUnaryExpression);
	            stack.push(expr);
	        }

	        // Final reduce to clean-up the stack.
	        i = stack.length - 1;
	        expr = stack[i];
	        markers.pop();
	        while (i > 1) {
	            expr = new WrappingNode(markers.pop()).finishBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
	            i -= 2;
	        }

	        return expr;
	    }


	    // ECMA-262 12.13 Conditional Operator

	    function parseConditionalExpression() {
	        var expr, previousAllowIn, consequent, alternate, startToken;

	        startToken = lookahead;

	        expr = inheritCoverGrammar(parseBinaryExpression);
	        if (match('?')) {
	            lex();
	            previousAllowIn = state.allowIn;
	            state.allowIn = true;
	            consequent = isolateCoverGrammar(parseAssignmentExpression);
	            state.allowIn = previousAllowIn;
	            expect(':');
	            alternate = isolateCoverGrammar(parseAssignmentExpression);

	            expr = new WrappingNode(startToken).finishConditionalExpression(expr, consequent, alternate);
	            isAssignmentTarget = isBindingElement = false;
	        }

	        return expr;
	    }

	    // ECMA-262 14.2 Arrow Function Definitions

	    function parseConciseBody() {
	        if (match('{')) {
	            return parseFunctionSourceElements();
	        }
	        return isolateCoverGrammar(parseAssignmentExpression);
	    }

	    function checkPatternParam(options, param) {
	        var i;
	        switch (param.type) {
	        case Syntax.Identifier:
	            validateParam(options, param, param.name);
	            break;
	        case Syntax.RestElement:
	            checkPatternParam(options, param.argument);
	            break;
	        case Syntax.AssignmentPattern:
	            checkPatternParam(options, param.left);
	            break;
	        case Syntax.ArrayPattern:
	            for (i = 0; i < param.elements.length; i++) {
	                if (param.elements[i] !== null) {
	                    checkPatternParam(options, param.elements[i]);
	                }
	            }
	            break;
	        case Syntax.YieldExpression:
	            break;
	        default:
	            assert(param.type === Syntax.ObjectPattern, 'Invalid type');
	            for (i = 0; i < param.properties.length; i++) {
	                checkPatternParam(options, param.properties[i].value);
	            }
	            break;
	        }
	    }
	    function reinterpretAsCoverFormalsList(expr) {
	        var i, len, param, params, defaults, defaultCount, options, token;

	        defaults = [];
	        defaultCount = 0;
	        params = [expr];

	        switch (expr.type) {
	        case Syntax.Identifier:
	            break;
	        case PlaceHolders.ArrowParameterPlaceHolder:
	            params = expr.params;
	            break;
	        default:
	            return null;
	        }

	        options = {
	            paramSet: {}
	        };

	        for (i = 0, len = params.length; i < len; i += 1) {
	            param = params[i];
	            switch (param.type) {
	            case Syntax.AssignmentPattern:
	                params[i] = param.left;
	                if (param.right.type === Syntax.YieldExpression) {
	                    if (param.right.argument) {
	                        throwUnexpectedToken(lookahead);
	                    }
	                    param.right.type = Syntax.Identifier;
	                    param.right.name = 'yield';
	                    delete param.right.argument;
	                    delete param.right.delegate;
	                }
	                defaults.push(param.right);
	                ++defaultCount;
	                checkPatternParam(options, param.left);
	                break;
	            default:
	                checkPatternParam(options, param);
	                params[i] = param;
	                defaults.push(null);
	                break;
	            }
	        }

	        if (strict || !state.allowYield) {
	            for (i = 0, len = params.length; i < len; i += 1) {
	                param = params[i];
	                if (param.type === Syntax.YieldExpression) {
	                    throwUnexpectedToken(lookahead);
	                }
	            }
	        }

	        if (options.message === Messages.StrictParamDupe) {
	            token = strict ? options.stricted : options.firstRestricted;
	            throwUnexpectedToken(token, options.message);
	        }

	        if (defaultCount === 0) {
	            defaults = [];
	        }

	        return {
	            params: params,
	            defaults: defaults,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    }

	    function parseArrowFunctionExpression(options, node) {
	        var previousStrict, previousAllowYield, body;

	        if (hasLineTerminator) {
	            tolerateUnexpectedToken(lookahead);
	        }
	        expect('=>');

	        previousStrict = strict;
	        previousAllowYield = state.allowYield;
	        state.allowYield = true;

	        body = parseConciseBody();

	        if (strict && options.firstRestricted) {
	            throwUnexpectedToken(options.firstRestricted, options.message);
	        }
	        if (strict && options.stricted) {
	            tolerateUnexpectedToken(options.stricted, options.message);
	        }

	        strict = previousStrict;
	        state.allowYield = previousAllowYield;

	        return node.finishArrowFunctionExpression(options.params, options.defaults, body, body.type !== Syntax.BlockStatement);
	    }

	    // ECMA-262 14.4 Yield expression

	    function parseYieldExpression() {
	        var argument, expr, delegate, previousAllowYield;

	        argument = null;
	        expr = new Node();
	        delegate = false;

	        expectKeyword('yield');

	        if (!hasLineTerminator) {
	            previousAllowYield = state.allowYield;
	            state.allowYield = false;
	            delegate = match('*');
	            if (delegate) {
	                lex();
	                argument = parseAssignmentExpression();
	            } else {
	                if (!match(';') && !match('}') && !match(')') && lookahead.type !== Token.EOF) {
	                    argument = parseAssignmentExpression();
	                }
	            }
	            state.allowYield = previousAllowYield;
	        }

	        return expr.finishYieldExpression(argument, delegate);
	    }

	    // ECMA-262 12.14 Assignment Operators

	    function parseAssignmentExpression() {
	        var token, expr, right, list, startToken;

	        startToken = lookahead;
	        token = lookahead;

	        if (!state.allowYield && matchKeyword('yield')) {
	            return parseYieldExpression();
	        }

	        expr = parseConditionalExpression();

	        if (expr.type === PlaceHolders.ArrowParameterPlaceHolder || match('=>')) {
	            isAssignmentTarget = isBindingElement = false;
	            list = reinterpretAsCoverFormalsList(expr);

	            if (list) {
	                firstCoverInitializedNameError = null;
	                return parseArrowFunctionExpression(list, new WrappingNode(startToken));
	            }

	            return expr;
	        }

	        if (matchAssign()) {
	            if (!isAssignmentTarget) {
	                tolerateError(Messages.InvalidLHSInAssignment);
	            }

	            // ECMA-262 12.1.1
	            if (strict && expr.type === Syntax.Identifier) {
	                if (isRestrictedWord(expr.name)) {
	                    tolerateUnexpectedToken(token, Messages.StrictLHSAssignment);
	                }
	                if (isStrictModeReservedWord(expr.name)) {
	                    tolerateUnexpectedToken(token, Messages.StrictReservedWord);
	                }
	            }

	            if (!match('=')) {
	                isAssignmentTarget = isBindingElement = false;
	            } else {
	                reinterpretExpressionAsPattern(expr);
	            }

	            token = lex();
	            right = isolateCoverGrammar(parseAssignmentExpression);
	            expr = new WrappingNode(startToken).finishAssignmentExpression(token.value, expr, right);
	            firstCoverInitializedNameError = null;
	        }

	        return expr;
	    }

	    // ECMA-262 12.15 Comma Operator

	    function parseExpression() {
	        var expr, startToken = lookahead, expressions;

	        expr = isolateCoverGrammar(parseAssignmentExpression);

	        if (match(',')) {
	            expressions = [expr];

	            while (startIndex < length) {
	                if (!match(',')) {
	                    break;
	                }
	                lex();
	                expressions.push(isolateCoverGrammar(parseAssignmentExpression));
	            }

	            expr = new WrappingNode(startToken).finishSequenceExpression(expressions);
	        }

	        return expr;
	    }

	    // ECMA-262 13.2 Block

	    function parseStatementListItem() {
	        if (lookahead.type === Token.Keyword) {
	            switch (lookahead.value) {
	            case 'export':
	                if (state.sourceType !== 'module') {
	                    tolerateUnexpectedToken(lookahead, Messages.IllegalExportDeclaration);
	                }
	                return parseExportDeclaration();
	            case 'import':
	                if (state.sourceType !== 'module') {
	                    tolerateUnexpectedToken(lookahead, Messages.IllegalImportDeclaration);
	                }
	                return parseImportDeclaration();
	            case 'const':
	                return parseLexicalDeclaration({inFor: false});
	            case 'function':
	                return parseFunctionDeclaration(new Node());
	            case 'class':
	                return parseClassDeclaration();
	            }
	        }

	        if (matchKeyword('let') && isLexicalDeclaration()) {
	            return parseLexicalDeclaration({inFor: false});
	        }

	        return parseStatement();
	    }

	    function parseStatementList() {
	        var list = [];
	        while (startIndex < length) {
	            if (match('}')) {
	                break;
	            }
	            list.push(parseStatementListItem());
	        }

	        return list;
	    }

	    function parseBlock() {
	        var block, node = new Node();

	        expect('{');

	        block = parseStatementList();

	        expect('}');

	        return node.finishBlockStatement(block);
	    }

	    // ECMA-262 13.3.2 Variable Statement

	    function parseVariableIdentifier(kind) {
	        var token, node = new Node();

	        token = lex();

	        if (token.type === Token.Keyword && token.value === 'yield') {
	            if (strict) {
	                tolerateUnexpectedToken(token, Messages.StrictReservedWord);
	            } if (!state.allowYield) {
	                throwUnexpectedToken(token);
	            }
	        } else if (token.type !== Token.Identifier) {
	            if (strict && token.type === Token.Keyword && isStrictModeReservedWord(token.value)) {
	                tolerateUnexpectedToken(token, Messages.StrictReservedWord);
	            } else {
	                if (strict || token.value !== 'let' || kind !== 'var') {
	                    throwUnexpectedToken(token);
	                }
	            }
	        } else if (state.sourceType === 'module' && token.type === Token.Identifier && token.value === 'await') {
	            tolerateUnexpectedToken(token);
	        }

	        return node.finishIdentifier(token.value);
	    }

	    function parseVariableDeclaration(options) {
	        var init = null, id, node = new Node(), params = [];

	        id = parsePattern(params, 'var');

	        // ECMA-262 12.2.1
	        if (strict && isRestrictedWord(id.name)) {
	            tolerateError(Messages.StrictVarName);
	        }

	        if (match('=')) {
	            lex();
	            init = isolateCoverGrammar(parseAssignmentExpression);
	        } else if (id.type !== Syntax.Identifier && !options.inFor) {
	            expect('=');
	        }

	        return node.finishVariableDeclarator(id, init);
	    }

	    function parseVariableDeclarationList(options) {
	        var opt, list;

	        opt = { inFor: options.inFor };
	        list = [parseVariableDeclaration(opt)];

	        while (match(',')) {
	            lex();
	            list.push(parseVariableDeclaration(opt));
	        }

	        return list;
	    }

	    function parseVariableStatement(node) {
	        var declarations;

	        expectKeyword('var');

	        declarations = parseVariableDeclarationList({ inFor: false });

	        consumeSemicolon();

	        return node.finishVariableDeclaration(declarations);
	    }

	    // ECMA-262 13.3.1 Let and Const Declarations

	    function parseLexicalBinding(kind, options) {
	        var init = null, id, node = new Node(), params = [];

	        id = parsePattern(params, kind);

	        // ECMA-262 12.2.1
	        if (strict && id.type === Syntax.Identifier && isRestrictedWord(id.name)) {
	            tolerateError(Messages.StrictVarName);
	        }

	        if (kind === 'const') {
	            if (!matchKeyword('in') && !matchContextualKeyword('of')) {
	                expect('=');
	                init = isolateCoverGrammar(parseAssignmentExpression);
	            }
	        } else if ((!options.inFor && id.type !== Syntax.Identifier) || match('=')) {
	            expect('=');
	            init = isolateCoverGrammar(parseAssignmentExpression);
	        }

	        return node.finishVariableDeclarator(id, init);
	    }

	    function parseBindingList(kind, options) {
	        var list = [parseLexicalBinding(kind, options)];

	        while (match(',')) {
	            lex();
	            list.push(parseLexicalBinding(kind, options));
	        }

	        return list;
	    }


	    function tokenizerState() {
	        return {
	            index: index,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            hasLineTerminator: hasLineTerminator,
	            lastIndex: lastIndex,
	            lastLineNumber: lastLineNumber,
	            lastLineStart: lastLineStart,
	            startIndex: startIndex,
	            startLineNumber: startLineNumber,
	            startLineStart: startLineStart,
	            lookahead: lookahead,
	            tokenCount: extra.tokens ? extra.tokens.length : 0
	        };
	    }

	    function resetTokenizerState(ts) {
	        index = ts.index;
	        lineNumber = ts.lineNumber;
	        lineStart = ts.lineStart;
	        hasLineTerminator = ts.hasLineTerminator;
	        lastIndex = ts.lastIndex;
	        lastLineNumber = ts.lastLineNumber;
	        lastLineStart = ts.lastLineStart;
	        startIndex = ts.startIndex;
	        startLineNumber = ts.startLineNumber;
	        startLineStart = ts.startLineStart;
	        lookahead = ts.lookahead;
	        if (extra.tokens) {
	            extra.tokens.splice(ts.tokenCount, extra.tokens.length);
	        }
	    }

	    function isLexicalDeclaration() {
	        var lexical, ts;

	        ts = tokenizerState();

	        lex();
	        lexical = (lookahead.type === Token.Identifier) || match('[') || match('{') ||
	            matchKeyword('let') || matchKeyword('yield');

	        resetTokenizerState(ts);

	        return lexical;
	    }

	    function parseLexicalDeclaration(options) {
	        var kind, declarations, node = new Node();

	        kind = lex().value;
	        assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');

	        declarations = parseBindingList(kind, options);

	        consumeSemicolon();

	        return node.finishLexicalDeclaration(declarations, kind);
	    }

	    function parseRestElement(params) {
	        var param, node = new Node();

	        lex();

	        if (match('{')) {
	            throwError(Messages.ObjectPatternAsRestParameter);
	        }

	        params.push(lookahead);

	        param = parseVariableIdentifier();

	        if (match('=')) {
	            throwError(Messages.DefaultRestParameter);
	        }

	        if (!match(')')) {
	            throwError(Messages.ParameterAfterRestParameter);
	        }

	        return node.finishRestElement(param);
	    }

	    // ECMA-262 13.4 Empty Statement

	    function parseEmptyStatement(node) {
	        expect(';');
	        return node.finishEmptyStatement();
	    }

	    // ECMA-262 12.4 Expression Statement

	    function parseExpressionStatement(node) {
	        var expr = parseExpression();
	        consumeSemicolon();
	        return node.finishExpressionStatement(expr);
	    }

	    // ECMA-262 13.6 If statement

	    function parseIfStatement(node) {
	        var test, consequent, alternate;

	        expectKeyword('if');

	        expect('(');

	        test = parseExpression();

	        expect(')');

	        consequent = parseStatement();

	        if (matchKeyword('else')) {
	            lex();
	            alternate = parseStatement();
	        } else {
	            alternate = null;
	        }

	        return node.finishIfStatement(test, consequent, alternate);
	    }

	    // ECMA-262 13.7 Iteration Statements

	    function parseDoWhileStatement(node) {
	        var body, test, oldInIteration;

	        expectKeyword('do');

	        oldInIteration = state.inIteration;
	        state.inIteration = true;

	        body = parseStatement();

	        state.inIteration = oldInIteration;

	        expectKeyword('while');

	        expect('(');

	        test = parseExpression();

	        expect(')');

	        if (match(';')) {
	            lex();
	        }

	        return node.finishDoWhileStatement(body, test);
	    }

	    function parseWhileStatement(node) {
	        var test, body, oldInIteration;

	        expectKeyword('while');

	        expect('(');

	        test = parseExpression();

	        expect(')');

	        oldInIteration = state.inIteration;
	        state.inIteration = true;

	        body = parseStatement();

	        state.inIteration = oldInIteration;

	        return node.finishWhileStatement(test, body);
	    }

	    function parseForStatement(node) {
	        var init, forIn, initSeq, initStartToken, test, update, left, right, kind, declarations,
	            body, oldInIteration, previousAllowIn = state.allowIn;

	        init = test = update = null;
	        forIn = true;

	        expectKeyword('for');

	        expect('(');

	        if (match(';')) {
	            lex();
	        } else {
	            if (matchKeyword('var')) {
	                init = new Node();
	                lex();

	                state.allowIn = false;
	                declarations = parseVariableDeclarationList({ inFor: true });
	                state.allowIn = previousAllowIn;

	                if (declarations.length === 1 && matchKeyword('in')) {
	                    init = init.finishVariableDeclaration(declarations);
	                    lex();
	                    left = init;
	                    right = parseExpression();
	                    init = null;
	                } else if (declarations.length === 1 && declarations[0].init === null && matchContextualKeyword('of')) {
	                    init = init.finishVariableDeclaration(declarations);
	                    lex();
	                    left = init;
	                    right = parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                } else {
	                    init = init.finishVariableDeclaration(declarations);
	                    expect(';');
	                }
	            } else if (matchKeyword('const') || matchKeyword('let')) {
	                init = new Node();
	                kind = lex().value;

	                if (!strict && lookahead.value === 'in') {
	                    init = init.finishIdentifier(kind);
	                    lex();
	                    left = init;
	                    right = parseExpression();
	                    init = null;
	                } else {
	                    state.allowIn = false;
	                    declarations = parseBindingList(kind, {inFor: true});
	                    state.allowIn = previousAllowIn;

	                    if (declarations.length === 1 && declarations[0].init === null && matchKeyword('in')) {
	                        init = init.finishLexicalDeclaration(declarations, kind);
	                        lex();
	                        left = init;
	                        right = parseExpression();
	                        init = null;
	                    } else if (declarations.length === 1 && declarations[0].init === null && matchContextualKeyword('of')) {
	                        init = init.finishLexicalDeclaration(declarations, kind);
	                        lex();
	                        left = init;
	                        right = parseAssignmentExpression();
	                        init = null;
	                        forIn = false;
	                    } else {
	                        consumeSemicolon();
	                        init = init.finishLexicalDeclaration(declarations, kind);
	                    }
	                }
	            } else {
	                initStartToken = lookahead;
	                state.allowIn = false;
	                init = inheritCoverGrammar(parseAssignmentExpression);
	                state.allowIn = previousAllowIn;

	                if (matchKeyword('in')) {
	                    if (!isAssignmentTarget) {
	                        tolerateError(Messages.InvalidLHSInForIn);
	                    }

	                    lex();
	                    reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = parseExpression();
	                    init = null;
	                } else if (matchContextualKeyword('of')) {
	                    if (!isAssignmentTarget) {
	                        tolerateError(Messages.InvalidLHSInForLoop);
	                    }

	                    lex();
	                    reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                } else {
	                    if (match(',')) {
	                        initSeq = [init];
	                        while (match(',')) {
	                            lex();
	                            initSeq.push(isolateCoverGrammar(parseAssignmentExpression));
	                        }
	                        init = new WrappingNode(initStartToken).finishSequenceExpression(initSeq);
	                    }
	                    expect(';');
	                }
	            }
	        }

	        if (typeof left === 'undefined') {

	            if (!match(';')) {
	                test = parseExpression();
	            }
	            expect(';');

	            if (!match(')')) {
	                update = parseExpression();
	            }
	        }

	        expect(')');

	        oldInIteration = state.inIteration;
	        state.inIteration = true;

	        body = isolateCoverGrammar(parseStatement);

	        state.inIteration = oldInIteration;

	        return (typeof left === 'undefined') ?
	                node.finishForStatement(init, test, update, body) :
	                forIn ? node.finishForInStatement(left, right, body) :
	                    node.finishForOfStatement(left, right, body);
	    }

	    // ECMA-262 13.8 The continue statement

	    function parseContinueStatement(node) {
	        var label = null, key;

	        expectKeyword('continue');

	        // Optimize the most common form: 'continue;'.
	        if (source.charCodeAt(startIndex) === 0x3B) {
	            lex();

	            if (!state.inIteration) {
	                throwError(Messages.IllegalContinue);
	            }

	            return node.finishContinueStatement(null);
	        }

	        if (hasLineTerminator) {
	            if (!state.inIteration) {
	                throwError(Messages.IllegalContinue);
	            }

	            return node.finishContinueStatement(null);
	        }

	        if (lookahead.type === Token.Identifier) {
	            label = parseVariableIdentifier();

	            key = '$' + label.name;
	            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
	                throwError(Messages.UnknownLabel, label.name);
	            }
	        }

	        consumeSemicolon();

	        if (label === null && !state.inIteration) {
	            throwError(Messages.IllegalContinue);
	        }

	        return node.finishContinueStatement(label);
	    }

	    // ECMA-262 13.9 The break statement

	    function parseBreakStatement(node) {
	        var label = null, key;

	        expectKeyword('break');

	        // Catch the very common case first: immediately a semicolon (U+003B).
	        if (source.charCodeAt(lastIndex) === 0x3B) {
	            lex();

	            if (!(state.inIteration || state.inSwitch)) {
	                throwError(Messages.IllegalBreak);
	            }

	            return node.finishBreakStatement(null);
	        }

	        if (hasLineTerminator) {
	            if (!(state.inIteration || state.inSwitch)) {
	                throwError(Messages.IllegalBreak);
	            }
	        } else if (lookahead.type === Token.Identifier) {
	            label = parseVariableIdentifier();

	            key = '$' + label.name;
	            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
	                throwError(Messages.UnknownLabel, label.name);
	            }
	        }

	        consumeSemicolon();

	        if (label === null && !(state.inIteration || state.inSwitch)) {
	            throwError(Messages.IllegalBreak);
	        }

	        return node.finishBreakStatement(label);
	    }

	    // ECMA-262 13.10 The return statement

	    function parseReturnStatement(node) {
	        var argument = null;

	        expectKeyword('return');

	        if (!state.inFunctionBody) {
	            tolerateError(Messages.IllegalReturn);
	        }

	        // 'return' followed by a space and an identifier is very common.
	        if (source.charCodeAt(lastIndex) === 0x20) {
	            if (isIdentifierStart(source.charCodeAt(lastIndex + 1))) {
	                argument = parseExpression();
	                consumeSemicolon();
	                return node.finishReturnStatement(argument);
	            }
	        }

	        if (hasLineTerminator) {
	            // HACK
	            return node.finishReturnStatement(null);
	        }

	        if (!match(';')) {
	            if (!match('}') && lookahead.type !== Token.EOF) {
	                argument = parseExpression();
	            }
	        }

	        consumeSemicolon();

	        return node.finishReturnStatement(argument);
	    }

	    // ECMA-262 13.11 The with statement

	    function parseWithStatement(node) {
	        var object, body;

	        if (strict) {
	            tolerateError(Messages.StrictModeWith);
	        }

	        expectKeyword('with');

	        expect('(');

	        object = parseExpression();

	        expect(')');

	        body = parseStatement();

	        return node.finishWithStatement(object, body);
	    }

	    // ECMA-262 13.12 The switch statement

	    function parseSwitchCase() {
	        var test, consequent = [], statement, node = new Node();

	        if (matchKeyword('default')) {
	            lex();
	            test = null;
	        } else {
	            expectKeyword('case');
	            test = parseExpression();
	        }
	        expect(':');

	        while (startIndex < length) {
	            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
	                break;
	            }
	            statement = parseStatementListItem();
	            consequent.push(statement);
	        }

	        return node.finishSwitchCase(test, consequent);
	    }

	    function parseSwitchStatement(node) {
	        var discriminant, cases, clause, oldInSwitch, defaultFound;

	        expectKeyword('switch');

	        expect('(');

	        discriminant = parseExpression();

	        expect(')');

	        expect('{');

	        cases = [];

	        if (match('}')) {
	            lex();
	            return node.finishSwitchStatement(discriminant, cases);
	        }

	        oldInSwitch = state.inSwitch;
	        state.inSwitch = true;
	        defaultFound = false;

	        while (startIndex < length) {
	            if (match('}')) {
	                break;
	            }
	            clause = parseSwitchCase();
	            if (clause.test === null) {
	                if (defaultFound) {
	                    throwError(Messages.MultipleDefaultsInSwitch);
	                }
	                defaultFound = true;
	            }
	            cases.push(clause);
	        }

	        state.inSwitch = oldInSwitch;

	        expect('}');

	        return node.finishSwitchStatement(discriminant, cases);
	    }

	    // ECMA-262 13.14 The throw statement

	    function parseThrowStatement(node) {
	        var argument;

	        expectKeyword('throw');

	        if (hasLineTerminator) {
	            throwError(Messages.NewlineAfterThrow);
	        }

	        argument = parseExpression();

	        consumeSemicolon();

	        return node.finishThrowStatement(argument);
	    }

	    // ECMA-262 13.15 The try statement

	    function parseCatchClause() {
	        var param, params = [], paramMap = {}, key, i, body, node = new Node();

	        expectKeyword('catch');

	        expect('(');
	        if (match(')')) {
	            throwUnexpectedToken(lookahead);
	        }

	        param = parsePattern(params);
	        for (i = 0; i < params.length; i++) {
	            key = '$' + params[i].value;
	            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
	                tolerateError(Messages.DuplicateBinding, params[i].value);
	            }
	            paramMap[key] = true;
	        }

	        // ECMA-262 12.14.1
	        if (strict && isRestrictedWord(param.name)) {
	            tolerateError(Messages.StrictCatchVariable);
	        }

	        expect(')');
	        body = parseBlock();
	        return node.finishCatchClause(param, body);
	    }

	    function parseTryStatement(node) {
	        var block, handler = null, finalizer = null;

	        expectKeyword('try');

	        block = parseBlock();

	        if (matchKeyword('catch')) {
	            handler = parseCatchClause();
	        }

	        if (matchKeyword('finally')) {
	            lex();
	            finalizer = parseBlock();
	        }

	        if (!handler && !finalizer) {
	            throwError(Messages.NoCatchOrFinally);
	        }

	        return node.finishTryStatement(block, handler, finalizer);
	    }

	    // ECMA-262 13.16 The debugger statement

	    function parseDebuggerStatement(node) {
	        expectKeyword('debugger');

	        consumeSemicolon();

	        return node.finishDebuggerStatement();
	    }

	    // 13 Statements

	    function parseStatement() {
	        var type = lookahead.type,
	            expr,
	            labeledBody,
	            key,
	            node;

	        if (type === Token.EOF) {
	            throwUnexpectedToken(lookahead);
	        }

	        if (type === Token.Punctuator && lookahead.value === '{') {
	            return parseBlock();
	        }
	        isAssignmentTarget = isBindingElement = true;
	        node = new Node();

	        if (type === Token.Punctuator) {
	            switch (lookahead.value) {
	            case ';':
	                return parseEmptyStatement(node);
	            case '(':
	                return parseExpressionStatement(node);
	            default:
	                break;
	            }
	        } else if (type === Token.Keyword) {
	            switch (lookahead.value) {
	            case 'break':
	                return parseBreakStatement(node);
	            case 'continue':
	                return parseContinueStatement(node);
	            case 'debugger':
	                return parseDebuggerStatement(node);
	            case 'do':
	                return parseDoWhileStatement(node);
	            case 'for':
	                return parseForStatement(node);
	            case 'function':
	                return parseFunctionDeclaration(node);
	            case 'if':
	                return parseIfStatement(node);
	            case 'return':
	                return parseReturnStatement(node);
	            case 'switch':
	                return parseSwitchStatement(node);
	            case 'throw':
	                return parseThrowStatement(node);
	            case 'try':
	                return parseTryStatement(node);
	            case 'var':
	                return parseVariableStatement(node);
	            case 'while':
	                return parseWhileStatement(node);
	            case 'with':
	                return parseWithStatement(node);
	            default:
	                break;
	            }
	        }

	        expr = parseExpression();

	        // ECMA-262 12.12 Labelled Statements
	        if ((expr.type === Syntax.Identifier) && match(':')) {
	            lex();

	            key = '$' + expr.name;
	            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
	                throwError(Messages.Redeclaration, 'Label', expr.name);
	            }

	            state.labelSet[key] = true;
	            labeledBody = parseStatement();
	            delete state.labelSet[key];
	            return node.finishLabeledStatement(expr, labeledBody);
	        }

	        consumeSemicolon();

	        return node.finishExpressionStatement(expr);
	    }

	    // ECMA-262 14.1 Function Definition

	    function parseFunctionSourceElements() {
	        var statement, body = [], token, directive, firstRestricted,
	            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesisCount,
	            node = new Node();

	        expect('{');

	        while (startIndex < length) {
	            if (lookahead.type !== Token.StringLiteral) {
	                break;
	            }
	            token = lookahead;

	            statement = parseStatementListItem();
	            body.push(statement);
	            if (statement.expression.type !== Syntax.Literal) {
	                // this is not directive
	                break;
	            }
	            directive = source.slice(token.start + 1, token.end - 1);
	            if (directive === 'use strict') {
	                strict = true;
	                if (firstRestricted) {
	                    tolerateUnexpectedToken(firstRestricted, Messages.StrictOctalLiteral);
	                }
	            } else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }

	        oldLabelSet = state.labelSet;
	        oldInIteration = state.inIteration;
	        oldInSwitch = state.inSwitch;
	        oldInFunctionBody = state.inFunctionBody;
	        oldParenthesisCount = state.parenthesizedCount;

	        state.labelSet = {};
	        state.inIteration = false;
	        state.inSwitch = false;
	        state.inFunctionBody = true;
	        state.parenthesizedCount = 0;

	        while (startIndex < length) {
	            if (match('}')) {
	                break;
	            }
	            body.push(parseStatementListItem());
	        }

	        expect('}');

	        state.labelSet = oldLabelSet;
	        state.inIteration = oldInIteration;
	        state.inSwitch = oldInSwitch;
	        state.inFunctionBody = oldInFunctionBody;
	        state.parenthesizedCount = oldParenthesisCount;

	        return node.finishBlockStatement(body);
	    }

	    function validateParam(options, param, name) {
	        var key = '$' + name;
	        if (strict) {
	            if (isRestrictedWord(name)) {
	                options.stricted = param;
	                options.message = Messages.StrictParamName;
	            }
	            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = Messages.StrictParamDupe;
	            }
	        } else if (!options.firstRestricted) {
	            if (isRestrictedWord(name)) {
	                options.firstRestricted = param;
	                options.message = Messages.StrictParamName;
	            } else if (isStrictModeReservedWord(name)) {
	                options.firstRestricted = param;
	                options.message = Messages.StrictReservedWord;
	            } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = Messages.StrictParamDupe;
	            }
	        }
	        options.paramSet[key] = true;
	    }

	    function parseParam(options) {
	        var token, param, params = [], i, def;

	        token = lookahead;
	        if (token.value === '...') {
	            param = parseRestElement(params);
	            validateParam(options, param.argument, param.argument.name);
	            options.params.push(param);
	            options.defaults.push(null);
	            return false;
	        }

	        param = parsePatternWithDefault(params);
	        for (i = 0; i < params.length; i++) {
	            validateParam(options, params[i], params[i].value);
	        }

	        if (param.type === Syntax.AssignmentPattern) {
	            def = param.right;
	            param = param.left;
	            ++options.defaultCount;
	        }

	        options.params.push(param);
	        options.defaults.push(def);

	        return !match(')');
	    }

	    function parseParams(firstRestricted) {
	        var options;

	        options = {
	            params: [],
	            defaultCount: 0,
	            defaults: [],
	            firstRestricted: firstRestricted
	        };

	        expect('(');

	        if (!match(')')) {
	            options.paramSet = {};
	            while (startIndex < length) {
	                if (!parseParam(options)) {
	                    break;
	                }
	                expect(',');
	            }
	        }

	        expect(')');

	        if (options.defaultCount === 0) {
	            options.defaults = [];
	        }

	        return {
	            params: options.params,
	            defaults: options.defaults,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    }

	    function parseFunctionDeclaration(node, identifierIsOptional) {
	        var id = null, params = [], defaults = [], body, token, stricted, tmp, firstRestricted, message, previousStrict,
	            isGenerator, previousAllowYield;

	        previousAllowYield = state.allowYield;

	        expectKeyword('function');

	        isGenerator = match('*');
	        if (isGenerator) {
	            lex();
	        }

	        if (!identifierIsOptional || !match('(')) {
	            token = lookahead;
	            id = parseVariableIdentifier();
	            if (strict) {
	                if (isRestrictedWord(token.value)) {
	                    tolerateUnexpectedToken(token, Messages.StrictFunctionName);
	                }
	            } else {
	                if (isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = Messages.StrictFunctionName;
	                } else if (isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = Messages.StrictReservedWord;
	                }
	            }
	        }

	        state.allowYield = !isGenerator;
	        tmp = parseParams(firstRestricted);
	        params = tmp.params;
	        defaults = tmp.defaults;
	        stricted = tmp.stricted;
	        firstRestricted = tmp.firstRestricted;
	        if (tmp.message) {
	            message = tmp.message;
	        }


	        previousStrict = strict;
	        body = parseFunctionSourceElements();
	        if (strict && firstRestricted) {
	            throwUnexpectedToken(firstRestricted, message);
	        }
	        if (strict && stricted) {
	            tolerateUnexpectedToken(stricted, message);
	        }

	        strict = previousStrict;
	        state.allowYield = previousAllowYield;

	        return node.finishFunctionDeclaration(id, params, defaults, body, isGenerator);
	    }

	    function parseFunctionExpression() {
	        var token, id = null, stricted, firstRestricted, message, tmp,
	            params = [], defaults = [], body, previousStrict, node = new Node(),
	            isGenerator, previousAllowYield;

	        previousAllowYield = state.allowYield;

	        expectKeyword('function');

	        isGenerator = match('*');
	        if (isGenerator) {
	            lex();
	        }

	        state.allowYield = !isGenerator;
	        if (!match('(')) {
	            token = lookahead;
	            id = (!strict && !isGenerator && matchKeyword('yield')) ? parseNonComputedProperty() : parseVariableIdentifier();
	            if (strict) {
	                if (isRestrictedWord(token.value)) {
	                    tolerateUnexpectedToken(token, Messages.StrictFunctionName);
	                }
	            } else {
	                if (isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = Messages.StrictFunctionName;
	                } else if (isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = Messages.StrictReservedWord;
	                }
	            }
	        }

	        tmp = parseParams(firstRestricted);
	        params = tmp.params;
	        defaults = tmp.defaults;
	        stricted = tmp.stricted;
	        firstRestricted = tmp.firstRestricted;
	        if (tmp.message) {
	            message = tmp.message;
	        }

	        previousStrict = strict;
	        body = parseFunctionSourceElements();
	        if (strict && firstRestricted) {
	            throwUnexpectedToken(firstRestricted, message);
	        }
	        if (strict && stricted) {
	            tolerateUnexpectedToken(stricted, message);
	        }
	        strict = previousStrict;
	        state.allowYield = previousAllowYield;

	        return node.finishFunctionExpression(id, params, defaults, body, isGenerator);
	    }

	    // ECMA-262 14.5 Class Definitions

	    function parseClassBody() {
	        var classBody, token, isStatic, hasConstructor = false, body, method, computed, key;

	        classBody = new Node();

	        expect('{');
	        body = [];
	        while (!match('}')) {
	            if (match(';')) {
	                lex();
	            } else {
	                method = new Node();
	                token = lookahead;
	                isStatic = false;
	                computed = match('[');
	                if (match('*')) {
	                    lex();
	                } else {
	                    key = parseObjectPropertyKey();
	                    if (key.name === 'static' && (lookaheadPropertyName() || match('*'))) {
	                        token = lookahead;
	                        isStatic = true;
	                        computed = match('[');
	                        if (match('*')) {
	                            lex();
	                        } else {
	                            key = parseObjectPropertyKey();
	                        }
	                    }
	                }
	                method = tryParseMethodDefinition(token, key, computed, method);
	                if (method) {
	                    method['static'] = isStatic; // jscs:ignore requireDotNotation
	                    if (method.kind === 'init') {
	                        method.kind = 'method';
	                    }
	                    if (!isStatic) {
	                        if (!method.computed && (method.key.name || method.key.value.toString()) === 'constructor') {
	                            if (method.kind !== 'method' || !method.method || method.value.generator) {
	                                throwUnexpectedToken(token, Messages.ConstructorSpecialMethod);
	                            }
	                            if (hasConstructor) {
	                                throwUnexpectedToken(token, Messages.DuplicateConstructor);
	                            } else {
	                                hasConstructor = true;
	                            }
	                            method.kind = 'constructor';
	                        }
	                    } else {
	                        if (!method.computed && (method.key.name || method.key.value.toString()) === 'prototype') {
	                            throwUnexpectedToken(token, Messages.StaticPrototype);
	                        }
	                    }
	                    method.type = Syntax.MethodDefinition;
	                    delete method.method;
	                    delete method.shorthand;
	                    body.push(method);
	                } else {
	                    throwUnexpectedToken(lookahead);
	                }
	            }
	        }
	        lex();
	        return classBody.finishClassBody(body);
	    }

	    function parseClassDeclaration(identifierIsOptional) {
	        var id = null, superClass = null, classNode = new Node(), classBody, previousStrict = strict;
	        strict = true;

	        expectKeyword('class');

	        if (!identifierIsOptional || lookahead.type === Token.Identifier) {
	            id = parseVariableIdentifier();
	        }

	        if (matchKeyword('extends')) {
	            lex();
	            superClass = isolateCoverGrammar(parseLeftHandSideExpressionAllowCall);
	        }
	        classBody = parseClassBody();
	        strict = previousStrict;

	        return classNode.finishClassDeclaration(id, superClass, classBody);
	    }

	    function parseClassExpression() {
	        var id = null, superClass = null, classNode = new Node(), classBody, previousStrict = strict;
	        strict = true;

	        expectKeyword('class');

	        if (lookahead.type === Token.Identifier) {
	            id = parseVariableIdentifier();
	        }

	        if (matchKeyword('extends')) {
	            lex();
	            superClass = isolateCoverGrammar(parseLeftHandSideExpressionAllowCall);
	        }
	        classBody = parseClassBody();
	        strict = previousStrict;

	        return classNode.finishClassExpression(id, superClass, classBody);
	    }

	    // ECMA-262 15.2 Modules

	    function parseModuleSpecifier() {
	        var node = new Node();

	        if (lookahead.type !== Token.StringLiteral) {
	            throwError(Messages.InvalidModuleSpecifier);
	        }
	        return node.finishLiteral(lex());
	    }

	    // ECMA-262 15.2.3 Exports

	    function parseExportSpecifier() {
	        var exported, local, node = new Node(), def;
	        if (matchKeyword('default')) {
	            // export {default} from 'something';
	            def = new Node();
	            lex();
	            local = def.finishIdentifier('default');
	        } else {
	            local = parseVariableIdentifier();
	        }
	        if (matchContextualKeyword('as')) {
	            lex();
	            exported = parseNonComputedProperty();
	        }
	        return node.finishExportSpecifier(local, exported);
	    }

	    function parseExportNamedDeclaration(node) {
	        var declaration = null,
	            isExportFromIdentifier,
	            src = null, specifiers = [];

	        // non-default export
	        if (lookahead.type === Token.Keyword) {
	            // covers:
	            // export var f = 1;
	            switch (lookahead.value) {
	                case 'let':
	                case 'const':
	                    declaration = parseLexicalDeclaration({inFor: false});
	                    return node.finishExportNamedDeclaration(declaration, specifiers, null);
	                case 'var':
	                case 'class':
	                case 'function':
	                    declaration = parseStatementListItem();
	                    return node.finishExportNamedDeclaration(declaration, specifiers, null);
	            }
	        }

	        expect('{');
	        while (!match('}')) {
	            isExportFromIdentifier = isExportFromIdentifier || matchKeyword('default');
	            specifiers.push(parseExportSpecifier());
	            if (!match('}')) {
	                expect(',');
	                if (match('}')) {
	                    break;
	                }
	            }
	        }
	        expect('}');

	        if (matchContextualKeyword('from')) {
	            // covering:
	            // export {default} from 'foo';
	            // export {foo} from 'foo';
	            lex();
	            src = parseModuleSpecifier();
	            consumeSemicolon();
	        } else if (isExportFromIdentifier) {
	            // covering:
	            // export {default}; // missing fromClause
	            throwError(lookahead.value ?
	                    Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
	        } else {
	            // cover
	            // export {foo};
	            consumeSemicolon();
	        }
	        return node.finishExportNamedDeclaration(declaration, specifiers, src);
	    }

	    function parseExportDefaultDeclaration(node) {
	        var declaration = null,
	            expression = null;

	        // covers:
	        // export default ...
	        expectKeyword('default');

	        if (matchKeyword('function')) {
	            // covers:
	            // export default function foo () {}
	            // export default function () {}
	            declaration = parseFunctionDeclaration(new Node(), true);
	            return node.finishExportDefaultDeclaration(declaration);
	        }
	        if (matchKeyword('class')) {
	            declaration = parseClassDeclaration(true);
	            return node.finishExportDefaultDeclaration(declaration);
	        }

	        if (matchContextualKeyword('from')) {
	            throwError(Messages.UnexpectedToken, lookahead.value);
	        }

	        // covers:
	        // export default {};
	        // export default [];
	        // export default (1 + 2);
	        if (match('{')) {
	            expression = parseObjectInitializer();
	        } else if (match('[')) {
	            expression = parseArrayInitializer();
	        } else {
	            expression = parseAssignmentExpression();
	        }
	        consumeSemicolon();
	        return node.finishExportDefaultDeclaration(expression);
	    }

	    function parseExportAllDeclaration(node) {
	        var src;

	        // covers:
	        // export * from 'foo';
	        expect('*');
	        if (!matchContextualKeyword('from')) {
	            throwError(lookahead.value ?
	                    Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
	        }
	        lex();
	        src = parseModuleSpecifier();
	        consumeSemicolon();

	        return node.finishExportAllDeclaration(src);
	    }

	    function parseExportDeclaration() {
	        var node = new Node();
	        if (state.inFunctionBody) {
	            throwError(Messages.IllegalExportDeclaration);
	        }

	        expectKeyword('export');

	        if (matchKeyword('default')) {
	            return parseExportDefaultDeclaration(node);
	        }
	        if (match('*')) {
	            return parseExportAllDeclaration(node);
	        }
	        return parseExportNamedDeclaration(node);
	    }

	    // ECMA-262 15.2.2 Imports

	    function parseImportSpecifier() {
	        // import {<foo as bar>} ...;
	        var local, imported, node = new Node();

	        imported = parseNonComputedProperty();
	        if (matchContextualKeyword('as')) {
	            lex();
	            local = parseVariableIdentifier();
	        }

	        return node.finishImportSpecifier(local, imported);
	    }

	    function parseNamedImports() {
	        var specifiers = [];
	        // {foo, bar as bas}
	        expect('{');
	        while (!match('}')) {
	            specifiers.push(parseImportSpecifier());
	            if (!match('}')) {
	                expect(',');
	                if (match('}')) {
	                    break;
	                }
	            }
	        }
	        expect('}');
	        return specifiers;
	    }

	    function parseImportDefaultSpecifier() {
	        // import <foo> ...;
	        var local, node = new Node();

	        local = parseNonComputedProperty();

	        return node.finishImportDefaultSpecifier(local);
	    }

	    function parseImportNamespaceSpecifier() {
	        // import <* as foo> ...;
	        var local, node = new Node();

	        expect('*');
	        if (!matchContextualKeyword('as')) {
	            throwError(Messages.NoAsAfterImportNamespace);
	        }
	        lex();
	        local = parseNonComputedProperty();

	        return node.finishImportNamespaceSpecifier(local);
	    }

	    function parseImportDeclaration() {
	        var specifiers = [], src, node = new Node();

	        if (state.inFunctionBody) {
	            throwError(Messages.IllegalImportDeclaration);
	        }

	        expectKeyword('import');

	        if (lookahead.type === Token.StringLiteral) {
	            // import 'foo';
	            src = parseModuleSpecifier();
	        } else {

	            if (match('{')) {
	                // import {bar}
	                specifiers = specifiers.concat(parseNamedImports());
	            } else if (match('*')) {
	                // import * as foo
	                specifiers.push(parseImportNamespaceSpecifier());
	            } else if (isIdentifierName(lookahead) && !matchKeyword('default')) {
	                // import foo
	                specifiers.push(parseImportDefaultSpecifier());
	                if (match(',')) {
	                    lex();
	                    if (match('*')) {
	                        // import foo, * as foo
	                        specifiers.push(parseImportNamespaceSpecifier());
	                    } else if (match('{')) {
	                        // import foo, {bar}
	                        specifiers = specifiers.concat(parseNamedImports());
	                    } else {
	                        throwUnexpectedToken(lookahead);
	                    }
	                }
	            } else {
	                throwUnexpectedToken(lex());
	            }

	            if (!matchContextualKeyword('from')) {
	                throwError(lookahead.value ?
	                        Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
	            }
	            lex();
	            src = parseModuleSpecifier();
	        }

	        consumeSemicolon();
	        return node.finishImportDeclaration(specifiers, src);
	    }

	    // ECMA-262 15.1 Scripts

	    function parseScriptBody() {
	        var statement, body = [], token, directive, firstRestricted;

	        while (startIndex < length) {
	            token = lookahead;
	            if (token.type !== Token.StringLiteral) {
	                break;
	            }

	            statement = parseStatementListItem();
	            body.push(statement);
	            if (statement.expression.type !== Syntax.Literal) {
	                // this is not directive
	                break;
	            }
	            directive = source.slice(token.start + 1, token.end - 1);
	            if (directive === 'use strict') {
	                strict = true;
	                if (firstRestricted) {
	                    tolerateUnexpectedToken(firstRestricted, Messages.StrictOctalLiteral);
	                }
	            } else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }

	        while (startIndex < length) {
	            statement = parseStatementListItem();
	            /* istanbul ignore if */
	            if (typeof statement === 'undefined') {
	                break;
	            }
	            body.push(statement);
	        }
	        return body;
	    }

	    function parseProgram() {
	        var body, node;

	        peek();
	        node = new Node();

	        body = parseScriptBody();
	        return node.finishProgram(body, state.sourceType);
	    }

	    function filterTokenLocation() {
	        var i, entry, token, tokens = [];

	        for (i = 0; i < extra.tokens.length; ++i) {
	            entry = extra.tokens[i];
	            token = {
	                type: entry.type,
	                value: entry.value
	            };
	            if (entry.regex) {
	                token.regex = {
	                    pattern: entry.regex.pattern,
	                    flags: entry.regex.flags
	                };
	            }
	            if (extra.range) {
	                token.range = entry.range;
	            }
	            if (extra.loc) {
	                token.loc = entry.loc;
	            }
	            tokens.push(token);
	        }

	        extra.tokens = tokens;
	    }

	    function tokenize(code, options, delegate) {
	        var toString,
	            tokens;

	        toString = String;
	        if (typeof code !== 'string' && !(code instanceof String)) {
	            code = toString(code);
	        }

	        source = code;
	        index = 0;
	        lineNumber = (source.length > 0) ? 1 : 0;
	        lineStart = 0;
	        startIndex = index;
	        startLineNumber = lineNumber;
	        startLineStart = lineStart;
	        length = source.length;
	        lookahead = null;
	        state = {
	            allowIn: true,
	            allowYield: true,
	            labelSet: {},
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            lastCommentStart: -1,
	            curlyStack: []
	        };

	        extra = {};

	        // Options matching.
	        options = options || {};

	        // Of course we collect tokens here.
	        options.tokens = true;
	        extra.tokens = [];
	        extra.tokenValues = [];
	        extra.tokenize = true;
	        extra.delegate = delegate;

	        // The following two fields are necessary to compute the Regex tokens.
	        extra.openParenToken = -1;
	        extra.openCurlyToken = -1;

	        extra.range = (typeof options.range === 'boolean') && options.range;
	        extra.loc = (typeof options.loc === 'boolean') && options.loc;

	        if (typeof options.comment === 'boolean' && options.comment) {
	            extra.comments = [];
	        }
	        if (typeof options.tolerant === 'boolean' && options.tolerant) {
	            extra.errors = [];
	        }

	        try {
	            peek();
	            if (lookahead.type === Token.EOF) {
	                return extra.tokens;
	            }

	            lex();
	            while (lookahead.type !== Token.EOF) {
	                try {
	                    lex();
	                } catch (lexError) {
	                    if (extra.errors) {
	                        recordError(lexError);
	                        // We have to break on the first error
	                        // to avoid infinite loops.
	                        break;
	                    } else {
	                        throw lexError;
	                    }
	                }
	            }

	            tokens = extra.tokens;
	            if (typeof extra.errors !== 'undefined') {
	                tokens.errors = extra.errors;
	            }
	        } catch (e) {
	            throw e;
	        } finally {
	            extra = {};
	        }
	        return tokens;
	    }

	    function parse(code, options) {
	        var program, toString;

	        toString = String;
	        if (typeof code !== 'string' && !(code instanceof String)) {
	            code = toString(code);
	        }

	        source = code;
	        index = 0;
	        lineNumber = (source.length > 0) ? 1 : 0;
	        lineStart = 0;
	        startIndex = index;
	        startLineNumber = lineNumber;
	        startLineStart = lineStart;
	        length = source.length;
	        lookahead = null;
	        state = {
	            allowIn: true,
	            allowYield: true,
	            labelSet: {},
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            lastCommentStart: -1,
	            curlyStack: [],
	            sourceType: 'script'
	        };
	        strict = false;

	        extra = {};
	        if (typeof options !== 'undefined') {
	            extra.range = (typeof options.range === 'boolean') && options.range;
	            extra.loc = (typeof options.loc === 'boolean') && options.loc;
	            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

	            if (extra.loc && options.source !== null && options.source !== undefined) {
	                extra.source = toString(options.source);
	            }

	            if (typeof options.tokens === 'boolean' && options.tokens) {
	                extra.tokens = [];
	            }
	            if (typeof options.comment === 'boolean' && options.comment) {
	                extra.comments = [];
	            }
	            if (typeof options.tolerant === 'boolean' && options.tolerant) {
	                extra.errors = [];
	            }
	            if (extra.attachComment) {
	                extra.range = true;
	                extra.comments = [];
	                extra.bottomRightStack = [];
	                extra.trailingComments = [];
	                extra.leadingComments = [];
	            }
	            if (options.sourceType === 'module') {
	                // very restrictive condition for now
	                state.sourceType = options.sourceType;
	                strict = true;
	            }
	        }

	        try {
	            program = parseProgram();
	            if (typeof extra.comments !== 'undefined') {
	                program.comments = extra.comments;
	            }
	            if (typeof extra.tokens !== 'undefined') {
	                filterTokenLocation();
	                program.tokens = extra.tokens;
	            }
	            if (typeof extra.errors !== 'undefined') {
	                program.errors = extra.errors;
	            }
	        } catch (e) {
	            throw e;
	        } finally {
	            extra = {};
	        }

	        return program;
	    }

	    // Sync with *.json manifests.
	    exports.version = '2.7.1';

	    exports.tokenize = tokenize;

	    exports.parse = parse;

	    // Deep copy.
	    /* istanbul ignore next */
	    exports.Syntax = (function () {
	        var name, types = {};

	        if (typeof Object.create === 'function') {
	            types = Object.create(null);
	        }

	        for (name in Syntax) {
	            if (Syntax.hasOwnProperty(name)) {
	                types[name] = Syntax[name];
	            }
	        }

	        if (typeof Object.freeze === 'function') {
	            Object.freeze(types);
	        }

	        return types;
	    }());

	}));
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};



/***/ },
/* 49 */
/***/ function(module, exports) {

	
	/**
	 * Expose `parse`.
	 */

	module.exports = parse;

	/**
	 * Tests for browser support.
	 */

	var innerHTMLBug = false;
	var bugTestDiv;
	if (typeof document !== 'undefined') {
	  bugTestDiv = document.createElement('div');
	  // Setup
	  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
	  // Make sure that link elements get serialized correctly by innerHTML
	  // This requires a wrapper element in IE
	  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
	  bugTestDiv = undefined;
	}

	/**
	 * Wrap map from jquery.
	 */

	var map = {
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  // for script/link/style tags to work in IE6-8, you have to wrap
	  // in a div with a non-whitespace character in front, ha!
	  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
	};

	map.td =
	map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option =
	map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>'];

	map.polyline =
	map.ellipse =
	map.polygon =
	map.circle =
	map.text =
	map.line =
	map.path =
	map.rect =
	map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

	/**
	 * Parse `html` and return a DOM Node instance, which could be a TextNode,
	 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
	 * instance, depending on the contents of the `html` string.
	 *
	 * @param {String} html - HTML string to "domify"
	 * @param {Document} doc - The `document` instance to create the Node for
	 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
	 * @api private
	 */

	function parse(html, doc) {
	  if ('string' != typeof html) throw new TypeError('String expected');

	  // default to the global `document` object
	  if (!doc) doc = document;

	  // tag name
	  var m = /<([\w:]+)/.exec(html);
	  if (!m) return doc.createTextNode(html);

	  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

	  var tag = m[1];

	  // body support
	  if (tag == 'body') {
	    var el = doc.createElement('html');
	    el.innerHTML = html;
	    return el.removeChild(el.lastChild);
	  }

	  // wrap map
	  var wrap = map[tag] || map._default;
	  var depth = wrap[0];
	  var prefix = wrap[1];
	  var suffix = wrap[2];
	  var el = doc.createElement('div');
	  el.innerHTML = prefix + html + suffix;
	  while (depth--) el = el.lastChild;

	  // one element
	  if (el.firstChild == el.lastChild) {
	    return el.removeChild(el.firstChild);
	  }

	  // several elements
	  var fragment = doc.createDocumentFragment();
	  while (el.firstChild) {
	    fragment.appendChild(el.removeChild(el.firstChild));
	  }

	  return fragment;
	}


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	/*
	Dragon.Events

	Fork of Exoskeleton's events: https://github.com/paulmillr/exoskeleton/blob/master/exoskeleton.js
	*/

	// Regular expression used to split event strings.

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var eventSplitter = /\s+/;

	/*
	Implement fancy features of the Events API such as multiple event
	names `"change blur"` and jQuery-style event maps `{change: action}`
	in terms of the existing API.
	*/

	var eventsApi = function eventsApi(obj, action, name, rest) {
	  if (!name) return true;

	  // Handle event maps.
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var key in name) {
	      obj[action].apply(obj, [key, name[key]].concat(rest));
	    }
	    return false;
	  }

	  // Handle space separated event names.
	  if (eventSplitter.test(name)) {
	    var names = name.split(eventSplitter);
	    for (var i = 0, l = names.length; i < l; i++) {
	      obj[action].apply(obj, [names[i]].concat(rest));
	    }
	    return false;
	  }

	  return true;
	};

	var triggerEvents = function triggerEvents(events, args) {

	  var ev,
	      i = -1,
	      l = events.length,
	      a1 = args[0],
	      a2 = args[1],
	      a3 = args[2];

	  switch (args.length) {

	    case 0:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx);
	      }return;
	    case 1:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx, a1);
	      }return;
	    case 2:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx, a1, a2);
	      }return;
	    case 3:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
	      }return;

	    default:
	      while (++i < l) {
	        (ev = events[i]).callback.apply(ev.ctx, args);
	      }return;
	  }
	};

	var listenMethods = { listenTo: 'on', listenToOnce: 'once' };

	var Events = {

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  on: function on(name, callback, context) {

	    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;

	    this._events || (this._events = {});

	    var events = this._events[name] || (this._events[name] = []);

	    events.push({ callback: callback, context: context, ctx: context || this });

	    return this;
	  },

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, it will be removed.
	  once: function once(name, callback, context) {

	    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;

	    var _this = this,
	        ran;

	    var once = function once() {
	      if (ran) return;

	      ran = true;

	      _this.off(name, once);

	      callback.apply(this, arguments);
	    };

	    once._callback = callback;

	    return this.on(name, once, context);
	  },

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  off: function off(name, callback, context) {
	    var retain, ev, events, names, i, l, j, k;
	    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	    if (!name && !callback && !context) {
	      this._events = void 0;
	      return this;
	    }
	    names = name ? [name] : Object.keys(this._events);
	    for (i = 0, l = names.length; i < l; i++) {
	      name = names[i];
	      if (events = this._events[name]) {
	        this._events[name] = retain = [];
	        if (callback || context) {
	          for (j = 0, k = events.length; j < k; j++) {
	            ev = events[j];
	            if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
	              retain.push(ev);
	            }
	          }
	        }
	        if (!retain.length) delete this._events[name];
	      }
	    }

	    return this;
	  },

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  trigger: function trigger(name) {
	    if (!this._events) return this;

	    var args = Array.prototype.slice.call(arguments, 1);

	    if (!eventsApi(this, 'trigger', name, args)) return this;

	    var events = this._events[name];
	    var allEvents = this._events.all;

	    if (events) triggerEvents(events, args);
	    if (allEvents) triggerEvents(allEvents, arguments);

	    return this;
	  },

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  stopListening: function stopListening(obj, name, callback) {
	    var listeningTo = this._listeningTo;

	    if (!listeningTo) return this;

	    var remove = !name && !callback;

	    if (!callback && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') callback = this;

	    if (obj) (listeningTo = {})[obj._listenId] = obj;

	    for (var id in listeningTo) {
	      obj = listeningTo[id];
	      obj.off(name, callback, this);

	      if (remove || !Object.keys(obj._events).length) delete this._listeningTo[id];
	    }

	    return this;
	  }

	};

	// Inversion-of-control versions of `on` and `once`. Tell *this* object to
	// listen to an event in another object ... keeping track of what it's
	// listening to.
	Object.keys(listenMethods).forEach(function (method) {

	  var implementation = listenMethods[method];

	  Events[method] = function (obj, name, callback) {
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));

	    listeningTo[id] = obj;

	    if (!callback && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') callback = this;

	    obj[implementation](name, callback, this);

	    return this;
	  };
	});

	module.exports = Events;

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	var Utils = {};

	Utils.uid = {};

	Utils.clone = function (o) {

	  if (typeof o == 'string') {
	    var t = { o: o };

	    o = JSON.parse(JSON.stringify(t)).o;
	  } else {

	    o = JSON.parse(JSON.stringify(o));
	  }

	  return o;
	};

	Utils.dispose = function (_this) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (_this.disposed || _this.indisposable && options.force !== true) return;

	  Object.keys(_this).forEach(function (property) {

	    /*
	    Sometimes a property is passed in from a parent, and parent would be happy to not have property deleted by child
	    */
	    if (options.ignore && options.ignoreProperties.indexOf(property) > -1) return;

	    if (_this && _this[property] && typeof _this[property].dispose == 'function') {

	      _this[property].dispose();

	      delete _this[property];
	    }
	  });

	  _this.disposed = true;

	  // Winter is coming
	  Object.freeze(_this);
	};

	Utils.log = function () {

	  if (this._debug) console.log.apply(console, arguments);
	};

	/*
	Dragon.Utils.uniqueId

	Fork of Exoskeleton's uniqueId: https://github.com/paulmillr/exoskeleton/blob/master/exoskeleton.js
	*/
	var idCounter = 0;

	Utils.uniqueId = function (_this) {

	  ++idCounter;

	  var id = 'u' + idCounter;

	  //var uid = prefix ? prefix + id : id
	  var uid = id;

	  return uid;
	};

	module.exports = Utils;

/***/ }
/******/ ]);