var HandlebarsMixin = {}

HandlebarsMixin.getTemplate = () => {

  var _this = this

  return new Promise( (resolve, reject) => {

    try {
      var template = _this.template()
    }

    catch(e) {
      return reject(e)
    }

    return resolve(template)

  })

}

module.exports = HandlebarsMixin
