import {createContainer} from 'stardux'
import View              from './base'

class DragonCollectionView extends View {

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

export default DragonCollectionView
