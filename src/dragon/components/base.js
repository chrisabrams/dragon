class DragonComponent {

  constructor(options = {}) {

    this.options = options

    this.initialize()
  }

  initialize() {

  }

  dispose() {
    console.log("component disposed", this)

    Object.keys(this).forEach( (property) => {

      if(typeof this[property].dispose == 'function') {

        this[property].dispose()

        delete this[property]

      }

    })

    this.disposed = true

  }

}

DragonComponent.prototype.disposed = false

module.exports = DragonComponent
