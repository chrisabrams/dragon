if(typeof window == 'object') {

  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {

    for(var i = 0, len = this.length; i < len; i++) {

      if(this[i] && this[i].parentElement) {

        this[i].parentElement.removeChild(this[i])

      }

    }

  }

}
