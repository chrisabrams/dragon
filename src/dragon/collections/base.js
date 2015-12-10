'use strict';

var EventsMixin         = require('../events'),
    Model               = require('../models/base'),
    utils               = require('../utils')

class DragonBaseCollection {

  constructor(entries = [], options = {}) {
    this.uid = utils.uniqueId(this)

    Object.assign(this, EventsMixin)

    this.models = []

    if(!(entries[Symbol.iterator])) {
      throw new Error('Collection entries must be an iterable')
    }

    if(!this.model || !(this.model instanceof Function)) {
      throw new Error('Collection requires a valid Model Class')
    }

    if(typeof this.url != 'string') {
      throw new Error('Collection requires a valid url')
    }

    this.ensureEntries(entries)

  }


  var collectionArray = 
  [0,[{name:"reduce"},{name:"inject",alias:"reduce"},{name:"foldl",alias:"reduce"},
      {name:"invoke"},{name:"reduceRight"},{name:"foldr",alias:"reduceRight"},
      {name:"without"},{name:"difference"}],
  [1,[{name:"toArray"},{name:"size"},{name:"shuffle"},{name:"isEmpty"},{name:"chain"}]],
  [3,[{name:"forEach"},{name:"each"},{name:"map"},{name:"collect"},{name:"find"},
      {name:"detect"},{name:"filter"},{name:"select"},{name:"reject"},{name:"every"},{name:"all"},
      {name:"some"},{name:"any"},{name:"include"},{name:"includes"},{name:"contains"},{name:"max"},
      {name:"min"},{name:"first"},{name:"head"},{name:"take"},{name:"initial"},{name:"rest"},
      {name:"tail"},{name:"drop"},{name:"last"},{name:"indexOf"},{name:"lastIndexOf"},{name:"sample"},{name:"partition"},
      {name:"groupBy"},{name:"countBy"},{name:"sortBy"},{name:"indexBy"},{name:"findIndex"},{name:"findLastIndex"}]]
  ] , collectionMethods = new map(collectionArray);
  
 console.log(collectionsModels);

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
    // we will suppport all kind of iterable  here !!
    // It is simpler to manage things by making a single item an array
    if(!(entries[Symbol.iterator])) {
      entries = [entries]
    }

    for(let entry of entries) {
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

  [Symbol.iterator](){
    var collectionsModels = this.models,index = 0
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

DragonBaseCollection.prototype.dispose = false

DragonBaseCollection.prototype.model = Model

DragonBaseCollection.prototype.url = ''


module.exports = DragonBaseCollection
