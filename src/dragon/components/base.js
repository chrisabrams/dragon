'use strict';

import eventsMixin from '../events'
import mixin       from '../mixin'
import View        from '../views/base'
import utils       from '../utils'

class DragonComponent {

  constructor(options = {}) {
    this.uid = utils.uniqueId(this)
    this.mixin(eventsMixin)

    this.attached = false
    this.disposed = false

    /*
    Direct Options
    Some options are important enough that they should be directly on the view. Also offers consistency for overriding certain properties.
    */
    this.directOptions = [
      'attachOnInit',
      'attachPlacement',
      'class', // why did CSS use this?
      'collection',
      'container',
      'id',
      'model',
      'renderOnInit',
      'tagName'
    ]

    this.assignOptions(options)

    //this._registry = {}

    console.log(this)
    this.ensureContainer()

    if(!this.attached && this.attachOnInit) {

      this.once('render', () => {

        this.attach()

      })

    }

    this.render()
  }

  /*get() {

  }

  set(name, ) {

  }*/

  render() {
    this.el = document.createElement('div')

    if(this.id)    this.el.id        = this.id
    if(this.class) this.el.className = this.class

    this.emit('render')

    return this
  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

Object.assign(DragonComponent.prototype, {
  assignOptions   : View.prototype.assignOptions.bind(DragonComponent),
  attach          : View.prototype.attach.bind(DragonComponent),
  ensureContainer : View.prototype.ensureContainer.bind(DragonComponent),
  mixin
})

export default DragonComponent
