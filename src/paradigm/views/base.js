
/*
@class ParadigmBaseView
*/
class ParadigmBaseView {

  constructor(options = {}) {

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

    this.el = null

    /*
    @property mixins
    @type Array
    @desc List of mixins
    @note This adds a mixin to the instance, not the class
    */
    this.mixins = options.mixins || []

    //If the view is set to render on initialization
    if(this.renderOnInit) {

      //If the view is set to attach on initialization
      if(!this.attached && this.attachOnInit) {

        //this.on('rendered', this.attach)

      }

      this.render()

    }

    this.mixins.forEach( (Mixin) => {

      Object.assign(this, Mixin)

    }, this)

  }

  /*
  @method attach
  @type Function
  @returns Promise
  @desc Attaches the view to the DOM
  */

  attach() {
    var _this = this

    return new Promise( (resolve, reject) => {

      _this.$container[_this.containerMethod](_this.$el)

    })
  }

  /*
  @method detach
  @type Function
  @returns Promise
  @desc Detachs the view from the DOM
  */
  detach() {

    return new Promise( (resolve, reject) => {

    })

  }

  /*
  @method render
  @type Function
  @returns Promise
  @desc Renders the view
  */

  render() {

    return new Promise( (resolve, reject) => {

    })

    // Add to rendered count
    this.renderedCount++
  }

}

/* Developer Notes
The following properties & methods are assigned on the prototype to allow for overriding.
*/

/*
@property attachOnInit
@type Boolean
@default true
@desc Whether to attach the view on initialization
*/
ParadigmBaseView.prototype.attachOnInit = true

/*
@property renderOnInit
@type Boolean
@default true
@desc Whether to render the view on initialization
*/
ParadigmBaseView.prototype.renderOnInit = true

/*
@property container
@type String
@default undefined
@desc Define the selector upon which the view is attached to.
*/
Object.defineProperty(ParadigmBaseView.prototype, 'container', {

  set: (selector) => {

    /*
    @property $container
    @type Object
    @default undefined
    @desc Reference to container DOM object
    */
    this.$container = $(selector)

    return selector
  }

})

/*
@property el
@type
@default undefined
@desc Define the selector which represents the view
*/
Object.defineProperty(ParadigmBaseView.prototype, 'el', {

  set: (selector) => {

    /*
    @property $el
    @type Object
    @default undefined
    @desc Reference to view DOM object
    */
    this.$el = $(selector)

    return selector
  }

})

/*
@property containerMethod
@type String
@default 'append'
@options 'append', 'prepend'
@desc Determines how the view is attached to the DOM.
*/
ParadigmBaseView.prototype.containerMethod = 'append'

module.exports = ParadigmBaseView
