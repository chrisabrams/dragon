class DragonController {

  constructor() {

  }

  dispose() {
    console.log("controller disposed", this)

    Object.keys(this).forEach( (property) => {

      if(typeof this[property].dispose == 'function') {

        this[property].dispose()

        delete this[property]

      }

    })

    this.disposed = true

  }

}

DragonController.prototype.disposed = false

module.exports = DragonController
