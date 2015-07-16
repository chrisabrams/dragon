var escapeRegExp   = /[\-{}\[\]+?.,\\\^$|#\s]/g,
    optionalRegExp = /\((.*?)\)/g,
    paramRegExp    = /(?::|\*)(\w+)/g

class DragonRoute {

  constructor(pattern, Controller, action, options) {

    this.action     = action
    this.Controller = Controller
    this.options    = options
    this.pattern    = pattern

    this.allParams      = []
    this.requiredParams = []
    this.optionalParams = []

    this.createRegExp()

  }

  createRegExp() {

    var pattern = this.pattern

    pattern = pattern.replace(escapeRegExp, '\\$&')

    this.replaceParams(pattern, (match, param) => {

      return this.allParams.push(param)

    })

    pattern = pattern.replace(optionalRegExp, this.parseOptionalPortion)

    pattern = this.replaceParams(pattern, (match, param) => {

      this.requiredParams.push(param)
      return this.paramCapturePattern(match)

    })

    return this.regExp = new RegExp(`^${pattern}(?=\\/*(?=\\?|$))`)

  }

  extractParams(path) {

    var params  = {},
        matches = this.regExp.exec(path)

    var ref = matches.slice(1)

    for (var i, index = i = 0, len = ref.length; i < len; index = ++i) {
      var match     = ref[index]
      var paramName = this.allParams.length ? this.allParams[index] : index
      params[paramName] = match
    }

    return params

  }

  normalizeParams(params) {

    if(params instanceof Array) {

      if(params.length < this.requiredParams.length) return false

      var paramsHash = {}

      for (var paramIndex = i = 0, len = this.requiredParams.length; i < len; paramIndex = ++i) {

        var paramName = this.requiredParams[paramIndex]

        paramsHash[paramName] = params[paramIndex]

      }

      if(!this.testConstraints(paramsHash)) return false

      params = paramsHash

    }

    else {

      params = params || {}

      if(!this.testParams(params)) return false

    }

    return params

  }

  paramCapturePattern(param) {

    if(param.charAt(0) == ':') {
      return '([^\/\?]+)'
    }

    else {
      return '(.*?)'
    }

  }

  parseOptionalPortion(match, optionalPortion) {

    var portion = this.replaceParams(optionalPortion, (match, param) => {

      this.optionalParams.push(param)

      return this.paramCapturePattern(match)

    })

    return `(?:${portion})?`

  }

  removeTrailingSlash(path) {

    if (path.slice(-1) === '/') {
      path.slice(0, -1);
    }

    return path

  }

  replaceParams(s, cb) {

    return s.replace(paramRegExp, cb)

  }

  test(path) {

    if(!this.regExp.test(path)) return false

    if(this.options.constraints) {
      return this.testConstraints(this.extractParams(path))
    }

    return true

  }

  testConstraints() {

    var constraints = this.options.constraints

    if(constraints) {

      for(var name in constraints) {

        if(!{}.hasOwnProperty.call(constraints, name)) continue

        constraint = constraints[name]

        if(!constraint.test(params[name])) {

          return false

        }
      }

    }

    return true

  }

  testParams(params) {

    for(var i = 0, len = this.requiredParams.length; i < len; i++) {

      paramName = this.requiredParams[i]

      if(params[paramName] === void 0) {
        return false
      }

    }

    return this.testConstraints(params)

  }

}

module.exports = DragonRoute
