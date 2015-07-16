var BaseView  = require('./base'),
    Dragon    = require('dragon')

class FormView extends BaseView {

  constructor(options = {}) {
    super(options)
  }

  initialize() {

    this.event('click', '.auth-form input', this.inputClearError)
    this.event('click', '.auth-form #auth-submit', this.formSubmit)

    this.event('enter',   '.auth-form', this.formSubmit)
    this.event('keydown', '.auth-form input', this.inputClearError)

    this.listen('addedToDOM', this.onAddedToDOM)


    super.initialize()

  }

  inputClearError(e) {

    var parentEl = e.target.parentElement

    if(parentEl.classList.contains('has-error')) {

      parentEl.classList.remove('has-error')

    }

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

module.exports = FormView
