if(typeof window == 'object') {

  Element.prototype.remove = function() {

    this.parentElement.removeChild(this)

  }

}
