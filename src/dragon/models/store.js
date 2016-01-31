class DragonStore {

  constructor(options = {}) {
    this.name = options.name
  }

  get() {
    var o = {}
    try {
      o = JSON.parse(localStorage.getItem(this.name))
    }
    catch(e) {}

    return o
  }

  set(val) {
    localStorage.setItem(this.name, JSON.stringify(val))
  }

}

export default DragonStore
