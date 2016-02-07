import Dragon from '../../src/dragon'

describe('Unit: Collection', function() {

  it('should initialize', function(done) {

    class Collection extends Dragon.Collection {}

    var collection = new Collection()

    expect(collection).to.be.an('object')
    expect(collection.Model).to.be.a('function') // Remember, this is the Model class, not the instance
    expect(collection.models).to.be.an('array')
    expect(collection.models.length).to.equal(0)
    expect(collection.uid).to.be.a('symbol')
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

  it('should initialize only with options set', function(done) {

    class Collection extends Dragon.Collection {}
    var collection = new Collection(null,{optionTest:"test"})
    expect(collection).to.be.an('object')
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

  it('should be an iterable', function(done) {

    class Collection extends Dragon.Collection {}
    class Model      extends Dragon.Model {}

    var collection = new Collection()

    collection.add([new Model({foo: 'bar'}), new Model({foobar : 'baz'}), new Model({foovar : 'varbaz'})])

    /* now our collection can be iterable for iterators like for ...of, ... spread operators,array.from */
    for(var singleModel of collection){
      expect(singleModel).to.be.a(Model)
    }

    /* collection to Array */
    var collectionArray = Array.from(collection)
    expect(collectionArray).to.be.an(Array)
    expect(collectionArray).to.have.length(3)

    /* now the collection can be destructured */
    var [modelFoo,modelFoobar,modelFoovar] = collection
    expect(modelFoo).to.be.a(Model)
    expect(modelFoobar).to.be.a(Model)
    expect(modelFoovar).to.be.a(Model)

    /* we can use the spread operator  */
    expect([...collection]).to.eql(collectionArray)
    done()

  })

})
