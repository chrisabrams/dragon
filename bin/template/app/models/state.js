var Dragon = require('dragon')

class State extends Dragon.Model {

  constructor(options = {}) {

    super(null, options)

  }

  initialize() {

    super.initialize()

    this.el      = this.options.el

    this._state  = this.options.default || 'default'
    this._states = {}

    this.beforeAll = this.options.beforeAll

    Object.keys(this.options.states).forEach( (key) => {

      this._states[key] = this.options.states[key]

    })

  }

  beforeCurrentState(key) {

    if(this._states[key]) {
      var before = this._states[key].before  || function() {}

      before()
    }

    if(typeof this.beforeAll == 'function') {
      this.beforeAll()
    }

  }

  endPreviousState() {

    if(this._states[this._state]) {
      var after = this._states[this._state].after  || function() {}

      after()
    }

  }

  /*start(key) {

    if(this._states[key]) {
      var before = this._states[key].before || function() {}
    }

  }*/

  set(key) {

    this.endPreviousState()

    if(this._states[key]) {
      this._state = key

      this.beforeCurrentState(key)

      var active = this._states[key].active || function() {}

      this.el.setAttribute('data-state', key)

      active()
    }

    else {
      console.error(`State, ${key}, does not exist.`)
    }

  }

}

module.exports = State
