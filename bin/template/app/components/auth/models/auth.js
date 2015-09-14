var BaseModel = require('../../../models/base'),
    user      = require('sdk/resources/users')

class AuthModel extends BaseModel {

  constructor(attr = {}, options = {}) {

    if(options.create) {

    }

    super(attr, options)

  }

  create(pkg) {

    return new Promise( (resolve, reject) => {

      user.create(pkg).then(resolve, reject)

    })

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

module.exports = AuthModel
