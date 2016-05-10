var Dragon = require('../../src/dragon')

describe('Unit: Controller', function() {

  it('should initialize', function(done) {

    var controller = new Dragon.Controller()

    expect(controller).to.be.an('object')

    done()

  })

})
