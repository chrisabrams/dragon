var Dragon        = require('dragon'),
    //InputFocusMixin = require('../../mixins/views/inputFocus'),
    RefsViewMixin = require('../mixins/views/refs')

class BaseView extends Dragon.View {

  constructor(options = {}) {
    super(options)

    //super.initialize()
  }

  mixin(target, source) {

    target = target.prototype
    source = source.prototype

    Object.getOwnPropertyNames(source).forEach(function (name) {

      if (name !== "constructor") Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name))

    })
  }

}

BaseView.prototype.mixin(BaseView, RefsViewMixin)

module.exports = BaseView
