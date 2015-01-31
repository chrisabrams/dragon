var extractFromTemplate = (template) => {

  var tempEl1 = document.createElement('div')

  tempEl1.innerHTML = template

  // Get rid of all HTML inside outer tag
  if(tempEl1.firstChild.firstChild) {
    var tempEl2 = document.createElement('div')
    tempEl2.appendChild(tempEl1.firstChild.firstChild)
  }

  var attributes = {},
      nodeAttributes = tempEl1.firstChild.attributes

  var i = tempEl1.firstChild.attributes.length

  while(i--) {

    attributes[nodeAttributes[i].name] = nodeAttributes[i].value

  }

  if(attributes['class']) {

    attributes['className'] = attributes['class']

    delete attributes['class']
  }

  return {
    attributes: attributes,
    el: tempEl1.firstChild
  }

}

module.exports = extractFromTemplate
