var jsdom = require('jsdom')

global.document = jsdom.jsdom("<html><head></head><body></body></html>")
global.window   = document.parentWindow

var Dragon = require('../../../../src/dragon')

describe('Unit: Server: View: Base', function() {

  it.only('should construct a view', function(done) {

    class View extends Dragon.View {

      constructor() {
        this.container = 'body'
        this.template  = '<div></div>'

        super()
      }

    }

    var view = new View()
    var outerHTML = window.document.documentElement.outerHTML

    expect(view).to.be.an('object')
    expect(outerHTML).to.equal('<html><head></head><body><div></div></body></html>')

    window.close()

    done()

  })

})
