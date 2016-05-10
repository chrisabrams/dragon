import Route from '../../src/dragon/router/route'

describe('Unit: Route', function() {

  it('should not initialize (missing everything)', function(done) {

    try {
      var route = new Route()
    }
    catch(e) {
      done()
    }

  })

})
