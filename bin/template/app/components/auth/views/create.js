var FormView  = require('../../../views/form'),
    Dragon    = require('dragon'),
    FormState = require('../../../models/state/form'),
    template  = require('../templates/create')

class CreateView extends FormView {

  constructor(options = {}) {
    super(options)

    this.on('addedToDOM', this.onAddedToDOM)

    super.initialize()
  }

  formSubmit(e) {
    e.preventDefault()

    console.log("create form submitted", this.model)

    var pkg = {
      email: this.refs('email').value,
      password: this.refs('password').value,
      username: this.refs('username').value
    }

    this.validate(pkg)

  }

  onAddedToDOM() {

    this.refs('form',     '.auth-form')
    this.refs('email',    '#auth-email')
    this.refs('password', '#auth-password')
    this.refs('username', '#auth-username')

    this.state = new FormState({
      el: this.refs('form')
    })

    this.state.add('submitting', {
      before: () => {

      },
      active: () => {

      },
      after: () => {

      }
    })

    this.state.add('success', {
      before: () => {

      },
      active: () => {

      },
      after: () => {

      }
    })

  }

}

CreateView.prototype.container = '#app-container'
CreateView.prototype.template  = template

module.exports = CreateView
