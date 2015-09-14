var BaseModel = require('./base')

class UserModel extends BaseModel {

  indisposable = true

  constructor(attr = {}, options = {}) {
    super(attr, options)
  }

}

//UserModel.prototype.indisposable = true

module.exports = UserModel
