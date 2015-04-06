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

    this.events         = this.events || []
    this.expandedEvents = []
    Object.assign(this, EventsMixin)

    this.listen         = this.listen || []
    this.bindListens()

    /*
    TODO: Remove these requirements (below) as view should be able to bind to an existing DOM
    A template must be assigned to the view, whether it be on the View Class or the instance
    */

    if(!options.container && !this.container) {
      throw new Error('A view must have a container.')
      return
    }

    if(!options.template && !this.template) {
      throw new Error('A view must have a template.')
      return
    }

    /*
    END TODO requirement
    */

    this.initialize(options)

    //If the view is set to render on initialization
    if(this.renderOnInit) {

      //If the view is set to attach on initialization
      if(!this.attached && this.attachOnInit && this.$container.length > 0) {

        this.once('render', () => {
          this.attach()
        })

      }

      this.render()

    }

    this.bindEvents()

  }

  initialize(options) {

    this.setProperties(options)
    this.setMixins(options)

  }

  /*
  @method attach
  @type Function
  @return this
  @desc Attaches the view to the DOM
  */

  attach() {

    var _this = this

    try {

      /*
      Can't use .forEach() on NodeLists
      Tempting to use NodeList.prototype.forEach = Array.prototype.forEach but that's a no no
      See for basic info: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
      See this guy (which I ignore) for a super long list of reasons: http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
      */

      //console.log("DEBUG: Attaching: Container", this.$container)

      Array.prototype.forEach.call(_this.$container, function($container) {

        var placement;

        /*
        NOTES: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        */
        switch(_this.attachPlacement) {

          //case 'beginning': $container['insertAdjacentHTML']('afterbegin', _this._vel); break;
          case 'beginning': $container['prependChild'](_this._vel); break;
          default: $container['appendChild'](_this._vel)

        }

      })

      // Define $el

      /*
      TODO: add support for binding to existing DOM
      */

      if(this.id) {
        var id   = '#' + this.id

        this.el  = id
        this.$el = this.$(id)
      }

      // TODO: add . for each className item
      else if(this.className) {
        var className = this.className

        this.el       = className
        this.$el      = this.$(className)
      }

      // TODO: only query within container
      else {
        var tagName = this.tagName

        this.el     = tagName
        this.$el    = this.$(tagName)
      }

      this.attached = true

      this.trigger('addedToDOM')

      //console.log("DEBUG: Attaching: El", this.$el)

    }

    catch(e) {

      throw new Error(e)
      return

    }

    return this

  }

  bindEvents() {

    this.events.forEach( (item) => {

      var $selector = this.$(item[0]), // TODO: scope this locally
          action    = item[1],
          listener  = item[2]

      Array.prototype.forEach.call(this.$selector, (selector) => {

        selector.addEventListener(action, listener, false)

        this.expandedEvents.push([selector, action, listener])

      })

    })

  }

  bindListens() {

    this.listen.forEach( (item) => {

      var eventName = item[0],
          handler   = item[1]

      this.on(eventName, handler)

    })

  }

  defineProperties(options) {

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
      throw new Error('Cannot detach view as it has already been detached')
      return
    }

    Array.prototype.forEach.call(this.$container, (container) => {

      var els = container.querySelectorAll(this.el)

      Array.prototype.forEach.call(els, (el) => {

        container.removeChild(el)

      })

    })

    this.detached = true

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

    this.unBindEvents()
    this.unBindListens()
    this.detach()

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

    return this.template

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

  setProperties(options = {}) {
    var _this = this

    this.defineProperties(options)

    Object.keys(options).forEach( (key) => {

      var ignore = [
        //'container',
        //'el'
      ]

      // If the property is not on the ignore list
      if(ignore.indexOf(key) == -1) {
        _this[key] = options[key]
      }

    })

    this.$container = this.$(this.container)

  }

  unBindEvents() {

    this.expandedEventsList.forEach( (eventItem) => {

      var selector  = item[0], // TODO: scope this locally
          action    = item[1],
          listener  = item[2]

      selector.removeEventListener(action, listener, false)

    })

    this.expandedEventsList = []

  }

  unBindListens() {

    this.listen.forEach( (item) => {

      var eventName = item[0],
          handler   = item[1]

      this.off(eventName, handler)

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
DragonBaseView.prototype.$ = require('dolla')

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
