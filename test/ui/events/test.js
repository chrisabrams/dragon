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
        console.log("clicked")

        done()
      }

    }

    var view = new View({
      template: '<div><button id="button" type="button">Click Me</button></div>'
    })

  })

})
