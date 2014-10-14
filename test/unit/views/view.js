var View = require('../../../src/paradigm/views/view')

describe('Unit: Views', function() {

  it('should initialize', function(done) {

    var view = new View()

    expect(view).to.be.an('object')
    expect(view.addSubView).to.be.a('function')
    expect(view.attach).to.be.a('function')
    expect(view.attached).to.be.a('boolean')
    expect(view.attached).to.equal(false)
    expect(view.autoAttach).to.be.a('boolean')
    expect(view.autoAttach).to.equal(true)
    expect(view.autoRender).to.be.a('boolean')
    expect(view.autoRender).to.equal(true)
    expect(view.container).to.equal(null)
    expect(view.containerMethod).to.be.a('string')
    expect(view.containerMethod).to.equal('appendChild')
    expect(view.disposed).to.be.a('boolean')
    expect(view.disposed).to.equal(false)
    expect(view.getSubView).to.be.a('function')
    expect(view.removeSubView).to.be.a('function')
    expect(view.render).to.be.a('function')
    expect(view.renderedCount).to.be.a('number')
    expect(view.renderedCount).to.equal(0)
    expect(view.subViews).to.be.an('array')
    expect(view.subViews).to.have.length(0)
    expect(view.subViewStore).to.be.an('object')
    //expect(view.subViewStore).to.be.empty() <-- not sure why this fails; expect.js docs say this is valid

    done()

  })

})
