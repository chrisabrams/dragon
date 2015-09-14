var FormView  = require('../../../views/form'),
    Dragon    = require('dragon'),
    FormState = require('../../../models/state/form'),
    template  = require('../templates/login')

class LoginView extends FormView {

  container = '#app-container'
  template  = template

  constructor(options = {}) {
    super(options)

    this.on('addedToDOM', this.onAddedToDOM)

    this.initialize()
  }

  formSubmit(e) {
    e.preventDefault()

    console.log("login form submitted", this.model)

    var pkg = {
      password: this.refs('password').value,
      username: this.refs('username').value
    }

    this.validate(pkg)

  }

  onAddedToDOM() {

    this.refs('form',     '.auth-form')
    this.refs('password', '#auth-password')
    this.refs('username', '#auth-username')

    this.state = new FormState({
      el: this.refs('form')
    })

  }

}

module.exports = LoginView
