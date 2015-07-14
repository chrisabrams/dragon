class RefsViewMixin {

  refs() {

    // TODO: Not sure this is the best way to define
    this.$refs = this.$refs || {}

    var ref      = arguments[0],
        selector = arguments[1]

    switch(arguments.length) {

      // GET
      case 1:

        return this.$refs[ref]

        break;

      // SET
      case 2:

        var $selector = this.$(selector)

        if($selector.length == 1) {
          this.$refs[ref] = $selector[0]
        }

        else {
          this.$refs[ref] = $selector
        }
        //this.$refs[ref] = $selector

        break;

      case 3:

        break;

      default:

    }

  }

}

module.exports = RefsViewMixin
