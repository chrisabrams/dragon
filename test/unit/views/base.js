var FooMixin = require('../../mixins/foo'),
    Paradigm = require('../../../src/paradigm')

describe('Unit: View: Base', function() {

  it('should initialize', function(done) {

    var view = new Paradigm.View()

    expect(view).to.be.an('object')
    expect(view.attach).to.be.a('function')
    expect(view.attached).to.be.a('boolean')
    expect(view.attached).to.equal(false)
    expect(view.attachOnInit).to.be.a('boolean')
    expect(view.attachOnInit).to.equal(true)
    expect(view.renderOnInit).to.be.a('boolean')
    expect(view.renderOnInit).to.equal(true)
    expect(view.container).to.equal(undefined)
    expect(typeof view.$container).to.equal('undefined')
    expect(typeof view.$el).to.equal('undefined')
    expect(view.containerMethod).to.be.a('string')
    expect(view.containerMethod).to.equal('append')
    expect(view.detach).to.be.a('function')
    expect(view.disposed).to.be.a('boolean')
    expect(view.disposed).to.equal(false)
    expect(view.mixins).to.be.an('array')
    expect(view.mixins.length).to.equal(0)
    expect(view.render).to.be.a('function')
    expect(view.template).to.equal(null)

    done()

  })

  it('should throw error on getTemplate', function(done) {

    var view = new Paradigm.View()

    view.getTemplate().then(function() {}, function(err) {

      expect(err).to.be.an('object')

      done()

    })

  })

  it('should mixin on class', function(done) {

    class View extends Paradigm.View {}

    Object.assign(View.prototype, FooMixin)

    var view = new View()

    expect(view.foo).to.equal('bar')

    done()

  })

  it('should mixin on instance', function(done) {

    class View extends Paradigm.View {

      constructor() {
        super({mixins: [FooMixin]})

      }

    }

    var view = new View()

    expect(view.foo).to.equal('bar')

    done()

  })

})
