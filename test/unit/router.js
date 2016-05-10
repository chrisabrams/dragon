import Router from '../../src/dragon/router/base'

describe('Unit: Router', function() {

  it('should initialize', function(done) {

    var router = new Router({routes: (router) => {

      router.get('/auth/create', {
        controller: 'user',
        action: 'create'
      })

    }})

    expect(router).to.be.an('object')

    done()

  })

  it('should not initialize (missing routes)', function(done) {

    var router = new Router()

    expect(router).to.be.an('object')
    expect(typeof router.options.routes).to.equal('undefined')

    done()

  })

})
