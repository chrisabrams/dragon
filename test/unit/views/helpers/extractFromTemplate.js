var extractFromTemplate = require('../../../../src/dragon/views/helpers/extractFromTemplate')

describe('View: Helpers: ExtractFromTemplate', function() {

  it('should extract attributes from template', function(done) {

    var template = '<div id="foo" class="container" data-maestro="Mozer"><p>Hello World!</p></div>'

    var extraction = extractFromTemplate(template)

    expect(extraction.attributes).to.be.an('object')
    expect(extraction.attributes.id).to.equal('foo')
    expect(extraction.attributes.className).to.equal('container')
    expect(extraction.attributes['data-maestro']).to.equal('Mozer')

    done()

  })

})
