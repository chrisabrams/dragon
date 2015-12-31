import {createContainer} from 'stardux'
import View              from '../../../src/dragon/views/base'

describe('Unit: View', function() {

  /*
  TODO: what happens if:
  - there is no container?
  - there is no template?
  */
  it.skip('should initialize', function(done) {

    var view = new View({

    })

    expect(view).to.be.an('object')

    done()

  })

  it('should create view from container (string reference)', function(done) {

    var view = new View({
      container: '#app',
      template: 'Hello World'
    })

    expect(view).to.be.an('object')

    done()

  })

  it.skip('should create view from container', function(done) {

    var view = new View({
      container: createContainer(document.querySelector('#app'))
    })

    expect(view).to.be.an('object')

    done()

  })

})
