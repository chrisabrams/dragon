if(typeof window =='object') {

  Node.prototype.prependChild = function(el) {

    if(this.childNodes[1]) {

      this.insertBefore(el, this.childNodes[1])

    } else {

      this.appendChild(el)

    }

  }

}
