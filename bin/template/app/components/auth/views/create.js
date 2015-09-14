var //Auth      = require('../models/auth'),
    FormView  = require('../../../views/form'),
    Dragon    = require('dragon'),
    FormState = require('../../../models/state/form'),
    template  = require('../templates/create')

class CreateView extends FormView {

  container = '#app-container'
  template  = template

  constructor(options = {}) {
    super(options)

    this.on('addedToDOM', this.onAddedToDOM)

    this.initialize()
  }

  formSubmit(e) {
    e.preventDefault()

    console.log("create form submitted", this.model)

    var pkg = this.pkg = {
      email: this.refs('email').value,
      password: this.refs('password').value,
      username: this.refs('username').value
    }

    var validate = this.validate(pkg)
    console.log("validate", validate)
    if(!validate.error) {

      this.state.set('submitting')

      this.model.create(pkg).then( (res) => {

        console.log("what dis res", res)

      }, this.formError)

    }

  }

  onAddedToDOM() {

    this.refs('form',     '.auth-form')
    this.refs('email',    '#auth-email')
    this.refs('password', '#auth-password')
    this.refs('username', '#auth-username')

    this.state = new FormState({
      el: this.refs('form')
    })

  }

}

module.exports = CreateView
