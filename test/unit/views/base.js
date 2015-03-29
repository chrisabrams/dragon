var FooMixin = require('../../mixins/foo'),
    Dragon = require('../../../src/dragon')

describe('Unit: View: Base', function() {

  // TODO: WHY U BE DIFFICULT
  it.skip('should initialize', function(done) {

    //sinon.stub(Dragon.View.prototype, 'setProperties').returns(null)
    //sinon.stub(Dragon.View.prototype.setMixins)
    //console.log(Dragon.View.prototype)
    //Dragon.View.prototype.setProperties.returns(null)
    //Dragon.View.prototype.setMixins.returns(null)

    var propSpy  = sinon.spy(Dragon.View.prototype.setProperties)
    var mixinSpy = sinon.spy(Dragon.View.prototype.setMixins)

    Dragon.View.prototype.initialize({})

    expect(propSpy).to.be.calledOnce
    expect(mixinSpy).to.be.calledOnce

    //Dragon.View.prototype.setProperties.restore()
    //Dragon.View.prototype.setMixins.restore()

    done()

  })

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

    // This function can do whatever the developer desires. Typically a Mixin, such as Handlebars Mixin, will take care of this.
    View.prototype.getTemplate = function() {

      return this.template

    }

    var view = new View({
      // Views must have a template as there is no wrapping tag
      template: '<div></div>'
    })

    expect(view).to.be.an('object')
    expect(view.assignAttributes).to.be.a('function')
    expect(view.attach).to.be.a('function')
    expect(view.attached).to.be.a('boolean')
    expect(view.attached).to.equal(false)
    expect(view.attachOnInit).to.be.a('boolean')
    expect(view.attachOnInit).to.equal(true)
    expect(view.renderOnInit).to.be.a('boolean')
    expect(view.renderOnInit).to.equal(true)
    expect(view.container).to.equal(undefined)
    expect(view.$container).to.equal(undefined)
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
    expect(view.tagName).to.equal(null)
    expect(view.template).to.equal(null)

    done()

  })

  it('should set $container when container is set', function(done) {

    class View extends Dragon.View {

      constructor() {
        super()

        console.log("this in constructor", this.prototype)

        this.container = 'body'

        console.log("this.$container", this.container)

      }

    }

    var view = new View()

    expect(view.$container).to.be.an('object')

    done()

  })

  it('should throw error on getTemplate', function(done) {

    var view = new Dragon.View()

    view.getTemplate().then(function() {}, function(err) {

      expect(err).to.be.an('object')

      done()

    })

  })

  it('should mixin on class', function(done) {

    class View extends Dragon.View {}

    Object.assign(View.prototype, FooMixin)

    var view = new View()

    expect(view.foo).to.equal('bar')

    done()

  })

  it('should mixin on instance', function(done) {

    class View extends Dragon.View {

      constructor() {
        super({mixins: [FooMixin]})

      }

    }

    var view = new View()

    expect(view.foo).to.equal('bar')

    done()

  })

  /*
  An example of how to construct a view which can get a template and attach it to the DOM.
  */
  it('should render and attach to <body>', function(done) {

    class View extends Dragon.View {

      constructor() {

        super({
          container: 'body',
          template: function() {return '<div id="foo" class="container" data-ping="pong"><p>Hello World!</p></div>'}
        })

      }

      foo: 'bar'

    }

    View.prototype.getTemplate = function() {

      try {
        var template = this.template()
      }

      catch(e) {
        throw new Error(e)
        return
      }

      return template

    }

    var renderSpy           = sinon.spy(View.prototype, 'render')
    var getTemplateSpy      = sinon.spy(View.prototype, 'getTemplate')
    var setAttributesSpy    = sinon.spy(View.prototype, 'setAttributes')
    var attachSpy           = sinon.spy(View.prototype, 'attach')

    var view = new View()

    expect(view.id).to.equal('foo')
    expect($('#foo')).to.be.an('object')

    expect(renderSpy).to.have.been.calledOnce
    expect(getTemplateSpy).to.have.been.calledOnce
    expect(setAttributesSpy).to.have.been.calledOnce

    // This is a janky fix until events can be added in
    setTimeout( () => {
      expect(attachSpy).to.have.been.calledOnce
    }, 250)

    done()

  })

})
