var $        = require('jquery'),
    FooMixin = require('../../mixins/foo'),
    Paradigm = require('../../../src/paradigm')

describe('Unit: View: Base', function() {

  it('should initialize', function(done) {

    var view = new Paradigm.View()

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
    expect(typeof view.$container).to.equal('undefined')
    expect(typeof view.$el).to.equal('undefined')
    expect(view.containerMethod).to.be.a('string')
    expect(view.containerMethod).to.equal('appendChild')
    expect(view.detach).to.be.a('function')
    expect(view.disposed).to.be.a('boolean')
    expect(view.disposed).to.equal(false)
    expect(view.el).to.equal(undefined)
    expect(view.mixins).to.be.an('array')
    expect(view.mixins.length).to.equal(0)
    expect(view.render).to.be.a('function')
    //expect(view.tagName).to.equal(null)
    expect(view.template).to.equal(null)

    done()

  })

  it('should set $container when container is set', function(done) {

    class View extends Paradigm.View {

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

  /*
  An example of how to construct a view which can get a template and attach it to the DOM.
  */
  it.only('should render and attach to <body>', function(done) {

    class View extends Paradigm.View {

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
