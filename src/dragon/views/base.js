'use strict';

import {createContainer} from 'stardux'
import {Parser, Template} from 'starplate'
import EventEmitter      from '../events'
import mixin             from '../mixin'
import utils             from '../utils'
var stardux = require('stardux')

// Thanks: http://stackoverflow.com/questions/7238177/detect-htmlcollection-nodelist-in-javascript
function isNodeList(nodes) {
  var stringRepr = Object.prototype.toString.call(nodes)

  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
    (typeof nodes.length === 'number') &&
    (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
}

/*
@class DragonBaseView
*/
class DragonBaseView {

  constructor(options = {}) {

    this.uid = utils.uniqueId(this)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    /*
    Defaults
    */
    this.attached = false

    /*
    @property attachOnInit
    @type Boolean
    @default true
    @desc Whether to attach the view on initialization
    */
    this.attachOnInit = true

    /*
    @property attachPlacement
    @type String
    @default 'append'
    @options 'append', 'prepend'
    @desc Determines where the view is attached into the container
    */
    this.attachPlacement = 'after'

    this.bindDataOnInit = true

    /*
    Direct Options
    Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
    */
    this.directOptions = [
      'attachOnInit',
      'attachPlacement',
      'bindDataOnInit',
      'class', // why did CSS use this?
      'collection',
      'container',
      'events',
      'id',
      'listen',
      'model',
      'reducer',
      'renderOnInit',
      'tagName',
      'template'
    ]

    this.disposed = false

    this.assignOptions(options)

    this._childContainers = {}
    this._events    = []
    this._listeners = []

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

    if(this.bindDataOnInit && this.model) this.bindDataOnChange()

    this.render()
  }

  addedToDOM() {}

  /*
  @method attach
  @type Function
  @return this
  @desc Attaches the view to the DOM
  */

  assignOptions(options = {}) {

    this.options = options

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

    this.model.on('change', this.render.bind(this))

  }

  bindEvent() {

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
  @desc Completely disposes of the view, it's DOM, events, etc.
  */
  dispose() {

    if(!this.disposed) {

      this.unBindEvents()
      this.unBindListens()

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

    if(!this.container || !this.$container || this.$container.length == 0) console.error('No container(s) found.', this, this.container)

  }

  ensureElement() {

    if(this.el) {

      var _$el = this.$(this.el)

      // Binding to an existing DOM
      if(_$el.length > 0) {

        this.$el = _$el
        this.attached = true

        return

      }
      else{
        console.error('Target element not found.');
        return
      }
    }

    // Attach new DOM
    if(!this.el && !this.container) {
      console.error('A view must have a container.')
    }

    if(!this.el && !this.template) {
      console.error('A view must have a template.')
    }

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

  delegateEvent(action, $el, selector, handler) {
    var _this = this

    if(typeof $el == 'string') $el = document.querySelectorAll($el)

    var handlerWrap = function(e) {
      var t = e.target
      while (t && t !== this) {
        if (t.matches(selector)) handler.call(_this, e)
        t = t.parentNode
      }
    }

    this._events.push([action, $el, handlerWrap])

    Array.prototype.forEach.call($el, (el) => {

      el.addEventListener(action, handlerWrap)

    })


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

  /*
  @method render
  @type Function
  @return this
  @desc Renders the view
  */

  render() {

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
    if(this.attached && this.model) {
      this.idom.update(this.model.attr)
      return this
    }

    // We need a wrapping tag; it's too dangerous to patch a template without one
    if(!this.tagName) this.tagName = 'div'
    this.el = document.createElement(this.tagName)

    if(this.id) this.el.id = this.id
    if(this.class) this.el.className = this.class

    var Container = stardux.Container
    this.idom = createContainer(this.el, {}, this.reducer.bind(this))

    this.el.innerHTML = this.getTemplate()

    if(this.model) {
      this.idom.update(this.model.attr)
    }

    else if(this.collection) {
      this.idom.update(this.collection.attr)
    }

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

  unBindEvents() {

    this._events.forEach( (item) => {

      var action    = item[0],
          $selector = item[1], // TODO: scope this locally
          listener  = item[2]

      Array.prototype.forEach.call($selector, (selector) => {

        selector.removeEventListener(action, listener, false)

      })

    })

    this._events = []

  }

  unBindListens() {

    this._listeners.forEach( (item) => {

      var ev      = item[0],
          handler = item[1]

      this.off(ev, handler)

    })

  }

}

Object.assign(DragonBaseView.prototype, {mixin})

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
DragonBaseView.prototype.$ = function(selector) {

  var doc = null

  if(typeof global == 'object' && global.document) doc = global.document
  if(typeof window == 'object' && window.document) doc = window.document

  return doc.querySelectorAll.call(doc, selector)

}

export default DragonBaseView
