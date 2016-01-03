var Dragon = require('../../../src/dragon')

/*
TODO: Figure out why the object.observe
*/

describe('Unit: Models: Base', function() {

  it('should initialize', function(done) {

    class ModelA extends Dragon.Model {}

    var model = new ModelA()

    expect(model).to.be.an('object')
    expect(model.attr).be.an('object')
    expect(model.defaults).be.an('object')
    expect(model.uid).to.be.a('symbol')
    expect(model.url).to.be.a('string')

    done()

  })

  it('should assign an attribute', function(done) {

    class ModelB extends Dragon.Model {}

    var model = new ModelB()

    model.attr.foo = 'bar'

    expect(model.attr.foo).to.be.a('string')

    done()

  })

  it('should assign a default attribute', function(done) {

    class ModelC extends Dragon.Model {}

    ModelC.prototype.defaults = {
      foo: 'bar'
    }

    var model = new ModelC()

    expect(model.attr.foo).to.be.a('string')

    done()

  })

  it('should trigger change on an attribute', function(done) {

    class ModelD extends Dragon.Model {}

    var model = new ModelD()

    model.attr.foo = 'bar'

    model.on('change', (changes) => {
      console.error("changes\n", changes)
      expect(changes).to.be.an('array')

      done()

    })

  })

  it('should not collide changes when observing two different objects from two different models', function(done) {

    class ModelE extends Dragon.Model {}

    var a = new ModelE(),
        b = new ModelE()

    b.on('change', (changes) => {

      console.log("changes in test", changes)
      expect(changes.length).to.equal(1)

      done()

    })

    a.attr.foo = 'x'
    b.attr.foo = 'y'

  })

  it('should trigger add on an attribute add', function(done) {

    class ModelFG extends Dragon.Model {}

    var model = new ModelFG()

    model.attr.foo = 'bar'

    model.on('add', (changes) => {

      expect(changes).to.be.an('array')
      expect(changes[0].type).to.be.a('string')
      expect(changes[0].type).to.equal('add')

      done()

    })

  })

  it('should trigger update on an attribute change', function(done) {

    class ModelG extends Dragon.Model {}

    var model = new ModelG()

    model.attr.foo = 'bar'

    model.on('update', (changes) => {

      expect(changes).to.be.an('array')
      expect(changes[0].type).to.be.a('string')
      expect(changes[0].type).to.equal('update')

      done()

    })

    model.attr.foo = 'baz'

  })

  it('should trigger delete on an attribute delete', function(done) {

    class ModelH extends Dragon.Model {}

    var model = new ModelH()

    model.attr.foo = 'bar'

    model.on('delete', (changes) => {

      expect(changes).to.be.an('array')
      expect(changes[0].type).to.be.a('string')
      expect(changes[0].type).to.equal('delete')

      done()

    })

    delete model.attr.foo

  })

  it('should clear all attributes', function(done) {

    class ModelI extends Dragon.Model {}

    var model = new ModelI()

    model.attr.foo = 'bar'

    model.clear()

    expect(model.attr.foo).to.equal(undefined)

    done()

  })

  it('should convert attributes to JSON', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr.foo = 'bar'

    var json = model.toJSON()

    expect(json).to.be.a('string')

    done()

  })

  it('should return pairs', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr.foo = 'bar'

    var pairs = model.pairs()

    expect(pairs).to.be.an('array')
    expect(pairs).to.eql([['foo','bar']])
    done()

  })

  it('should return inverted', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr.foo = 'bar'

    var inverted = model.invert()

    expect(inverted).to.be.an('object')
    expect(inverted).to.eql({bar:'foo'})
    done()
  })

  it('should return the values', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr.foo = 'bar'

    var values = model.values()
    expect(values).to.be.an('array')
    expect(values).to.eql(['bar'])
    done()
  })

  it('should pick  some  values(foo)', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr = {foo : 'bar', foobar : 'baz'}
    var value = model.pick("foo")
    expect(value).to.be.an('object')
    expect(value).to.eql({foo : 'bar'})
    done()
  })

  it('should omit  some  values(foo)', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr = {foo : 'bar', foobar : 'baz'}
    var value = model.omit("foo")
    expect(value).to.be.an('object')
    expect(value).to.eql({foobar : 'baz'})
    done()
  })
  it('should return the keys', function(done) {

    class ModelJ extends Dragon.Model {}

    var model = new ModelJ()

    model.attr = {foo : 'bar', foobar : 'baz'}
    var keys = model.keys()
    expect(keys).to.be.an('array')
    expect(keys).to.eql(['foo','foobar'])
    done()
  })

})
