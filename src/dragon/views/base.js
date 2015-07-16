var EventsMixin         = require('../events'),
    Utils               = require('../utils'),
    uniqueId            = Utils.uniqueId

var createElement       = require('virtual-dom/create-element')
var diff                = require('virtual-dom/diff')
var extractFromTemplate = require('./helpers/extractFromTemplate')
var patch               = require('virtual-dom/patch')
var VNode               = require('virtual-dom/vnode/vnode')
var VText               = require('virtual-dom/vnode/vtext')

var convertHTML = require('html-to-vdom')({
  VNode: VNode,
  VText: VText
})

/*
@class DragonBaseView
*/
class DragonBaseView {

  constructor(options = {}) {

    this.uid = uniqueId('view')

    this.options = {}

    Object.keys(options).forEach( (option) => {

      if(this.directOptions.indexOf(option) > -1) {

        this[option] = options[option]

      }

      else {

        this.options[option] = option

      }

    })

    Object.assign(this, EventsMixin)

    this._events    = []
    this._listeners = []

    this.initialize()

  }

  initialize() {

    this.events         = this.events || []
    this.expandedEvents = []

    //this.listen         = this.listen || []
    //this.bindListens()

    this.setProperties()
    this.setMixins()
    this.ensureElement()

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

    this.bindEvents()

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
          case 'beginning': $container['prependChild'](this._vel); break;

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

  bindEvents() {

    this._events.forEach( (ev) => {

      var action  = ev[0],
          handler = ev[ev.length - 1].bind(this)

      switch(ev.length) {

        case 3:

          var $selector = this.$(ev[1]) // TODO: scope this locally

          Array.prototype.forEach.call($selector, (selector) => {

            selector.addEventListener(action, handler, false)

          })

          break;

        default:

      }

    })

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

  /*
  @method detach
  @type Function
  @desc Completely disposes of the view, it's DOM, events, etc.
  */
  dispose() {
    console.log("view is disposing", this)
    if(!this.desposed) {

      this.unBindEvents()
      this.unBindListens()
      this.detach()
      this.desposed = true

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

  event(action) {

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

    this._events.push([action, selector, handler])

  }

  getTagName(template) {

    var el = document.createElement('div')
    el.innerHTML = template

    return el.firstChild.tagName.toLowerCase()

  }

  /*
  @method getTemplate
  @type Function
  @returns String
  @desc Gets the template for the view

  @notes This function can do whatever the developer desires. Mixins, such as Handlebars Mixin, will take overwrite this. The developer should feel comfortable overwriting this.
  */
  getTemplate() {

    var model = {}

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

  /*
  @function setMixins
  @type Function
  @desc Sets Mixin(s) on instance

  @arg options {Object}
  */
  setMixins(options = {}) {

    /*
    @property mixins
    @type Array
    @desc List of mixins
    @note This adds a mixin to the instance, not the class
    */

    // TODO: need to combine the options with the this to have a full array
    this.mixins = options.mixins || []

    this.mixins.forEach( (Mixin) => {

      Object.assign(this, Mixin)

    })

  }

  setProperties() {

    /*
    @property attached
    @type Boolean
    @default false
    @desc Whether to the view has been attached to the DOM
    */
    this.attached = false

    /*
    @property disposed
    @type Boolean
    @default false
    @desc Whether the view has been disposed
    */
    this.disposed = false

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

    this.$container = this.$(this.container)

  }

  unBindEvents() {

    this.expandedEvents.forEach( (item) => {

      var selector  = item[0], // TODO: scope this locally
          action    = item[1],
          listener  = item[2]

      selector.removeEventListener(action, listener, false)
      //$(selector).off(action, listenMethod)

    })

    this.expandedEvents = []

  }

  unBindListens() {

    this._listeners.forEach( (item) => {

      var ev      = item[0],
          handler = item[1]

      this.off(ev, handler)

    })

  }

}

/* Developer Notes
The following properties & methods are assigned on the prototype to allow for easier overriding.
*/

/*
@property $
@type Object
@default native
@desc $ query engine
*/
DragonBaseView.prototype.$ = document.querySelectorAll.bind(document)

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
