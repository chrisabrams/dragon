var State = require('./base')

class DragonFormState extends State {

  constructor(options = {}) {

    super(options)

  }

  initialize() {

    super.initialize()

    this.add('default', {
      before: () => {

      },
      active: () => {
        document.querySelectorAll('.auth-form input')[0].focus()
      },
      after: () => {

      }
    })

    this.add('error', {
      before: () => {

      },
      active: () => {

      },
      after: () => {

      }
    })

    this.add('validating', {
      before: () => {

      },
      active: () => {

      },
      after: () => {

      }
    })

  }

  beforeAll() {

    this.el.setAttribute('data-state', 'default')

    /*
    TODO: need to scope el on querySelectorAll so that hardcoding is not needed
    */
    var inputs = document.querySelectorAll('.auth-form input')

    Array.prototype.forEach.call(inputs, (input) => {

      input.parentElement.classList.remove('has-error')

    })

  }

}

module.exports = DragonFormState
