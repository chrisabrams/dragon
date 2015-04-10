var Dragon = require('../../../src/dragon')

describe('Bind: Existing DOM', function() {

  it('should bind to existing DOM', function(done) {
    this.timeout(100000)

    var view;

    class View extends Dragon.View {

      constructor(options) {

        this.events = [
          ['#hello', 'click', this.onClick]
        ]

        this.listen = [
          ['addedToDOM', this.onAddedToDOM]
        ]

        super(options)

      }

      onClick(e) {



        done()

      }

    }

    view = new View({
      container: 'body',
      el: '#hello',
      template: '<div id="hello">Sup</div>'
    })

    console.log("view", view)

  })

})
