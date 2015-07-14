var BaseView = require('../base/view'),
    Dragon   = require('dragon'),
    State    = require('../../models/state'),
    template = require('./template')

class AuthView extends BaseView {

  initialize() {

    this.container = '#app-container'
    this.template  = template

    this.event('click', '.login-form input', this.inputClick)
    this.event('click', '.login-form #login-submit', this.formSubmit)
    this.event('enter', '.login-form', this.formSubmit)

    this.listen('addedToDOM', this.onAddedToDOM)

    super.initialize()

  }

  formSubmit(e) {
    e.preventDefault()

    console.log("form submitted", this.model)

    var pkg = {
      password: this.refs('password').value,
      username: this.refs('username').value
    }

    this.validate(pkg)

  }

  inputClick(e) {

    e.target.parentElement.classList.remove('has-error')

  }

  onAddedToDOM() {

    this.refs('form',     '.login-form')
    this.refs('password', '#login-password')
    this.refs('username', '#login-username')

    this.state = new State({
      el: this.refs('form'),
      default: 'default',

      beforeAll: function() {
        this.el.setAttribute('data-state', 'default')

        var inputs = document.querySelectorAll('.login-form input')

        Array.prototype.forEach.call(inputs, (input) => {

          input.parentElement.classList.remove('has-error')

        })

      },

      states: {
        default: {
          before: () => {

          },
          active: () => {
            this.$refs.username.focus()
          },
          after: () => {

          }
        },
        error: {
          before: () => {

          },
          active: () => {

          },
          after: () => {

          }
        },
        submiting: {
          before: () => {

          },
          active: () => {

          },
          after: () => {

          }
        },
        validating: {
          before: () => {

          },
          active: () => {

          },
          after: () => {

          }
        }
      }
    })

  }

  validate(pkg = {}) {

    this.state.set('validating')

    var onValidate = this.model.validate(pkg)

    if(onValidate.error) {
      console.log('DEBUG: validate error', onValidate.error)
      this.state.set('error')

      onValidate.error.details.forEach( (error) => {

        this.refs(error.context.key).parentElement.classList.add('has-error')

      })

    }

    return onValidate

  }

}

module.exports = AuthView
