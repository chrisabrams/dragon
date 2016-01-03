import Application from '../../src/dragon/application/base'
import Controller  from '../../src/dragon/controllers/base'

describe('Unit: Application', function() {

  it('should initialize', function(done) {

    var application = new Application({routes: (router) => {

      router.get('/auth/create', {
        controller: Controller, // for this unit test, it doesnt matter what this is
        action: 'create'
      })

    }})

    expect(application).to.be.an('object')
    expect(application.router).to.be.an('object')

    done()

  })

  it('should not initialize (missing routes)', function(done) {

    var application = new Application()

    expect(application).to.be.an('object')
    expect(typeof application.router).to.equal('undefined')

    done()

  })

})
