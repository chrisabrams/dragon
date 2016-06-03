'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import {createContainer} from 'f12-stardux'
import View              from './index'

/**
 * CollectionView Class
 *
 * @public
 * @class CollectionView
 */
class CollectionView extends View {

  /**
   * CollectionView constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  constructor(options = {}) {
    super(Object.assign({}, {
      View: options.View || View
    }, options))
  }

  render() {

    if(!this.container) {
      console.error('Container type not valid.', this.uid)
      return this
    }

    if(this.attached) {
      return this
    }

    if(this.el) {
      return
    }
    else {
      this.ensureElement()
    }

    this.idom = createContainer(this.el, {}, this.reducer.bind(this))

    this.el.innerHTML = this.getTemplate()

    this.refreshIDOM()

    this.renderAllItems()

    this.emit('render')

    return this

  }

  renderAllItems() {

    if(this.collection) {
      var models = this.collection.models
      Object.keys(models).forEach( (key, i) => {

        this.renderItem(models[key], i)

      })
    }

  }

  renderItem(model, i) {

    this.view(`collection-view-${i}`, new this.View({
      model
    }))

  }

}

export default CollectionView
