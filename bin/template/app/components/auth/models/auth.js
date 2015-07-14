var //schema       = require('sdk/resources/auth/schemas/login'),
    ThoughtModel = require('../../base/models/thought')

class AuthModel extends ThoughtModel {

  initialize() {

    super.initialize()
    window.damodel = this
  }

  login(pkg) {

    return new Promise( (resolve, reject) => {

      let onValidate = this.validate(pkg)

      if(onValidate.error) {
        console.log("DEBUG: validate error", onValidate.error)
        return reject(onValidate.error)

      }
      console.log("DEBUG: validate pass", onValidate.value)
      auth.login(pkg).then(resolve, reject)

    })

  }

}

AuthModel.prototype.schema = {
  "username": {
    "type": "string"
  },
  "password": {
    "type": "string"
  }
}

module.exports = AuthModel
