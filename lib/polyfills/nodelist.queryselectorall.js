if(typeof window == 'object') {

  NodeList.prototype.querySelectorAll = function(selector) {

    var fragment = document.createDocumentFragment()

    for(var i=0; i < this.length; i++) {
      fragment.appendChild(this[i].cloneNode(true))
    }

    return fragment.querySelectorAll(selector)

  }

}
