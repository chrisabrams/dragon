import Dispatcher from '../../src/dragon/router/dispatcher'

describe('Unit: Dispatcher', function() {

  it('should initialize', function(done) {

    var dispatcher = new Dispatcher()

    expect(dispatcher).to.be.an('object')

    done()

  })

})
