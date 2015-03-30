var FooMixin = require('../../mixins/foo'),
    Dragon = require('../../../src/dragon')

describe('Unit: View: Base', function() {

  it('should get tagName from empty div', function(done) {

    var tagName = Dragon.View.prototype.getTagName('<div></div>')

    expect(tagName).to.equal('div')

    done()

  })

  it('should get tagName from a populated div', function(done) {

    var tagName = Dragon.View.prototype.getTagName('<div><div><i></i></div></div>')

    expect(tagName).to.equal('div')

    done()

  })

  it('should get tagName from a div with properties', function(done) {

    var tagName = Dragon.View.prototype.getTagName('<div id="foo"><div><i></i></div></div>')

    expect(tagName).to.equal('div')

    done()

  })

  it('should construct a view', function(done) {

    class View extends Dragon.View {}

    var view = new View({
      template: '<div></div>' // Views must have a template as there is no wrapping tag
    })

    expect(view).to.be.an('object')
    expect(view.defineAttributes).to.be.a('function')
    expect(view.attach).to.be.a('function')
    expect(view.attached).to.be.a('boolean')
    expect(view.attached).to.equal(false)
    expect(view.attachOnInit).to.be.a('boolean')
    expect(view.attachOnInit).to.equal(true)
    expect(view.renderOnInit).to.be.a('boolean')
    expect(view.renderOnInit).to.equal(true)
    expect(view._container).to.equal(undefined)
    expect(view.$container).to.be.an('object')
    expect(view.$el).to.equal(undefined)
    expect(view.containerMethod).to.be.a('string')
    expect(view.containerMethod).to.equal('appendChild')
    expect(view.detach).to.be.a('function')
    expect(view.disposed).to.be.a('boolean')
    expect(view.disposed).to.equal(false)
    expect(view.el).to.equal(undefined)
    expect(view.mixins).to.be.an('array')
    expect(view.mixins.length).to.equal(0)
    expect(view.render).to.be.a('function')
    expect(view.tagName).to.equal('div')
    expect(view.template).to.equal('<div></div>')

    done()

  })

  /*
  TODO: figure out what to specify is throwing the error to make expect happy
  */
  it.skip('should not construct a view without a template', function(done) {

    class View extends Dragon.View {}

    var view = new View()

    expect(view).to.throwError()

    done()

  })

  it('should set container when container is set', function(done) {

    class View extends Dragon.View {

      constructor() {
        this.attachOnInit = false // Just testing that container is set
        this.container = 'body'
        this.template = '<div class="tester-class">Foo Yo Foo</div>'

        super()

      }

    }

    var view = new View()

    expect(view.container).to.be.a('string')
    expect(view.container).to.equal('body')
    expect(view.$container).to.be.an('object')

    done()

  })

  // TODO: clean up mixin tests
  it.skip('should mixin on class', function(done) {

    class View extends Dragon.View {}

    Object.assign(View.prototype, FooMixin)

    var view = new View()

    expect(view.foo).to.equal('bar')

    done()

  })

  it.skip('should mixin on instance', function(done) {

    class View extends Dragon.View {

      constructor() {
        super()

      }

    }

    var view = new View()

    expect(view.foo).to.equal('bar')

    done()

  })

})
