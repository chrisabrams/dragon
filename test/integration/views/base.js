import Model from '../../../src/dragon/models/base'
import View  from '../../../src/dragon/views/base'
import {createContainer} from 'stardux'

describe('Integration: View', function() {

  it('should attach an idom container passed in on initialization',function(done){
    var model = new Model({foo: 'bar'}),
      el    = document.createElement("div")
      el.id = 'element'
      el.innerHTML = "Hello ${foo}"

      var idom  = createContainer(el)
      var view = new View({
        container :'#app',
        idom,
        model
      })
      var attached = document.querySelector(`#app #element`)
      console.log(expect)
      expect(attached).to.be.an('object');
      done();
  });

  it('should render a template with data from a model', function(done) {

    var model = new Model({foo: 'bar'})

    var view = new View({
      container: '#app',
      id: 'tiv-01',
      model,
      template: 'Hello ${foo}'
    })
    expect(view.el.innerHTML).to.equal('Hello bar')

    done()

  })

  it('should incrementally patch template DOM on model update', function(done) {

    var model = new Model({foo: 'bar'})

    var view = new View({
      container: '#app',
      id: 'tiv-01',
      model,
      template: 'Hello ${foo}'
    })

    model.attr.foo = 'baz'

    setTimeout(function() {
      expect(view.el.innerHTML).to.equal('Hello baz')

      done()
    }, 10)

  })


  it.skip('should render a template with data from a collection', function(done) {

    var collection = new Collection([{foo: 'bar'}])

    var view = new View({
      collection,
      container: '#app',
      id: 'tiv-01',
      template: 'Hello ${foo}'
    })

    expect(view.el.innerHTML).to.equal('Hello bar')

    done()

  })

  it.skip('should incrementally patch template DOM on collection update', function(done) {

    var model = new Model({foo: 'bar'})

    var view = new View({
      container: '#app',
      id: 'tiv-01',
      model,
      template: 'Hello ${foo}'
    })

    model.attr.foo = 'baz'

    setTimeout(function() {
      expect(view.el.innerHTML).to.equal('Hello baz')

      done()
    }, 10)

  })

})

