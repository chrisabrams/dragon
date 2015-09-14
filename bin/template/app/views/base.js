var Dragon        = require('dragon'),
    //InputFocusMixin = require('../../mixins/views/inputFocus'),
    mixin         = require('dragon-mixin'),
    RefsViewMixin = require('../mixins/views/refs')

class BaseView extends Dragon.View {

  constructor(options = {}) {
    super(options)
  }

}

Object.assign(BaseView.prototype, mixin)

mixin(BaseView, RefsViewMixin)

module.exports = BaseView
