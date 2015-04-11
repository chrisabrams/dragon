var Dragon = require('../../../src/dragon')

describe('Unit: Collections: Base', function() {

  it('should initialize', function(done) {

    class Collection extends Dragon.Collection {}

    var collection = new Collection()

    expect(collection).to.be.an('object')
    expect(collection.model).to.be.a('function') // Remember, this is the Model class, not the instance
    expect(collection.models).to.be.an('array')
    expect(collection.models.length).to.equal(0)
    expect(collection.uid).to.be.a('string')
    expect(collection.url).to.be.a('string')

    done()

  })

  it('should throw error when entries are not an array', function(done) {

    class Collection extends Dragon.Collection {}

    try {

      var collection = new Collection({})

    }

    catch(e) {

      done()

    }

  })

  it('should throw error on lack of model', function(done) {

    class Collection extends Dragon.Collection {}

    Collection.prototype.model = null

    try {

      var collection = new Collection()

    }

    catch(e) {

      done()

    }

  })

  it('should throw error on assinging model as model instance', function(done) {

    class Collection extends Dragon.Collection {}

    Collection.prototype.model = new Dragon.Model()

    try {

      var collection = new Collection()

    }

    catch(e) {

      done()

    }

  })

  it('should initialize and convert an array of objects into model', function(done) {

    class Collection extends Dragon.Collection {}

    var collection = new Collection([{foo: 'bar'}, {foo: 'baz'}])

    collection.models.forEach( (model) => {

      expect(model instanceof Dragon.Model).to.equal(true)

    })

    done()

  })

  it('should initialize with an array of models', function(done) {

    class Collection extends Dragon.Collection {}
    class Model      extends Dragon.Model {}

    var collection = new Collection([
      new Model({foo: 'bar'}),
      new Model({foo: 'baz'})
    ])

    collection.models.forEach( (model) => {

      expect(model instanceof Dragon.Model).to.equal(true)

    })

    done()

  })

  it('should clear all models on collection', function(done) {

    class Collection extends Dragon.Collection {}
    class Model      extends Dragon.Model {}

    var collection = new Collection([
      new Model({foo: 'bar'}),
      new Model({foo: 'baz'})
    ])

    collection.clear()

    expect(collection.models.length).to.equal(0)

    done()

  })

  it('should add a single model to the collection', function(done) {

    class Collection extends Dragon.Collection {}
    class Model      extends Dragon.Model {}

    var collection = new Collection()

    collection.add(new Model({foo: 'bar'}))

    expect(collection.models.length).to.equal(1)

    done()

  })

})
