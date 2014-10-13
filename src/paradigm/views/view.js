class ParadigmView {

  constructor() {

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
  @method render
  @type Function
  @returns Promise
  @desc Renders the view
  */

  render() {

    return new Promise( (resolve, reject) => {

    })
  }

}

/*
@property attached
@type Boolean
@default false
@desc Whether to the view has been attached to the DOM
*/
ParadigmView.prototype.attached = false

/*
@property autoAttach
@type Boolean
@default true
@desc Whether to attach the view on initialization
*/
ParadigmView.prototype.autoAttach = true

/*
@property autoRender
@type Boolean
@default true
@desc Whether to render the view automatically on initialization
*/
ParadigmView.prototype.autoRender = true

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
