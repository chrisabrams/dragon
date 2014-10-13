var View = require('../../../src/paradigm/views/view')

describe('Unit: Views', function() {

  it('should initialize', function(done) {

    var view = new View()

    expect(view).to.be.an('object')
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
    expect(view.render).to.be.a('function')

    done()

  })

})
