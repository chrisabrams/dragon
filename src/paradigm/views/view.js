class ParadigmView {

  constructor() {

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

    /*
    @property renderedCount
    @type Number
    @default 0
    @desc A count of how many times the view has been rendered
    */
    this.renderedCount = 0

    /*
    @property subViews
    @type Array
    @desc Collection of child views to current view (parent)
    */
    this.subViews = []

    /*
    @property subViewStore
    @type Object
    @desc A key/value store of all subViews
    @note This is an object and not an Array to prevent two subViews with the same name
    */
    this.subViewStore = {}

    //If the view is set to render on initialization
    if(this.renderOnInit) {

      //If the view is set to attach on initialization
      if(!this.attached && this.attachOnInit) {

        //this.on('rendered', this.attach)

      }

      this.render()

    }

  }

  /*
  @method addSubView
  @type Function
  @args name {String}
  @args view {Object} This is an instantiated view, not the class itself
  @desc Adds a subView to the current view
  */

  addSubView(name, view) {

    if(name && view) {

      this.removeSubView(name)
      this.subViews.push(view)
      this.subViewStore[name] = view

    }

  }

  /*
  @method attach
  @type Function
  @returns Promise
  @desc Attaches the view to the DOM
  */

  attach() {

    return new Promise( (resolve, reject) => {

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
  @method getSubView
  @type Function
  @args name {String}
  @desc Returns a subView by name
  */
  getSubView(name) {

    // Returns subView by name
    if(typeof name === 'string') {
      return this.subViewStore[name]
    }

  }

  /*
  @method removeSubView
  @type Function
  @args name {String}
  @desc Removes a subView by name
  @note This will dispose the subView if it hasn't been previously disposed of
  */
  removeSubView(name) {

    if(typeof name === 'string') {
      delete this.subViewStore[name]
    }

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
ParadigmView.prototype.attachOnInit = true

/*
@property renderOnInit
@type Boolean
@default true
@desc Whether to render the view on initialization
*/
ParadigmView.prototype.renderOnInit = true

/*
@property container
@type String
@default null
@desc Define the selector upon which the view is attached to.
*/
ParadigmView.prototype.container = null

/*
@property containerMethod
@type String
@default 'appendChild'
@options 'appendChild', 'prependChild'
@desc Determines how the view is attached to the DOM. If `$` is defined, then you can define the method as `append` or `prepend`
*/
ParadigmView.prototype.containerMethod = 'appendChild'

module.exports = ParadigmView
