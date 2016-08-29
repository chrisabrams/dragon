'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import {createContainer}  from 'f12-stardux'
import {Parser, Template} from 'f12-starplate'
import EventEmitter       from '../events'
import mixin              from '../mixin'
import utils              from '../utils'

var stardux = require('f12-stardux')

// Thanks: http://stackoverflow.com/questions/7238177/detect-htmlcollection-nodelist-in-javascript
function isNodeList(nodes) {
  var stringRepr = Object.prototype.toString.call(nodes)

  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
    (typeof nodes.length === 'number') &&
    (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
}

/**
 * View Class
 *
 * @public
 * @class View
 */
class View {

  /**
   * View constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  constructor(options = {}) {

    /**
     * View UID
     *
     * @private
     * @type {String}
     */
    this.uid = utils.uniqueId(this)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    /**
     * Event Emitter's emit method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    /**
     * Event Emitter's on method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.on    = (evt, listener) => {
      eventEmitter.addListener.call(eventEmitter, evt, listener.bind(this))
    }
    /**
     * Event Emitter's once method.
     * @type {Function}
     * @extend {EventEmitter}
     */
     this.once  = (evt, listener) => {
       eventEmitter.addOnceListener.call(eventEmitter, evt, listener.bind(this))
     }
    /**
     * Event Emitter's off method.
     * @type {Function}
     * @extend {EventEmitter}
     */
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    /**
     * Whether the view attached to the DOM
     * @type {Boolean}
     * @private
     */
    this.attached = false

    /**
     * Whether to attach the view on initialization
     * @type {Boolean}
     */
    this.attachOnInit = true

    /**
     * Determines where the view is attached into the container
     * @type {String}
     */
    this.attachPlacement = 'after'

    /**
     * Whether to bind data from Incremental DOM to the view on initialization.
     * @type {Boolean}
     */
    this.bindDataOnInit = true

    /**
     * Whether the view has been disposed of.
     * @type {Boolean}
     * @private
     */
    this.disposed = false

    /**
     * Whether to render the view's template(s) on initialization
     * @type {Boolean}
     */
    this.renderOnInit = true

    //this._childContainers = {}
    /**
     * Events attached to the view
     * @type {Array}
     * @private
     */
    this._events    = []
    /**
     * Listeners attached to the view
     * @type {Array}
     * @private
     */
    this._listeners = []
    /**
     * Partial templates available to use in the reducer
     * @type {Object}
     * @private
     */
    this._partials  = {}
    /**
     * Sub views attached to the view
     * @type {Object}
     * @private
     */
    this._views     = {}

    this.assignOptions(options)

    //this.setProperties()

    //this.ensureElement()
    this.ensureContainer()

    if(this.options.idom instanceof createContainer) {
      //this.$container =
      //TODO: figure out how to get $container from an already created container
      this.idom = this.options.idom
      this.attached = true // Since the idom container is being passed in, we assume it's been attached (although I guess its possible it hasn't been)
    }

    if(!this.attached && this.attachOnInit) {

      this.once('render', () => {

        this.attach()

      })

    }

    if(this.bindDataOnInit && (
      this.model ||
      this.models ||
      this.collection ||
      this.collections
    )) {
      this.bindDataOnChange()
    }

    if(this.renderOnInit) this.render()

  }

  addedToDOM() {
    // Intended to be over-written
  }

  /*
  @method attach
  @type Function
  @return this
  @desc Attaches the view to the DOM
  */

  assignOptions(options = {}) {

    // Object.assign is used so that options passed into parent constructor are not lost when child is disposed
    this.options = Object.assign({}, options)

    if(this.options.partials) {

      Object.keys(this.options.partials).forEach( (key) => {
        this.partial(key, this.options.partials[key])
      })
      //delete this.options.partials
    }

    Object.keys(this.options).forEach( (option) => {

      if(this.directOptions && this.directOptions.indexOf(option) > -1) {

        this[option] = options[option]

      }

      else {

        this.options[option] = options[option]

      }

    })

  }

  attach() {

    try {

      /*
      Can't use .forEach() on NodeLists
      Tempting to use NodeList.prototype.forEach = Array.prototype.forEach but that's a no no
      See for basic info: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
      See this guy (which I ignore) for a super long list of reasons: http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
      */

      Array.prototype.forEach.call(this.$container, ($container) => {

        var placement;

        switch(this.attachPlacement) {

          // Attach before all other children in container
          case 'first'   : $container['prependChild'](this.el); break;
          case 'prepend' : $container['prependChild'](this.el); break;

          // Attach normally, after all children in container
          default: $container['appendChild'](this.el)

        }

      })

    }

    catch(e) {

      console.error(e)

    }

    /*if(!this.$el) {
      this.setElement()
    }*/

    this.attached = true

    this.emit('addedToDOM')
    if(this.onAddedToDOM) this.onAddedToDOM()

    return this

  }

  bindDataOnChange() {

    if(this.model && this.model.on)           this.model.on('change', this.render.bind(this))
    if(this.collection && this.collection.on) this.collection.on('change', this.render.bind(this))

    if(this.models) {
      Object.keys(this.models).forEach( (key) => {
        this.models[key].on('change', () => {
          this.render.call(this)
        })
      })
    }

    if(this.collections) {
      Object.keys(this.collections).forEach( (key) => {
        this.collections[key].on('change', () => {
          this.render.call(this)
        })
      })
    }

  }

  bindEvent() {

    if(typeof arguments[2] == 'undefined') throw new Error(`Event "${arguments[0]}" on ${this.constructor.name} requires callback`)

    var action  = arguments[0],
        handler = arguments[arguments.length - 1].bind(this)

    switch(arguments.length) {

      case 3:

        var $selector = arguments[1]

        Array.prototype.forEach.call($selector, (selector) => {

          selector.addEventListener(action, handler, false)

        })

        break;

      default:

    }

  }

  bindEvents() {

    this._events.forEach( (item) => {

      var action    = item[0],
          $selector = item[1], // TODO: scope this locally
          listener  = item[2]

      Array.prototype.forEach.call($selector, (selector) => {

        selector.addEventListener(action, listener, false)

      })

    })

  }

  childContainer(name, selector, reducer) {

    if(!selector) {
      return this._childContainers[name]
    }

    var $el = this.$(selector)
    if($el) {
      this._childContainers[name] = createContainer($el, {}, reducer)
    }

  }

  /*bindListens() {

    this.listen.forEach( (item) => {

      var eventName = item[0],
          handler   = item[1]

      this.on(eventName, handler)

    })

  }*/

  delegateEvent(action, $el, selector, handler) {
    var _this = this

    if(typeof $el == 'string') $el = document.querySelectorAll($el)

    if(typeof $el == 'object' && $el.$ref) {
      $el = $el.$ref
    }

    if(typeof selector == 'object' && selector.selector) {
      selector = selector.selector
    }

    var handlerWrap = function(e) {
      var t = e.target
      while (t && t !== this) {
        if (t.matches(selector)) {
          var index = null

          if(t.tagName == 'LI') {
            var c = t.parentNode.childNodes
            for(var i = 0, l = c.length; i < l; i++) {
              if(c[i] == t) {
                index = i
                break
              }
            }
          }

          handler.call(_this, e, index)
        }
        t = t.parentNode
      }
    }

    this._events.push([action, $el, handlerWrap])

    Array.prototype.forEach.call($el, (el) => {

      el.addEventListener(action, handlerWrap)

    })

  }

  /*
  @method detach
  @type Function
  @desc Detachs the view from the DOM
  */
  detach() {
    //console.log("DEBUG: Detaching: Container", this.$container)
    //console.log("DEBUG: Detaching: El", this.$el)

    if(this.detached) {
      console.error('Cannot detach view as it has already been detached')
      return
    }

    /*
    TODO:
    This is a weird error; if you put a return here, then it will not detach, but the error makes it sound like there is no DOM node to detach.
    */
    if(!this.$container) {

      console.error('DEBUG: Detach Error: this.$container is not defined')
      //return
    }

    Array.prototype.forEach.call(this.$container, (container) => {

      /*
      TODO: not happy with this
      */
      var identifier = this.el.tagName.toLowerCase()
      if(this.el.id) {
        identifier = `#${this.el.id}`
      }
      else if(this.el.className) {
        identifier = '.' + this.el.className.replace(' ', ' .')
      }

      var els = container.querySelectorAll(identifier)

      Array.prototype.forEach.call(els, (el) => {

        container.removeChild(el)

      })

    })

    this.detached = true
    this.emit('detach')

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
  dispose() {

    if(!this.disposed) {

      this.unBindEvents()
      this.unBindListens()

      Object.keys(this._views).forEach( (key) => {
        var view = this._views[key]
        view.dispose()
      })

      this.on('detach', () => {
        utils.dispose(this)
      })

      this.detach()
    }

  }

  ensureContainer() {

    if(this.container) {

      if(this.container instanceof Node) {
        this.$container = [this.container]
      }

      else if(typeof this.container == 'string') {
        this.$container = this.$(this.container)
      }

    }

    if(this.renderOnInit) {
      if(!this.container || !this.$container || this.$container.length == 0) console.error('No container(s) found.', this, this.container)
    }

  }

  ensureElement() {

    // We need a wrapping tag; it's too dangerous to patch a template without one
    if(!this.tagName) this.tagName = 'div'

    this.el = document.createElement(this.tagName)

    if(this.id) this.el.id = this.id
    if(this.class) this.el.className = this.class

  }

  event() {

    if(!this.attached) {
      this.on('addedToDOM', () => {

        this._event.apply(this, arguments)

      })
    }

    else {
      this._event.apply(this, arguments)
    }

  }

  _event(action) {

    var handler = arguments[arguments.length - 1],
        origHandler = arguments[arguments.length - 1],
        selector,
        _this   = this

    switch(arguments.length) {

      case 2:

        selector = this.el

        break

      case 3:

        selector = arguments[1]

        break

      default:

    }

    if(typeof selector == 'string') selector = this.$(selector)

    if(typeof selector == 'object' && selector.$ref) {
      selector = selector.$ref
    }

    switch(action) {

      case 'enter':

        action = 'keydown'

        handler = function(e) {

          if(e.keyCode == 13) {
            e.preventDefault()
            origHandler.call(_this, e)
          }

        }

        break

      default:

    }

    this._events.push([action, selector, handler])

    if(this.attached) {
      this.bindEvent(action, selector, handler)
    }

    else {
      this.on('addedToDOM', () => {
        this.bindEvent(action, selector, handler)
      })
    }

  }

  getTagName(template) {

    var el = document.createElement('div')
    el.innerHTML = template

    return el.firstElementChild.tagName.toLowerCase()

  }

  /*
  @method getTemplate
  @type Function
  @returns String
  @desc Gets the template for the view

  @notes This function can do whatever the developer desires. Mixins, such as Handlebars Mixin, will take overwrite this. The developer should feel comfortable overwriting this.
  */
  getTemplate() {

    return this.template

  }

  getIDOMData() {

    var pkg = {}

    // Property naming ensues
    if(this.models || this.collections) {

      if(this.models) {
        for(var j in this.models) {
          pkg[j] = this.models[j].attr
        }
      }

      if(this.collections) {
        for(var k in this.collections) {
          pkg[k] = this.collections[k].getData()
        }
      }

    }

    // Classic Backbone
    else {

      if(this.model) {
        pkg = Object.assign({}, this.model.attr)
      }

      else if(this.collection) {
        pkg = Object.assign({}, {collection: this.collection.getData()})
      }

    }

    return pkg

  }

  listen() {

    var ev      = arguments[0],
        handler = arguments[1]

    switch(arguments.length) {

      case 2:

        this.on(ev, handler.bind(this))

        break;

      default:

    }

    this._listeners.push(ev, handler)

  }

  partial(name, html) {
    if(html) {
      this._partials[name] = new Template(html)
    }

    return this._partials[name]
  }

  rebindEvents() {

    this.unBindEvents()
    this.bindEvents()

  }

  refreshIDOM() {
    var pkg = this.getIDOMData()

    this.idom.update(Object.assign({}, pkg))
  }

  /*
  @method render
  @type Function
  @return this
  @desc Renders the view
  */

  render() {

    /*
    TODO: Debug incremental dom and see if it is firing more times than
    necessary
    */
    //console.log('render called', this.attached, this.id)
    /*
    TODO: really both should exist, but gotta figure out how to get container from existing idom passed in
    */
    if(!this.container && !this.idom) {
      console.error('Container type not valid.', this.uid)
      return this
    }

    /*
    Remember with Backbone you would call .render() to update the template?
    If the template has been attached, then update the template with Incremental DOM
    */
    if(this.attached) {
      this.refreshIDOM()
      this.emit('render')
      //console.log('DEBUG: am i already attached?', this.constructor.name)
      return this
    }

    /*
    TODO: What is going on that is re-defining el? Is it a race condition with
    an update the container, which triggers multiple updates within milliseconds?

    If this.el is attempted to be re-assigned, an error will be thrown about not
    re-assigning a read-only property.
    */
    if(this.el) {
      //console.log('DEBUG: el is already assigned on', this.constructor.name)
      return
    }
    else {
      // Ideally this gets called in constructor, but see above
      this.ensureElement()
    }

    //var Container = stardux.Container
    this.idom = createContainer(this.el, {}, this.reducer.bind(this))

    this.el.innerHTML = this.getTemplate()

    this.refreshIDOM()

    this.emit('render')

    return this

  }

  /*
  @method setAttributes
  @type Function
  @returns Void
  @desc Assigns attributes to view

  @param attributes {Object}
  */

  setAttributes() {

    this.attributes = {}

    var el = document.createElement('div')
    el.innerHTML = this.getTemplate()

    if(el.firstChild.id) {

      this.id = el.firstChild.id

    }

    if(el.firstChild.className) {

      this.className = el.firstChild.className

    }

    var ignore = [
      'class',
      'id'
    ]

    Array.from(el.firstChild.attributes).forEach( (item) => {

      // If the attribute is not on the ignore list
      if(ignore.indexOf(item.name) == -1) {
        this.attributes[item.name] = item.value
      }

    })

  }

  setElement() {

    if(this.id) {
      var id   = `#${this.id}`

      if(!this.el) this.el = id
      this.$el = this.$(id)
    }

    else if(this.className) {

      var splitClassName = this.className.split(' ')
        var className = ''

      for(let i = 0, l = splitClassName.length; i < l; i++) {

        className += `.${splitClassName[i]}`

      }

      if(!this.el) this.el = className
      this.$el = this.$(className)
    }

    // TODO: only query within container
    else {
      var tagName = this.tagName

      if(!this.el) this.el = tagName
      this.$el = this.$(tagName)
    }

  }

  setProperties() {

    var allowedOptions = [
      'container',
      'el',
      'template'
    ]

    var options = Object.assign(this.options)

    Object.keys(options).forEach( (key) => {

      // If the property is not on the ignore list
      if(allowedOptions.indexOf(key) > -1) {

        this[key] = options[key]
        delete this.options[key]

      }

    })

  }

  state(action) {
    this.idom.update({current: action})
  }

  unBindEvent(removeAction, removeSelector) {
    var $removeSelector = document.querySelectorAll(removeSelector)

    this._events.forEach( (item) => {

      var action    = item[0],
          $selector = item[1],
          listener  = item[2]

      if(action == removeAction && $selector == $removeSelector) {
        Array.prototype.forEach.call($selector, (selector) => {

          selector.removeEventListener(action, listener, false)

        })
      }

    })
  }

  unBindEvents() {

    this._events.forEach( (item) => {

      var action    = item[0],
          $selector = item[1], // TODO: scope this locally
          listener  = item[2]

      Array.prototype.forEach.call($selector, (selector) => {

        selector.removeEventListener(action, listener, false)

      })

    })

    //this._events = []

  }

  unBindListens() {

    this._listeners.forEach( (item) => {

      var ev      = item[0],
          handler = item[1]

      this.off(ev, handler)

    })

  }

  /*
  Keep track of sub-views
  */
  view(name, view) {

    if(arguments.length == 1) {
      return this._views[name]
    } else {
      this._views[name] = view
    }

  }

}

Object.assign(View.prototype, {mixin})

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
View.prototype.$ = function(selector) {

  var doc = null

  if(typeof global == 'object' && global.document) doc = global.document
  if(typeof window == 'object' && window.document) doc = window.document

  return doc.querySelectorAll.call(doc, selector)

}

/**
 * Direct Options. Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
 *
 * @private
 * @const
 * @type {Array}
 */
View.prototype.directOptions = [
  'attachOnInit',
  'attachPlacement',
  'bindDataOnInit',
  'class', // why did CSS use this?
  'collection',
  'collections',
  'component',
  'container',
  'events',
  'id',
  'listen',
  'mediator',
  'model',
  'models',
  'reducer',
  'renderOnInit',
  'tagName',
  'template',
  'View'
]

export default View
