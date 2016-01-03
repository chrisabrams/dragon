'use strict';

import eventsMixin       from '../events'
import mixin             from '../mixin'
import utils             from '../utils'

class DragonBaseModel {

  constructor(attr = {}, options = {}) {
    this.uid = utils.uniqueId(this)
    this.mixin(eventsMixin)

    this.attr = {};
    this.options = options

    Object.assign(this.attr, this.defaults, attr)

    this.observeAttributes()
  }

  initialize() {

  }

  /*
  TODO: not the full appr
  */
  clear() {

    this.attr = {}

  }

  /*
  TODO: add an an unobserve option
  */
  observeAttributes() {

    // Trigger changes on model
    Object.observe(this.attr, (changes) => {

      this.emit('change', changes)

      /*
      TODO: consider making this a mixin and expanding to watch specific properties
      */

      var add    = [],
          del    = [],
          update = []

      changes.forEach( (change) => {

        switch(change.type) {

          case 'add'    : add.push(change); break;
          case 'delete' : del.push(change); break;
          case 'update' : update.push(change); break;

        }

      })

      if(add.length > 0)    this.emit('add', add)
      if(del.length > 0)    this.emit('delete', del)
      if(update.length > 0) this.emit('update', update)

    })

  }

  /*
  TODO: Undecided on appraoch for sync/fetch/save/etc.
  */
  sync() {

  }

  toJSON() {

    return JSON.stringify(this.attr)

  }

  dispose(options = {}) {

    utils.dispose(this, options)

  }

}


DragonBaseModel.prototype.defaults = {}

DragonBaseModel.prototype.disposed = false

DragonBaseModel.prototype.indisposable = false

DragonBaseModel.prototype.url = ''

Object.assign(DragonBaseModel.prototype, {mixin})

export default DragonBaseModel
