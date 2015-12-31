webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Polyfills
	// TODO: which of these are still needed?

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.View = undefined;

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	var _base = __webpack_require__(8);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dragon = {
	  //CollectionView : require('./dragon/views/collectionView'),
	  //Composer       : require('./dragon/composition/composer'),
	  //Composition    : require('./dragon/composition/composition'),
	  //Dispatcher     : require('./dragon/router/dispatcher'),
	  //EventBroker    : require('./dragon/lib/eventBroker'),
	  //mediator       : require('./dragon/mediator/mediator'),
	  //Layout         : require('./dragon/views/layout'),
	  //SyncMachine    : require('./dragon/models/syncMachine'),
	  //Application    : require('./dragon/application/base'),
	  //Collection     : require('./dragon/collections/base'),
	  //Component      : require('./dragon/components/base'),
	  //ComponentAPI   : require('./dragon/components/api'),
	  //Controller     : require('./dragon/controllers/base'),
	  //Events         : require('./dragon/events'),
	  //Model          : require('./dragon/models/base'),
	  //Router         : require('./dragon/router/base'),
	  //Utils          : require('./dragon/utils'),
	  View: _base2.default
	};

	exports.View = _base2.default;
	exports.default = Dragon;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {

	  Element.prototype.remove = function () {

	    this.parentElement.removeChild(this);
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {

	  Node.prototype.prependChild = function (el) {

	    if (this.childNodes[1]) {

	      this.insertBefore(el, this.childNodes[1]);
	    } else {

	      this.appendChild(el);
	    }
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {

	  NodeList.prototype.querySelectorAll = function (selector) {

	    var fragment = document.createDocumentFragment();

	    for (var i = 0; i < this.length; i++) {
	      fragment.appendChild(this[i].cloneNode(true));
	    }

	    return fragment.querySelectorAll(selector);
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {

	  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {

	    for (var i = 0, len = this.length; i < len; i++) {

	      if (this[i] && this[i].parentElement) {

	        this[i].parentElement.removeChild(this[i]);
	      }
	    }
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	/*
	@name Object.assign
	@desc ES6 Object.assign polyfill
	@source https://github.com/sindresorhus/object-assign
	*/

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	Object.assign = function (target, source) {
		var pendingException, from, keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				try {
					to[keys[i]] = from[keys[i]];
				} catch (err) {
					if (pendingException === undefined) {
						pendingException = err;
					}
				}
			}
		}

		if (pendingException) {
			throw pendingException;
		}

		return to;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/*! https://mths.be/array-from v0.2.0 by @mathias */
	if (!Array.from) {
		(function () {
			'use strict';

			var defineProperty = (function () {
				// IE 8 only supports `Object.defineProperty` on DOM elements.
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch (error) {}
				return result || function put(object, key, descriptor) {
					object[key] = descriptor.value;
				};
			})();
			var toStr = Object.prototype.toString;
			var isCallable = function isCallable(fn) {
				// In a perfect world, the `typeof` check would be sufficient. However,
				// in Chrome 1–12, `typeof /x/ == 'object'`, and in IE 6–8
				// `typeof alert == 'object'` and similar for other host objects.
				return typeof fn == 'function' || toStr.call(fn) == '[object Function]';
			};
			var toInteger = function toInteger(value) {
				var number = Number(value);
				if (isNaN(number)) {
					return 0;
				}
				if (number == 0 || !isFinite(number)) {
					return number;
				}
				return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
			};
			var maxSafeInteger = Math.pow(2, 53) - 1;
			var toLength = function toLength(value) {
				var len = toInteger(value);
				return Math.min(Math.max(len, 0), maxSafeInteger);
			};
			var from = function from(arrayLike) {
				var C = this;
				if (arrayLike == null) {
					throw new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');
				}
				var items = Object(arrayLike);
				var mapping = arguments.length > 1;

				var mapFn, T;
				if (arguments.length > 1) {
					mapFn = arguments[1];
					if (!isCallable(mapFn)) {
						throw new TypeError('When provided, the second argument to `Array.from` must be a function');
					}
					if (arguments.length > 2) {
						T = arguments[2];
					}
				}

				var len = toLength(items.length);
				var A = isCallable(C) ? Object(new C(len)) : new Array(len);
				var k = 0;
				var kValue, mappedValue;
				while (k < len) {
					kValue = items[k];
					if (mapFn) {
						mappedValue = typeof T == 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
					} else {
						mappedValue = kValue;
					}
					defineProperty(A, k, {
						'value': mappedValue,
						'configurable': true,
						'enumerable': true
					});
					++k;
				}
				A.length = len;
				return A;
			};
			defineProperty(Array, 'from', {
				'value': from,
				'configurable': true,
				'writable': true
			});
		})();
	}

/***/ }
]);