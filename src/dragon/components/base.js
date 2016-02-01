'use strict';

import EventEmitter from '../events'
import mixin        from '../mixin'
import View         from '../views/base'
import utils        from '../utils'

class DragonComponent {

  constructor(options = {}) {
    this.uid = utils.uniqueId(this)
    this.$ = View.prototype.$

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    this.attached = false
    this.attachOnInit = options.attachOnInit || true
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

    View.prototype.assignOptions.call(this, options)

    //this._registry = {}

    //console.log(this)
    View.prototype.ensureContainer.call(this)

    if(!this.attached && this.attachOnInit) {

      this.once('render', () => {

        View.prototype.attach.call(this)

      })

    }

    this.render()
  }

  /*get() {

  }

  set(name, ) {

  }*/

  render() {
    this.el = document.createElement(this.tagName || 'div')

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
  //assignOptions   : View.prototype.assignOptions.bind(DragonComponent.prototype),
  //directOptions   : View.prototype.directOptions.bind(DragonComponent.prototype),
  //attach          : View.prototype.attach.bind(DragonComponent.prototype),
  //ensureContainer : View.prototype.ensureContainer.bind(DragonComponent.prototype),
  mixin
})

export default DragonComponent
