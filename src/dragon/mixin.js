function mixin(source) {
  var _this = this

  source = source.prototype

  Object.getOwnPropertyNames(source).forEach(function propertyName(name) {

    if(name !== 'constructor') {
      Object.defineProperty(_this, name, Object.getOwnPropertyDescriptor(source, name))
    }

  })

}

export default mixin
