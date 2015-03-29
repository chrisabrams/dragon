var SubViewMixin = {}

/*
@method addSubView
@type Function
@args name {String}
@args view {Object} This is an instantiated view, not the class itself
@desc Adds a subView to the current view
*/

SubViewMixin.addSubView = (name, view) => {

  if(name && view) {

    this.removeSubView(name)
    this.subViews.push(view)
    this.subViewStore[name] = view

  }

}

/*
@method getSubView
@type Function
@args name {String}
@desc Returns a subView by name
*/
SubViewMixin.getSubView = (name) => {

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
SubViewMixin.removeSubView = (name) => {

  if(typeof name === 'string') {
    delete this.subViewStore[name]
  }

}

/*
@property subViews
@type Array
@desc Collection of child views to current view (parent)
*/
SubViewMixin.subViews = []

/*
@property subViewStore
@type Object
@desc A key/value store of all subViews
@note This is an object and not an Array to prevent two subViews with the same name
*/
SubViewMixin.subViewStore = {}

module.exports = SubViewMixin
