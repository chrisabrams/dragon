var Dragon = require('../../../src/dragon')

describe('Unit: Models: Base', function() {

  it('should initialize', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

    expect(model).to.be.an('object')
    expect(model.attr).be.an('object')
    expect(model.defaults).be.an('object')
    expect(model.uid).to.be.a('string')
    expect(model.url).to.be.a('string')

    done()

  })

  it('should assign an attribute', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

    model.attr.foo = 'bar'

    expect(model.attr.foo).to.be.a('string')

    done()

  })

  it('should assign a default attribute', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

    Model.prototype.defaults = {
      foo: 'bar'
    }

    var model = new Model()

    expect(model.attr.foo).to.be.a('string')

    done()

  })

  it('should trigger change on an attribute', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

    model.attr.foo = 'bar'

    model.on('change', (changes) => {

      expect(changes).to.be.an('array')

      done()

    })

  })

  it('should not collide changes when observing two different objects from two different models', function(done) {

    class Model extends Dragon.Model {}

    var a = new Model(),
        b = new Model()

    b.on('change', (changes) => {

      console.log("changes in test", changes)
      expect(changes.length).to.equal(1)

      done()

    })

    a.attr.foo = 'x'
    b.attr.foo = 'y'

  })

  it('should trigger add on an attribute add', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

    model.attr.foo = 'bar'

    model.on('add', (changes) => {

      expect(changes).to.be.an('array')
      expect(changes[0].type).to.be.a('string')
      expect(changes[0].type).to.equal('add')

      done()

    })

  })

  it('should trigger update on an attribute change', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

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

    class Model extends Dragon.Model {}

    var model = new Model()

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

    class Model extends Dragon.Model {}

    var model = new Model()

    model.attr.foo = 'bar'

    model.clear()

    expect(model.attr.foo).to.equal(undefined)

    done()

  })

  it('should convert attributes to JSON', function(done) {

    class Model extends Dragon.Model {}

    var model = new Model()

    model.attr.foo = 'bar'

    var json = model.toJSON()

    expect(json).to.be.a('string')

    done()

  })

})
