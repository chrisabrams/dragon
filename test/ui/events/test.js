var Dragon = require('../../../src/dragon')

describe('UI: Events', function() {

  it('should add an event listener', function(done) {
    this.timeout(100000)

    class View extends Dragon.View {

      constructor(options) {

        this.container = 'body'

        this.events = [
          ['#button', 'click', this.clickHandler]
        ]

        super(options)

      }

      clickHandler() {

        done()

      }

    }

    var view = new View({
      template: '<button id="button" type="button">Click Me</button>'
    })

    console.log("view", view)

  })

})
