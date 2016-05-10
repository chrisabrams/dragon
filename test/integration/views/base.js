import Model from '../../../src/dragon/models/base'
import View  from '../../../src/dragon/views/base'

describe('Integration: View', function() {

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
