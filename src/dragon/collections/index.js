'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import EventEmitter from '../events'
import mixin        from '../mixin'
import Model        from '../models/index'
import utils        from '../utils'

/**
 * Collection Class
 *
 * @public
 * @class Collection
 */
class Collection {

  /**
   * Collection constructor
   *
   * @public
   * @constructor
   * @param {Array} entries
   * @param {Object} options
   */
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
    this.options  = options
    this.url      = options.url || this.url || ''

    if(!this.Model || !(this.Model instanceof Function)) {
      throw new Error('Collection requires a valid Model Class')
    }

    if(typeof this.url != 'string') {
      throw new Error('Collection requires a valid url')
    }

    this.ensureEntries(entries)
  }

  add(entries, options = {}) {
    this.ensureEntries(entries, options)
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

  ensureEntries(entries, options = {}) {

    /*
    TODO: figure out how to clean this up
    */
    if(
      typeof entries == 'null' ||
      typeof entries == 'undefined' ||
      (!entries.length && typeof entries == 'object' && Object.keys(entries).length == 0)
    ) return

    // we will suppport all kind of iterable  here !!
    // It is simpler to manage things by making a single item an array
    if(!(entries[Symbol.iterator])) {
      entries = [entries]
    }

    if(options.at) options.at--
    for(let entry of entries) {
      var model = null

      /*
      TODO: should create a collection that supports multiple types of  models
      */
      if(entry instanceof this.Model) {
        model = entry
        model.collection = this
        this.models.push(model)
      }

      else {

        /*
        TODO:
        somehow the first item in this.models gets duplicated to the end, and then new items that were added are added :/
        */
        // If collection has entry, merge the results
        if(entry.id) {

          var index = null
          var existingModel = this.models.filter( (item, i) => {
            if(item.attr.id == entry.id) {
              index = i
              return item
            }
          })

          if(existingModel.length > 0 && index) {
            model = Object.assign(this.models[index], entry)
          }
        }

        // Create a new entry
        if(!model) {
          model = new this.Model(entry, {storeAutoLoad: false})

          if(options.at) {
            options.at++
            this.models.splice(options.at, 0, entry)
            //this.models.splice.apply(this.models, [optoins.at, 0].concat([model]))
          }

          else {
            model.collection = this
            this.models.push(model)
          }

        }

      }

      this.emit('change', model, this.models.length - 1)
    }

  }

  /*
  TODO: not really sure what to call this function
  */
  getData() {
    var data = []

    this.models.forEach( (model) => {
      data.push(model.getData())
    })

    return data
  }

  move(fromIndex, toIndex, options = {}) {
    this.models.splice(toIndex, 0, this.models.splice(fromIndex, 1)[0])
  }

  remove(index, options = {}) {
    var changeEvent = (typeof options.changeEvent == 'boolean') ? options.changeEvent : true

    this.models.splice(index, 1)

    if(changeEvent) {
      this.emit('change')
      this.emit('removed')
    }
  }

  set(entries, options) {
    this.clear()
    this.ensureEntries(entries, options)
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

  /**
   * Dispose of the application
   *
   * @example
   *   application.dispose()
   *
   * @public
   */
  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

Object.assign(Collection.prototype, {mixin})

module.exports = Collection
