var Dragon = require('../../../src/dragon')

describe('Events: UI', function() {

  it('should fire addedToDOM event', function(done) {
    this.timeout(100000)

    class View extends Dragon.View {

      constructor(options) {

        this.container = 'body'

        this.listen = [
          ['addedToDOM', this.onAddedToDOM]
        ]

        super(options)

      }

      onAddedToDOM() {

        done()

      }

    }

    var view = new View({
      template: '<div>Hello there!</div>'
    })

  })

})
