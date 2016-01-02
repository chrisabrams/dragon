import Model from '../../../src/dragon/models/base'
import View  from '../../../src/dragon/views/base'

describe('Integration: View', function() {

  it('should render a template with data from model', function(done) {

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

  it.skip('should incrementally patch template DOM on model update', function(done) {

    var view = new View({
      container: '#app',
      template: 'Hello World'
    })

    done()

  })

})
