var Dragon = require('../../../src/dragon')

class TestModel extends Dragon.Model {

  constructor(attr = {}, options = {}) {

    super(attr, options)

  }

  fetch() {

    this.attr.count++
    this.attr.foo = 'baz'

  }

}

class TestView extends Dragon.View {

  container = '#wrapper'
  template  = require('./templates/count')

  constructor(options = {}) {

    super(options)

    super.initialize()

    this.model.on('change', () => {

      console.log("rendered")

      this.render()

    })

  }

}

var testModel = new TestModel({
  count: 0,
  robot: 'stark',
  foo: 'bar'
})

var testView = new TestView({
  model: testModel
})

testModel.on('change', function() {

  console.log('change', this.attr)

})

console.log('initial', testModel.attr)

testModel.fetch()
