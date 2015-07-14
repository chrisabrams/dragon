class inputFocus {

  inputFocus($selector) {

    Array.prototype.forEach.call($selector, (selector) => {

      setTimeout(function() {
        selector.focus()
      }, 0)

    })

  }

}

module.exports = inputFocus
