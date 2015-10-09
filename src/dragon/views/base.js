var EventsMixin         = require('../events'),
    utils               = require('../utils')

var createElement       = require('virtual-dom/create-element'),
    diff                = require('virtual-dom/diff'),
    extractFromTemplate = require('./helpers/extractFromTemplate'),
    patch               = require('virtual-dom/patch'),
    VNode               = require('virtual-dom/vnode/vnode'),
    VText               = require('virtual-dom/vnode/vtext')

var convertHTML = require('html-to-vdom')({
  VNode: VNode,
  VText: VText
})

/*
@class DragonBaseView
*/
class DragonBaseView {

  constructor(options = {}) {

    this.uid = utils.uniqueId(this)

    this.options = {}

    Object.keys(options).forEach( (option) => {

      if(this.directOptions.indexOf(option) > -1) {

        this[option] = options[option]

      }

      else {

        this.options[option] = option

      }

    })

    this._events    = []
    this._listeners = []

  }

  initialize() {

    this.setProperties()
    this.ensureElement()
    this.ensureContainer()

    //If the view is not binded to the DOM and is set to render on initialization
    if(!this.attached && this.renderOnInit) {

      //If the view is set to attach on initialization
      if(this.attachOnInit) {

        this.once('render', () => {

          this.attach()

        })

      }

      this.render()

    }

  }

  /*
  @method attach
  @type Function
  @return this
  @desc Attaches the view to the DOM
  */

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
          case 'first': $container['prependChild'](this._vel); break;

          // Attach normally, after all children in container
          default: $container['appendChild'](this._vel)

        }

      })

    }

    catch(e) {

      throw new Error(e)

    }

    if(!this.$el) {
      this.setElement()
    }

    this.attached = true

    this.trigger('addedToDOM')

    return this

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
      //throw new Error('this.$container is not defined')
      console.error(('DEBUG: Detach Error: this.$container is not defined'))
      //return
    }

    Array.prototype.forEach.call(this.$container, (container) => {

      var els = container.querySelectorAll(this.el)

      Array.prototype.forEach.call(els, (el) => {

        container.removeChild(el)

      })

    })

    this.detached = true
    this.trigger('detach')

    /*Array.prototype.forEach.call(this.$el, function(el) {

      container.removeChild

      // I've always thought this is a funny way to remove Nodes from the DOM :O
      console.log("el", el)

      console.log("parent", el.parentNode)

      //TODO: Fix the angryness from multiple copies of same ID - yes the developer *shouldnt* do that, but this should still communicate that instead of just freaking out

      el.parentNode.removeChild(el)

    })*/

  }

  ensureContainer() {

    if(this.container) {

      this.$container = this.$(this.container)

      if(this.$container.length == 0) throw new Error('No container(s) found.')

    }

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

    }

    // Attach new DOM
    if(!this.el && !this.container) {
      throw new Error('A view must have a container.')
    }

    if(!this.el && !this.template) {
      throw new Error('A view must have a template.')
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

    selector = this.$(selector)

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

    var model = {
      attr: {}
    }

    if(this.model && typeof this.model == 'object') {
      model = this.model
    }

    return this.template(model.attr)

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

    var template = this.getTemplate()

    if(!this.tagName) {

      this.tagName = this.getTagName(template)

    }

    if(!this.vel) {

      this.vel  = convertHTML(template)

      /*
      While newer versions of VDOM support multiple outer tags, we're gonna stick with one outer tag
      */
      if(this.vel instanceof Array) this.vel = this.vel[0]

      this.vel.tagName = this.tagName
      this._vel = createElement(this.vel)

    }

    var vel     = convertHTML(template)
    var patches = diff(this.vel, vel)

    this._vel   = patch(this._vel, patches)
    this.vel    = vel

    var extraction = extractFromTemplate(template)

    this.setAttributes(extraction.attributes)

    this.trigger('render')

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

  /*
  @method detach
  @type Function
  @desc Completely disposes of the view, it's DOM, events, etc.
  */
  dispose() {

    if(!this.disposed) {

      this.unBindEvents()
      this.unBindListens()
      this.detach()

      utils.dispose(this)

    }

  }

}

Object.assign(DragonBaseView.prototype, EventsMixin)

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

DragonBaseView.prototype.attached = false

/*
@property attachOnInit
@type Boolean
@default true
@desc Whether to attach the view on initialization
*/
DragonBaseView.prototype.attachOnInit = true

/*
@property attachPlacement
@type String
@default 'append'
@options 'append', 'prepend'
@desc Determines where the view is attached into the container
*/
DragonBaseView.prototype.attachPlacement = 'after'

/*
Direct Options
Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
*/
DragonBaseView.prototype.directOptions = [
  'attachOnInit',
  'attachPlacement',
  'collection',
  'container',
  'events',
  'listen',
  'model',
  'renderOnInit',
  'template'
]

DragonBaseView.prototype.disposed = false

/*
@property renderOnInit
@type Boolean
@default true
@desc Whether to render the view on initialization
*/
DragonBaseView.prototype.renderOnInit = true

/*
@property tagName
@type String
@default null
@desc The tag of the view
@note This value is ignored after a view's initial render
*/
//DragonBaseView.prototype.tagName = null

/*
@property template
@type ????
@default null
@desc Template for the view
*/
DragonBaseView.prototype.template = null

module.exports = DragonBaseView
