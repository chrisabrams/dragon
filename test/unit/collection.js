import Dragon from '../../src/dragon'

describe('Unit: Collection', function() {

  it('should initialize', function(done) {

    class Collection extends Dragon.Collection {}

    var collection = new Collection()
    expect(collection).to.be.an('object')
    expect(collection.model).to.be.a('function') // Remember, this is the Model class, not the instance
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
  //TODO write the test for all the arity in lodash functions 
 it('should execute lodash function of arity 1',function(done){
   class Collection extends Dragon.Collection {}
   class Model      extends Dragon.Model {}
   var collection = new Collection()
   collection.add([new Model({foo: 'bar'}), new Model({foobar : 'baz'}), new Model({foovar : 'varbaz'})])
   expect(collection.size()).to.equal(3)
   expect(collection.toArray()).to.be.an('array')
   expect(collection.shuffle()).to.not.equal([new Model({foo: 'bar'}), new Model({foobar : 'baz'}), new Model({foovar : 'varbaz'})]);
   done()
 })
 it('should execute lodash function of arity 2',function(done){
   class Collection extends Dragon.Collection {}
   class Model      extends Dragon.Model {}
   var collection = new Collection(), model1 = new Model({foo: 'bar'}), model2 = new Model({foobar : 'baz'}), model3 =  new Model({foovar : 'varbaz'});
   collection.add([model1,model2,model3])
   expect(collection.find(function(o) {return o.attr.foo === "bar";},collection)).to.equal(model1)
   done()
 })
 it('should execute loadsh function of arity n',function(done){
   class Collection extends Dragon.Collection {}
   class Model      extends Dragon.Model {}
   var collection = new Collection(), model1 = new Model({foo: 'bar'}), model2 = new Model({foobar : 'baz'}), model3 =  new Model({foovar : 'varbaz'})
   collection.add([model1,model2,model3])
   expect(collection.without(model2,model3)).to.have.lengthOf(1)
   done()
 })
})
