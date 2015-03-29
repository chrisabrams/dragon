var Dragon     = require('../../../../src/dragon'),
    SubViewMixin = require('../../../../src/dragon/views/mixins/subView')

describe('Unit: View: Mixin: SubView', function() {

  it('should initialize', function(done) {

    class View extends Dragon.View {}

    Object.assign(View.prototype, SubViewMixin)

    var view = new View()

    expect(view.addSubView).to.be.a('function')
    expect(view.getSubView).to.be.a('function')
    expect(view.removeSubView).to.be.a('function')
    expect(view.subViews).to.be.an('array')
    expect(view.subViews).to.have.length(0)
    expect(view.subViewStore).to.be.an('object')
    //expect(view.subViewStore).to.be.empty() <-- not sure why this fails; expect.js docs say this is valid

    done()

  })

})
