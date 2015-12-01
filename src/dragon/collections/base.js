'use strict';

var EventsMixin         = require('../events'),
    Model               = require('../models/base'),
    utils               = require('../utils')

class DragonBaseCollection {

  constructor(entries = [], options = {}) {
    this.uid = utils.uniqueId(this)

    Object.assign(this, EventsMixin)

    this.models = []

    if(!(entries instanceof Array)) {
      throw new Error('Collection entries must be an array')
    }

    if(!this.model || !(this.model instanceof Function)) {
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

    // It is simpler to manage things by making a single item an array
    if(!(entries instanceof Array)) {
      entries = [entries]
    }

    for(let i = 0, l = entries.length; i < l; i++) {

      let entry = entries[i]

      if(entry instanceof this.model) {
        this.models.push(entry)
      }

      else {
        this.models.push(new this.model(entry))
      }

    }

  }

  toJSON() {



  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

DragonBaseCollection.prototype.dispose = false

DragonBaseCollection.prototype.model = Model

DragonBaseCollection.prototype.url = ''

module.exports = DragonBaseCollection
