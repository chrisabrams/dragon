'use strict';

import EventEmitter from '../events'
import mixin        from '../mixin'
import Model        from '../models/base'
import utils        from '../utils'

class DragonBaseCollection {

  constructor(entries = [], options = {}) {
    this.uid = utils.uniqueId(this)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    this.disposed = false
    this.Model    = options.Model || Model
    this.models   = []
    this.url      = options.url || this.url || ''

    /*
    TODO: this check is flawed
    */
    if(entries.length > 0 && !(entries[Symbol.iterator])) {
      throw new Error('Collection entries must be an iterable')
    }

    if(!this.Model || !(this.Model instanceof Function)) {
      throw new Error('Collection requires a valid Model Class')
    }

    if(typeof this.url != 'string') {
      throw new Error('Collection requires a valid url')
    }

    this.ensureEntries(entries)
  }

  add(entries) {
    this.ensureEntries(entries)
  }

  clear() {
    this.models = []
  }

  /*
  TODO: Clean this up, make checks stronger
  Currently, a mixed array of objects and models could be passed; it's an odd scenario that would cause that to hapen thoug.
  Tecnnically a model instance of a different model could be passed; need to check and prevent that.
  Should also consider concatting arrays as pushing arrays of 1000 or more can be very time consuming/lots of looping.
  Overall this function sucks but helps move the project forward atm.
  */

  ensureEntries(entries) {

    /*
    TODO: figure out how to clean this up
    */
    if(
      typeof entries == 'null' ||
      typeof entries == 'undefined' ||
      (!entries.length && typeof entries == 'object' && Object.keys(entries).length == 0) ||
      (entries.length && entries.length == 0)
    ) return

    // we will suppport all kind of iterable  here !!
    // It is simpler to manage things by making a single item an array
    if(!(entries[Symbol.iterator])) {
      entries = [entries]
    }

    for(let entry of entries) {

      if(entry instanceof this.Model) {
        this.models.push(entry)
      }

      else {
        this.models.push(new this.Model(entry, {storeAutoLoad: false}))
      }

    }

    this.emit('change')

  }

  /*
  TODO: not really sure what to call this function
  */
  getData() {
    var data = []

    this.models.forEach( (model) => {
      data.push(model.attr)
    })

    return data
  }

  move(fromIndex, toIndex, options = {}) {
    this.models.splice(toIndex, 0, this.models.splice(fromIndex, 1)[0])
  }

  remove(index, options = {}) {
    var changeEvent = (typeof options.changeEvent == 'boolen') ? options.changeEvent : true

    this.models.splice(index, 1)

    if(changeEvent) this.emit('change')
  }

  toJSON() {
    return this.models.map( (model) => model.toJSON())
  }

  [Symbol.iterator](){
    var collectionsModels = this.models,
        index = 0

    return {
      next: function next () {
        if (index + 1 > collectionsModels.length) {
          return { done: true };
        }
        return { value: collectionsModels[index++], done: false };
      }
    }
  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

Object.assign(DragonBaseCollection.prototype, {mixin})

module.exports = DragonBaseCollection
