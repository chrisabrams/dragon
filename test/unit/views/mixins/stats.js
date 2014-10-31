var Paradigm       = require('../../../../src/paradigm'),
    ViewStatsMixin = require('../../../../src/paradigm/views/mixins/stats')

describe('Unit: View: Mixin: Stats', function() {

  it('should initialize', function(done) {

    class View extends Paradigm.View {}

    Object.assign(View.prototype, ViewStatsMixin)

    var view = new View()

    expect(view.renderedCount).to.be.a('number')
    expect(view.renderedCount).to.equal(0)

    done()

  })

})
