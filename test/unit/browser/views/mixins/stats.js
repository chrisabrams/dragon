var Dragon       = require('../../../../../src/dragon'),
    ViewStatsMixin = require('../../../../../src/dragon/views/mixins/stats')

describe('Unit: View: Mixin: Stats', function() {

  it.skip('should initialize', function(done) {

    class View extends Dragon.View {}

    Object.assign(View.prototype, ViewStatsMixin)

    var view = new View()

    expect(view.renderedCount).to.be.a('number')
    expect(view.renderedCount).to.equal(0)

    done()

  })

})
